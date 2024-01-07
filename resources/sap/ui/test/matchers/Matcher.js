/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_OpaLogger","sap/ui/base/ManagedObject"],function(t,e){"use strict";var i=e.extend("sap.ui.test.matchers.Matcher",{metadata:{publicMethods:["isMatching"]},constructor:function(){e.prototype.constructor.apply(this,arguments);this._oLogger=t.getLogger(this.getMetadata().getName())},isMatching:function(t){return true},_getApplicationWindow:function(){var t=sap.ui.require("sap/ui/test/Opa5");if(t){return t.getWindow()}else{return window}}});return i});
//# sourceMappingURL=Matcher.js.map