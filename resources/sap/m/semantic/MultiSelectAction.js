/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/semantic/SemanticToggleButton","sap/ui/core/Lib"],function(e,t){"use strict";var _=e.extend("sap.m.semantic.MultiSelectAction",{metadata:{library:"sap.m"}});var s=t.getResourceBundleFor("sap.m");_._PRESSED_STATE_TO_ICON_MAP={true:"sap-icon://sys-cancel",false:"sap-icon://multi-select"};_._ACC_TOOLTIP_TO_ICON_MAP={true:s.getText("SEMANTIC_CONTROL_MULTI_SELECT_CANCEL"),false:s.getText("SEMANTIC_CONTROL_MULTI_SELECT")};_.prototype._setPressed=function(e,t){var s=_._PRESSED_STATE_TO_ICON_MAP[e];var T=_._ACC_TOOLTIP_TO_ICON_MAP[e];this._getControl().setIcon(s);this._getControl().setTooltip(T)};return _});
//# sourceMappingURL=MultiSelectAction.js.map