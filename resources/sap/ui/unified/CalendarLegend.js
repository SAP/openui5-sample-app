/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","./library","./CalendarLegendRenderer","sap/base/Log","sap/ui/core/Element","sap/ui/core/Lib","sap/ui/thirdparty/jquery","sap/ui/unified/CalendarLegendItem","sap/ui/Device","sap/ui/core/delegate/ItemNavigation"],function(e,t,i,a,n,r,jQuery,o,s,d){"use strict";var p=r.getResourceBundleFor("sap.ui.unified");var l=t.CalendarDayType;var u=t.StandardCalendarLegendItem;var g=e.extend("sap.ui.unified.CalendarLegend",{metadata:{library:"sap.ui.unified",properties:{standardItems:{type:"string[]",group:"Misc",defaultValue:["Today","Selected","WorkingDay","NonWorkingDay"]},columnWidth:{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:"120px"}},aggregations:{items:{type:"sap.ui.unified.CalendarLegendItem",multiple:true,singularName:"item"},_standardItems:{type:"sap.ui.unified.CalendarLegendItem",multiple:true,visibility:"hidden"}},designtime:"sap/ui/unified/designtime/CalendarLegend.designtime"},constructor:function(t,i){e.prototype.constructor.apply(this,arguments);if(typeof t!=="string"){i=t}if(!i||i&&!i.standardItems){this._addStandardItems(this.getStandardItems())}this._bShouldRenderStandardItems=true;this._oItemNavigation=null},renderer:i});g.prototype.onAfterRendering=function(){if(!s.system.phone&&this._oParentControl){this._initItemNavigation()}};g.prototype.setStandardItems=function(e){var t;if(e&&e.length===1&&e[0]===""){e=[]}if(e&&e.length){e=this.validateProperty("standardItems",e);for(t=0;t<e.length;t++){if(!u[e[t]]){throw new Error("Invalid value '"+e[t]+"'. Property standardItems must contain values from sap.ui.unified.StandardCalendarLegendItem.")}}}this.setProperty("standardItems",e);this._addStandardItems(this.getStandardItems(),true);return this};g.prototype._initItemNavigation=function(){var e=this.getAggregation("_standardItems")||[],t=this.getItems()||[],i,a=[],n,r;i=e.concat(t);if(!i.length){return}r=i[0].getDomRef().parentElement;i.forEach(function(e,t){n=e.getFocusDomRef();n.setAttribute("tabindex","-1");a.push(n)});if(!this._oItemNavigation){this._oItemNavigation=(new d).setCycling(false).attachEvent(d.Events.AfterFocus,this._onItemNavigationAfterFocus,this).attachEvent(d.Events.FocusLeave,this._onItemNavigationFocusLeave,this).setDisabledModifiers({sapnext:["alt","meta","ctrl"],sapprevious:["alt","meta","ctrl"],saphome:["alt","meta","ctrl"],sapend:["meta","ctrl"]});this.addDelegate(this._oItemNavigation)}this._oItemNavigation.setRootDomRef(r).setItemDomRefs(a).setPageSize(i.length).setFocusedIndex(0)};g.prototype._onItemNavigationAfterFocus=function(e){var t=e.getSource(),i=t.getItemDomRefs()[t.getFocusedIndex()],a=n.getElementById(i.id).getType(),r=n.getElementById(i.id).getColor(),o=this._getParent();this._setSpecialDateTypeFilter(a);this._setSpecialDateColorFilter(r);o&&o.invalidate()};g.prototype._onItemNavigationFocusLeave=function(e){var t=this._getParent();this._setSpecialDateColorFilter();this._setSpecialDateTypeFilter();t&&t.invalidate()};g.prototype._setSpecialDateTypeFilter=function(e){this._sSpecialDateTypeFilter=e||""};g.prototype._setSpecialDateColorFilter=function(e){this._sSpecialDateColorFilter=e||""};g.prototype._getSpecialDateTypeFilter=function(){return this._sSpecialDateTypeFilter||""};g.prototype._getSpecialDateColorFilter=function(){return this._sSpecialDateColorFilter||""};g.prototype._setParent=function(e){this._oParentControl=e};g.prototype._getParent=function(){return this._oParentControl};g.prototype._getLegendAriaLabel=function(){return p.getText("LEGEND_ARIA_LABEL")};g.prototype._addStandardItems=function(e,t){var i,a=this.getId();if(t){this.destroyAggregation("_standardItems")}for(i=0;i<e.length;i++){var n=new o(a+"-"+e[i],{text:p.getText(g._Standard_Items_TextKeys[e[i]])});this.addAggregation("_standardItems",n)}};g._Standard_Items_TextKeys={Today:"LEGEND_TODAY",Selected:"LEGEND_SELECTED",WorkingDay:"LEGEND_NORMAL_DAY",NonWorkingDay:"LEGEND_NON_WORKING_DAY"};g.prototype._getItemType=function(e,t){var i=e.getType(),n,r;if(i&&i!==l.None){return i}r=this._getUnusedItemTypes(t);n=t.filter(function(e){return!e.getType()||e.getType()===l.None}).indexOf(e);if(n<0){a.error("Legend item is not in the legend",this);return i}if(r[n]){i=r[n]}else{i="Type"+(Object.keys(l).length+n-r.length-1)}return i};g.prototype._getItemByType=function(e){var t,i=this.getItems(),a;for(a=0;a<i.length;a++){if(this._getItemType(i[a],i)===e){t=i[a];break}}return t};g.prototype._getUnusedItemTypes=function(e){var t=jQuery.extend({},l),i,a;delete t[l.None];delete t[l.NonWorking];delete t[l.Working];for(a=0;a<e.length;a++){i=e[a].getType();if(t[i]){delete t[i]}}return Object.keys(t)};g.prototype._extractItemIdsString=function(e){return e.map(function(e){return e.getId()}).join(" ")};return g});
//# sourceMappingURL=CalendarLegend.js.map