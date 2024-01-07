/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","./ToolbarSeparatorRenderer"],function(r,e,o){"use strict";var t=e.extend("sap.m.ToolbarSeparator",{metadata:{library:"sap.m",interfaces:["sap.m.IOverflowToolbarContent"]},renderer:o});t.CLASSNAME_OVERFLOW_TOOLBAR="sapMTBSeparatorOverflowToolbar";t.prototype._onBeforeEnterOverflow=function(r){r.addStyleClass(t.CLASSNAME_OVERFLOW_TOOLBAR)};t.prototype._onAfterExitOverflow=function(r){r.removeStyleClass(t.CLASSNAME_OVERFLOW_TOOLBAR)};t.prototype.getOverflowToolbarConfig=function(){var r={canOverflow:true};r.onBeforeEnterOverflow=this._onBeforeEnterOverflow;r.onAfterExitOverflow=this._onAfterExitOverflow;return r};return t});
//# sourceMappingURL=ToolbarSeparator.js.map