/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/merge","sap/ui/base/SyncPromise","sap/ui/core/Lib","sap/ui/core/Rendering","sap/ui/thirdparty/jquery"],function(e,t,r,n,s,jQuery){"use strict";var a=/\/\$batch($|\?)/,i=/(?:^|\r\n)Content-Id\s*:\s*(\S+)/i,o=/^(.*)?:\s*(.*)$/,u="application/json;charset=UTF-8;IEEE754Compatible=true",c={},f="\r\nContent-Type: application/http\r\n"+"Content-Transfer-Encoding: binary\r\n",l=/^Content-Type:\s*multipart\/mixed;\s*boundary=/i,d=new URLSearchParams(window.location.search),p=d.get("autoRespondAfter"),h=d.get("realOData"),y=/^(\S+) (\S+)$/,g=/^(GET|DELETE|MERGE|PATCH|POST) (\S+) HTTP\/1\.1$/,m={},E=/^(OData-Version|DataServiceVersion)$/,x=h==="true"||h==="direct",v=null,T=/[ "[\]{}]/g,b=/%(20|22|5B|5D|7B|7D)/gi,R=/^\w+ /,w;if(x){document.title+=" (real OData)"}function q(e,t,r){var n=QUnit.objectType(e),s=QUnit.objectType(t),a;if(n==="string"&&s==="regexp"){if(!t.test(e)){throw new Error(r+": actual value "+e+" does not match expected regular expression "+t)}return}if(n!==s){throw new Error(r+": actual type "+n+" does not match expected type "+s)}if(n==="array"){if(e.length<t.length){throw new Error(r+": array length: "+e.length+" < "+t.length)}}if(n==="array"||n==="object"){for(a in t){q(e[a],t[a],r==="/"?r+a:r+"/"+a)}}else if(e!==t){throw new Error(r+": actual value "+e+" does not match expected value "+t)}}function O(e,t,r,n){try{q(e,t,"/");QUnit.assert.pushResult({result:n,actual:e,expected:t,message:r})}catch(s){QUnit.assert.pushResult({result:!n,actual:e,expected:t,message:(r||"")+" failed because of "+s.message})}}w={awaitRendering:function(){return new Promise(function(e){function t(){if(s.isPending()){setTimeout(t,1)}else{e()}}t()})},checkGetAndRequest:function(e,t,n,s,a,i){var o,u=s.replace("fetch","get"),c=e.mock(Promise),f=new Error("rejected"),l=Promise.reject(f),d=s.replace("fetch","request"),p={},h=r.resolve(l);o=e.mock(t).expects(s).exactly(4);o=o.withExactArgs.apply(o,a);o.returns(r.resolve(p));n.strictEqual(t[u].apply(t,a),p);o.returns(h);c.expects("resolve").withExactArgs(sinon.match.same(h)).returns(l);n.strictEqual(t[d].apply(t,a),l);c.restore();if(i){n.throws(function(){t[u].apply(t,a)},new Error("Result pending"))}else{n.strictEqual(t[u].apply(t,a),undefined,"pending")}return h.catch(function(){if(i){n.throws(function(){t[u].apply(t,a)},f)}else{n.strictEqual(t[u].apply(t,a),undefined,"rejected")}})},deepContains:function(e,t,r){O(e,t,r,true)},encodeReadableUrl:function(e){return e.replaceAll(T,e=>`%${e.charCodeAt(0).toString(16).padStart(2,"0").toUpperCase()}`)},makeUrlReadable:function(e){return e.replaceAll(b,(e,t)=>String.fromCharCode(Number.parseInt(t,16)))},notDeepContains:function(e,t,r){O(e,t,r,false)},useFakeServer:function(r,n,s,d,h,y){var m,x;function T(e,t){var r=H(e,t.requestBody),n=M(t);if(v){v(t.requestBody,t.method+" "+t.url)}t.respond(200,jQuery.extend({},n,{"Content-Type":"multipart/mixed;boundary="+r.boundary}),D(r,n))}function b(e){var t={buildResponse:e.buildResponse,code:e.code||200,headers:e.headers||{},ifMatch:e.ifMatch};if(e.source){t.message=F(n+e.source);t.headers["Content-Type"]||=O(e.source)}else if(typeof e.message==="object"){t.headers["Content-Type"]=u;t.message=JSON.stringify(e.message)}else{t.message=e.message}return t}function q(){var e,t,r={};for(t in s){e=s[t];let n="GET ";const a=R.exec(t);if(a){n=a[0];t=t.slice(n.length)}t=n+w.encodeReadableUrl(t);if(Array.isArray(e)){r[t]=e.map(b)}else{r[t]=[b(e)]}}return r}function O(e){if(/\.xml$/.test(e)){return"application/xml"}if(/\.json$/.test(e)){return u}return"application/x-octet-stream"}function S(t,r,n){e.error(r.method+" "+w.makeUrlReadable(r.url),n,"sap.ui.test.TestUtils");return{code:t,headers:{"Content-Type":u},message:JSON.stringify({error:{code:"TestUtils",message:n instanceof Error?n.message:n}})}}function C(e){return e.slice(0,e.indexOf("\r\n"))}function D(e,t){var r=[""];e.parts.every(function(e){r.push(e.boundary?"\r\nContent-Type: multipart/mixed;boundary="+e.boundary+"\r\n\r\n"+D(e,t):k(e,t));return!e.code||e.code<400||t.DataServiceVersion==="2.0"});r.push("--\r\n");return r.join("--"+e.boundary)}function k(e,t){var r=jQuery.extend({},t,e.headers);return f+(e.contentId?"Content-ID: "+e.contentId+"\r\n":"")+"\r\nHTTP/1.1 "+e.code+" \r\n"+Object.keys(r).map(function(e){return e+": "+r[e]}).join("\r\n")+"\r\n\r\n"+(e.message||"")+"\r\n"}function A(t,r){var n,s,a=t+" "+r;if(x[a]){return{responses:x[a]}}if(!m){return undefined}n=[];s=m.filter(function(e){var t=a.match(e.regExp);if(t){n.push(t)}return t});if(s.length>1){e.warning("Multiple matches found for "+a,undefined,"sap.ui.test.TestUtils");return undefined}return s.length?{responses:s[0].response,match:n[0]}:undefined}function M(e){var t,r={};for(t in e.requestHeaders){if(E.test(t)){r[t]=e.requestHeaders[t]}}return r}function U(r,n,s){var a,i=A(r.method,r.url),o,c=i&&i.responses;c=(c||[]).filter(function(e){if(typeof e.ifMatch==="function"){return e.ifMatch(r)}return!e.ifMatch||e.ifMatch.test(r.requestBody)});if(c.length){o=c[0];if(typeof o.buildResponse==="function"){o=t({},o);try{o.buildResponse(i.match,o,r)}catch(e){o=S(500,r,e)}}if(i.responses.length>1){a=i.responses.indexOf(o)}}else if(!y&&!s){switch(r.method){case"HEAD":o={code:200};break;case"DELETE":case"MERGE":case"PATCH":o={code:204};break;case"POST":o={code:200,headers:{"Content-Type":u},message:r.requestBody};break}}if(o){e.info(r.method+" "+w.makeUrlReadable(r.url)+(a!==undefined?", alternative (ifMatch) #"+a:""),'{"If-Match":'+JSON.stringify(r.requestHeaders["If-Match"])+"}","sap.ui.test.TestUtils")}else if(s){return undefined}else{o=S(404,r,"No mock data found")}o.headers=jQuery.extend({},M(r),o.headers);if(n&&o.code<300){o.contentId=n}return o}function H(e,t){var r;t=t.replace(/^\s+/,"");r=C(t);return{boundary:C(t).slice(2),parts:t.split(r).slice(1,-1).map(function(t){var r,n,s,a,o,u;t=t.slice(2);n=C(t);if(l.test(n)){a=H(e,t.slice(n.length+4));r=a.parts.filter(function(e){return e.code>=300});return r.length?r[0]:a}u=t.indexOf("\r\n\r\n")+4;o=P(e,t.slice(u));s=i.exec(t.slice(0,u));return U(o,s&&s[1])})}}function P(e,t){var r=t.indexOf("\r\n\r\n"),n,s,a={requestHeaders:{}};a.requestBody=t.slice(r+4,t.length-2);t=t.slice(0,r);n=t.split("\r\n");a.requestLine=n.shift();s=g.exec(a.requestLine);if(s){a.method=s[1];a.url=e+s[2];n.forEach(function(e){const t=o.exec(e);if(t){a.requestHeaders[t[1]]=t[2]}})}return a}function j(e){var t=e.url;if(a.test(t)){if(!L(e,true)){T(t.slice(0,t.indexOf("/$batch")+1),e)}}else{L(e)}}function F(e){var t=c[e];if(!t){jQuery.ajax({async:false,url:e,dataType:"text",success:function(e){t=e}});if(!t){throw new Error(e+": resource not found")}c[e]=t}return t}function L(e,t){var r=U(e,undefined,t);if(!r){return false}if(v){v(e.requestBody,e.method+" "+e.url)}e.respond(r.code,r.headers,r.message);return true}function $(){var e,t;x=q();if(d){m=d.map(function(e){return{regExp:e.regExp,response:Array.isArray(e.response)?e.response.map(b):[b(e.response)]}})}t=sinon.fakeServer.create();if(r.getFakes){r.getFakes().push(t)}else{r.add(t)}t.autoRespond=true;if(p){t.autoRespondAfter=parseInt(p)}t.respondWith("GET",/./,L);t.respondWith("DELETE",/./,L);t.respondWith("HEAD",/./,L);t.respondWith("PATCH",/./,L);t.respondWith("MERGE",/./,L);t.respondWith("POST",/./,j);e=t.restore;t.restore=function(){sinon.FakeXMLHttpRequest.filters=[];e.apply(this,arguments)};sinon.xhr.supportsCORS=jQuery.support.cors;sinon.FakeXMLHttpRequest.useFilters=true;sinon.FakeXMLHttpRequest.addFilter(function(e,t){var r=A(e,t)||(h?t.startsWith(h)||a.test(t):e==="DELETE"||e==="HEAD"||e==="MERGE"||e==="PATCH"||e==="POST");return!r});return t}n=sap.ui.require.toUrl(n).replace(/(^|\/)resources\/(~[-a-zA-Z0-9_.]*~\/)?/,"$1test-resources/")+"/";return $()},withNormalizedMessages:function(e){var t;if(sinon.createSandbox){t=sinon.createSandbox()}else{t=sinon.sandbox.create()}try{const r=n.prototype._loadResourceBundle;t.stub(n.prototype,"_loadResourceBundle").callsFake(function(){var e=r.apply(this,[arguments[0],true]);return{getText:function(t,r){var n=t,s=e.getText(t),a;for(a=0;a<10;a+=1){if(s.indexOf("{"+a+"}")>=0){n+=" "+(a>=r.length?"{"+a+"}":r[a])}}return n}}});e.apply(this)}finally{t.verifyAndRestore()}},isRealOData:function(){if(h==="proxy"){throw new Error("realOData=proxy is no longer supported")}return x},getRealOData:function(){return h?"&realOData="+h:""},onRequest:function(e){v=e},proxy:function(t){e.warning("#proxy is no longer supported",null,"sap.ui.test.TestUtils");return t},retrieveData:function(e){var t=m[e];delete m[e];return t},setData:function(e,t){m[e]=t},setupODataV4Server:function(e,t,r,n,s){if(this.isRealOData()){return}if(!n){n="/"}else if(n.slice(-1)!=="/"){n+="/"}w.useFakeServer(e,r||"sap/ui/core/qunit/odata/v4/data",w.normalizeFixture(t,n),s,n!=="/"?n:undefined)},normalizeFixture:function(e,t){var r={};Object.keys(e).forEach(function(n){var s=y.exec(n),a,i;if(s){a=s[1]||"GET";i=s[2]}else{a="GET";i=n}if(!i.startsWith("/")){i=t+i}r[a+" "+i]=e[n]});return r},spyFetch:function(e){var t=e.spy(XMLHttpRequest.prototype,"open");t.calledWithUrl=function(e){return t.getCall(e).args[1]};return t}};return w},true);
//# sourceMappingURL=TestUtils.js.map