/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/base/strings/capitalize"],function(t,e){"use strict";return t.extend("sap.ui.test.matchers.AggregationLengthEquals",{metadata:{publicMethods:["isMatching"],properties:{name:{type:"string"},length:{type:"int"}}},isMatching:function(t){var a=this.getName(),r=t["get"+e(a,0)];if(!r){this._oLogger.error("Control '"+t+"' does not have an aggregation called '"+a+"'");return false}var i=r.call(t);var s=Array.isArray(i)?i:[i];var n=s.length;var g=this.getLength();var h=n===g;if(!h){this._oLogger.debug("Control '"+t+"' has "+n+" Objects in the aggregation '"+a+"' but it should have "+g)}return h}})});
//# sourceMappingURL=AggregationLengthEquals.js.map