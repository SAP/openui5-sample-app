/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/OverflowToolbarToggleButton","sap/m/ToggleButtonRenderer"],function(t,e){"use strict";var o=t.extend("sap.m.semantic.SemanticOverflowToolbarToggleButton",{metadata:{library:"sap.m"},renderer:e});o.prototype._getTooltip=function(){var e=t.prototype._getTooltip.call(this);if(!e&&!this._bInOverflow&&this.getText()){e=this.getText()}return e};return o});
//# sourceMappingURL=SemanticOverflowToolbarToggleButton.js.map