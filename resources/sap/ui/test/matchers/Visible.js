/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher"],function(e){"use strict";return e.extend("sap.ui.test.matchers.Visible",{isMatching:function(e){var i=e.$();var t=false;if(i.length){if(i.is(":hidden")||i.css("visibility")==="hidden"){this._oLogger.debug("Control '"+e+"' is not visible")}else{t=true}}else{this._oLogger.debug("Control '"+e+"'' is not rendered")}return t}})});
//# sourceMappingURL=Visible.js.map