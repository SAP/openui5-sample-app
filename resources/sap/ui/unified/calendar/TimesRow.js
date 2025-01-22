/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Formatting","sap/ui/core/Control","sap/ui/core/Element","sap/ui/core/Lib","sap/ui/core/LocaleData","sap/ui/core/delegate/ItemNavigation","sap/ui/unified/calendar/CalendarUtils","sap/ui/core/date/UniversalDate","sap/ui/unified/library","sap/ui/core/format/DateFormat","sap/ui/core/Locale","./TimesRowRenderer","sap/ui/dom/containsOrEquals","sap/base/util/deepEqual","sap/ui/thirdparty/jquery","sap/ui/unified/DateRange","sap/ui/core/date/UI5Date","sap/ui/core/InvisibleText"],function(e,t,a,i,r,s,n,o,l,g,u,c,h,p,jQuery,f,d,v){"use strict";var m=t.extend("sap.ui.unified.calendar.TimesRow",{metadata:{library:"sap.ui.unified",properties:{date:{type:"object",group:"Data"},startDate:{type:"object",group:"Data"},items:{type:"int",group:"Appearance",defaultValue:12},intervalMinutes:{type:"int",group:"Appearance",defaultValue:60},intervalSelection:{type:"boolean",group:"Behavior",defaultValue:false},singleSelection:{type:"boolean",group:"Behavior",defaultValue:true},showHeader:{type:"boolean",group:"Appearance",defaultValue:false},primaryCalendarType:{type:"sap.ui.core.CalendarType",group:"Appearance"},secondaryCalendarType:{type:"sap.ui.core.CalendarType",group:"Appearance"}},aggregations:{selectedDates:{type:"sap.ui.unified.DateRange",multiple:true,singularName:"selectedDate"},specialDates:{type:"sap.ui.unified.DateTypeRange",multiple:true,singularName:"specialDate"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"},legend:{type:"sap.ui.unified.CalendarLegend",multiple:false}},events:{select:{},focus:{parameters:{date:{type:"object"},notVisible:{type:"boolean"}}}}},renderer:c});m.prototype.init=function(){this._oFormatYyyyMMddHHmm=g.getInstance({pattern:"yyyyMMddHHmm",calendarType:this.getProperty("primaryCalendarType")});this._oFormatLong=g.getDateTimeInstance({style:"long/short",calendarType:this.getProperty("primaryCalendarType")});this._oFormatDate=g.getDateInstance({style:"medium",calendarType:this.getProperty("primaryCalendarType")});this._mouseMoveProxy=jQuery.proxy(this._handleMouseMove,this);this._rb=i.getResourceBundleFor("sap.ui.unified")};m.prototype.exit=function(){if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation}if(this._invisibleDayHint){this._invisibleDayHint.destroy();this._invisibleDayHint=null}};m.prototype.onAfterRendering=function(){_.call(this)};m.prototype.onsapfocusleave=function(e){if(!e.relatedControlId||!h(this.getDomRef(),a.getElementById(e.relatedControlId).getFocusDomRef())){if(this._bMouseMove){w.call(this,true);M.call(this,this._getDate());this._bMoveChange=false;this._bMousedownChange=false;S.call(this)}if(this._bMousedownChange){this._bMousedownChange=false;S.call(this)}}};m.prototype.removeAllSelectedDates=function(){this._bDateRangeChanged=true;var e=this.removeAllAggregation("selectedDates");return e};m.prototype.destroySelectedDates=function(){this._bDateRangeChanged=true;var e=this.destroyAggregation("selectedDates");return e};m.prototype.removeAllSpecialDates=function(){this._bDateRangeChanged=true;var e=this.removeAllAggregation("specialDates");return e};m.prototype.destroySpecialDates=function(){this._bDateRangeChanged=true;var e=this.destroyAggregation("specialDates");return e};m.prototype.setIntervalMinutes=function(e){if(e>=720){throw new Error("Only intervals < 720 minutes are allowed; "+this)}if(1440%e>0){throw new Error("A day must be divisible by the interval size; "+this)}this.setProperty("intervalMinutes",e,false);this._oFormatTime=undefined;return this};m.prototype.setDate=function(e){I.call(this,e,false);return this.setProperty("date",e)};m.prototype._getDate=function(){if(!this._oUTCDate){this._oUTCDate=n._createUniversalUTCDate(d.getInstance(),undefined,true)}return this._oUTCDate};m.prototype.setStartDate=function(e){n._checkJSDateObject(e);var t=e.getFullYear();n._checkYearInValidRange(t);var a=n._createUniversalUTCDate(e,undefined,true);this.setProperty("startDate",e);this._oUTCStartDate=this._getIntervalStart(a);if(this.getDomRef()){var i=n._createLocalDate(this._getDate(),true);this._bNoRangeCheck=true;this.displayDate(e);this._bNoRangeCheck=false;if(i&&this.checkDateFocusable(i)){this.displayDate(i)}}return this};m.prototype._getStartDate=function(){if(!this._oUTCStartDate){this._oUTCStartDate=n._createUniversalUTCDate(d.getInstance(),undefined,true);this._oUTCStartDate=this._getIntervalStart(this._oUTCStartDate)}return this._oUTCStartDate};m.prototype.displayDate=function(e){I.call(this,e,true);return this};m.prototype._getLocale=function(){var t=this.getParent();if(t&&t.getLocale){return t.getLocale()}else if(!this._sLocale){this._sLocale=new u(e.getLanguageTag()).toString()}return this._sLocale};m.prototype._getLocaleData=function(){var e=this.getParent();if(e&&e._getLocaleData){return e._getLocaleData()}else if(!this._oLocaleData){var t=this._getLocale();var a=new u(t);this._oLocaleData=r.getInstance(a)}return this._oLocaleData};m.prototype._getFormatLong=function(){var e=this._getLocale();if(this._oFormatLong.oLocale.toString()!=e){var t=new u(e);this._oFormatLong=g.getDateTimeInstance({style:"long/short",calendarType:this.getProperty("primaryCalendarType")},t)}return this._oFormatLong};m.prototype._getFormatTime=function(){var e=this._getLocale();if(!this._oFormatTime||this._oFormatTime.oLocale.toString()!=e){var t=new u(e);var a=this.getIntervalMinutes();var i=this._getLocaleData();var r;var s=i.getTimePattern("short");this._oFormatTimeAmPm=undefined;if(a%60==0){r=L(s);if(s.search("a")>=0){this._oFormatTimeAmPm=g.getTimeInstance({pattern:"a",calendarType:this.getProperty("primaryCalendarType")},t)}}else{r=s;r=r.replace("HH","H");r=r.replace("hh","h");if(r.search("a")>=0){this._oFormatTimeAmPm=g.getTimeInstance({pattern:"a",calendarType:this.getProperty("primaryCalendarType")},t);r=r.replace("a","").trim()}}this._oFormatTime=g.getTimeInstance({pattern:r,calendarType:this.getProperty("primaryCalendarType")},t)}return this._oFormatTime};m.prototype._getFormatDate=function(){var e=this._getLocale();if(this._oFormatDate.oLocale.toString()!=e){var t=new u(e);this._oFormatDate=g.getDateInstance({style:"medium",calendarType:this.getProperty("primaryCalendarType")},t)}return this._oFormatDate};m.prototype.getIntervalSelection=function(){var e=this.getParent();if(e&&e.getIntervalSelection){return e.getIntervalSelection()}else{return this.getProperty("intervalSelection")}};m.prototype.getSingleSelection=function(){var e=this.getParent();if(e&&e.getSingleSelection){return e.getSingleSelection()}else{return this.getProperty("singleSelection")}};m.prototype.getSelectedDates=function(){var e=this.getParent();if(e&&e.getSelectedDates){return e.getSelectedDates()}else{return this.getAggregation("selectedDates",[])}};m.prototype.getSpecialDates=function(){var e=this.getParent();if(e&&e.getSpecialDates){return e.getSpecialDates()}else{return this.getAggregation("specialDates",[])}};m.prototype._getShowHeader=function(){var e=this.getParent();if(e&&e._getShowItemHeader){return e._getShowItemHeader()}else{return this.getProperty("showHeader")}};m.prototype.getIntervalMinutes=function(){var e=this.getParent();if(e&&e.getIntervalMinutes){return e.getIntervalMinutes()}else{return this.getProperty("intervalMinutes")}};m.prototype.getAriaLabelledBy=function(){var e=this.getParent();if(e&&e.getAriaLabelledBy){return e.getAriaLabelledBy()}else{return this.getAssociation("ariaLabelledBy",[])}};m.prototype._setLegendControlOrigin=function(e){this._oLegendControlOrigin=e};m.prototype.getLegend=function(){var e=this.getParent();if(this._oLegendControlOrigin){return this._oLegendControlOrigin.getLegend()}if(e&&e.getLegend){return e.getLegend()}else{return this.getAssociation("legend")}};m.prototype._checkDateSelected=function(e){if(!(e instanceof o)){throw new Error("Date must be a UniversalDate object "+this)}var t=0;var a=this.getSelectedDates();var i=new o(e.getTime());i=this._getIntervalStart(i);var r=i.getTime();for(var s=0;s<a.length;s++){var l=a[s];var g=l.getStartDate();var u=0;if(g){g=n._createUniversalUTCDate(g,undefined,true);g=this._getIntervalStart(g);u=g.getTime()}var c=l.getEndDate();var h=0;if(c){c=n._createUniversalUTCDate(c,undefined,true);c=this._getIntervalStart(c);h=c.getTime()}if(r==u&&!c){t=1;break}else if(r==u&&c){t=2;if(c&&r==h){t=5}break}else if(c&&r==h){t=3;break}else if(c&&r>u&&r<h){t=4;break}if(this.getSingleSelection()){break}}return t};m.prototype._getDateType=function(e){if(!(e instanceof o)){throw new Error("Date must be a UniversalDate object "+this)}var t;var a=this.getSpecialDates();var i=new o(e.getTime());i=this._getIntervalStart(i);var r=i.getTime();for(var s=0;s<a.length;s++){var l=a[s];var g=l.getStartDate();var u=0;if(g){g=n._createUniversalUTCDate(g,undefined,true);g=this._getIntervalStart(g);u=g.getTime()}var c=l.getEndDate();var h=0;if(c){c=n._createUniversalUTCDate(c,undefined,true);c=this._getIntervalStart(c);c.setUTCMinutes(c.getUTCMinutes()+this.getIntervalMinutes()-1);h=c.getTime()}else if(g.getUTCHours()==0&&g.getUTCMinutes()==0&&g.getUTCSeconds()==0&&g.getUTCMilliseconds()==0){c=new o(g.getTime());c.setUTCDate(c.getUTCDate()+1);h=c.getTime()}if(r==u&&!c||r>=u&&r<=h){t={type:l.getType(),tooltip:l.getTooltip_AsString(),color:l.getColor()};break}}return t};m.prototype._checkTimeEnabled=function(e){if(!(e instanceof o)){throw new Error("Date must be a UniversalDate object "+this)}var t=e.getTime();var a=this.getParent();if(a&&a._oMinDate&&a._oMaxDate){if(t<a._oMinDate.getTime()||t>a._oMaxDate.getTime()){return false}}return true};m.prototype._handleMouseMove=function(e){if(!this.$().is(":visible")){w.call(this,true)}var t=jQuery(e.target);if(t.hasClass("sapUiCalItemText")){t=t.parent()}if(t.hasClass("sapUiCalItem")){var a=this._getDate();var i=new o(this._oFormatYyyyMMddHHmm.parse(t.attr("data-sap-time"),true).getTime());if(i.getTime()!=a.getTime()){this._oUTCDate=i;M.call(this,i,true);this._bMoveChange=true}}};m.prototype.onmouseup=function(e){if(this._bMouseMove){w.call(this,true);var t=this._getDate();var a=this._oItemNavigation.getItemDomRefs();for(var i=0;i<a.length;i++){var r=jQuery(a[i]);if(r.attr("data-sap-time")==this._oFormatYyyyMMddHHmm.format(t.getJSDate(),true)){r.trigger("focus");break}}if(this._bMoveChange){var s=jQuery(e.target);if(s.hasClass("sapUiCalItemText")){s=s.parent()}if(s.hasClass("sapUiCalItem")){t=new o(this._oFormatYyyyMMddHHmm.parse(s.attr("data-sap-time"),true).getTime())}M.call(this,t);this._bMoveChange=false;this._bMousedownChange=false;S.call(this)}}if(this._bMousedownChange){this._bMousedownChange=false;S.call(this)}};m.prototype.onsapselect=function(e){var t=M.call(this,this._getDate());if(t){S.call(this)}e.stopPropagation();e.preventDefault()};m.prototype.onsapselectmodifiers=function(e){this.onsapselect(e)};m.prototype.onsappageupmodifiers=function(e){var t=new o(this._getDate().getTime());var a=t.getUTCDate();if(e.metaKey||e.ctrlKey){t.setUTCDate(a-7)}else{t.setUTCDate(a-1)}this.fireFocus({date:n._createLocalDate(t,true),notVisible:true});e.preventDefault()};m.prototype.onsappagedownmodifiers=function(e){var t=new o(this._getDate().getTime());var a=t.getUTCDate();if(e.metaKey||e.ctrlKey){t.setUTCDate(a+7)}else{t.setUTCDate(a+1)}this.fireFocus({date:n._createLocalDate(t,true),notVisible:true});e.preventDefault()};m.prototype.checkDateFocusable=function(e){n._checkJSDateObject(e);if(this._bNoRangeCheck){return false}var t=this._getStartDate();var a=new o(t.getTime());a.setUTCMinutes(a.getUTCMinutes()+this.getItems()*this.getIntervalMinutes());var i=n._createUniversalUTCDate(e,undefined,true);if(i.getTime()>=t.getTime()&&i.getTime()<a.getTime()){return true}else{return false}};m.prototype.applyFocusInfo=function(e){this._oItemNavigation.focusItem(this._oItemNavigation.getFocusedIndex());return this};m.prototype._getIntervalStart=function(e){var t=e.getTime();var a=new o(e.getTime());a.setUTCHours(0);a.setUTCMinutes(0);a.setUTCSeconds(0);a.setUTCMilliseconds(0);var i=this.getIntervalMinutes();while(a.getTime()<=t){a.setUTCMinutes(a.getUTCMinutes()+i)}var r=new o(a.getTime());r.setUTCMinutes(r.getUTCMinutes()-i);return r};m.prototype._setAriaRole=function(e){this._ariaRole=e;return this};m.prototype._getAriaRole=function(){return this._ariaRole?this._ariaRole:"gridcell"};m.prototype._getTimeDescription=function(){return this._fnInvisibleHintFactory().getId()};m.prototype._fnInvisibleHintFactory=function(){if(!this._invisibleDayHint){this._invisibleDayHint=new v({text:i.getResourceBundleFor("sap.m").getText("SLIDETILE_ACTIVATE")}).toStatic()}return this._invisibleDayHint};m.prototype._updateItemARIASelected=function(e,t){var a=this._getAriaRole();if(a==="gridcell"){e.attr("aria-selected",t)}return this};function _(){var e=this._getDate();var t=this._oFormatYyyyMMddHHmm.format(e.getJSDate(),true);var a=0;var i=this.$("times").get(0);var r=this.$("times").children(".sapUiCalItem");for(var n=0;n<r.length;n++){var o=jQuery(r[n]);if(o.attr("data-sap-time")===t){a=n;break}}if(!this._oItemNavigation){this._oItemNavigation=new s;this._oItemNavigation.attachEvent(s.Events.AfterFocus,y,this);this._oItemNavigation.attachEvent(s.Events.FocusAgain,D,this);this._oItemNavigation.attachEvent(s.Events.BorderReached,T,this);this.addDelegate(this._oItemNavigation);this._oItemNavigation.setDisabledModifiers({sapnext:["alt"],sapprevious:["alt"],saphome:["alt"],sapend:["alt"]});this._oItemNavigation.setCycling(false);this._oItemNavigation.setColumns(1,true)}this._oItemNavigation.setRootDomRef(i);this._oItemNavigation.setItemDomRefs(r);this._oItemNavigation.setFocusedIndex(a);this._oItemNavigation.setPageSize(r.length)}function y(e){var t=e.getParameter("index");var a=e.getParameter("event");if(!a){return}var i=this._getDate();var r=new o(i.getTime());var s=this._oItemNavigation.getItemDomRefs();var l=jQuery(s[t]);r=new o(this._oFormatYyyyMMddHHmm.parse(l.attr("data-sap-time"),true).getTime());this._oUTCDate=r;this.fireFocus({date:n._createLocalDate(r,true),notVisible:false});if(a.type=="mousedown"){C.call(this,a,r,t)}}function D(e){var t=e.getParameter("index");var a=e.getParameter("event");if(!a){return}if(a.type=="mousedown"){var i=this._getDate();C.call(this,a,i,t)}}function T(e){var t=e.getParameter("event");var a=this.getItems();var i=this.getIntervalMinutes();var r=this._getDate();var s=new o(r.getTime());if(t.type){switch(t.type){case"sapnext":case"sapnextmodifiers":s.setUTCMinutes(s.getUTCMinutes()+i);break;case"sapprevious":case"sappreviousmodifiers":s.setUTCMinutes(s.getUTCMinutes()-i);break;case"sappagedown":s.setUTCMinutes(s.getUTCMinutes()+i*a);break;case"sappageup":s.setUTCMinutes(s.getUTCMinutes()-i*a);break;default:break}this.fireFocus({date:n._createLocalDate(s,true),notVisible:true})}}function C(e,t,a){if(e.button){return}var i=M.call(this,t);if(i){this._bMousedownChange=true}if(this._bMouseMove){w.call(this,true);this._bMoveChange=false}else if(this.getIntervalSelection()&&this.$().is(":visible")){U.call(this,true)}e.preventDefault();e.setMark("cancelAutoClose")}function I(e,t){n._checkJSDateObject(e);var a=e.getFullYear();n._checkYearInValidRange(a);var i=true;if(!p(this.getDate(),e)){var r=n._createUniversalUTCDate(e,undefined,true);r=this._getIntervalStart(r);i=this.checkDateFocusable(e);if(!this._bNoRangeCheck&&!i){throw new Error("Date must be in visible date range; "+this)}this.setProperty("date",e);this._oUTCDate=r}if(this.getDomRef()){if(i){b.call(this,this._oUTCDate,t)}else{this.setDate(e)}}}function b(e,t){var a=this._oFormatYyyyMMddHHmm.format(e.getJSDate(),true);var i=this._oItemNavigation.getItemDomRefs();var r;for(var s=0;s<i.length;s++){r=jQuery(i[s]);if(r.attr("data-sap-time")==a){if(document.activeElement!=i[s]){if(t){this._oItemNavigation.setFocusedIndex(s)}else{this._oItemNavigation.focusItem(s)}}break}}}function M(e,t){if(!this._checkTimeEnabled(e)){return false}var a=this.getSelectedDates();var i;var r=0;var s=this.getParent();var o=this;var l;if(s&&s.getSelectedDates){o=s}if(this.getSingleSelection()){if(a.length>0){i=a[0];l=i.getStartDate();if(l){l=n._createUniversalUTCDate(l,undefined,true);l=this._getIntervalStart(l)}}else{i=new f;o.addAggregation("selectedDates",i)}if(this.getIntervalSelection()&&(!i.getEndDate()||t)&&l){var g;if(e.getTime()<l.getTime()){g=l;l=e;if(!t){i.setProperty("startDate",n._createLocalDate(d.getInstance(l.getTime()),true));i.setProperty("endDate",n._createLocalDate(d.getInstance(g.getTime()),true))}}else if(e.getTime()>=l.getTime()){g=e;if(!t){i.setProperty("endDate",n._createLocalDate(d.getInstance(g.getTime()),true))}}}else{i.setProperty("startDate",n._createLocalDate(d.getInstance(e.getTime()),true));i.setProperty("endDate",undefined)}}else{if(this.getIntervalSelection()){throw new Error("Calender don't support multiple interval selection")}else{var u=this._checkDateSelected(e);if(u>0){for(r=0;r<a.length;r++){l=a[r].getStartDate();if(l){l=n._createUniversalUTCDate(l,undefined,true);l=this._getIntervalStart(l);if(e.getTime()==l.getTime()){o.removeAggregation("selectedDates",r);break}}}}else{i=new f({startDate:n._createLocalDate(d.getInstance(e.getTime()),true)});o.addAggregation("selectedDates",i)}}}return true}function S(){if(this._bMouseMove){w.call(this,true)}this.fireSelect()}function U(){jQuery(window.document).on("mousemove",this._mouseMoveProxy);this._bMouseMove=true}function w(){jQuery(window.document).off("mousemove",this._mouseMoveProxy);this._bMouseMove=undefined}function L(e){var t;if(e.toUpperCase().indexOf("K")>-1){t=e.indexOf("k")>-1?"k":"K"}else{t=e.indexOf("h")>-1?"h":"H"}return t}return m});
//# sourceMappingURL=TimesRow.js.map