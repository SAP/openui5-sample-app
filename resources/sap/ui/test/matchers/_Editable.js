/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/ui/test/matchers/_Visitor"],function(t,e){"use strict";var i=new e;return t.extend("sap.ui.test.matchers._Editable",{isMatching:function(t){return!i.isMatching(t,function(e){if(!e.getEditable){return false}var i=e.getEditable();if(!i){if(e===t){this._oLogger.debug("Control '"+t+"' is not editable")}else{this._oLogger.debug("Control '"+t+"' has a parent '"+e+"' that is not editable")}}return!i}.bind(this))}})});
//# sourceMappingURL=_Editable.js.map