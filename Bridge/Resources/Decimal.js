﻿    // @source Decimal.js

    /* decimal.js v4.0.2 https://github.com/MikeMcl/decimal.js/LICENCE */

    !function (e) { "use strict"; function n(e) { for (var n, r, t = 1, i = e.length, o = e[0] + ""; i > t; t++) { for (n = e[t] + "", r = y - n.length; r--;) n = "0" + n; o += n } for (i = o.length; 48 === o.charCodeAt(--i) ;); return o.slice(0, i + 1 || 1) } function r(e, n, r, t) { var i, o, s, c, u; for (o = 1, s = e[0]; s >= 10; s /= 10, o++); return s = n - o, 0 > s ? (s += y, i = 0) : (i = Math.ceil((s + 1) / y), s %= y), o = E(10, y - s), u = e[i] % o | 0, null == t ? 3 > s ? (0 == s ? u = u / 100 | 0 : 1 == s && (u = u / 10 | 0), c = 4 > r && 99999 == u || r > 3 && 49999 == u || 5e4 == u || 0 == u) : c = (4 > r && u + 1 == o || r > 3 && u + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == E(10, s - 2) - 1 || (u == o / 2 || 0 == u) && 0 == (e[i + 1] / o / 100 | 0) : 4 > s ? (0 == s ? u = u / 1e3 | 0 : 1 == s ? u = u / 100 | 0 : 2 == s && (u = u / 10 | 0), c = (t || 4 > r) && 9999 == u || !t && r > 3 && 4999 == u) : c = ((t || 4 > r) && u + 1 == o || !t && r > 3 && u + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == E(10, s - 3) - 1, c } function t(e, n, r) { var t = e.constructor; return null == n || ((m = 0 > n || n > 8) || 0 !== n && (t.errors ? parseInt : parseFloat)(n) != n) && !u(t, "rounding mode", n, r, 0) ? t.rounding : 0 | n } function i(e, n, r, t) { var i = e.constructor; return !(m = (t || 0) > n || n >= A + 1) && (0 === n || (i.errors ? parseInt : parseFloat)(n) == n) || u(i, "argument", n, r, 0) } function o(e, t) { var i, o, s, c, u, l, f, h = 0, g = 0, p = 0, m = e.constructor, d = m.ONE, v = m.rounding, N = m.precision; if (!e.c || !e.c[0] || e.e > 17) return new m(e.c ? e.c[0] ? e.s < 0 ? 0 : 1 / 0 : d : e.s ? e.s < 0 ? 0 : e : 0 / 0); for (null == t ? (w = !1, u = N) : u = t, f = new m(.03125) ; e.e > -2;) e = e.times(f), p += 5; for (o = Math.log(E(2, p)) / Math.LN10 * 2 + 5 | 0, u += o, i = c = l = new m(d), m.precision = u; ;) { if (c = a(c.times(e), u, 1), i = i.times(++g), f = l.plus(P(c, i, u, 1)), n(f.c).slice(0, u) === n(l.c).slice(0, u)) { for (s = p; s--;) l = a(l.times(l), u, 1); if (null != t) return m.precision = N, l; if (!(3 > h && r(l.c, u - o, v, h))) return a(l, m.precision = N, v, w = !0); m.precision = u += 10, i = c = f = new m(d), g = 0, h++ } l = f } } function s(e, r, t, i) { var o, s, c = e.constructor, u = (e = new c(e)).e; if (null == r ? t = 0 : (a(e, ++r, t), t = i ? r : r + e.e - u), u = e.e, o = n(e.c), 1 == i || 2 == i && (u >= r || u <= c.toExpNeg)) { for (; o.length < t; o += "0"); o.length > 1 && (o = o.charAt(0) + "." + o.slice(1)), o += (0 > u ? "e" : "e+") + u } else { if (i = o.length, 0 > u) { for (s = t - i; ++u; o = "0" + o); o = "0." + o } else if (++u > i) { for (s = t - u, u -= i; u--; o += "0"); s > 0 && (o += ".") } else s = t - i, i > u ? o = o.slice(0, u) + "." + o.slice(u) : s > 0 && (o += "."); if (s > 0) for (; s--; o += "0"); } return e.s < 0 && e.c[0] ? "-" + o : o } function c(e) { var n = e.length - 1, r = n * y + 1; if (n = e[n]) { for (; n % 10 == 0; n /= 10, r--); for (n = e[0]; n >= 10; n /= 10, r++); } return r } function u(e, n, r, t, i) { if (e.errors) { var o = new Error((t || ["new Decimal", "cmp", "div", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "times", "toFraction", "pow", "random", "log", "sqrt", "toNearest", "divToInt"][v ? 0 > v ? -v : v : 0 > 1 / v ? 1 : 0]) + "() " + (["number type has more than 15 significant digits", "LN10 out of digits"][n] || n + ([m ? " out of range" : " not an integer", " not a boolean or binary digit"][i] || "")) + ": " + r); throw o.name = "Decimal Error", m = v = 0, o } } function l(e, n, r) { var t = new e(e.ONE); for (w = !1; 1 & r && (t = t.times(n)), r >>= 1, r;) n = n.times(n); return w = !0, t } function f(e, t) { var i, o, s, c, l, h, g, p, m, d, v, N = 1, E = 10, x = e, b = x.c, y = x.constructor, O = y.ONE, S = y.rounding, D = y.precision; if (x.s < 0 || !b || !b[0] || !x.e && 1 == b[0] && 1 == b.length) return new y(b && !b[0] ? -1 / 0 : 1 != x.s ? 0 / 0 : b ? 0 : x); if (null == t ? (w = !1, g = D) : g = t, y.precision = g += E, i = n(b), o = i.charAt(0), !(Math.abs(c = x.e) < 15e14)) return x = new y(o + "." + i.slice(1)), g + 2 > M.length && u(y, 1, g + 2, "ln"), x = f(x, g - E).plus(new y(M.slice(0, g + 2)).times(c + "")), y.precision = D, null == t ? a(x, D, S, w = !0) : x; for (; 7 > o && 1 != o || 1 == o && i.charAt(1) > 3;) x = x.times(e), i = n(x.c), o = i.charAt(0), N++; for (c = x.e, o > 1 ? (x = new y("0." + i), c++) : x = new y(o + "." + i.slice(1)), d = x, p = l = x = P(x.minus(O), x.plus(O), g, 1), v = a(x.times(x), g, 1), s = 3; ;) { if (l = a(l.times(v), g, 1), m = p.plus(P(l, new y(s), g, 1)), n(m.c).slice(0, g) === n(p.c).slice(0, g)) { if (p = p.times(2), 0 !== c && (g + 2 > M.length && u(y, 1, g + 2, "ln"), p = p.plus(new y(M.slice(0, g + 2)).times(c + ""))), p = P(p, new y(N), g, 1), null != t) return y.precision = D, p; if (!r(p.c, g - E, S, h)) return a(p, y.precision = D, S, w = !0); y.precision = g += E, m = l = x = P(d.minus(O), d.plus(O), g, 1), v = a(x.times(x), g, 1), s = h = 1 } p = m, s += 2 } } function a(e, n, r, t) { var i, o, s, c, u, l, f, a, h = e.constructor; e: if (null != n) { if (!(f = e.c)) return e; for (i = 1, c = f[0]; c >= 10; c /= 10, i++); if (o = n - i, 0 > o) o += y, s = n, u = f[a = 0], l = u / E(10, i - s - 1) % 10 | 0; else if (a = Math.ceil((o + 1) / y), a >= f.length) { if (!t) break e; for (; f.length <= a; f.push(0)); u = l = 0, i = 1, o %= y, s = o - y + 1 } else { for (u = c = f[a], i = 1; c >= 10; c /= 10, i++); o %= y, s = o - y + i, l = 0 > s ? 0 : N(u / E(10, i - s - 1) % 10) } if (t = t || 0 > n || null != f[a + 1] || (0 > s ? u : u % E(10, i - s - 1)), t = 4 > r ? (l || t) && (0 == r || r == (e.s < 0 ? 3 : 2)) : l > 5 || 5 == l && (4 == r || t || 6 == r && (o > 0 ? s > 0 ? u / E(10, i - s) : 0 : f[a - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), 1 > n || !f[0]) return f.length = 0, t ? (n -= e.e + 1, f[0] = E(10, n % y), e.e = -n || 0) : f[0] = e.e = 0, e; if (0 == o ? (f.length = a, c = 1, a--) : (f.length = a + 1, c = E(10, y - o), f[a] = s > 0 ? (u / E(10, i - s) % E(10, s) | 0) * c : 0), t) for (; ;) { if (0 == a) { for (o = 1, s = f[0]; s >= 10; s /= 10, o++); for (s = f[0] += c, c = 1; s >= 10; s /= 10, c++); o != c && (e.e++, f[0] == b && (f[0] = 1)); break } if (f[a] += c, f[a] != b) break; f[a--] = 0, c = 1 } for (o = f.length; 0 === f[--o]; f.pop()); } return w && (e.e > h.maxE ? e.c = e.e = null : e.e < h.minE && (e.c = [e.e = 0])), e } var h, g, p, m, d = e.crypto, w = !0, v = 0, N = Math.floor, E = Math.pow, x = Object.prototype.toString, b = 1e7, y = 7, O = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_", S = {}, D = 9e15, A = 1e9, F = 3e3, M = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058"; S.absoluteValue = S.abs = function () { var e = new this.constructor(this); return e.s < 0 && (e.s = 1), a(e) }, S.ceil = function () { return a(new this.constructor(this), this.e + 1, 2) }, S.comparedTo = S.cmp = function (e, n) { var r, t = this, i = t.c, o = (v = -v, e = new t.constructor(e, n), e.c), s = t.s, c = e.s, u = t.e, l = e.e; if (!s || !c) return null; if (r = i && !i[0], n = o && !o[0], r || n) return r ? n ? 0 : -c : s; if (s != c) return s; if (r = 0 > s, !i || !o) return u == l ? 0 : !i ^ r ? 1 : -1; if (u != l) return u > l ^ r ? 1 : -1; for (s = -1, c = (u = i.length) < (l = o.length) ? u : l; ++s < c;) if (i[s] != o[s]) return i[s] > o[s] ^ r ? 1 : -1; return u == l ? 0 : u > l ^ r ? 1 : -1 }, S.decimalPlaces = S.dp = function () { var e, n, r = null; if (e = this.c) { if (r = ((n = e.length - 1) - N(this.e / y)) * y, n = e[n]) for (; n % 10 == 0; n /= 10, r--); 0 > r && (r = 0) } return r }, S.dividedBy = S.div = function (e, n) { return v = 2, P(this, new this.constructor(e, n)) }, S.dividedToIntegerBy = S.divToInt = function (e, n) { var r = this, t = r.constructor; return v = 18, a(P(r, new t(e, n), 0, 1, 1), t.precision, t.rounding) }, S.equals = S.eq = function (e, n) { return v = 3, 0 === this.cmp(e, n) }, S.exponential = S.exp = function () { return o(this) }, S.floor = function () { return a(new this.constructor(this), this.e + 1, 3) }, S.greaterThan = S.gt = function (e, n) { return v = 4, this.cmp(e, n) > 0 }, S.greaterThanOrEqualTo = S.gte = function (e, n) { return v = 5, n = this.cmp(e, n), 1 == n || 0 === n }, S.isFinite = function () { return !!this.c }, S.isInteger = S.isInt = function () { return !!this.c && N(this.e / y) > this.c.length - 2 }, S.isNaN = function () { return !this.s }, S.isNegative = S.isNeg = function () { return this.s < 0 }, S.isZero = function () { return !!this.c && 0 == this.c[0] }, S.lessThan = S.lt = function (e, n) { return v = 6, this.cmp(e, n) < 0 }, S.lessThanOrEqualTo = S.lte = function (e, n) { return v = 7, n = this.cmp(e, n), -1 == n || 0 === n }, S.logarithm = S.log = function (e, t) { var i, o, s, c, l, h, g, p, m, d = this, N = d.constructor, E = N.precision, x = N.rounding, b = 5; if (null == e) e = new N(10), i = !0; else { if (v = 15, e = new N(e, t), o = e.c, e.s < 0 || !o || !o[0] || !e.e && 1 == o[0] && 1 == o.length) return new N(0 / 0); i = e.eq(10) } if (o = d.c, d.s < 0 || !o || !o[0] || !d.e && 1 == o[0] && 1 == o.length) return new N(o && !o[0] ? -1 / 0 : 1 != d.s ? 0 / 0 : o ? 0 : 1 / 0); if (l = i && (c = o[0], o.length > 1 || 1 != c && 10 != c && 100 != c && 1e3 != c && 1e4 != c && 1e5 != c && 1e6 != c), w = !1, g = E + b, p = g + 10, h = f(d, g), i ? (p > M.length && u(N, 1, p, "log"), s = new N(M.slice(0, p))) : s = f(e, g), m = P(h, s, g, 1), r(m.c, c = E, x)) do if (g += 10, h = f(d, g), i ? (p = g + 10, p > M.length && u(N, 1, p, "log"), s = new N(M.slice(0, p))) : s = f(e, g), m = P(h, s, g, 1), !l) { +n(m.c).slice(c + 1, c + 15) + 1 == 1e14 && (m = a(m, E + 1, 0)); break } while (r(m.c, c += 10, x)); return w = !0, a(m, E, x) }, S.minus = function (e, n) { var r, t, i, o, s = this, c = s.constructor, u = s.s; if (v = 8, e = new c(e, n), n = e.s, !u || !n) return new c(0 / 0); if (u != n) return e.s = -n, s.plus(e); var l = s.c, f = e.c, h = N(e.e / y), g = N(s.e / y), p = c.precision, m = c.rounding; if (!g || !h) { if (!l || !f) return l ? (e.s = -n, e) : new c(f ? s : 0 / 0); if (!l[0] || !f[0]) return s = f[0] ? (e.s = -n, e) : new c(l[0] ? s : 3 == m ? -0 : 0), w ? a(s, p, m) : s } if (l = l.slice(), t = l.length, u = g - h) { for ((o = 0 > u) ? (u = -u, r = l, t = f.length) : (h = g, r = f), (g = Math.ceil(p / y)) > t && (t = g), u > (t += 2) && (u = t, r.length = 1), r.reverse(), n = u; n--; r.push(0)); r.reverse() } else for ((o = t < (i = f.length)) && (i = t), u = n = 0; i > n; n++) if (l[n] != f[n]) { o = l[n] < f[n]; break } if (o && (r = l, l = f, f = r, e.s = -e.s), (n = -((i = l.length) - f.length)) > 0) for (; n--; l[i++] = 0); for (g = b - 1, n = f.length; n > u;) { if (l[--n] < f[n]) { for (t = n; t && !l[--t]; l[t] = g); --l[t], l[n] += b } l[n] -= f[n] } for (; 0 == l[--i]; l.pop()); for (; 0 == l[0]; l.shift(), --h); for (l[0] || (l = [h = 0], e.s = 3 == m ? -1 : 1), e.c = l, u = 1, n = l[0]; n >= 10; n /= 10, u++); return e.e = u + h * y - 1, w ? a(e, p, m) : e }, S.modulo = S.mod = function (e, n) { var r, t, i = this, o = i.constructor, s = o.modulo; return v = 9, e = new o(e, n), n = e.s, r = !i.c || !n || e.c && !e.c[0], r || !e.c || i.c && !i.c[0] ? r ? new o(0 / 0) : a(new o(i), o.precision, o.rounding) : (w = !1, 9 == s ? (e.s = 1, t = P(i, e, 0, 3, 1), e.s = n, t.s *= n) : t = P(i, e, 0, s, 1), t = t.times(e), w = !0, i.minus(t)) }, S.naturalLogarithm = S.ln = function () { return f(this) }, S.negated = S.neg = function () { var e = new this.constructor(this); return e.s = -e.s || null, a(e) }, S.plus = function (e, n) { var r, t = this, i = t.constructor, o = t.s; if (v = 10, e = new i(e, n), n = e.s, !o || !n) return new i(0 / 0); if (o != n) return e.s = -n, t.minus(e); var s = t.c, c = e.c, u = N(e.e / y), l = N(t.e / y), f = i.precision, h = i.rounding; if (!l || !u) { if (!s || !c) return new i(o / 0); if (!s[0] || !c[0]) return t = c[0] ? e : new i(s[0] ? t : 0 * o), w ? a(t, f, h) : t } if (s = s.slice(), o = l - u) { for (0 > o ? (o = -o, r = s, n = c.length) : (u = l, r = c, n = s.length), (l = Math.ceil(f / y)) > n && (n = l), o > ++n && (o = n, r.length = 1), r.reverse() ; o--; r.push(0)); r.reverse() } for (s.length - c.length < 0 && (r = c, c = s, s = r), o = c.length, n = 0, l = b; o; s[o] %= l) n = (s[--o] = s[o] + c[o] + n) / l | 0; for (n && (s.unshift(n), ++u), o = s.length; 0 == s[--o]; s.pop()); for (e.c = s, o = 1, n = s[0]; n >= 10; n /= 10, o++); return e.e = o + u * y - 1, w ? a(e, f, h) : e }, S.precision = S.sd = function (e) { var n = null, r = this; return e != n && e !== !!e && 1 !== e && 0 !== e && u(r.constructor, "argument", e, "precision", 1), r.c && (n = c(r.c), e && r.e + 1 > n && (n = r.e + 1)), n }, S.round = function () { var e = this, n = e.constructor; return a(new n(e), e.e + 1, n.rounding) }, S.squareRoot = S.sqrt = function () { var e, r, t, i, o, s, c = this, u = c.c, l = c.s, f = c.e, h = c.constructor, g = new h(.5); if (1 !== l || !u || !u[0]) return new h(!l || 0 > l && (!u || u[0]) ? 0 / 0 : u ? c : 1 / 0); for (w = !1, l = Math.sqrt(+c), 0 == l || l == 1 / 0 ? (r = n(u), (r.length + f) % 2 == 0 && (r += "0"), l = Math.sqrt(r), f = N((f + 1) / 2) - (0 > f || f % 2), l == 1 / 0 ? r = "1e" + f : (r = l.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + f), i = new h(r)) : i = new h(l.toString()), t = (f = h.precision) + 3; ;) if (s = i, i = g.times(s.plus(P(c, s, t + 2, 1))), n(s.c).slice(0, t) === (r = n(i.c)).slice(0, t)) { if (r = r.slice(t - 3, t + 1), "9999" != r && (o || "4999" != r)) { (!+r || !+r.slice(1) && "5" == r.charAt(0)) && (a(i, f + 1, 1), e = !i.times(i).eq(c)); break } if (!o && (a(s, f + 1, 0), s.times(s).eq(c))) { i = s; break } t += 4, o = 1 } return w = !0, a(i, f, h.rounding, e) }, S.times = function (e, n) { var r, t, i = this, o = i.constructor, s = i.c, c = (v = 11, e = new o(e, n), e.c), u = N(i.e / y), l = N(e.e / y), f = i.s; if (n = e.s, e.s = f == n ? 1 : -1, !((u || s && s[0]) && (l || c && c[0]))) return new o(!f || !n || s && !s[0] && !c || c && !c[0] && !s ? 0 / 0 : s && c ? 0 * e.s : e.s / 0); for (t = u + l, f = s.length, n = c.length, n > f && (r = s, s = c, c = r, l = f, f = n, n = l), l = f + n, r = []; l--; r.push(0)); for (u = n - 1; u > -1; u--) { for (n = 0, l = f + u; l > u;) n = r[l] + c[u] * s[l - u - 1] + n, r[l--] = n % b | 0, n = n / b | 0; r[l] = (r[l] + n) % b | 0 } for (n ? ++t : r[0] || r.shift(), l = r.length; !r[--l]; r.pop()); for (e.c = r, f = 1, n = r[0]; n >= 10; n /= 10, f++); return e.e = f + t * y - 1, w ? a(e, o.precision, o.rounding) : e }, S.toDecimalPlaces = S.toDP = function (e, n) { var r = this; return r = new r.constructor(r), null != e && i(r, e, "toDP") ? a(r, (0 | e) + r.e + 1, t(r, n, "toDP")) : r }, S.toExponential = function (e, n) { var r = this; return r.c ? s(r, null != e && i(r, e, "toExponential") ? 0 | e : null, null != e && t(r, n, "toExponential"), 1) : r.toString() }, S.toFixed = function (e, n) { var r, o = this, c = o.constructor, u = c.toExpNeg, l = c.toExpPos; return null != e && (e = i(o, e, r = "toFixed") ? o.e + (0 | e) : null, n = t(o, n, r)), c.toExpNeg = -(c.toExpPos = 1 / 0), null != e && o.c ? (r = s(o, e, n), o.s < 0 && o.c && (o.c[0] ? r.indexOf("-") < 0 && (r = "-" + r) : r = r.replace("-", ""))) : r = o.toString(), c.toExpNeg = u, c.toExpPos = l, r }, S.toFormat = function (e, n) { var r = this; if (!r.c) return r.toString(); var t, i = r.s < 0, o = r.constructor.format, s = o.groupSeparator, c = +o.groupSize, u = +o.secondaryGroupSize, l = r.toFixed(e, n).split("."), f = l[0], a = l[1], h = i ? f.slice(1) : f, g = h.length; if (u && (t = c, c = u, g -= u = t), c > 0 && g > 0) { for (t = g % c || c, f = h.substr(0, t) ; g > t; t += c) f += s + h.substr(t, c); u > 0 && (f += s + h.slice(t)), i && (f = "-" + f) } return a ? f + o.decimalSeparator + ((u = +o.fractionGroupSize) ? a.replace(new RegExp("\\d{" + u + "}\\B", "g"), "$&" + o.fractionGroupSeparator) : a) : f }, S.toFraction = function (e) { var r, t, i, o, s, l, f, a, h = this, g = h.constructor, p = r = new g(g.ONE), d = l = new g(0), x = h.c, b = new g(d); if (!x) return h.toString(); for (i = b.e = c(x) - h.e - 1, b.c[0] = E(10, (f = i % y) < 0 ? y + f : f), (null == e || (!(v = 12, s = new g(e)).s || (m = s.cmp(p) < 0 || !s.c) || g.errors && N(s.e / y) < s.c.length - 1) && !u(g, "max denominator", e, "toFraction", 0) || (e = s).cmp(b) > 0) && (e = i > 0 ? b : p), w = !1, s = new g(n(x)), f = g.precision, g.precision = i = x.length * y * 2; a = P(s, b, 0, 1, 1), t = r.plus(a.times(d)), 1 != t.cmp(e) ;) r = d, d = t, p = l.plus(a.times(t = p)), l = t, b = s.minus(a.times(t = b)), s = t; return t = P(e.minus(r), d, 0, 1, 1), l = l.plus(t.times(p)), r = r.plus(t.times(d)), l.s = p.s = h.s, o = P(p, d, i, 1).minus(h).abs().cmp(P(l, r, i, 1).minus(h).abs()) < 1 ? [p + "", d + ""] : [l + "", r + ""], w = !0, g.precision = f, o }, S.toNearest = function (e, n) { var r = this, i = r.constructor; return r = new i(r), null == e ? (e = new i(i.ONE), n = i.rounding) : (v = 17, e = new i(e), n = t(r, n, "toNearest")), e.c ? r.c && (e.c[0] ? (w = !1, r = P(r, e, 0, 4 > n ? [4, 5, 7, 8][n] : n, 1).times(e), w = !0, a(r)) : r.c = [r.e = 0]) : r.s && (e.s && (e.s = r.s), r = e), r }, S.toNumber = function () { var e = this; return +e || (e.s ? 0 * e.s : 0 / 0) }, S.toPower = S.pow = function (e, t) { var i, s, c, u, h = this, g = h.constructor, p = h.s, m = (v = 13, +(e = new g(e, t))), d = 0 > m ? -m : m, x = g.precision, b = g.rounding; if (!h.c || !e.c || (c = !h.c[0]) || !e.c[0]) return new g(E(c ? 0 * p : +h, m)); if (h = new g(h), i = h.c.length, !h.e && h.c[0] == h.s && 1 == i) return h; if (t = e.c.length - 1, e.e || e.c[0] != e.s || t) if (s = N(e.e / y), c = s >= t, !c && 0 > p) u = new g(0 / 0); else { if (c && F > i * y * d) { if (u = l(g, h, d), e.s < 0) return g.ONE.div(u) } else { if (p = 0 > p && 1 & e.c[Math.max(s, t)] ? -1 : 1, t = E(+h, m), s = 0 != t && isFinite(t) ? new g(t + "").e : N(m * (Math.log("0." + n(h.c)) / Math.LN10 + h.e + 1)), s > g.maxE + 1 || s < g.minE - 1) return new g(s > 0 ? p / 0 : 0); w = !1, g.rounding = h.s = 1, d = Math.min(12, (s + "").length), u = o(e.times(f(h, x + d)), x), u = a(u, x + 5, 1), r(u.c, x, b) && (s = x + 10, u = a(o(e.times(f(h, s + d)), s), s + 5, 1), +n(u.c).slice(x + 1, x + 15) + 1 == 1e14 && (u = a(u, x + 1, 0))), u.s = p, w = !0, g.rounding = b } u = a(u, x, b) } else u = a(h, x, b); return u }, S.toPrecision = function (e, n) { var r = this; return null != e && i(r, e, "toPrecision", 1) && r.c ? s(r, 0 | --e, t(r, n, "toPrecision"), 2) : r.toString() }, S.toSignificantDigits = S.toSD = function (e, n) { var r = this, o = r.constructor; return r = new o(r), null != e && i(r, e, "toSD", 1) ? a(r, 0 | e, t(r, n, "toSD")) : a(r, o.precision, o.rounding) }, S.toString = function (e) { var r, t, i, o = this, c = o.constructor, l = o.e; if (null === l) t = o.s ? "Infinity" : "NaN"; else { if (e === r && (l <= c.toExpNeg || l >= c.toExpPos)) return s(o, null, c.rounding, 1); if (t = n(o.c), 0 > l) { for (; ++l; t = "0" + t); t = "0." + t } else if (i = t.length, l > 0) if (++l > i) for (l -= i; l--; t += "0"); else i > l && (t = t.slice(0, l) + "." + t.slice(l)); else if (r = t.charAt(0), i > 1) t = r + "." + t.slice(1); else if ("0" == r) return r; if (null != e) if ((m = !(e >= 2 && 65 > e)) || e != (0 | e) && c.errors) u(c, "base", e, "toString", 0); else if (t = h(c, t, 0 | e, 10, o.s), "0" == t) return t } return o.s < 0 ? "-" + t : t }, S.truncated = S.trunc = function () { return a(new this.constructor(this), this.e + 1, 1) }, S.valueOf = S.toJSON = function () { return this.toString() }, h = function () { function e(e, n, r) { for (var t, i, o = [0], s = 0, c = e.length; c > s;) { for (i = o.length; i--; o[i] *= n); for (o[t = 0] += O.indexOf(e.charAt(s++)) ; t < o.length; t++) o[t] > r - 1 && (null == o[t + 1] && (o[t + 1] = 0), o[t + 1] += o[t] / r | 0, o[t] %= r) } return o.reverse() } return function (n, r, t, i, o) { var s, c, u, f, a, h, g = r.indexOf("."), p = n.precision, m = n.rounding; for (37 > i && (r = r.toLowerCase()), g >= 0 && (r = r.replace(".", ""), h = new n(i), f = l(n, h, r.length - g), h.c = e(f.toFixed(), 10, t), h.e = h.c.length), a = e(r, i, t), s = c = a.length; 0 == a[--c]; a.pop()); if (!a[0]) return "0"; if (0 > g ? s-- : (f.c = a, f.e = s, f.s = o, f = P(f, h, p, m, 0, t), a = f.c, u = f.r, s = f.e), g = a[p], c = t / 2, u = u || null != a[p + 1], 4 > m ? (null != g || u) && (0 == m || m == (f.s < 0 ? 3 : 2)) : g > c || g == c && (4 == m || u || 6 == m && 1 & a[p - 1] || m == (f.s < 0 ? 8 : 7))) for (a.length = p, --t; ++a[--p] > t;) a[p] = 0, p || (++s, a.unshift(1)); else a.length = p; for (c = a.length; !a[--c];); for (g = 0, r = ""; c >= g; r += O.charAt(a[g++])); if (0 > s) { for (; ++s; r = "0" + r); r = "0." + r } else if (g = r.length, ++s > g) for (s -= g; s--; r += "0"); else g > s && (r = r.slice(0, s) + "." + r.slice(s)); return r } }(); var P = function () { function e(e, n, r) { var t, i = 0, o = e.length; for (e = e.slice() ; o--;) t = e[o] * n + i, e[o] = t % r | 0, i = t / r | 0; return i && e.unshift(i), e } function n(e, n, r, t) { var i, o; if (r != t) o = r > t ? 1 : -1; else for (i = o = 0; r > i; i++) if (e[i] != n[i]) { o = e[i] > n[i] ? 1 : -1; break } return o } function r(e, n, r, t) { for (var i = 0; r--;) e[r] -= i, i = e[r] < n[r] ? 1 : 0, e[r] = i * t + e[r] - n[r]; for (; !e[0] && e.length > 1; e.shift()); } return function (t, i, o, s, c, u) { var l, f, h, g, p, m, d, w, v, E, x, O, S, D, A, F, M, P, R, q = t.constructor, L = t.s == i.s ? 1 : -1, I = t.c, U = i.c; if (!(I && I[0] && U && U[0])) return new q(t.s && i.s && (I ? !U || I[0] != U[0] : U) ? I && 0 == I[0] || !U ? 0 * L : L / 0 : 0 / 0); for (u ? (g = 1, f = t.e - i.e) : (u = b, g = y, f = N(t.e / g) - N(i.e / g)), P = U.length, F = I.length, v = new q(L), E = v.c = [], h = 0; U[h] == (I[h] || 0) ; h++); if (U[h] > (I[h] || 0) && f--, null == o ? (L = o = q.precision, s = q.rounding) : L = c ? o + (t.e - i.e) + 1 : o, 0 > L) E.push(1), p = !0; else { if (L = L / g + 2 | 0, h = 0, 1 == P) { for (m = 0, U = U[0], L++; (F > h || m) && L--; h++) D = m * u + (I[h] || 0), E[h] = D / U | 0, m = D % U | 0; p = m || F > h } else { for (m = u / (U[0] + 1) | 0, m > 1 && (U = e(U, m, u), I = e(I, m, u), P = U.length, F = I.length), A = P, x = I.slice(0, P), O = x.length; P > O; x[O++] = 0); R = U.slice(), R.unshift(0), M = U[0], U[1] >= u / 2 && M++; do m = 0, l = n(U, x, P, O), 0 > l ? (S = x[0], P != O && (S = S * u + (x[1] || 0)), m = S / M | 0, m > 1 ? (m >= u && (m = u - 1), d = e(U, m, u), w = d.length, O = x.length, l = n(d, x, w, O), 1 == l && (m--, r(d, w > P ? R : U, w, u))) : (0 == m && (l = m = 1), d = U.slice()), w = d.length, O > w && d.unshift(0), r(x, d, O, u), -1 == l && (O = x.length, l = n(U, x, P, O), 1 > l && (m++, r(x, O > P ? R : U, O, u))), O = x.length) : 0 === l && (m++, x = [0]), E[h++] = m, l && x[0] ? x[O++] = I[A] || 0 : (x = [I[A]], O = 1); while ((A++ < F || null != x[0]) && L--); p = null != x[0] } E[0] || E.shift() } if (1 == g) v.e = f, v.r = +p; else { for (h = 1, L = E[0]; L >= 10; L /= 10, h++); v.e = h + f * g - 1, a(v, c ? o + v.e + 1 : o, s, p) } return v } }(); if (g = function () { function e(e) { var n, r, t, i = this, o = "config", s = i.errors ? parseInt : parseFloat; return e == r || "object" != typeof e && !u(i, "object expected", e, o) ? i : ((t = e[n = "precision"]) != r && ((m = 1 > t || t > A) || s(t) != t ? u(i, n, t, o, 0) : i[n] = 0 | t), (t = e[n = "rounding"]) != r && ((m = 0 > t || t > 8) || s(t) != t ? u(i, n, t, o, 0) : i[n] = 0 | t), (t = e[n = "toExpNeg"]) != r && ((m = -D > t || t > 0) || s(t) != t ? u(i, n, t, o, 0) : i[n] = N(t)), (t = e[n = "toExpPos"]) != r && ((m = 0 > t || t > D) || s(t) != t ? u(i, n, t, o, 0) : i[n] = N(t)), (t = e[n = "minE"]) != r && ((m = -D > t || t > 0) || s(t) != t ? u(i, n, t, o, 0) : i[n] = N(t)), (t = e[n = "maxE"]) != r && ((m = 0 > t || t > D) || s(t) != t ? u(i, n, t, o, 0) : i[n] = N(t)), (t = e[n = "errors"]) != r && (t === !!t || 1 === t || 0 === t ? (m = v = 0, i[n] = !!t) : u(i, n, t, o, 1)), (t = e[n = "crypto"]) != r && (t === !!t || 1 === t || 0 === t ? i[n] = !(!t || !d || "object" != typeof d) : u(i, n, t, o, 1)), (t = e[n = "modulo"]) != r && ((m = 0 > t || t > 9) || s(t) != t ? u(i, n, t, o, 0) : i[n] = 0 | t), (e = e[n = "format"]) != r && ("object" == typeof e ? i[n] = e : u(i, "format object expected", e, o)), i) } function n(e) { return new this(e).exp() } function r(e) { return new this(e).ln() } function t(e, n) { return new this(e).log(n) } function o(e, n, r) { var t, i, o = 0; for ("[object Array]" == x.call(n[0]) && (n = n[0]), t = new e(n[0]) ; ++o < n.length;) { if (i = new e(n[o]), !i.s) { t = i; break } t[r](i) && (t = i) } return t } function s() { return o(this, arguments, "lt") } function c() { return o(this, arguments, "gt") } function l(e, n) { return new this(e).pow(n) } function f(e) { var n, r, t, o = 0, s = [], c = this, l = new c(c.ONE); if (null != e && i(l, e, "random") ? e |= 0 : e = c.precision, r = Math.ceil(e / y), c.crypto) if (d && d.getRandomValues) for (n = d.getRandomValues(new Uint32Array(r)) ; r > o;) t = n[o], t >= 429e7 ? n[o] = d.getRandomValues(new Uint32Array(1))[0] : s[o++] = t % 1e7; else if (d && d.randomBytes) { for (n = d.randomBytes(r *= 4) ; r > o;) t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((127 & n[o + 3]) << 24), t >= 214e7 ? d.randomBytes(4).copy(n, o) : (s.push(t % 1e7), o += 4); o = r / 4 } else u(c, "crypto unavailable", d, "random"); if (!o) for (; r > o;) s[o++] = 1e7 * Math.random() | 0; for (r = s[--o], e %= y, r && e && (t = E(10, y - e), s[o] = (r / t | 0) * t) ; 0 === s[o]; o--) s.pop(); if (0 > o) s = [r = 0]; else { for (r = -1; 0 === s[0];) s.shift(), r -= y; for (o = 1, t = s[0]; t >= 10;) t /= 10, o++; y > o && (r -= y - o) } return l.e = r, l.c = s, l } function g(e) { return new this(e).sqrt() } function p(i) { function o(e, n) { var r = this; if (!(r instanceof o)) return u(o, "Decimal called without new", e), new o(e, n); if (r.constructor = o, e instanceof o) { if (null == n) return v = 0, r.s = e.s, r.e = e.e, r.c = (e = e.c) ? e.slice() : e, r; if (10 == n) return a(new o(e), o.precision, o.rounding); e += "" } return b(o, r, e, n) } return o.precision = 20, o.rounding = 4, o.modulo = 1, o.toExpNeg = -7, o.toExpPos = 21, o.minE = -D, o.maxE = D, o.errors = !0, o.crypto = !1, o.format = { decimalSeparator: ".", groupSeparator: ",", groupSize: 3, secondaryGroupSize: 0, fractionGroupSeparator: " ", fractionGroupSize: 0 }, o.prototype = S, o.ONE = new o(1), o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.EUCLID = 9, o.config = e, o.constructor = p, o.exp = n, o.ln = r, o.log = t, o.max = s, o.min = c, o.pow = l, o.sqrt = g, o.random = f, null != i && o.config(i), o } var b = function () { var e = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, n = String.prototype.trim || function () { return this.replace(/^\s+|\s+$/g, "") }; return function (r, t, i, o) { var s, c, l, f, g, p; if ("string" != typeof i && (i = (f = "number" == typeof i || "[object Number]" == x.call(i)) && 0 === i && 0 > 1 / i ? "-0" : i + ""), g = i, null == o && e.test(i)) t.s = 45 === i.charCodeAt(0) ? (i = i.slice(1), -1) : 1; else { if (10 == o) return a(new r(i), r.precision, r.rounding); if (i = n.call(i).replace(/^\+(?!-)/, ""), t.s = 45 === i.charCodeAt(0) ? (i = i.replace(/^-(?!-)/, ""), -1) : 1, null != o ? o != (0 | o) && r.errors || (m = !(o >= 2 && 65 > o)) ? (u(r, "base", o, 0, 0), p = e.test(i)) : (s = "[" + O.slice(0, o = 0 | o) + "]+", i = i.replace(/\.$/, "").replace(/^\./, "0."), (p = new RegExp("^" + s + "(?:\\." + s + ")?$", 37 > o ? "i" : "").test(i)) ? (f && (i.replace(/^0\.0*|\./, "").length > 15 && u(r, 0, g), f = !f), i = h(r, i, 10, o, t.s)) : "Infinity" != i && "NaN" != i && (u(r, "not a base " + o + " number", g), i = "NaN")) : p = e.test(i), !p) return t.c = t.e = null, "Infinity" != i && ("NaN" != i && u(r, "not a number", g), t.s = null), v = 0, t } for ((c = i.indexOf(".")) > -1 && (i = i.replace(".", "")), (l = i.search(/e/i)) > 0 ? (0 > c && (c = l), c += +i.slice(l + 1), i = i.substring(0, l)) : 0 > c && (c = i.length), l = 0; 48 === i.charCodeAt(l) ; l++); for (o = i.length; 48 === i.charCodeAt(--o) ;); if (i = i.slice(l, o + 1)) { if (o = i.length, f && o > 15 && u(r, 0, g), t.e = c = c - l - 1, t.c = [], l = (c + 1) % y, 0 > c && (l += y), o > l) { for (l && t.c.push(+i.slice(0, l)), o -= y; o > l;) t.c.push(+i.slice(l, l += y)); i = i.slice(l), l = y - i.length } else l -= o; for (; l--; i += "0"); t.c.push(+i), w && (t.e > r.maxE ? t.c = t.e = null : t.e < r.minE && (t.c = [t.e = 0])) } else t.c = [t.e = 0]; return v = 0, t } }(); return p() }(), Bridge.$Decimal = g, "function" == typeof define && define.amd) define(function () { return g }); else if ("undefined" != typeof module && module.exports) { if (module.exports = g, !d) try { d = require("crypto") } catch (R) { } } else p = e.Decimal, g.noConflict = function () { return e.Decimal = p, g } }(Bridge.global);

    Bridge.Decimal = function (v, provider) {
        if (this.constructor !== Bridge.Decimal) {
            return new Bridge.Decimal(v);
        }

        if (typeof v === "string") {
            provider = provider || Bridge.CultureInfo.getCurrentCulture();

            var nfInfo = provider && provider.getFormat(Bridge.NumberFormatInfo);

            if (nfInfo && nfInfo.numberDecimalSeparator !== ".") {
                v = v.replace(nfInfo.numberDecimalSeparator, ".");
            }

            if (!/^\s*[+-]?(\d+|\d*\.\d+)(e|E[+-]?\d+)?\s*$/.test(v)) {
                throw new Bridge.FormatException();
            }

            v = v.replace(/\s/g, "");
        }

        this.value = Bridge.Decimal.getValue(v);
    }

    Bridge.Decimal.$$name = "Bridge.Decimal";
    Bridge.Decimal.prototype.$$name = "Bridge.Decimal";

    Bridge.Decimal.$$inherits = [];
    Bridge.Class.addExtend(Bridge.Decimal, [Bridge.IComparable, Bridge.IFormattable, Bridge.IComparable$1(Bridge.Decimal), Bridge.IEquatable$1(Bridge.Decimal)]);
    

    Bridge.Decimal.getDefaultValue = function () {
        return new Bridge.Decimal(0);
    };

    Bridge.Decimal.getValue = function (d) {
        if (!Bridge.hasValue(d)) {
            return null;
        }

        if (d instanceof Bridge.Decimal) {
            return d.value;
        }

        return new Bridge.$Decimal(d);
    };

    Bridge.Decimal.create = function (d) {
        if (!Bridge.hasValue(d)) {
            return null;
        }

        if (d instanceof Bridge.Decimal) {
            return d;
        }

        return new Bridge.Decimal(d);
    };

    Bridge.Decimal.lift = function (d) {
        return d == null ? null : Bridge.Decimal.create(d);
    }; 

    Bridge.Decimal.prototype.toString = function (format, provider) {
        if (!format && !provider) {
            return this.value.toString();
        }

        return Bridge.Int.format(this.toFloat(), format, provider);
    };

    Bridge.Decimal.prototype.toFloat = function () {
        return this.value.toNumber();
    };

    Bridge.Decimal.prototype.format = function (format, provider) {
        return Bridge.Int.format(this.toFloat(), format, provider);
    };

    Bridge.Decimal.prototype.decimalPlaces = function () {
        return this.value.decimalPlaces();
    };

    Bridge.Decimal.prototype.dividedToIntegerBy = function (d) {
        return new Bridge.Decimal(this.value.dividedToIntegerBy(Bridge.Decimal.getValue(d)));
    };

    Bridge.Decimal.prototype.exponential = function () {
        return new Bridge.Decimal(this.value.exponential());
    };

    Bridge.Decimal.prototype.abs = function () {
        return new Bridge.Decimal(this.value.abs());
    };

    Bridge.Decimal.prototype.floor = function () {
        return new Bridge.Decimal(this.value.floor());
    };

    Bridge.Decimal.prototype.ceil = function () {
        return new Bridge.Decimal(this.value.ceil());
    };

    Bridge.Decimal.prototype.trunc = function () {
        return new Bridge.Decimal(this.value.trunc());
    };

    Bridge.Decimal.round = function (obj, mode) {
        obj = Bridge.Decimal.create(obj);

        var old = Bridge.$Decimal.rounding;

        Bridge.$Decimal.rounding = mode;

        var d = new Bridge.Decimal(obj.value.round());

        Bridge.$Decimal.rounding = old;

        return d;
    };

    Bridge.Decimal.toDecimalPlaces = function(obj, decimals, mode) {
        obj = Bridge.Decimal.create(obj);
        var d = new Bridge.Decimal(obj.value.toDecimalPlaces(decimals, mode));
        return d;
    };

    Bridge.Decimal.prototype.compareTo = function (another) {
        return this.value.comparedTo(Bridge.Decimal.getValue(another));
    };

    Bridge.Decimal.prototype.add = function (another) {
        return new Bridge.Decimal(this.value.plus(Bridge.Decimal.getValue(another)));
    };

    Bridge.Decimal.prototype.sub = function (another) {
        return new Bridge.Decimal(this.value.minus(Bridge.Decimal.getValue(another)));
    };

    Bridge.Decimal.prototype.isZero = function () {
        return this.value.isZero;
    };

    Bridge.Decimal.prototype.mul = function (another) {
        return new Bridge.Decimal(this.value.times(Bridge.Decimal.getValue(another)));
    };

    Bridge.Decimal.prototype.div = function (another) {
        return new Bridge.Decimal(this.value.dividedBy(Bridge.Decimal.getValue(another)));
    };

    Bridge.Decimal.prototype.mod = function (another) {
        return new Bridge.Decimal(this.value.modulo(Bridge.Decimal.getValue(another)));
    };

    Bridge.Decimal.prototype.neg = function () {
        return new Bridge.Decimal(this.value.negated());
    };

    Bridge.Decimal.prototype.inc = function () {
        return new Bridge.Decimal(this.value.plus(Bridge.Decimal.getValue(1)));
    };

    Bridge.Decimal.prototype.dec = function () {
        return new Bridge.Decimal(this.value.minus(Bridge.Decimal.getValue(1)));
    };

    Bridge.Decimal.prototype.sign = function () {
        return this.value.isZero() ? 0 : (this.value.isNegative() ? -1 : 1);
    };

    Bridge.Decimal.prototype.clone = function () {
        return new Bridge.Decimal(this);
    };

    Bridge.Decimal.prototype.ne = function (v) {
        return !!this.compareTo(v);
    };

    Bridge.Decimal.prototype.lt = function (v) {
        return this.compareTo(v) < 0;
    };

    Bridge.Decimal.prototype.lte = function (v) {
        return this.compareTo(v) <= 0;
    };

    Bridge.Decimal.prototype.gt = function (v) {
        return this.compareTo(v) > 0;
    };

    Bridge.Decimal.prototype.gte = function (v) {
        return this.compareTo(v) >= 0;
    };

    Bridge.Decimal.prototype.equals = function (v) {
        return !this.compareTo(v);
    };

    Bridge.Decimal.prototype.equalsT = function (v) {
        return !this.compareTo(v);
    };

    Bridge.Decimal.prototype.getHashCode = function () {
        var n = (this.sign() * 397 + this.value.e) | 0;

        for (var i = 0; i < this.value.c.length; i++) {
            n = (n * 397 + this.value.c[i]) | 0;
        }

        return n;
    };

    Bridge.Decimal.toInt = function (v) {
        if (!v) {
            return null;
        }

        var i = Bridge.Int.trunc(Bridge.Decimal.getValue(v).toNumber());

        if (!Bridge.Int.instanceOf(i)) {
            throw new Bridge.OverflowException();
        }

        return i;
    };

    Bridge.Decimal.tryParse = function (s, provider, v) {
        try {
            v.v = new Bridge.Decimal(s, provider);

            return true;
        } catch (e) {
            v.v = new Bridge.Decimal(0);

            return false;
        }
    };

    Bridge.Decimal.toFloat = function (v) {
        if (!v) {
            return null;
        }

        return Bridge.Decimal.getValue(v).toNumber();
    };

    Bridge.Decimal.setConfig = function (config) {
        Bridge.$Decimal.config(config);
    };

    Bridge.Decimal.min = function () {
        var values = [];

        for (var i = 0, len = arguments.length; i < len; i++) {
            values.push(Bridge.Decimal.getValue(arguments[i]));
        }

        return new Bridge.Decimal(Bridge.$Decimal.min.apply(Bridge.$Decimal, values));
    };

    Bridge.Decimal.max = function () {
        var values = [];

        for (var i = 0, len = arguments.length; i < len; i++) {
            values.push(Bridge.Decimal.getValue(arguments[i]));
        }

        return new Bridge.Decimal(Bridge.$Decimal.max.apply(Bridge.$Decimal, values));
    };

    Bridge.Decimal.random = function (dp) {
        return new Bridge.Decimal(Bridge.$Decimal.random(dp));
    };

    Bridge.Decimal.exp = function (d) {
        return new Bridge.Decimal(Bridge.Decimal.getValue(d).exp());
    };

    Bridge.Decimal.exp = function (d) {
        return new Bridge.Decimal(Bridge.Decimal.getValue(d).exp());
    };

    Bridge.Decimal.ln = function (d) {
        return new Bridge.Decimal(Bridge.Decimal.getValue(d).ln());
    };

    Bridge.Decimal.log = function (d, logBase) {
        return new Bridge.Decimal(Bridge.Decimal.getValue(d).log(logBase));
    };

    Bridge.Decimal.pow = function (d, exponent) {
        return new Bridge.Decimal(Bridge.Decimal.getValue(d).pow(exponent));
    };

    Bridge.Decimal.sqrt = function (d) {
        return new Bridge.Decimal(Bridge.Decimal.getValue(d).sqrt());
    };

    Bridge.Decimal.prototype.isFinite = function () {
        return this.value.isFinite();
    };

    Bridge.Decimal.prototype.isInteger = function () {
        return this.value.isInteger();
    };

    Bridge.Decimal.prototype.isNaN = function () {
        return this.value.isNaN();
    };

    Bridge.Decimal.prototype.isNegative = function () {
        return this.value.isNegative();
    };

    Bridge.Decimal.prototype.isZero = function () {
        return this.value.isZero();
    };

    Bridge.Decimal.prototype.log = function (logBase) {
        return new Bridge.Decimal(this.value.log(logBase));
    };

    Bridge.Decimal.prototype.ln = function () {
        return new Bridge.Decimal(this.value.ln());
    };

    Bridge.Decimal.prototype.precision = function () {
        return this.value.precision();
    };

    Bridge.Decimal.prototype.round = function () {
        var old = Bridge.$Decimal.rounding,
            r;

        Bridge.$Decimal.rounding = 6;
        r = new Bridge.Decimal(this.value.round());
        Bridge.$Decimal.rounding = old;

        return r;
    };

    Bridge.Decimal.prototype.sqrt = function () {
        return new Bridge.Decimal(this.value.sqrt());
    };

    Bridge.Decimal.prototype.toDecimalPlaces = function (dp, rm) {
        return new Bridge.Decimal(this.value.toDecimalPlaces(dp, rm));
    };

    Bridge.Decimal.prototype.toExponential = function (dp, rm) {
        return this.value.toExponential(dp, rm);
    };

    Bridge.Decimal.prototype.toFixed = function (dp, rm) {
        return this.value.toFixed(dp, rm);
    };

    Bridge.Decimal.prototype.pow = function (n) {
        return new Bridge.Decimal(this.value.pow(n));
    };

    Bridge.Decimal.prototype.toPrecision = function (dp, rm) {
        return this.value.toPrecision(dp, rm);
    };

    Bridge.Decimal.prototype.toSignificantDigits = function (dp, rm) {
        return new Bridge.Decimal(this.value.toSignificantDigits(dp, rm));
    };

    Bridge.Decimal.prototype.valueOf = function () {
        return this.value.valueOf();
    };

    Bridge.Decimal.prototype.toFormat = function (dp, rm, provider) {
        var old = Bridge.$Decimal.format,
            d;

        if (provider && !provider.getFormat) {
            var oldConfig = Bridge.merge({}, old || {});
            Bridge.$Decimal.format = Bridge.merge(oldConfig, provider);
            d = this.value.toFormat(dp, rm);
        } else {
            provider = provider || Bridge.CultureInfo.getCurrentCulture();
            var nfInfo = provider && provider.getFormat(Bridge.NumberFormatInfo);

            if (nfInfo) {
                Bridge.$Decimal.format.decimalSeparator = nfInfo.numberDecimalSeparator;
                Bridge.$Decimal.format.groupSeparator = nfInfo.numberGroupSeparator;
                Bridge.$Decimal.format.groupSize = nfInfo.numberGroupSizes[0];
            }

            d = this.value.toFormat(dp, rm);
        }
        
        
        Bridge.$Decimal.format = old;
        return d;
    };

    Bridge.$Decimal.config({ precision: 29 });

    Bridge.Decimal.Zero = Bridge.Decimal(0);
    Bridge.Decimal.One = Bridge.Decimal(1);
    Bridge.Decimal.MinusOne = Bridge.Decimal(-1);
    Bridge.Decimal.MinValue = Bridge.Decimal("-79228162514264337593543950335");
    Bridge.Decimal.MaxValue = Bridge.Decimal("79228162514264337593543950335");
