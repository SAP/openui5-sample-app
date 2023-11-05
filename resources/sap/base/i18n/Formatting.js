/*!
* OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/base/assert","sap/base/config","sap/base/Eventing","sap/base/Log","sap/base/i18n/Localization","sap/base/i18n/LanguageTag","sap/base/i18n/date/CalendarType","sap/base/i18n/date/CalendarWeekNumbering","sap/base/util/deepEqual","sap/base/util/extend","sap/base/util/isEmptyObject"],(e,t,a,r,n,s,i,o,u,m,l)=>{"use strict";const d=new a;const g=t.getWritableInstance();const p={};let c;let y;const f={"":{pattern:null},1:{pattern:"dd.MM.yyyy"},2:{pattern:"MM/dd/yyyy"},3:{pattern:"MM-dd-yyyy"},4:{pattern:"yyyy.MM.dd"},5:{pattern:"yyyy/MM/dd"},6:{pattern:"yyyy-MM-dd"},7:{pattern:"Gyy.MM.dd"},8:{pattern:"Gyy/MM/dd"},9:{pattern:"Gyy-MM-dd"},A:{pattern:"yyyy/MM/dd"},B:{pattern:"yyyy/MM/dd"},C:{pattern:"yyyy/MM/dd"}};const b={"":{short:null,medium:null,dayPeriods:null},0:{short:"HH:mm",medium:"HH:mm:ss",dayPeriods:null},1:{short:"hh:mm a",medium:"hh:mm:ss a",dayPeriods:["AM","PM"]},2:{short:"hh:mm a",medium:"hh:mm:ss a",dayPeriods:["am","pm"]},3:{short:"KK:mm a",medium:"KK:mm:ss a",dayPeriods:["AM","PM"]},4:{short:"KK:mm a",medium:"KK:mm:ss a",dayPeriods:["am","pm"]}};const C={"":{groupingSeparator:null,decimalSeparator:null}," ":{groupingSeparator:".",decimalSeparator:","},X:{groupingSeparator:",",decimalSeparator:"."},Y:{groupingSeparator:" ",decimalSeparator:","}};function A(e,t){if(!e){throw new TypeError(t)}}function P(e,a){t._.invalidate();const r=p[e];if(a!=null){p[e]=a}else{delete p[e]}if((r!=null||a!=null)&&!u(r,a)){const t=!c;c??={};c[e]=a;if(t){S()}}}function h(e){let t;if(e&&typeof e==="string"){try{t=new s(e)}catch(e){}}else if(e instanceof s){t=e}return t}const T={attachChange(e){d.attachEvent("change",e)},detachChange(e){d.detachEvent("change",e)},getLanguageTag(){function e(){let e=new s(n.getLanguage());if(!l(p)||T.getCalendarWeekNumbering()!==o.Default){let t=e.toString();if(t.indexOf("-x-")<0){t+="-x-sapufmt"}else if(t.indexOf("-sapufmt")<=t.indexOf("-x-")){t+="-sapufmt"}e=new s(t)}return e}return g.get({name:"sapUiFormatLocale",type:function(e){return new s(e)},defaultValue:e,external:true})},setLanguageTag(e){const t=h(e);A(e==null||t,"vLanguageTag must be a BCP47 language tag or Java Locale id or null");const a=T.getLanguageTag();g.set("sapUiFormatLocale",t?.toString());const r=T.getLanguageTag();if(a.toString()!==r.toString()){const e=!c;c??={};c.languageTag=r.toString();if(e){S()}}},_set:P,getCustomUnits(){return p["units"]?.["short"]},setCustomUnits(e){let t=null;if(e){t={short:e}}P("units",t)},addCustomUnits(e){const t=T.getCustomUnits();if(t){e=m({},t,e)}T.setCustomUnits(e)},setUnitMappings(e){P("unitMappings",e)},addUnitMappings(e){const t=T.getUnitMappings();if(t){e=m({},t,e)}T.setUnitMappings(e)},getUnitMappings(){return p["unitMappings"]},getDatePattern(t){e(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full");return p["dateFormats-"+t]},setDatePattern(e,t){A(e=="short"||e=="medium"||e=="long"||e=="full","sStyle must be short, medium, long or full");P("dateFormats-"+e,t)},getTimePattern(t){e(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full");return p["timeFormats-"+t]},setTimePattern(e,t){A(e=="short"||e=="medium"||e=="long"||e=="full","sStyle must be short, medium, long or full");P("timeFormats-"+e,t)},getNumberSymbol(t){e(["group","decimal","plusSign","minusSign"].includes(t),"sType must be decimal, group, plusSign or minusSign");return p["symbols-latn-"+t]},setNumberSymbol(e,t){A(["group","decimal","plusSign","minusSign"].includes(e),"sType must be decimal, group, plusSign or minusSign");P("symbols-latn-"+e,t)},getCustomCurrencies(){return p["currency"]},setCustomCurrencies(e){A(typeof e==="object"||e==null,"mCurrencyDigits must be an object");Object.keys(e||{}).forEach(function(t){A(typeof t==="string");A(typeof e[t]==="object")});P("currency",e)},addCustomCurrencies(e){const t=T.getCustomCurrencies();if(t){e=m({},t,e)}T.setCustomCurrencies(e)},_setDayPeriods(t,a){e(t=="narrow"||t=="abbreviated"||t=="wide","sWidth must be narrow, abbreviated or wide");P("dayPeriods-format-"+t,a)},getABAPDateFormat(){const e=g.get({name:"sapUiABAPDateFormat",type:t.Type.String,defaultValue:g.get({name:"sapUiLegacyDateFormat",type:t.Type.String,external:true}),external:true});return e?e.toUpperCase():undefined},setABAPDateFormat(e){e=e?String(e).toUpperCase():"";A(f.hasOwnProperty(e),"sFormatId must be one of ['1','2','3','4','5','6','7','8','9','A','B','C'] or empty");const t=!c;const a=T.getABAPDateFormat();if(a!==e){c??={};g.set("sapUiABAPDateFormat",e);c.ABAPDateFormat=e;T.setDatePattern("short",f[e].pattern);T.setDatePattern("medium",f[e].pattern);if(t){S()}}},getABAPTimeFormat(){const e=g.get({name:"sapUiABAPTimeFormat",type:t.Type.String,defaultValue:g.get({name:"sapUiLegacyTimeFormat",type:t.Type.String,external:true}),external:true});return e?e.toUpperCase():undefined},setABAPTimeFormat(e){e=e||"";A(b.hasOwnProperty(e),"sFormatId must be one of ['0','1','2','3','4'] or empty");const t=!c;const a=T.getABAPTimeFormat();if(a!==e){c??={};g.set("sapUiABAPTimeFormat",e);c.ABAPTimeFormat=e;T.setTimePattern("short",b[e]["short"]);T.setTimePattern("medium",b[e]["medium"]);T._setDayPeriods("abbreviated",b[e].dayPeriods);if(t){S()}}},getABAPNumberFormat(){const e=g.get({name:"sapUiABAPNumberFormat",type:t.Type.String,defaultValue:g.get({name:"sapUiLegacyNumberFormat",type:t.Type.String,external:true}),external:true});return e?e.toUpperCase():undefined},setABAPNumberFormat(e){e=e?e.toUpperCase():"";A(C.hasOwnProperty(e),"sFormatId must be one of [' ','X','Y'] or empty");const t=!c;const a=T.getABAPNumberFormat();if(a!==e){c??={};g.set("sapUiABAPNumberFormat",e);c.ABAPNumberFormat=e;T.setNumberSymbol("group",C[e].groupingSeparator);T.setNumberSymbol("decimal",C[e].decimalSeparator);if(t){S()}}},setLegacyDateCalendarCustomizing(e){A(Array.isArray(e),"aMappings must be an Array");const t=!c;c??={};y=c.legacyDateCalendarCustomizing=e.slice();if(t){S()}},getLegacyDateCalendarCustomizing(){return y?.slice()??undefined},setTrailingCurrencyCode(e){A(typeof e==="boolean","bTrailingCurrencyCode must be a boolean");g.set("sapUiTrailingCurrencyCode",e)},getTrailingCurrencyCode(){return g.get({name:"sapUiTrailingCurrencyCode",type:t.Type.Boolean,defaultValue:true,external:true})},getCustomLocaleData(){return p},getCalendarWeekNumbering(){let e=o.Default;try{e=g.get({name:"sapUiCalendarWeekNumbering",type:o,defaultValue:o.Default,external:true})}catch(e){}return e},setCalendarWeekNumbering(e){t._.checkEnum(o,e,"calendarWeekNumbering");const a=g.get({name:"sapUiCalendarWeekNumbering",type:o,defaultValue:o.Default,external:true});if(a!==e){const t=!c;c??={};g.set("sapUiCalendarWeekNumbering",e);c.calendarWeekNumbering=e;if(t){S()}}},getCalendarType(){let e,a=g.get({name:"sapUiCalendarType",type:t.Type.String,external:true});a??=null;if(a){for(e in i){if(e.toLowerCase()===a.toLowerCase()){return e}}r.warning("Parameter 'calendarType' is set to "+a+" which isn't a valid value and therefore ignored. The calendar type is determined from format setting and current locale")}const s=T.getABAPDateFormat();switch(s){case"1":case"2":case"3":case"4":case"5":case"6":return i.Gregorian;case"7":case"8":case"9":return i.Japanese;case"A":case"B":return i.Islamic;case"C":return i.Persian;default:return n.getPreferredCalendarType()}},setCalendarType(e){const t=T.getCalendarType();g.set("sapUiCalendarType",e);const a=T.getCalendarType();if(t!==a){const e=!c;c??={};c.calendarType=a;if(e){S()}}}};function S(){d.fireEvent("change",c);c=undefined}function F(){const e=T.getABAPDateFormat();if(e!==undefined){T.setABAPDateFormat(e)}const t=T.getABAPNumberFormat();if(t!==undefined){T.setABAPNumberFormat(t)}const a=T.getABAPTimeFormat();if(a!==undefined){T.setABAPTimeFormat(a)}}F();return T});
//# sourceMappingURL=Formatting.js.map