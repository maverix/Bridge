﻿/* global Bridge */

"use strict";

Bridge.define('Test.BridgeIssues.N534.Bridge534', {
    statics: {
        IntValue1: 1,
        IntValue2: 2,
        StringValue1: "3",
        StringValue2: "34",
        DecimalValue1: Bridge.Decimal(5.0),
        DecimalValue2: Bridge.Decimal(11.0)
    }
});



Bridge.init();