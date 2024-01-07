/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/base/strings/capitalize"],function(e,t){"use strict";return e.extend("sap.ui.test.matchers.AggregationFilled",{metadata:{publicMethods:["isMatching"],properties:{name:{type:"string"}}},isMatching:function(e){var a=this.getName(),r=e["get"+t(a,0)];if(!r){this._oLogger.error("Control '"+e+"' does not have an aggregation called '"+a+"'");return false}var i=r.call(e);var s=Array.isArray(i)?i:[i];var n=!!s.length;if(!n){this._oLogger.debug("Control '"+e+"' aggregation '"+a+"' is empty")}return n}})});
//# sourceMappingURL=AggregationFilled.js.map