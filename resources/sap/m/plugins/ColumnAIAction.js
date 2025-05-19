/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./PluginBase","../library","../Button","sap/ui/core/Lib"],function(t,n,o,i){"use strict";const e=t.extend("sap.m.plugins.ColumnAIAction",{metadata:{library:"sap.m",events:{press:{parameters:{action:{type:"sap.ui.core.Control"}}}}}});e.findOn=t.findOn;e.prototype.onActivate=function(t){this.getConfig("setAction",t,this._getAction())};e.prototype.onDeactivate=function(){if(this._oAction){this._oAction.destroy(true);this._oAction=null}};e.prototype._getAction=function(){this._oAction??=new o({icon:"sap-icon://ai",type:n.ButtonType.Transparent,press:[this._onActionPress,this],tooltip:i.getResourceBundleFor("sap.m").getText("COLUMNACTIONAI_TOOLTIP")}).addStyleClass("sapMPluginsColumnAIAction");return this._oAction};e.prototype._onActionPress=function(t){this.firePress({action:t.getSource()})};t.setConfigs({"sap.m.Column":{setAction:function(t,n){t.setAggregation("_action",n)}},"sap.ui.table.Column":{setAction:function(t,n){t.setAggregation("_action",n)}}},e);return e});
//# sourceMappingURL=ColumnAIAction.js.map