/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/core/Lib","sap/ui/unified/calendar/CalendarUtils","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/CalendarLegend","sap/ui/unified/CalendarLegendRenderer","sap/ui/core/library","sap/ui/unified/library","sap/base/Log","sap/ui/core/InvisibleText","sap/ui/core/date/UI5Date","sap/ui/core/date/CalendarUtils","sap/ui/core/Locale"],function(e,a,t,i,r,n,s,o,l,d,c,p,u){"use strict";var g=o.CalendarDayType;var y=s.CalendarType;var f={apiVersion:2};f.render=function(e,t){var i=this.getStartDate(t),r=t.getTooltip_AsString(),n=a.getResourceBundleFor("sap.ui.unified"),s=t.getId(),o={value:"",append:!t._bCalendar},l="",c=t.getWidth();e.openStart("div",t);this.getClass(e,t).forEach(function(a){e.class(a)});if(t._getSecondaryCalendarType()){e.class("sapUiCalMonthSecType")}this.addWrapperAdditionalStyles(e,t);if(r){e.attr("title",r)}if(t._getShowHeader()){o.value=s+"-Head"}if(t._bCalendar){l=d.getStaticId("sap.ui.unified","CALENDAR_MONTH_PICKER_OPEN_HINT")+" "+d.getStaticId("sap.ui.unified","CALENDAR_YEAR_PICKER_OPEN_HINT")}if(c){e.style("width",c)}e.accessibilityState(t,{role:"grid",roledescription:t._bCalendar?"":n.getText("CALENDAR_DIALOG"),multiselectable:!t.getSingleSelection()||t.getIntervalSelection(),labelledby:o,describedby:l});e.openEnd();this.renderMonth(e,t,i);e.close("div")};f.addWrapperAdditionalStyles=function(){};f.getStartDate=function(e){return e._getDate()};f.getClass=function(e,a){var t=["sapUiCalMonthView"],i=a.getPrimaryCalendarType(),r=a.getShowWeekNumbers();if(i===y.Islamic||!r){t.push("sapUiCalNoWeekNum")}return t};f.renderMonth=function(e,a,t){this.renderHeader(e,a,t);this.renderDays(e,a,t)};f.renderHeader=function(e,a,t){var i=a._getLocaleData();var r=a._getFirstDayOfWeek();this.renderHeaderLine(e,a,i,t);e.openStart("div");e.accessibilityState(null,{role:"row"});e.style("overflow","hidden");e.openEnd();this.renderDayNames(e,a,i,r,7,true,undefined);e.close("div")};f.renderHeaderLine=function(e,a,i,r){t._checkCalendarDate(r);if(a._getShowHeader()){var n=a.getId();var s=a.getPrimaryCalendarType();var o=i.getMonthsStandAlone("wide",s);e.openStart("div",n+"-Head");e.class("sapUiCalHeadText");e.openEnd();e.text(o[r.getMonth()]);e.close("div")}};f.renderDayNames=function(e,a,t,i,r,n,s){var o=a._getFirstDayOfWeek();var l=a.getId();var d="";var c=a.getPrimaryCalendarType();var p=[];if(a._bLongWeekDays||!a._bNamesLengthChecked){p=t.getDaysStandAlone("abbreviated",c)}else{p=t.getDaysStandAlone("narrow",c)}var u=t.getDaysStandAlone("wide",c);if(a.getShowWeekNumbers()&&c!==y.Islamic){this.renderDummyCell(e,"sapUiCalWH",true,"columnheader")}for(var g=0;g<r;g++){if(n){d=l+"-WH"+(g+o)%7}else{d=l+"-WH"+g}e.openStart("div",d);e.class("sapUiCalWH");if(g===0){e.class("sapUiCalFirstWDay")}if(s){e.style("width",s)}e.accessibilityState(null,{role:"columnheader"});e.openEnd();e.openStart("span");e.attr("aria-hidden","true");e.openEnd();e.text(p[(g+i)%7]);e.close("span");e.openStart("span");e.class("sapUiPseudoInvisibleText");e.openEnd();e.text(u[(g+i)%7]);e.close("span");e.close("div")}};f.renderDays=function(e,a,i){var r,n,s,o,l,d,c;t._checkCalendarDate(i);if(!i){i=a._getFocusedDate()}d=i.toUTCJSDate().getTime();if(!d&&d!==0){throw new Error("Date is invalid "+a)}o=this.getDayHelper(a,i);n=a._getVisibleDays(i,true);c=a.getShowWeekNumbers();r=a.getPrimaryCalendarType()!==y.Islamic&&c;s=n.length;for(l=0;l<s;l++){if(l%7===0){e.openStart("div");e.attr("role","row");e.openEnd();if(r){this._renderWeekNumber(e,n[l],o,a)}}this.renderDay(e,a,n[l],o,true,r,-1);if(l%7===6||l===s-1){e.close("div")}}if(s===28){this.renderDummyCell(e,"sapUiCalItem",false,"")}};f.renderDummyCell=function(e,t,i,r){e.openStart("div");e.class(t);e.class("sapUiCalDummy");e.style("visibility",i?"visible":"hidden");e.attr("role",r);e.openEnd();e.openStart("span");e.class("sapUiPseudoInvisibleText");e.openEnd();e.text(a.getResourceBundleFor("sap.ui.unified").getText("CALENDAR_WEEK"));e.close("span");e.close("div")};f.isTypeAttributeRequired=function(e,a,t,i){const r=i.color?.toLowerCase();if(e){return t===r&&a===i.type}return a===""||a===g.None||a===i.type};f.isColorAttributeRequired=function(e,a,t,i,r){const n=e&&!a;const s=e===t&&i===r[0].type;const o=e===t&&(!i||i===g.None);if(n){return true}return s||o};f.getDayHelper=function(a,t){var n,s,o=a._getLocaleData(),d={sLocale:a._getLocale(),oLocaleData:o,iMonth:t.getMonth(),iYear:t.getYear(),iFirstDayOfWeek:a._getFirstDayOfWeek(),iWeekendStart:o.getWeekendStart(),iWeekendEnd:o.getWeekendEnd(),aNonWorkingDays:a._getNonWorkingDays(),sToday:o.getRelativeDay(0),oToday:i.fromLocalJSDate(c.getInstance(),a.getPrimaryCalendarType()),sId:a.getId(),oFormatLong:a._getFormatLong(),sPrimaryCalendarType:a.getPrimaryCalendarType(),sSecondaryCalendarType:a._getSecondaryCalendarType(),oLegend:undefined};s=a.getLegend();if(s&&typeof s==="string"){n=e.getElementById(s);if(n){if(!(n instanceof r)){throw new Error(n+" is not an sap.ui.unified.CalendarLegend. "+a)}d.oLegend=n}else{l.warning("CalendarLegend "+s+" does not exist!",a)}}return d};f.renderDay=function(e,a,r,s,o,l,c,y,f){t._checkCalendarDate(r);var C=new i(r,s.sSecondaryCalendarType),D={role:a._getAriaRole(),selected:false,label:"",describedby:a._getDayDescription()},b=r._bBeforeFirstYear,m="",S=s.oLegend;var h=a._oFormatYyyymmdd.format(r.toUTCJSDate(),true);var _=r.getDay();var v=a._checkDateSelected(r);var W=a._getDateTypes(r);var T=s&&s.oLegend?s.oLegend._getSpecialDateTypeFilter():"";var E=s?.oLegend?s.oLegend._getSpecialDateColorFilter().toLowerCase():"";var N=a._checkDateEnabled(r);var k=a._isSpecialDateMarkerEnabled(r);const I=W.length>0&&W[0].type;const L=W.length>0&&W[0].secondaryType;const U=s.aNonWorkingDays&&s.aNonWorkingDays instanceof Array?s.aNonWorkingDays.some(e=>r.getDay()===e):t._isWeekend(r,a._getLocaleData());const A=I!==g.Working&&L!==g.Working&&U;const w=I===g.NonWorking||L===g.NonWorking||A;const R=!!(T||E)&&(T!==g.None||E);const x=a._oUnifiedRB.getText("LEGEND_NON_WORKING_DAY");const F=d.getStaticId("sap.ui.unified","CALENDAR_START_DATE");const M=d.getStaticId("sap.ui.unified","CALENDAR_END_DATE");const O=[];if(b){N=false}e.openStart("div",s.sId+"-"+h);e.class("sapUiCalItem");e.class("sapUiCalWDay"+_);if(y){e.style("width",y)}if(_===s.iFirstDayOfWeek){e.class("sapUiCalFirstWDay")}if(o&&s.iMonth!==r.getMonth()){e.class("sapUiCalItemOtherMonth");D["disabled"]=true}if(r.isSame(s.oToday)){e.class("sapUiCalItemNow");O.push(a._oUnifiedRB.getText("LEGEND_TODAY"))}if(v>0){e.class("sapUiCalItemSel");D["selected"]=true}else{D["selected"]=false}if(v===2){e.class("sapUiCalItemSelStart");D["describedby"]=`${D["describedby"]} ${F}`.trim()}else if(v===3){e.class("sapUiCalItemSelEnd");D["describedby"]=`${D["describedby"]} ${M}`.trim()}else if(v===4){e.class("sapUiCalItemSelBetween")}else if(v===5){e.class("sapUiCalItemSelStart");e.class("sapUiCalItemSelEnd");D["describedby"]=`${D["describedby"]} ${F}`.trim();D["describedby"]=`${D["describedby"]} ${M}`.trim()}if(this.renderWeekNumbers&&a.getShowWeekNumbers()&&a._oDate){const e=p.getWeekConfigurationValues(a.getCalendarWeekNumbering(),new u(a._getLocale()));e.firstDayOfWeek=a._getFirstDayOfWeek();const n=i.fromUTCDate(t.getFirstDateOfWeek(r.toLocalJSDate(),e),a.getPrimaryCalendarType());D["describedby"]=D["describedby"]+" "+a.getId()+"-week-"+a._calculateWeekNumber(n)+"-text"}if(w){e.class("sapUiCalItemWeekEnd");O.push(x)}if(k){const a=this;W.forEach(function(t,i){if(t.type!==g.None){if(a.isTypeAttributeRequired(R,T,E,t)){if(i===0){e.class("sapUiCalItem"+t.type)}m=t.type;if(t.tooltip){O.push(t.tooltip)}}}})}if(O.length){const a=O.filter((e,a)=>O.indexOf(e)===a);e.attr("title",a.join(" "))}if((a.getParent()&&a.getParent().getMetadata().getName()==="sap.ui.unified.CalendarOneMonthInterval"||a.getMetadata().getName()==="sap.ui.unified.calendar.OneMonthDatesRow")&&a.getStartDate()&&s.iMonth!==r.getMonth()){e.class("sapUiCalItemOtherMonth")}if(!N){e.class("sapUiCalItemDsbl");D["disabled"]=true}e.attr("tabindex","-1");e.attr("data-sap-day",h);if(f){D["label"]=D["label"]+s.aWeekDaysWide[_]+" "}D["label"]=D["label"]+s.oFormatLong.format(r.toUTCJSDate(),true);if(m!==""){n.addCalendarTypeAccInfo(D,m,S)}if(s.sSecondaryCalendarType){D["label"]=D["label"]+" "+a._oFormatSecondaryLong.format(C.toUTCJSDate(),true)}e.accessibilityState(null,D);e.openEnd();if(W[0]&&k){e.openStart("div");e.class("sapUiCalSpecialDate");const a=W[0].color?.toLowerCase();if(this.isColorAttributeRequired(a,R,E,T,W)){e.style("background-color",a)}e.openEnd();e.close("div")}e.openStart("span");e.class("sapUiCalItemText");if(W[0]&&W[0].color){e.class("sapUiCalItemTextCustomColor")}e.openEnd();if(!b){e.text(r.getDate())}e.close("span");if(f){e.openStart("span");e.class("sapUiCalDayName");e.openEnd();e.text(s.aWeekDays[_]);e.close("span")}if(s.sSecondaryCalendarType){e.openStart("span");e.class("sapUiCalItemSecText");e.openEnd();e.text(C.getDate());e.close("span")}e.close("div")};f._renderWeekNumber=function(e,a,t,i){var r=i._calculateWeekNumber(a);var n=t.sId+"-WNum-"+r;e.openStart("div",n);e.class("sapUiCalWeekNum");e.accessibilityState(null,{role:"rowheader",labelledby:d.getStaticId("sap.ui.unified","CALENDAR_WEEK")+" "+n});e.openEnd();e.text(r);e.close("div")};return f},true);
//# sourceMappingURL=MonthRenderer.js.map