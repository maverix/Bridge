﻿using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Collections.Generic;
using Ext.Net.Utilities;
using System.Linq;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.NET
{
    public partial class Inspector : Visitor
    {
        public override void VisitSyntaxTree(SyntaxTree node)
        {
            node.AcceptChildren(this);
        }

        public override void VisitUsingDeclaration(UsingDeclaration usingDeclaration)
        {
            if (!this.Usings.Contains(usingDeclaration.Namespace))
            {
                this.Usings.Add(usingDeclaration.Namespace);
            }
        }

        public override void VisitNamespaceDeclaration(NamespaceDeclaration namespaceDeclaration)
        {
            if (!String.IsNullOrEmpty(this.Namespace))
            {
                throw this.CreateException(namespaceDeclaration, "Nested namespaces are not supported");
            }

            var prevNamespace = this.Namespace;
            var prevUsings = this.Usings;

            this.Namespace = namespaceDeclaration.Name;
            this.Usings = new HashSet<string>(prevUsings);

            namespaceDeclaration.AcceptChildren(this);

            this.Namespace = prevNamespace;
            this.Usings = prevUsings;
        }

        public override void VisitTypeDeclaration(TypeDeclaration typeDeclaration)
        {
            if (this.CurrentType != null)
            {
                throw this.CreateException(typeDeclaration, "Nested types are not supported");
            }

            if (typeDeclaration.HasModifier(Modifiers.Partial))
            {
                throw this.CreateException(typeDeclaration, "Partial classes are not supported");
            }

            if (this.HasIgnore(typeDeclaration))
            {
                return;
            }            

            this.CurrentType = new TypeInfo()
            {
                Name = Helpers.GetScriptName(typeDeclaration, false),
                GenericName = Helpers.GetScriptName(typeDeclaration, true),
                ClassType = typeDeclaration.ClassType,
                Namespace = this.Namespace,
                Usings = new HashSet<string>(Usings),
                IsEnum = typeDeclaration.ClassType == ClassType.Enum,
                IsStatic = typeDeclaration.ClassType == ClassType.Enum || typeDeclaration.HasModifier(Modifiers.Static)
            };

            if (typeDeclaration.ClassType != ClassType.Interface)
            {
                typeDeclaration.AcceptChildren(this);
            }

            this.Types.Add(this.CurrentType);

            this.CurrentType = null;
        }

        public override void VisitFieldDeclaration(FieldDeclaration fieldDeclaration)
        {
            bool isStatic = this.CurrentType.ClassType == ClassType.Enum
                || fieldDeclaration.HasModifier(Modifiers.Static)
                || fieldDeclaration.HasModifier(Modifiers.Const);

            foreach (var item in fieldDeclaration.Variables)
            {
                Expression initializer = item.Initializer;

                if (initializer.IsNull)
                {
                    if (this.CurrentType.ClassType == ClassType.Enum)
                    {
                        throw this.CreateException(fieldDeclaration, "Enum items must be explicitly numbered");
                    }

                    initializer = this.GetDefaultFieldInitializer(fieldDeclaration.ReturnType);
                }

                this.CurrentType.FieldsDeclarations.Add(item.Name, fieldDeclaration);

                if (isStatic)
                {
                    if (fieldDeclaration.HasModifier(Modifiers.Const))
                    {
                        this.CurrentType.Consts.Add(item.Name, initializer);
                    }
                    else
                    {
                        this.CurrentType.StaticFields.Add(item.Name, initializer);
                    }
                }
                else
                {
                    this.CurrentType.InstanceFields.Add(item.Name, initializer);
                }
            }
        }

        public override void VisitConstructorDeclaration(ConstructorDeclaration constructorDeclaration)
        {
            bool isStatic = constructorDeclaration.HasModifier(Modifiers.Static);

            if (this.CurrentType.Ctor != null && !isStatic)
            {
                throw this.CreateException(constructorDeclaration, "The only one instance constructor is allowed");
            }

            if (this.CurrentType.StaticCtor != null && isStatic)
            {
                throw this.CreateException(constructorDeclaration, "The only one static constructor is allowed");
            }

            this.FixMethodParameters(constructorDeclaration.Parameters, constructorDeclaration.Body);

            if (isStatic)
            {
                this.CurrentType.StaticCtor = constructorDeclaration;
            }
            else
            {
                this.CurrentType.Ctor = constructorDeclaration;
            }
        }

        public override void VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {           
            if (methodDeclaration.HasModifier(Modifiers.Abstract) || this.HasInline(methodDeclaration))
            {
                return;
            }

            this.FixMethodParameters(methodDeclaration.Parameters, methodDeclaration.Body);
            
            bool isStatic = methodDeclaration.HasModifier(Modifiers.Static);

            IDictionary<string, MethodDeclaration> dict = isStatic
                ? CurrentType.StaticMethods
                : CurrentType.InstanceMethods;

            var key = Helpers.GetScriptName(methodDeclaration, false);

            if (dict.ContainsKey(key))
            {
                throw this.CreateException(methodDeclaration, "Overloads are not allowed");
            }

            dict.Add(key, methodDeclaration);
        }

        public override void VisitPropertyDeclaration(PropertyDeclaration propertyDeclaration)
        {
            if (propertyDeclaration.HasModifier(Modifiers.Abstract))
            {
                return;
            }

            bool isStatic = propertyDeclaration.HasModifier(Modifiers.Static);

            IDictionary<string, PropertyDeclaration> dict = isStatic
                ? CurrentType.StaticProperties
                : CurrentType.InstanceProperties;

            var key = propertyDeclaration.Name;

            dict.Add(key, propertyDeclaration);

            if (!propertyDeclaration.Getter.IsNull
                && !this.HasInline(propertyDeclaration.Getter)
                && propertyDeclaration.Getter.Body.IsNull
                && !this.HasScript(propertyDeclaration.Getter))
            {
                Expression initializer = this.GetDefaultFieldInitializer(propertyDeclaration.ReturnType);

                if (isStatic)
                {
                    this.CurrentType.StaticFields.Add(propertyDeclaration.Name.ToLowerCamelCase(), initializer);
                }
                else
                {
                    this.CurrentType.InstanceFields.Add(propertyDeclaration.Name.ToLowerCamelCase(), initializer);
                }
            }
        }

        public override void VisitDelegateDeclaration(DelegateDeclaration delegateDeclaration)
        {
        }

        public override void VisitEnumMemberDeclaration(EnumMemberDeclaration enumMemberDeclaration)
        {
            Expression initializer = enumMemberDeclaration.Initializer;
            if (enumMemberDeclaration.Initializer.IsNull)
            {
                initializer = new PrimitiveExpression(this.CurrentType.LastEnumValue);
            }

            this.CurrentType.StaticFields.Add(enumMemberDeclaration.Name.ToLowerCamelCase(), initializer);
        }

        public override void VisitEventDeclaration(EventDeclaration eventDeclaration)
        {
            if (eventDeclaration.HasModifier(Modifiers.Static))
            {
                this.CurrentType.StaticEvents.Add(eventDeclaration);
            }
            else
            {
                this.CurrentType.Events.Add(eventDeclaration);
            }            
        }

        public override void VisitAttributeSection(AttributeSection attributeSection)
        {
            if (attributeSection.AttributeTarget != "assembly")
            {
                return;
            }
            
            foreach (var attr in attributeSection.Attributes)
            {
                var name = attr.Type.ToString();
                var resolveResult = this.Resolver.ResolveNode(attr, null);

                var handled = this.ReadModuleInfo(attr, name, resolveResult) ||
                              this.ReadFileNameInfo(attr, name, resolveResult) ||
                              this.ReadOutputDirInfo(attr, name, resolveResult) ||
                              this.ReadFileHierarchyInfo(attr, name, resolveResult) ||
                              this.ReadModuleDependency(attr, name, resolveResult);
            }
        }

        protected virtual bool ReadModuleInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.CLR_ASSEMBLY + ".Module")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.CLR_ASSEMBLY + ".ModuleAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);
                    this.AssemblyInfo.Module = nameObj != null ? nameObj.ToString() : "";
                }
                else
                {
                    this.AssemblyInfo.Module = "";
                }

                return true;
            }

            return false;
        }

        protected virtual bool ReadFileNameInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.CLR_ASSEMBLY + ".FileName")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.CLR_ASSEMBLY + ".FileNameAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                    if (nameObj is string)
                    {
                        this.AssemblyInfo.FileName = nameObj.ToString();
                    }                        
                }

                return true;
            }

            return false;
        }

        protected virtual bool ReadOutputDirInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.CLR_ASSEMBLY + ".OutputDir")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.CLR_ASSEMBLY + ".OutputDirAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                    if (nameObj is string)
                    {
                        this.AssemblyInfo.OutputDir = nameObj.ToString();
                    }
                }

                return true;
            }

            return false;
        }

        protected virtual bool ReadFileHierarchyInfo(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.CLR_ASSEMBLY + ".FilesHierrarchy")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.CLR_ASSEMBLY + ".FilesHierrarchyAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                    if (nameObj != null)
                    {
                        this.AssemblyInfo.FilesHierrarchy = (TypesSplit)Enum.ToObject(typeof(TypesSplit), nameObj);
                    }

                    if (attr.Arguments.Count > 1)
                    {
                        nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 1);

                        if (nameObj is int)
                        {
                            this.AssemblyInfo.StartIndexInName = (int)nameObj;
                        }
                    }
                }

                return true;
            }

            return false;
        }

        protected virtual bool ReadModuleDependency(ICSharpCode.NRefactory.CSharp.Attribute attr, string name, ResolveResult resolveResult)
        {
            if ((name == (Translator.CLR_ASSEMBLY + ".ModuleDependency")) ||
                (resolveResult != null && resolveResult.Type != null && resolveResult.Type.FullName == (Translator.CLR_ASSEMBLY + ".ModuleDependencyAttribute")))
            {
                if (attr.Arguments.Count > 0)
                {
                    ModuleDependency dependency = new ModuleDependency();
                    object nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 0);

                    if (nameObj is string)
                    {
                        dependency.DependencyName = nameObj.ToString();
                    }

                    nameObj = this.GetAttributeArgumentValue(attr, resolveResult, 1);

                    if (nameObj is string)
                    {
                        dependency.VariableName = nameObj.ToString();
                    }

                    this.AssemblyInfo.Dependencies.Add(dependency);
                }

                return true;
            }

            return false;
        }

        protected virtual object GetAttributeArgumentValue(ICSharpCode.NRefactory.CSharp.Attribute attr, ResolveResult resolveResult, int index)
        {
            object nameObj = null;

            if (!(resolveResult is ErrorResolveResult) && (resolveResult is InvocationResolveResult))
            {
                nameObj = ((InvocationResolveResult)resolveResult).Arguments.Skip(index).Take(1).First().ConstantValue;
            }
            else
            {
                var arg = attr.Arguments.Skip(index).Take(1).First();

                if (arg is PrimitiveExpression)
                {
                    var primitive = (PrimitiveExpression)arg;
                    nameObj = primitive.Value;
                }
            }
            return nameObj;
        }
    }
}
