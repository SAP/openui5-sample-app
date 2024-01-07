/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBase","./library","./CustomListItemRenderer"],function(t,e,i){"use strict";var n=t.extend("sap.m.CustomListItem",{metadata:{library:"sap.m",defaultAggregation:"content",properties:{accDescription:{type:"string",group:"Behavior"}},aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content",bindable:"bindable"}},designtime:"sap/m/designtime/CustomListItem.designtime"},renderer:i});n.prototype.setAccDescription=function(t){this.setProperty("accDescription",t,true);return this};n.prototype.getContentAnnouncement=function(){var e=this.getAccDescription();if(e){return e}return this.getContent().map(function(e){return t.getAccessibilityText(e)}).join(" ").trim()};return n});
//# sourceMappingURL=CustomListItem.js.map