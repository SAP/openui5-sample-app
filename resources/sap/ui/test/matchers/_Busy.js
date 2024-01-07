/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/ui/test/matchers/_Visitor"],function(t,s){"use strict";var e=new s;return t.extend("sap.ui.test.matchers._Busy",{isMatching:function(t){var s=e.isMatching(t,function(s){var e=s.getBusy&&s.getBusy();if(e){if(s===t){this._oLogger.debug("Control '"+t+"' is busy")}else{this._oLogger.debug("Control '"+t+"' has a parent '"+s+"' that is busy")}}return e}.bind(this));return s}})});
//# sourceMappingURL=_Busy.js.map