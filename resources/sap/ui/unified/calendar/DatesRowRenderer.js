/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/ui/core/Renderer","sap/ui/unified/calendar/CalendarDate","./MonthRenderer","sap/ui/core/CalendarType"],function(e,a,t,r,n){"use strict";var i=a.extend(r);i.apiVersion=2;i.getStartDate=function(e){return e._getStartDate()};i.getClass=function(e,a){var t=["sapUiCalDatesRow","sapUiCalRow"];if(!a.getShowDayNamesLine()){t.push("sapUiCalNoNameLine")}return t};i.addWrapperAdditionalStyles=function(e,a){if(a._iTopPosition){e.style("top",a._iTopPosition+"px")}};i.renderMonth=function(e,a,t){if(a.isRelative&&a.isRelative()){i.renderCustomIntervals(e,a)}else{r.renderMonth.apply(this,arguments);this.renderWeekNumbers(e,a)}};i.renderCustomIntervals=function(e,a){var t;e.openStart("div",a.getId()+"-customintervals");e.openEnd();var r=a.getDays();t=100/r;var n=a._getRelativeInfo()._getIndexFromDate(a.getStartDate());for(var i=0;i<r;i++){e.openStart("div");e.class("sapUiCalItem");if(a._getRelativeInfo&&a._getRelativeInfo().bIsRelative){e.class("sapUiRelativeCalItem");e.attr("data-sap-ui-index",n+i);e.attr("tabindex","-1");var s=a._getRelativeInfo()._getDateFromIndex(n+i+1);e.attr("data-sap-day",a._oFormatYyyymmdd.format(s,true))}e.style("width",t+"%");e.openEnd();e.openStart("span");e.class("sapUiCalItemText");e.openEnd();e.text(a._getRelativeInfo?a._getRelativeInfo().intervalLabelFormatter(n+i):n+i);e.close("span");e.close("div")}e.close("div")};i.renderWeekNumbers=function(a,t){var r,i,s,o;if(t.getShowWeekNumbers()&&t._getPrimaryCalendarType()===n.Gregorian){r=e.getResourceBundleFor("sap.ui.unified");a.openStart("div",t.getId()+"-weeks");a.class("sapUiCalRowWeekNumbers");a.openEnd();i=t.getDays();s=100/i;o=t.getWeekNumbers();o.forEach(function(e){a.openStart("div",t.getId()+"-week-"+e.number+"-text");a.class("sapUiCalRowWeekNumber");a.style("width",e.len*s+"%");a.attr("data-sap-ui-week",e.number);a.openEnd();a.text(r.getText("CALENDAR_DATES_ROW_WEEK_NUMBER",[e.number]));a.close("div")});a.close("div")}};i.renderDummyCell=function(){};i.renderHeader=function(e,a,t){var r=a._getLocaleData();var n=a.getId();var i=a.getDays();var s="";if(a._getShowHeader()){e.openStart("div",n+"-Head");e.openEnd();this.renderHeaderLine(e,a,r,t);e.close("div")}s=100/i+"%";if(a.getShowDayNamesLine()){e.openStart("div",n+"-Names");e.style("display","inline");e.attr("role","row");e.openEnd();this.renderDayNames(e,a,r,t.getDay(),i,false,s);e.close("div")}};i.renderHeaderLine=function(e,a,r,n){var i=a.getId();var s=a.getDays();var o=new t(n,a.getPrimaryCalendarType());var d="";var l=0;var v=[];var p=0;for(p=0;p<s;p++){l=o.getMonth();if(v.length>0&&v[v.length-1].iMonth==l){v[v.length-1].iDays++}else{v.push({iMonth:l,iDays:1})}o.setDate(o.getDate()+1)}var g=r.getMonthsStandAlone("wide",a.getPrimaryCalendarType());for(p=0;p<v.length;p++){var u=v[p];d=100/s*u.iDays+"%";e.openStart("div",i+"-Head"+p);e.class("sapUiCalHeadText");e.style("width",d);e.openEnd();e.text(g[u.iMonth]);e.close("div")}};i.renderDays=function(e,a,r){var n=a.getDays();var i=100/n+"%";var s=a.getShowDayNamesLine();var o=a.getPrimaryCalendarType();if(!r){r=a._getFocusedDate()}var d=this.getDayHelper(a,r);if(!s){if(a._bLongWeekDays||!a._bNamesLengthChecked){d.aWeekDays=d.oLocaleData.getDaysStandAlone("abbreviated",o)}else{d.aWeekDays=d.oLocaleData.getDaysStandAlone("narrow",o)}d.aWeekDaysWide=d.oLocaleData.getDaysStandAlone("wide",o)}var l=new t(r,o);e.openStart("div");e.attr("role","row");e.openEnd();for(var v=0;v<n;v++){this.renderDay(e,a,l,d,false,false,v,i,!s);l.setDate(l.getDate()+1)}e.close("div")};return i},true);
//# sourceMappingURL=DatesRowRenderer.js.map