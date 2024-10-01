/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/unified/calendar/CalendarUtils","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/CalendarLegendRenderer","sap/ui/unified/library","sap/base/Log","sap/ui/core/date/UI5Date"],function(e,t,a,n,r,o,s){"use strict";var l=r.CalendarDayType;var d={apiVersion:2};d.render=function(e,t){var a=t._getStartDate();var n=t.getTooltip_AsString();var r=t.getId();var o={value:r+"-Descr",append:true};e.openStart("div",t);e.class("sapUiCalMonthsRow");e.class("sapUiCalRow");if(n){e.attr("title",n)}e.accessibilityState(t,{role:"grid",readonly:"true",multiselectable:!t.getSingleSelection()||t.getIntervalSelection(),labelledby:o});e.openEnd();e.openStart("span",r+"-Descr");e.style("display","none");e.openEnd();e.text(t._rb.getText("CALENDAR_DIALOG"));e.close("span");if(t.getIntervalSelection()){e.openStart("span",r+"-Start");e.style("display","none");e.openEnd();e.text(t._rb.getText("CALENDAR_START_MONTH"));e.close("span");e.openStart("span",r+"-End");e.style("display","none");e.openEnd();e.text(t._rb.getText("CALENDAR_END_MONTH"));e.close("span")}this.renderRow(e,t,a);e.close("div")};d.renderRow=function(e,t,a){var n=t.getId();this.renderHeader(e,t,a);e.openStart("div",n+"-months");e.class("sapUiCalItems");e.attr("role","row");e.openEnd();this.renderMonths(e,t,a);e.close("div")};d.renderHeader=function(e,a,n){t._checkCalendarDate(n);if(a._getShowHeader()){var r=a._getLocaleData();var o=a.getId();e.openStart("div",o+"-Head");e.openEnd();this.renderHeaderLine(e,a,r,n);e.close("div")}};d.renderHeaderLine=function(e,n,r,o){t._checkCalendarDate(o);var s=n.getId();var l=n.getMonths();var d=new a(o);var i="";var c=0;var p=[];var g=0;for(g=0;g<l;g++){c=d.getYear();if(p.length>0&&p[p.length-1].iYear==c){p[p.length-1].iMonths++}else{p.push({iYear:c,iMonths:1})}d.setMonth(d.getMonth()+1)}for(g=0;g<p.length;g++){var h=p[g];i=100/l*h.iMonths+"%";e.openStart("div",s+"-Head"+g);e.class("sapUiCalHeadText");e.style("width",i);e.openEnd();e.text(h.iYear);e.close("div")}};d.renderMonths=function(e,t,n){var r=this.getHelper(t,n);var o=t.getMonths();var s=100/o+"%";var l=new a(n);l.setDate(1);for(var d=0;d<o;d++){this.renderMonth(e,t,l,r,s);l.setMonth(l.getMonth()+1)}};d.getHelper=function(n,r){t._checkCalendarDate(r);var l={};var d=n.getProperty("primaryCalendarType");l.sLocale=n._getLocale();l.oLocaleData=n._getLocaleData();l.oToday=a.fromLocalJSDate(s.getInstance(),d);l.sCurrentMonth=n._rb.getText("CALENDAR_CURRENT_MONTH");l.sId=n.getId();l.oFormatLong=n._getFormatLong();if(n._bLongMonth||!n._bNamesLengthChecked){l.aMonthNames=l.oLocaleData.getMonthsStandAlone("wide",d)}else{l.aMonthNames=l.oLocaleData.getMonthsStandAlone("abbreviated",d);l.aMonthNamesWide=l.oLocaleData.getMonthsStandAlone("wide",d)}var i=n.getLegend();if(i){var c=e.getElementById(i);if(c){if(!(c instanceof sap.ui.unified.CalendarLegend)){throw new Error(c+" is not an sap.ui.unified.CalendarLegend. "+n)}l.oLegend=c}else{o.warning("CalendarLegend "+i+" does not exist!",n)}}l.convertTextInfoToSecondaryType=function(e){var t=n._getSecondaryCalendarType(),a=l.oLocaleData.getMonthsStandAlone("abbreviated",t),r=n._oFormatYearInSecType,o=n._getDisplayedSecondaryDates(e.getMonth(),e.getYear()),s,d,i;if(o.start.getMonth()===o.end.getMonth()){s=a[o.start.getMonth()]}else{i=n._getLocaleData().getIntervalPattern();s=i.replace(/\{0\}/,a[o.start.getMonth()]).replace(/\{1\}/,a[o.end.getMonth()])}if(o.start.getYear()===o.end.getYear()){d=r.format(o.start.toUTCJSDate(),true)}else{d=i.replace(/\{0\}/,r.format(o.start.toUTCJSDate(),true)).replace(/\{1\}/,r.format(o.end.toUTCJSDate(),true))}return{sMonthInfo:s,sYearInfo:d}};return l};d.renderMonth=function(e,a,r,o,s){t._checkCalendarDate(r);var d=!!a._getSecondaryCalendarType(),i;if(d){i=o.convertTextInfoToSecondaryType(r)}var c={role:a._getAriaRole(),selected:false,label:"",describedby:a._getMonthDescription()};var p=a._oFormatYyyymm.format(r.toUTCJSDate(),true);var g=a._checkDateSelected(r);var h=a._getDateType(r);var f=a._checkMonthEnabled(r);e.openStart("div",o.sId+"-"+p);e.class("sapUiCalItem");if(s){e.style("width",s)}if(t._isSameMonthAndYear(r,o.oToday)){e.class("sapUiCalItemNow");c["label"]=o.sCurrentMonth+" "}if(g>0){e.class("sapUiCalItemSel");c["selected"]=true}if(g==2){e.class("sapUiCalItemSelStart");c["describedby"]=c["describedby"]+" "+o.sId+"-Start"}else if(g==3){e.class("sapUiCalItemSelEnd");c["describedby"]=c["describedby"]+" "+o.sId+"-End"}else if(g==4){e.class("sapUiCalItemSelBetween")}else if(g==5){e.class("sapUiCalItemSelStart");e.class("sapUiCalItemSelEnd");c["describedby"]=c["describedby"]+" "+o.sId+"-Start";c["describedby"]=c["describedby"]+" "+o.sId+"-End"}if(h&&h.type!=l.None){e.class("sapUiCalItem"+h.type);if(h.tooltip){e.attr("title",h.tooltip)}}if(!f){e.class("sapUiCalItemDsbl");c["disabled"]=true}e.attr("tabindex","-1");e.attr("data-sap-month",p);c["label"]=c["label"]+o.oFormatLong.format(r.toUTCJSDate(),true);if(d){c["label"]=c["label"]+", "+i.sMonthInfo+" "+i.sYearInfo}if(h&&h.type!=l.None){n.addCalendarTypeAccInfo(c,h.type,o.oLegend)}e.accessibilityState(null,c);if(d){e.class("sapUiCalItemWithSecondaryType")}e.openEnd();e.openStart("span");e.class("sapUiCalItemText");e.openEnd();e.text(o.aMonthNames[r.getMonth()]);e.close("span");if(d){e.openStart("span");e.class("sapUiCalItemAddText");e.openEnd();e.text(i.sMonthInfo);e.close("span")}e.close("div")};return d},true);
//# sourceMappingURL=MonthsRowRenderer.js.map