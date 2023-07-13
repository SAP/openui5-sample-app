/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/semantic/SemanticToggleButton"],function(e){"use strict";var t=e.extend("sap.m.semantic.MultiSelectAction",{metadata:{library:"sap.m"}});var _=sap.ui.getCore().getLibraryResourceBundle("sap.m");t._PRESSED_STATE_TO_ICON_MAP={true:"sap-icon://sys-cancel",false:"sap-icon://multi-select"};t._ACC_TOOLTIP_TO_ICON_MAP={true:_.getText("SEMANTIC_CONTROL_MULTI_SELECT_CANCEL"),false:_.getText("SEMANTIC_CONTROL_MULTI_SELECT")};t.prototype._setPressed=function(e,_){var s=t._PRESSED_STATE_TO_ICON_MAP[e];var T=t._ACC_TOOLTIP_TO_ICON_MAP[e];this._getControl().setIcon(s);this._getControl().setTooltip(T)};return t});
//# sourceMappingURL=MultiSelectAction.js.map