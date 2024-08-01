/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/URI","sap/ui/Device","sap/ui/performance/trace/Passport","sap/ui/performance/trace/Interaction","sap/ui/performance/XHRInterceptor","sap/ui/performance/BeaconRequest","sap/base/util/Version"],function(e,t,n,r,i,o,a){"use strict";var s=false,u,p,c,f=n.getRootId(),d=window.location.host,m=t.os.name+"_"+t.os.version,l=t.browser.reportingName+"_"+t.browser.version,S=y(),g="",v="",R,h=0,P="undetermined",T="undetermined_startup_0",A,I,N=new WeakMap;function y(){var e=0;if(t.system.combi){e=1}else if(t.system.desktop){e=2}else if(t.system.tablet){e=4}else if(t.system.phone){e=3}return e}function b(e){var t=new Date(e);return t.toISOString().replace(/[^\d]/g,"")}function E(t){var n=new e(t.toString()).host();return n&&n!==d}function w(){if(!E(arguments[1])){if(!R){R=n.getTransactionId()}var e=n.header(n.traceFlags(),f,n.getTransactionId(),P,T);this.setRequestHeader("SAP-PASSPORT",e);N.set(this,e)}}function _(){if(!E(arguments[1])){if(A&&I){this.setRequestHeader("SAP-Perf-FESRec",A);this.setRequestHeader("SAP-Perf-FESRec-opt",I);A=null;I=null;R=n.getTransactionId()}}}function F(e,t){return[q(f,32),q(R,32),O(e.navigation,4),O(e.roundtrip,4),O(t.timeToInteractive,4),O(e.completeRoundtrips,2),q(T,40,true),O(e.networkTime,4),O(e.requestTime,4),q(m,10),"SAP_UI5"].join(",")}function H(e,t){return[q(t.appNameShort,20,true),q(t.stepName,20,true),"",q(l,20),O(e.bytesSent,4),O(e.bytesReceived,4),"","",O(e.processing,4),e.requestCompression?"X":"","","","","",O(e.busyDuration,4),O(t.interactionType||0,4),q(S,1),"",q(b(e.start),20),q(t.appNameLong,70,true)].join(",")}function q(e,t,n){if(!e){e=e===0?"0":""}else if(typeof e==="number"){var r=e;e=Math.round(e).toString();if(e.length>t||r<0){e="-1"}}else{e=n?e.substr(-t,t):e.substr(0,t)}return e}function O(e,t){if(typeof e!=="number"){e=""}else{var n=Math.pow(256,t)/2-1;e=Math.round(e);e=e>=0&&e<=n?e.toString():"-1"}return e}function D(e){var t=new a(e);return"@"+t.getMajor()+"."+t.getMinor()+"."+t.getPatch()}function M(e,t){A=F(e,t);I=H(e,t)}function C(e){h++;P=e?e.component+g:undefined;T=e?e.trigger+"_"+e.event+"_"+h:undefined;return T}function L(e){if(e){var t=e.semanticStepName?e.semanticStepName:e.trigger+"_"+e.event;var n=k.onBeforeCreated({stepName:t,appNameLong:e.stepComponent||e.component,appNameShort:e.stepComponent||e.component,timeToInteractive:e.duration,interactionType:j(t)},e);if(p||e.requests.length>0){M(e,n);if(p){R=null}}if(p&&A&&I){p.append("SAP-Perf-FESRec",A+"SAP-Perf-FESRec-opt"+I);B()}if(v!=e.appVersion){v=e.appVersion;g=v?D(v):""}}P="undefined";T="undefined"}function B(){if(!c){c=setTimeout(function(){p.send();clearTimeout(c);c=undefined},6e4)}}function j(e){var t=2;if(e.indexOf("startup")!==-1){t=1}return t}var k={};k.getBeaconURL=function(){return u};k.setActive=function(e,t){if(e&&!s){p=t?o.isSupported()&&new o({url:t}):null;u=t;s=true;n.setActive(true);r.setActive(true);i.register("PASSPORT_HEADER","open",w);if(!p){i.register("FESR","open",_)}r.onInteractionStarted=C;r.onInteractionFinished=L;r.passportHeader=N}else if(!e&&s){s=false;r.setActive(false);i.unregister("FESR","open");if(i.isRegistered("PASSPORT_HEADER","open")){i.register("PASSPORT_HEADER","open",function(){this.setRequestHeader("SAP-PASSPORT",n.header(n.traceFlags(),f,n.getTransactionId()))})}if(p){p.send();clearTimeout(c);c=null;p=null;u=null}r.onInteractionFinished=null;r.onInteractionStarted=null}};k.getActive=function(){return s};k.onBeforeCreated=function(e,t){return{stepName:e.stepName,appNameLong:e.appNameLong,appNameShort:e.appNameShort,timeToInteractive:e.timeToInteractive,interactionType:e.interactionType}};return k});
//# sourceMappingURL=FESR.js.map