/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/ui/core/Renderer","./YearPickerRenderer","./CalendarDate","sap/ui/core/format/DateFormat","sap/ui/core/date/UniversalDate","sap/ui/unified/calendar/CalendarUtils"],function(e,t,a,r,l,i,n){"use strict";var s=t.extend(a);s.apiVersion=2;s.getAccessibilityState=function(){return{role:"grid",readonly:"true",multiselectable:false,roledescription:e.getResourceBundleFor("sap.ui.unified").getText("YEAR_RANGE_PICKER")}};s.renderCells=function(e,t){var a=t.getProperty("_middleDate")?t.getProperty("_middleDate"):t._getDate(),s=new r(a,t.getPrimaryCalendarType()),o=new r(s,t.getPrimaryCalendarType()),d=n._minDate(t.getProperty("primaryCalendarType")).getYear(),g=n._maxDate(t.getProperty("primaryCalendarType")).getYear(),c,p="",y="",f="",u=t.getId(),m=t.getColumns(),Y=t.getYears(),S=t._getSecondaryCalendarType(),C=t._getLocaleData(),D=C.getIntervalPattern(),_="",T,I,R,U,b;if(t.getColumns()%2!==0){o.setYear(o.getYear()-Math.floor(t.getRangeSize()/2));o.setYear(o.getYear()-Math.floor(Y/2)*t.getRangeSize())}else{o.setYear(o.getYear()-Y/2*t.getRangeSize())}if(o.getYear()<d){o.setYear(d)}else if(o.getYear()>g-Y){o.setYear(g-Math.floor(Y)*t.getRangeSize()+1)}c=new r(o,t.getPrimaryCalendarType());c.setYear(c.getYear()+t.getRangeSize()-1);if(m>0){_=100/m+"%"}else{_=100/Y+"%"}for(b=0;b<Y;b++){U=t._oFormatYyyymmdd.format(o.toUTCJSDate(),true);R={role:"gridcell"};if(m>0&&b%m==0){e.openStart("div");e.accessibilityState(null,{role:"row"});e.openEnd()}e.openStart("div",u+"-y"+U);e.class("sapUiCalItem");T=t._isYearSelected(o);I=t._isYearInsideSelectionRange(o);if(T){e.class("sapUiCalItemSel");R["selected"]=true}if(I&&!T){e.class("sapUiCalItemSelBetween");R["selected"]=true}if(!T&&!I){R["selected"]=false}if(!t._checkDateEnabled(o,c)){e.class("sapUiCalItemDsbl");R["disabled"]=true}p=t._oYearFormat.format(i.getInstance(o.toUTCJSDate(),o.getCalendarType()),true);y=t._oYearFormat.format(i.getInstance(c.toUTCJSDate(),c.getCalendarType()),true);f=D.replace(/\{0\}/,p).replace(/\{1\}/,y);R["label"]=f;if(S){var v=t._getDisplayedSecondaryDates(o),P=l.getDateInstance({format:"y",calendarType:t.getSecondaryCalendarType()}),x;if(v.start.getYear()===v.end.getYear()){x=P.format(v.start.toUTCJSDate(),true)}else{x=D.replace(/\{0\}/,P.format(v.start.toUTCJSDate(),true)).replace(/\{1\}/,P.format(v.end.toUTCJSDate(),true))}R["label"]=R["label"]+" "+x}e.attr("tabindex","-1");e.attr("data-sap-year-start",U);e.style("width",_);e.accessibilityState(null,R);e.openEnd();if(n._isBetween(t._oDate,o,c,true)){t._iSelectedIndex=b}e.text(f);if(S){e.openStart("div",u+"-y"+U+"-secondary");e.class("sapUiCalItemSecText");e.openEnd();e.text(x);e.close("div")}e.close("div");if(m>0&&(b+1)%m==0){e.close("div")}o.setYear(c.getYear()+1);c.setYear(c.getYear()+t.getRangeSize())}};return s},true);
//# sourceMappingURL=YearRangePickerRenderer.js.map