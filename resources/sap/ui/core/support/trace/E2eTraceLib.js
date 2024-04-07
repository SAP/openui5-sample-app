/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/performance/trace/Passport","sap/base/Log","sap/ui/thirdparty/URI"],function(e,t,s,i){"use strict";var r=function(){var r=/sap-ui-xx-e2e-trace-level=(low|medium|high)/.exec(location.search);var n;if(r&&r.length>=2){n=r[1]}else{n="medium"}var a="/sap/bc/sdf/E2E_Trace_upl";var o;var d=false;var u=function(e){this.idx=e.xidx;this.dsrGuid=e.xDsrGuid;this.method=e.xmethod;this.url=e.xurl;this.reqHeader=e.xRequestHeaders;this.respHeader=e.getAllResponseHeaders();this.statusCode=e.status;this.status=e.statusText;this.startTimestamp=e.xstartTimestamp;this.firstByteSent=e.xfirstByteSent;this.lastByteSent=this.firstByteSent;this.firstByteReceived=e.xfirstByteReceived?e.xfirstByteReceived:e.xlastByteReceived;this.lastByteReceived=e.xlastByteReceived;this.sentBytes=0;this.receivedBytes=e.responseType=="text"||e.responseType==""?e.responseText.length:0;if(s.isLoggable()){s.debug('E2eTraceLib.Message: Response Type is "'+e.responseType+'"')}this.getDuration=function(){return this.lastByteReceived-this.startTimestamp};this.getRequestLine=function(){return this.method+" "+this.url+" HTTP/?.?"};this.getRequestHeader=function(){var e=this.getRequestLine()+"\r\n";for(var t=0,s=this.reqHeader?this.reqHeader.length:0;t<s;t+=1){e+=this.reqHeader[t][0]+": "+this.reqHeader[t][1]+"\r\n"}e+="\r\n";return e};this.getResponseHeader=function(){var e="HTTP?/? "+this.statusCode+" "+this.status+"\r\n";e+=this.respHeader;e+="\r\n";return e}};var c=function(e,t,i,r){this.busTrx=e;this.trxStepIdx=t;this.name="Step-"+(t+1);this.date=i;this.trcLvl=r;this.messages=[];this.msgIdx=-1;this.pendingMessages=0;this.transactionStepTimeoutId=null;this.messageStarted=function(){this.msgIdx+=1;this.pendingMessages+=1;return this.msgIdx};this.onMessageFinished=function(e,t){if(e.xurl===a){return}s.info(t+", "+this.xidx+": MessageFinished");e.xlastByteReceived=t;this.messages.push(new u(e));this.pendingMessages-=1;if(this.pendingMessages===0){if(this.transactionStepTimeoutId){clearTimeout(this.transactionStepTimeoutId)}this.transactionStepTimeoutId=setTimeout(p,3e3)}};this.getId=function(){return this.busTrx.id+"-"+this.trxStepIdx};this.getTraceFlagsAsString=function(){return this.trcLvl[1].toString(16)+this.trcLvl[0].toString(16)}};var h=function(e,t,s,i){this.id=e;this.date=t;this.trcLvl=s;this.trxSteps=[];this.fnCallback=i;this.createTransactionStep=function(){var e=new c(this,this.trxSteps.length,new Date,this.trcLvl);this.trxSteps.push(e)};this.getCurrentTransactionStep=function(){return this.trxSteps[this.trxSteps.length-1]};this.getBusinessTransactionXml=function(){var e='<?xml version="1.0" encoding="UTF-8"?><BusinessTransaction id="'+this.id+'" time="'+f(this.date)+'" name="'+(window.document.title||"SAPUI5 Business Transaction")+'">';for(var t=0,s=this.trxSteps.length;t<s;t+=1){var i=this.trxSteps[t];e+='<TransactionStep id="'+i.getId()+'" time="'+f(i.date)+'" name="'+i.name+'" traceflags="'+i.getTraceFlagsAsString()+'">';var r=i.messages;for(var n=0,a=r.length;n<a;n+=1){var o=r[n];e+='<Message id="'+o.idx+'" dsrGuid="'+o.dsrGuid+'">';e+="<x-timestamp>"+f(new Date(o.startTimestamp))+"</x-timestamp>";e+="<duration>"+Math.ceil(o.getDuration())+"</duration>";e+="<returnCode>"+o.statusCode+"</returnCode>";e+="<sent>"+o.sentBytes+"</sent>";e+="<rcvd>"+o.receivedBytes+"</rcvd>";if(o.firstByteSent&&o.lastByteReceived){e+="<firstByteSent>"+f(new Date(o.firstByteSent))+"</firstByteSent>";e+="<lastByteSent>"+f(new Date(o.lastByteSent))+"</lastByteSent>";e+="<firstByteReceived>"+f(new Date(o.firstByteReceived))+"</firstByteReceived>";e+="<lastByteReceived>"+f(new Date(o.lastByteReceived))+"</lastByteReceived>"}e+="<requestLine><![CDATA["+o.getRequestLine()+"]]></requestLine>";e+="<requestHeader><![CDATA["+o.getRequestHeader()+"]]></requestHeader>";e+="<responseHeader><![CDATA["+o.getResponseHeader()+"]]></responseHeader>";e+="</Message>"}e+="</TransactionStep>"}e+="</BusinessTransaction>";return e}};var p=function(){if(o.getCurrentTransactionStep().pendingMessages===0&&o.getCurrentTransactionStep().messages.length>0){var e=confirm("End of transaction step detected.\nNumber of new message(s): "+o.getCurrentTransactionStep().messages.length+"\n\nDo you like to record another transaction step?");if(e){o.createTransactionStep()}else{d=false;var t=o.getBusinessTransactionXml();if(o.fnCallback&&typeof o.fnCallback==="function"){o.fnCallback(t)}var i="----------ieoau._._+2_8_GoodLuck8.3-ds0d0J0S0Kl234324jfLdsjfdAuaoei-----";var r=i+"\r\nContent-Disposition: form-data\r\nContent-Type: application/xml\r\n"+t+"\r\n"+i;var n=new window.XMLHttpRequest;n.open("HEAD",a,false);n.send();if(n.status==200){var u=new window.XMLHttpRequest;u.open("POST",a,false);u.setRequestHeader("Content-type",'multipart/form-data; boundary="'+i+'"');u.send(r);alert(u.responseText)}else{try{var c=false;while(!c){var h=window.prompt("Please enter a valid URL for the store server","http://<host>:<port>");if(h===""||h===null){break}var p=new RegExp("(https?://(?:www.|(?!www))[^s.]+.[^s]{2,}|www.[^s]+.[^s]{2,})");var f=p.test(h);if(f){var u=new window.XMLHttpRequest;u.open("POST",h+"/E2EClientTraceUploadW/UploadForm.jsp",false);u.setRequestHeader("Content-type",'multipart/form-data; boundary="'+i+'"');u.send(r);c=true}}}catch(e){s.error(e.name+": "+e.message,"","sap.ui.core.support.trace.E2eTraceLib")}}o=null}}};var f=function(e){var t="";t+=e.getUTCDate()<10?"0"+e.getUTCDate():e.getUTCDate();t+="."+(e.getUTCMonth()<9?"0"+(e.getUTCMonth()+1):e.getUTCMonth()+1);t+="."+e.getUTCFullYear();t+=" "+(e.getUTCHours()<10?"0"+e.getUTCHours():e.getUTCHours());t+=":"+(e.getUTCMinutes()<10?"0"+e.getUTCMinutes():e.getUTCMinutes());t+=":"+(e.getUTCSeconds()<10?"0"+e.getUTCSeconds():e.getUTCSeconds());t+="."+(e.getUTCMilliseconds()<100?e.getUTCMilliseconds()<10?"00"+e.getUTCMilliseconds():"0"+e.getUTCMilliseconds():e.getUTCMilliseconds());t+=" UTC";return t};(function(){var r,n;var a=function(e){s.info(e,"","E2ETraceLibIE");return e};if(performance&&performance.timeOrigin){if(e.browser.chrome&&e.browser.version>=49){a=function(e){s.info(e,"","E2ETraceLibCR");return performance.timeOrigin+e}}else if(e.browser.firefox&&e.browser.version>=48){a=function(e){s.info(e,"","E2ETraceLibFF");return performance.timeOrigin+e}}}function u(e){s.info(a(e.timeStamp)+", "+this.xidx+": loadstart");this.xfirstByteSent=a(e.timeStamp)}function c(e){s.info(a(e.timeStamp)+", "+this.xidx+": progress");if(e.loaded>0){if(!this.xfirstByteReceived){this.xfirstByteReceived=a(e.timeStamp)}this.xlastByteReceived=a(e.timeStamp)}}function h(e){var t=a(e.timeStamp);s.info(t+", "+this.xidx+": error");o.getCurrentTransactionStep().onMessageFinished(this,t)}function p(e){var t=a(e.timeStamp);s.info(t+", "+this.xidx+": abort");o.getCurrentTransactionStep().onMessageFinished(this,t)}function f(e){var t=a(e.timeStamp);s.info(t+", "+this.xidx+": load");o.getCurrentTransactionStep().onMessageFinished(this,t)}t.setActive(true);r=window.XMLHttpRequest.prototype.open;n=window.XMLHttpRequest.prototype.setRequestHeader;window.XMLHttpRequest.prototype.setRequestHeader=function(){n.apply(this,arguments);if(d){if(!this.xRequestHeaders){this.xRequestHeaders=[]}this.xRequestHeaders.push(arguments)}};window.XMLHttpRequest.prototype.open=function(){r.apply(this,arguments);if(d){var e=o.getCurrentTransactionStep().messageStarted();this.xidx=e;if(performance&&performance.timeOrigin&&performance.now!==undefined){this.xstartTimestamp=performance.timeOrigin+performance.now()}else{this.xstartTimestamp=Date.now()}this.xmethod=arguments[0];this.xurl=arguments[1];this.xDsrGuid=t.getTransactionId();var n=new i(this.xurl).host();if(!(n&&n!=window.location.host)){this.setRequestHeader("X-CorrelationID",o.getCurrentTransactionStep().getId()+"-"+e)}else if(s.isLoggable()){s.debug("E2ETraceLib.Message: No SAP Passport - trace header suppressed.")}this.addEventListener("loadstart",u,false);this.addEventListener("progress",c,false);this.addEventListener("error",h,false);this.addEventListener("abort",p,false);this.addEventListener("load",f,false);e+=1}}})();var l={start:function(e,s){if(!d){if(!e){e=n}o=new h(t.getRootId(),new Date,t.traceFlags(e),s);o.createTransactionStep();d=true}},isStarted:function(){return d}};if(/sap-ui-xx-e2e-trace=(true|x|X)/.test(location.search)){l.start()}return l}();return r},true);
//# sourceMappingURL=E2eTraceLib.js.map