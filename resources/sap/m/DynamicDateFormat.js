/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Formatting","sap/ui/core/Lib","sap/ui/core/date/UI5Date","sap/ui/core/format/DateFormat","sap/ui/core/format/NumberFormat","sap/ui/core/Locale","sap/ui/core/LocaleData","sap/base/util/deepExtend","sap/ui/unified/calendar/CalendarUtils","./library"],function(t,e,a,r,n,i,o,s,T,m){"use strict";var E=function(){throw new Error};var u=e.getResourceBundleFor("sap.m");var c={};var l={};var D={DATE:["date"],DATETIME:["datetime"],DATERANGE:["date","date"],DATETIMERANGE:["datetime","datetime"],LASTMINUTES:["int"],LASTHOURS:["int"],LASTDAYS:["int"],LASTWEEKS:["int"],LASTMONTHS:["int"],LASTQUARTERS:["int"],LASTYEARS:["int"],LASTMINUTESINCLUDED:["int"],LASTHOURSINCLUDED:["int"],LASTDAYSINCLUDED:["int"],LASTWEEKSINCLUDED:["int"],LASTMONTHSINCLUDED:["int"],LASTQUARTERSINCLUDED:["int"],LASTYEARSINCLUDED:["int"],NEXTMINUTES:["int"],NEXTHOURS:["int"],NEXTDAYS:["int"],NEXTWEEKS:["int"],NEXTMONTHS:["int"],NEXTQUARTERS:["int"],NEXTYEARS:["int"],NEXTMINUTESINCLUDED:["int"],NEXTHOURSINCLUDED:["int"],NEXTDAYSINCLUDED:["int"],NEXTWEEKSINCLUDED:["int"],NEXTMONTHSINCLUDED:["int"],NEXTQUARTERSINCLUDED:["int"],NEXTYEARSINCLUDED:["int"],FROM:["date"],TO:["date"],FROMDATETIME:["datetime"],TODATETIME:["datetime"],SPECIFICMONTH:["month"],SPECIFICMONTHINYEAR:["month","int"],TODAYFROMTO:["int","int"]};var f=Object.keys(m.StandardDynamicDateRangeKeys);for(var S=0;S<f.length;S++){var A=f[S];var O=u.getText("DYNAMIC_DATE_"+A.toUpperCase()+"_FORMAT");var I=O.split("{").map(function(t){var e=t.indexOf("}");if(e!==-1){return t.slice(e+1)}return t});c[A]=I;var d=[];var N=O.indexOf("{");var F=-1;var p=-1;while(N!==-1){F=O.indexOf("}");p=parseInt(O.slice(N+1,F-F-1));d.push(p);O=O.slice(F+1);N=O.indexOf("{")}l[A]=d}E.getInstance=function(t,e){return this.createInstance(t,e)};E.oDefaultDynamicDateFormat={date:{},datetime:{},month:{pattern:"MMMM"},year:{pattern:"yyyy"},int:{}};E.createInstance=function(a,T){var m=Object.create(this.prototype);if(a instanceof i){T=a;a=undefined}if(!T){T=new i(t.getLanguageTag())}m.oLocale=T;m.oLocaleData=o.getInstance(T);m.oOriginalFormatOptions=s({},E.oDefaultDynamicDateFormat,a);m._dateFormatter=r.getInstance(m.oOriginalFormatOptions["date"]);m._dateTimeFormatter=r.getDateTimeInstance(m.oOriginalFormatOptions["datetime"]);[m._dateFormatter].concat(m._dateFormatter.aFallbackFormats).forEach(function(t){t.parseRelative=function(){return null}});[m._dateTimeFormatter].concat(m._dateTimeFormatter.aFallbackFormats).forEach(function(t){t.parseRelative=function(){return null}});m._monthFormatter=r.getInstance(m.oOriginalFormatOptions["month"]);m._yearFormatter=r.getInstance(m.oOriginalFormatOptions["year"]);m._numberFormatter=n.getInstance(m.oOriginalFormatOptions["int"]);m._resourceBundle=e.getResourceBundleFor("sap.m");return m};E.prototype.format=function(t,e){var r=t.operator,n=t.values.slice(0);if(r==="SPECIFICMONTH"){var i=a.getInstance();i.setMonth(n[0]);n[0]=this._monthFormatter.format(i)}else if(r==="SPECIFICMONTHINYEAR"){var i=a.getInstance();i.setMonth(n[0]);i.setYear(n[1]);n[0]=this._monthFormatter.format(i);n[1]=this._yearFormatter.format(i)}else if(r==="LASTDAYS"&&n[0]===1&&!e){r="YESTERDAY";n=[]}else if(r==="NEXTDAYS"&&n[0]===1&&!e){r="TOMORROW";n=[]}else if((r==="LASTDAYS"||r==="NEXTDAYS")&&n[0]===0){r="TODAY";n=[]}else if(r==="DATETIME"){n[0]=this._dateTimeFormatter.format(t.values[0])}else if(r==="TODAYFROMTO"){n[0]=-n[0];if(n[0]>n[1]){n=[n[1],n[0]]}}var o=n.map(function(t){var e=t;if(t.getJSDate){e=t.getJSDate()}if(e instanceof Date){if(r==="DATETIMERANGE"||r==="FROMDATETIME"||r==="TODATETIME"||r==="DATETIME"){return this._dateTimeFormatter.format(e)}return this._dateFormatter.format(e)}if(typeof e==="number"){return this._numberFormatter.format(e)}else{return e.toString()}},this);if(r==="TODAYFROMTO"){o.forEach(function(t,e,a){if(t==="0"){a[e]=(e===0?this.oLocaleData.getNumberSymbol("minusSign"):this.oLocaleData.getNumberSymbol("plusSign"))+t}else{a[e]=n[e]<0?t.toString():this.oLocaleData.getNumberSymbol("plusSign")+t}},this)}if(o.length===0){o=undefined}return this._resourceBundle.getText("DYNAMIC_DATE_"+r.toUpperCase()+"_FORMAT",o)};E.prototype.parse=function(t,e){var r,n=c[e],i="^"+n.join("(.*)")+"$",o=new RegExp(i,"i"),s=t.match(o);if(s){r={};r.values=[];for(var m=0;m<l[e].length;m++){var E=l[e][m];var u=D[e][E];var f;var S=s[m+1];switch(u){case"date":f=this._dateFormatter.parse(S);break;case"datetime":f=this._dateTimeFormatter.parse(S);break;case"month":var A=[0,1,2,3,4,5,6,7,8,9,10,11].map(function(t){var e=a.getInstance();e.setMonth(t);return this._monthFormatter.format(e)},this);var O=A.indexOf(S);f=O!==-1?O:null;break;case"int":f=this._numberFormatter.parse(S);break;case"string":f=S;break;default:break}if(f&&(u==="date"||u==="datetime")){try{T._checkYearInValidRange(f.getFullYear())}catch(t){f=null}}if(!f&&f!==0){r=null;break}r.values[E]=f}if(e==="TODAYFROMTO"&&r){if(r.values[0]>r.values[1]){r.values=[r.values[1],r.values[0]]}r.values[0]=-r.values[0]}if(r){r.operator=e;return r}}};return E});
//# sourceMappingURL=DynamicDateFormat.js.map