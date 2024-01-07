/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject","sap/ui/test/matchers/Matcher","sap/base/strings/capitalize"],function(t,e,a){"use strict";return e.extend("sap.ui.test.matchers.PropertyStrictEquals",{metadata:{publicMethods:["isMatching"],properties:{name:{type:"string"},value:{type:"any"}}},constructor:function(a){if(a&&a.value){a.value=t.escapeSettingsValue(a.value)}e.prototype.constructor.call(this,a)},isMatching:function(t){var e=this.getName(),r=t["get"+a(e,0)];if(!r){this._oLogger.error("Control '"+t+"' does not have a property '"+e+"'");return false}var s=r.call(t);var i=s===this.getValue();if(!i){this._oLogger.debug("Control '"+t+"' property '"+e+"' has value '"+s+"' but should have value '"+this.getValue()+"'")}return i}})});
//# sourceMappingURL=PropertyStrictEquals.js.map