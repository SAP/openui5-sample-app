/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/Button","sap/m/ButtonRenderer"],function(t,e){"use strict";var o=t.extend("sap.m.OverflowToolbarButton",{metadata:{interfaces:["sap.f.IShellBar","sap.m.IOverflowToolbarContent","sap.m.IToolbarInteractiveControl"]},renderer:e});o.prototype._getText=function(){if(this._bInOverflow){return t.prototype._getText.call(this)}return""};o.prototype._getTooltip=function(){var e=t.prototype._getTooltip.call(this);if(this._bInOverflow){return this._getText()===e?"":e}return e};o.prototype._getToolbarInteractive=function(){return true};o.prototype._onBeforeEnterOverflow=function(){this._bInOverflow=true};o.prototype._onAfterExitOverflow=function(){this._bInOverflow=false};o.prototype.getOverflowToolbarConfig=function(){var t={canOverflow:true,propsUnrelatedToSize:["enabled","type","accesskey"],autoCloseEvents:["press"]};t.onBeforeEnterOverflow=this._onBeforeEnterOverflow.bind(this);t.onAfterExitOverflow=this._onAfterExitOverflow.bind(this);return t};return o});
//# sourceMappingURL=OverflowToolbarButton.js.map