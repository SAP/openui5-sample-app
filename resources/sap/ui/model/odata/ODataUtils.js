/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","sap/base/Log","sap/base/security/encodeURL","sap/base/util/each","sap/ui/core/CalendarType","sap/ui/core/format/DateFormat","sap/ui/model/_Helper","sap/ui/model/FilterProcessor","sap/ui/model/Sorter"],function(e,t,r,n,i,a,s,o,u){"use strict";let f,l,c,d,m;const g="sap.ui.model.odata.ODataUtils";const p=/^([-+]?)0*(\d+)(\.\d+|)$/;const y=/\/(Annotations|ServiceNames|ServiceCollection)(\(|%28)/;const h=/\.$/;const v=/'$/;const b=/0+$/;function S(){if(!f){f=a.getDateInstance({pattern:"'datetime'''yyyy-MM-dd'T'HH:mm:ss''",calendarType:i.Gregorian});l=a.getDateInstance({pattern:"'datetime'''yyyy-MM-dd'T'HH:mm:ss.SSS''",calendarType:i.Gregorian});c=a.getDateInstance({pattern:"'datetimeoffset'''yyyy-MM-dd'T'HH:mm:ss'Z'''",calendarType:i.Gregorian});d=a.getDateInstance({pattern:"'datetimeoffset'''yyyy-MM-dd'T'HH:mm:ss.SSS'Z'''",calendarType:i.Gregorian});m=a.getTimeInstance({pattern:"'time''PT'HH'H'mm'M'ss'S'''",calendarType:i.Gregorian})}}var _=function(){};_.createSortParams=function(e){var r;if(!e||e.length==0){return undefined}r="$orderby=";for(var n=0;n<e.length;n++){var i=e[n];if(i instanceof u){r+=i.sPath;r+=i.bDescending?"%20desc":"%20asc";r+=","}else{t.error("Trying to use "+i+" as a Sorter, but it is a "+typeof i)}}r=r.slice(0,-1);return r};function E(e){if(e&&typeof e.convert==="function"){e=e.convert()}return e}_.createFilterParams=function(e,t,r){var n;if(Array.isArray(e)){e=e.map(E);n=o.groupFilters(e)}else{n=E(e)}if(!n){return undefined}return"$filter="+this._createFilterParams(n,t,r)};_._createFilterParams=function(e,t,r){const n=Array.isArray(e)?o.groupFilters(e):e;if(!n){return undefined}return _._processSingleFilter(n,t,r,true)};_._processSingleFilter=function(e,t,r,n){e=E(e);if(e.aFilters){return _._processMultiFilter(e,t,r,n)}return _._createFilterSegment(e,t,r)};_._processMultiFilter=function(e,t,r,n){const i=e.aFilters;const a=!!e.bAnd;if(i.length===0){return a?"true":"false"}if(i.length===1){if(i[0]._bMultiFilter){return _._processSingleFilter(i[0],t,r)}return _._processSingleFilter(i[0],t,r,true)}return(!n?"(":"")+i.map(e=>_._processSingleFilter(e,t,r)).join(a?"%20and%20":"%20or%20")+(!n?")":"")};_._createUrlParamsArray=function(e){var t,r=typeof e,n;if(Array.isArray(e)){return e}t=[];if(r==="string"||e instanceof String){if(e){t.push(e)}}else if(r==="object"){n=this._encodeURLParameters(e);if(n){t.push(n)}}return t};_._encodeURLParameters=function(e){if(!e){return""}var t=[];n(e,function(e,r){if(typeof r==="string"||r instanceof String){r=encodeURIComponent(r)}e=e.startsWith("$")?e:encodeURIComponent(e);t.push(e+"="+r)});return t.join("&")};_.setOrigin=function(e,r){var n,i,a;if(!e||!r||e.indexOf(";mo")>0){return e}if(typeof r=="string"){n=r}else{n=r.alias;if(!n){i=r.system;a=r.client;if(!i||!a){t.warning("ODataUtils.setOrigin: No Client or System ID given for Origin");return e}n="sid("+i+"."+a+")"}}var s=e.split("?");var o=s[0];var u=s[1]?"?"+s[1]:"";var f="";if(o[o.length-1]==="/"){o=o.substring(0,o.length-1);f="/"}var l=/(\/[^\/]+)$/g;var c=/(;o=[^\/;]+)/g;var d=o.match(l)[0];var m=d.match(c);var g=m?m[0]:null;if(g){if(r.force){var p=d.replace(g,";o="+n);o=o.replace(d,p);return o+f+u}return e}o=o+";o="+n+f;return o+u};_.setAnnotationOrigin=function(e,r){var n;var i=e.search(y);var a=r&&r.preOriginBaseUri?r.preOriginBaseUri.indexOf(".xsodata"):-1;if(i>=0){if(e.indexOf("/$value",i)===-1){t.warning("ODataUtils.setAnnotationOrigin: Annotation url is missing $value segment.");n=e}else{var s=e.substring(0,i);var o=e.substring(i,e.length);var u=_.setOrigin(s,r);n=u+o}}else if(a>=0){n=_.setOrigin(e,r)}else{n=e.replace(r.preOriginBaseUri,r.postOriginBaseUri)}return n};_._resolveMultiFilter=function(e,t,r){const n=e.aFilters;if(n){return"("+n.map(e=>{let n="";if(e._bMultiFilter){n=_._resolveMultiFilter(e,t,r)}else if(e.sPath){n=_._createFilterSegment(e,t,r)}return n}).join(e.bAnd?"%20and%20":"%20or%20")+")"}return""};_._createFilterSegment=function(e,r,n){let{sPath:i,oValue1:a,oValue2:o}=e;const{sOperator:u,bCaseSensitive:f=true,sFractionalSeconds1:l,sFractionalSeconds2:c}=e;let d;if(n){const e=r._getPropertyMetadata(n,i);if(e){d=e.type;if(d){a=_._formatValue(a,d,f,l);o=o===null||o===undefined?null:_._formatValue(o,d,f,c)}else{t.error("Type for property '"+i+"' of EntityType '"+n.name+"' not found!",undefined,g)}}else{t.error("Property type for property '"+i+"' of EntityType '"+n.name+"' not found!",undefined,g)}}if(a){a=s.encodeURL(String(a))}if(o){o=s.encodeURL(String(o))}if(!f&&d==="Edm.String"){i="toupper("+i+")"}switch(u){case"EQ":case"NE":case"GT":case"GE":case"LT":case"LE":return i+"%20"+u.toLowerCase()+"%20"+a;case"BT":return"("+i+"%20ge%20"+a+"%20and%20"+i+"%20le%20"+o+")";case"NB":return"not%20("+i+"%20ge%20"+a+"%20and%20"+i+"%20le%20"+o+")";case"Contains":return"substringof("+a+","+i+")";case"NotContains":return"not%20substringof("+a+","+i+")";case"StartsWith":return"startswith("+i+","+a+")";case"NotStartsWith":return"not%20startswith("+i+","+a+")";case"EndsWith":return"endswith("+i+","+a+")";case"NotEndsWith":return"not%20endswith("+i+","+a+")";default:t.error("Unknown filter operator '"+u+"'",undefined,g);return"true"}};_.formatValue=function(e,t,r){return _._formatValue(e,t,r)};_._formatValue=function(e,t,r,n){var i,a;if(r===undefined){r=true}if(e===null||e===undefined){return"null"}S();switch(t){case"Edm.String":e=r?e:e.toUpperCase();a="'"+String(e).replace(/'/g,"''")+"'";break;case"Edm.Time":if(typeof e==="object"){a=m.format(new Date(e.ms),true)}else{a="time'"+e+"'"}break;case"Edm.DateTime":i=e instanceof Date?e:new Date(e);if(i.getMilliseconds()>0){a=l.format(i,true);if(n){a=a.replace(v,n+"'")}}else{a=f.format(i,true);if(n){a=a.replace(v,".000"+n+"'")}}break;case"Edm.DateTimeOffset":i=e instanceof Date?e:new Date(e);if(i.getMilliseconds()>0){a=d.format(i,true);if(n){a=a.replace("Z'",n+"Z'")}}else{a=c.format(i,true);if(n){a=a.replace("Z'",".000"+n+"Z'")}}break;case"Edm.Guid":a="guid'"+e+"'";break;case"Edm.Decimal":a=e+"m";break;case"Edm.Int64":a=e+"l";break;case"Edm.Double":a=e+"d";break;case"Edm.Float":case"Edm.Single":a=e+"f";break;case"Edm.Binary":a="binary'"+e+"'";break;default:a=String(e);break}return a};_.parseValue=function(e){var t=e[0],r=e[e.length-1];S();if(t==="'"){return e.slice(1,-1).replace(/''/g,"'")}else if(e.startsWith("time'")){return{__edmType:"Edm.Time",ms:m.parse(e,true).getTime()}}else if(e.startsWith("datetime'")){return e.includes(".")?l.parse(e,true):f.parse(e,true)}else if(e.startsWith("datetimeoffset'")){return e.includes(".")?d.parse(e,true):c.parse(e,true)}else if(e.startsWith("guid'")){return e.slice(5,-1)}else if(e==="null"){return null}else if(r==="m"||r==="l"||r==="d"||r==="f"){return e.slice(0,-1)}else if(!isNaN(t)||t==="-"){return parseInt(e)}else if(e==="true"||e==="false"){return e==="true"}else if(e.startsWith("binary'")){return e.slice(7,-1)}throw new Error("Cannot parse value '"+e+"', no Edm type found")};function T(e,t){if(e===t){return 0}if(e===null||t===null||e===undefined||t===undefined){return NaN}return e>t?1:-1}function F(e){var t;if(typeof e!=="string"){return undefined}t=p.exec(e);if(!t){return undefined}return{sign:t[1]==="-"?-1:1,integerLength:t[2].length,abs:t[2]+t[3].replace(b,"").replace(h,"")}}function D(e,t){var r,n,i;if(e===t){return 0}r=F(e);n=F(t);if(!r||!n){return NaN}if(r.sign!==n.sign){return r.sign>n.sign?1:-1}i=T(r.integerLength,n.integerLength)||T(r.abs,n.abs);return r.sign*i}var M=/^PT(\d\d)H(\d\d)M(\d\d)S$/;function I(e){if(typeof e==="string"&&M.test(e)){e=parseInt(RegExp.$1)*36e5+parseInt(RegExp.$2)*6e4+parseInt(RegExp.$3)*1e3}if(e instanceof Date){return e.getTime()}if(e&&e.__edmType==="Edm.Time"){return e.ms}return e}_.compare=function(e,t,r){return r?D(e,t):T(I(e),I(t))};_.getComparator=function(e){switch(e){case"Edm.Date":case"Edm.DateTime":case"Edm.DateTimeOffset":case"Edm.Time":return _.compare;case"Edm.Decimal":case"Edm.Int64":return D;default:return T}};var O=/([(=,])('.*?')([,)])/g,U=/[MLDF](?=[,)](?:[^']*'[^']*')*[^']*$)/g,w=/([(=,])(X')/g,R=function(e,t,r,n){return t+encodeURIComponent(decodeURIComponent(r))+n},C=function(e){return e.toLowerCase()},N=function(e,t){return t+"binary'"};_._normalizeKey=function(e){return e.replace(O,R).replace(U,C).replace(w,N)};_._mergeIntervals=function(e){if(e.length){return{start:e[0].start,end:e[e.length-1].end}}return undefined};_._getReadIntervals=function(e,t,r,n,i){var a,s,o,u=-1,f=[],l=_._getReadRange(e,t,r,n);if(i===undefined){i=Infinity}s=Math.min(l.start+l.length,i);o=Math.min(s,Math.max(l.start,e.length)+1);for(a=l.start;a<o;a+=1){if(e[a]!==undefined){if(u>=0){f.push({start:u,end:a});u=-1}}else if(u<0){u=a}}if(u>=0){f.push({start:u,end:s})}return f};_._getReadRange=function(e,t,r,n,i){function a(t,r){var n;for(n=t;n<r;n+=1){if(e[n]===undefined||i?.(e[n])){return true}}return false}const s=Math.ceil(n/2);if(a(t+r,t+r+s)){r+=n}if(a(Math.max(t-s,0),t)){r+=n;t-=n;if(t<0){r+=t;if(isNaN(r)){r=Infinity}t=0}}return{length:r,start:t}};return _},true);
//# sourceMappingURL=ODataUtils.js.map