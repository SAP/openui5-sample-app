/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TreeItemBase","./ListItemBase","./library","./CustomTreeItemRenderer"],function(e,t,n,r){"use strict";var i=e.extend("sap.m.CustomTreeItem",{metadata:{library:"sap.m",defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content",bindable:"bindable"}}},renderer:r});i.prototype.getContentAnnouncement=function(){return this.getContent().map(function(e){return t.getAccessibilityText(e)}).join(" ").trim()};return i});
//# sourceMappingURL=CustomTreeItem.js.map