/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/ui/test/matchers/_Visitor"],function(t,e){"use strict";var n=new e;return t.extend("sap.ui.test.matchers._Enabled",{isMatching:function(t){var e=n.isMatching(t,function(e){if(!e.getEnabled){return false}var n=!e.getEnabled();if(n){if(e===t){this._oLogger.debug("Control '"+t+"' is not enabled")}else{this._oLogger.debug("Control '"+t+"' has a parent '"+e+"' that is not enabled")}}return n}.bind(this));return!e}})});
//# sourceMappingURL=_Enabled.js.map