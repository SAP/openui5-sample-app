/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/ui/test/matchers/AggregationLengthEquals"],function(t,e){"use strict";var a=new e({length:0});return t.extend("sap.ui.test.matchers.AggregationEmpty",{metadata:{publicMethods:["isMatching"],properties:{name:{type:"string"}}},isMatching:function(t){a.setName(this.getName());return a.isMatching(t)}})});
//# sourceMappingURL=AggregationEmpty.js.map