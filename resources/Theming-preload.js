//@ui5-bundle Theming-preload.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/base/util/each", [],function(){"use strict";var r=function(r,e){var a=Array.isArray(r),f,i;if(a){for(i=0,f=r.length;i<f;i++){if(e.call(r[i],i,r[i])===false){break}}}else{for(i in r){if(e.call(r[i],i,r[i])===false){break}}}return r};return r});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/core/theming/ThemeManager", ["sap/base/assert","sap/base/Eventing","sap/base/Log","sap/base/config","sap/base/i18n/Localization","sap/base/util/each","sap/base/util/LoaderExtensions","sap/ui/Device","sap/ui/Global","sap/ui/core/Lib","sap/ui/core/Theming","sap/ui/core/theming/ThemeHelper","sap/ui/dom/includeStylesheet"],function(e,t,r,a,i,s,n,u,o,l,c,m,f){"use strict";var d=150;var h={};var p=/\.sapUiThemeDesignerCustomCss/i;var g=0;var v="sap-ui-core-customcss";var T=false;var b=null;var y=null;var L={};var k;var C={themeLoaded:true,checkThemeApplied:function(){C.reset();E(true);if(!k){C.fireThemeApplied()}},reset:function(){C.themeLoaded=false;if(k){clearTimeout(k);k=null;g=0;y=null;L={}}},_includeLibraryThemeAndEnsureThemeRoot:function(e){var t=e.name;A(t,c.getTheme());A(t,"base");h[t]=e;if(!e.preloadedCss){C.includeLibraryTheme(t,e.variant,e)}},includeLibraryTheme:function(t,s,n){e(typeof t==="string","sLibName must be a string");e(s===undefined||typeof s==="string","sVariant must be a string or undefined");var u=n;if(typeof u==="object"){u=_(n)}if(t!="sap.ui.legacy"&&t!="sap.ui.classic"){var o=a.get({name:"sapUiXxCssVariables",type:a.Type.String,external:true});if(!s){s=""}var l=/^(true|x)$/i.test(o)?"_skeleton":"";var m=i.getRTL()?"-RTL":"";var d,h=t+(s.length>0?"-["+s+"]":s);if(t&&t.indexOf(":")==-1){d="library"+s+l+m}else{d=t.substring(t.indexOf(":")+1)+s;t=t.substring(0,t.indexOf(":"))}var p="sap-ui-theme-"+h;var g="sap-ui-themeskeleton-"+h;var v=/^(true|x|additional)$/i.test(o);if(!document.querySelector("LINK[id='"+p+"']")||v&&!document.querySelector("LINK[id='"+g+"']")){var T=new URL(C._getThemePath(t,c.getTheme()),document.baseURI).toString();var b=document.createElement("link");b.href=T+d+".css"+(u?u:"");var y=b.href;b.href=T+"css_variables.css"+(u?u:"");var L=b.href;U(p);if(v){r.info("Including "+L+" -  sap.ui.core.theming.ThemeManager.includeLibraryTheme()");f(L,p);p="sap-ui-themeskeleton-"+h;U(p)}r.info("Including "+y+" -  sap.ui.core.theming.ThemeManager.includeLibraryTheme()");f(y,p);var k=sap.ui.require("sap/ui/core/theming/Parameters");if(k){k._addLibraryTheme(h)}C.checkThemeApplied()}}},_getThemePath:function(e,t){A(e,t);return sap.ui.require.toUrl((e+".themes."+t).replace(/\./g,"/")+"/")},_updateThemeUrls:function(e,t){var r=document.querySelectorAll("link[id^=sap-ui-theme-],link[id^=sap-ui-themeskeleton-]");Array.prototype.forEach.call(r,function(r){I(r,e,t)})},fireThemeApplied:function(){m.reset();var e=sap.ui.require("sap/ui/core/theming/Parameters");if(e){e._reset(true)}C.fireEvent("applied",{theme:c.getTheme()})}};function S(){var e=c.getTheme();var t=C._getThemePath("sap.ui.core",e)+"custom.css";var a=e.indexOf("sap_")===0||e==="base";var i=true;var n=[];if(T&&b===e){h[v]={}}function u(s){var u="sap-ui-theme-"+s;var o=m.checkAndRemoveStyle({prefix:"sap-ui-theme-",id:s});if(o&&document.getElementById("sap-ui-themeskeleton-"+s)){o=m.checkAndRemoveStyle({prefix:"sap-ui-themeskeleton-",id:s})}i=i&&o;if(i){if(!T||b!=e){if(!a&&x(s)){var l=t;var c=_(h["sap.ui.core"]);if(c){l+=c}f(l,v);T=true;r.debug("ThemeManager: delivered custom CSS needs to be loaded, Theme not yet applied");b=e;i=false;return false}else if(T){var d=document.querySelector("LINK[id='"+v+"']");if(d){d.remove();r.debug("ThemeManager: Custom CSS removed")}T=false}}}if(!a&&o&&!L[s]){var p=document.getElementById(u);if(p&&p.getAttribute("data-sap-ui-ready")==="false"&&!(p.sheet&&m.hasSheetCssRules(p.sheet))){n.push(s)}}}s(h,u);if(n.length>0){if(!y){for(var o in h){var l=m.getMetadata(o);if(l&&l.Extends&&l.Extends[0]){y=l.Extends[0];break}}}if(y){n.forEach(function(t){var a="sap-ui-theme-"+t;var i=document.getElementById(a);r.warning("ThemeManager: Custom theme '"+e+"' could not be loaded for library '"+t+"'. "+"Falling back to its base theme '"+y+"'.");I(i,y);L[t]=true});i=false}}if(!i){r.debug("ThemeManager: Theme not yet applied.")}else{b=e}return i}function x(e){var t=window.document.getElementById("sap-ui-theme-"+e);if(!t){return false}var a=window.getComputedStyle(t,":after");var i=a?a.getPropertyValue("content"):null;if(!i&&u.browser.safari){var s=document.documentElement;s.classList.add("sapUiThemeDesignerCustomCss");i=window.getComputedStyle(s,":after").getPropertyValue("content");s.classList.remove("sapUiThemeDesignerCustomCss")}if(i&&i!=="none"){try{if(i[0]==="'"||i[0]==='"'){i=i.substring(1,i.length-1)}return i==="true"}catch(e){r.error("Custom check: Error parsing JSON string for custom.css indication.",e)}}var n=t.sheet?m.safeAccessSheetCssRules(t.sheet):null;if(!n||n.length===0){r.warning("Custom check: Failed retrieving a CSS rule from stylesheet "+e);return false}for(var o=0;o<2&&o<n.length;o++){if(p.test(n[o].selectorText)){return true}}return false}function E(e){g++;var t=g>d;if(!S()&&!t){var a;if(g<=100){a=2}else if(g<=110){a=500}else{a=1e3}k=setTimeout(E,a)}else if(!e){C.reset();C.themeLoaded=true;C.fireThemeApplied();if(t){r.error("ThemeManager: max. check cycles reached.")}}else{C.themeLoaded=true}}function U(e){var t=document.getElementById(e);if(t){t.dataset.sapUiFoucmarker=e}}function R(e){var t=document.documentElement;var r=e.new;C._updateThemeUrls(r,true);t.classList.remove("sapUiTheme-"+e.old);t.classList.add("sapUiTheme-"+r);C.checkThemeApplied()}function A(e,t){var r=c.getThemeRoot(t,e);if(r){r=r+(r.slice(-1)=="/"?"":"/")+e.replace(/\./g,"/")+"/themes/"+t+"/";n.registerResourcePath((e+".themes."+t).replace(/\./g,"/"),r)}}function I(e,t,r){var a,s=e.href.search(/[?#]/),n,u,o="library",l=i.getRTL()?"-RTL":"",c,m;var d=/^sap-ui-theme(?:skeleton)?-(.*)$/i.exec(e.id);if(Array.isArray(d)){a=d[1]}else{a=e.id.slice(13)}h[a]=h[a]||{};if(s>-1){n=e.href.substring(0,s);u=e.href.substring(s)}else{n=e.href;u=""}n=n.substring(n.lastIndexOf("/")+1);if((m=a.indexOf("-["))>0){o+=a.slice(m+2,-1);a=a.slice(0,m)}if(n===o+".css"||n===o+"-RTL.css"){n=o+l+".css"}c=new URL(C._getThemePath(a,t)+n+u,document.baseURI).toString();if(c!=e.href){if(r){e.dataset.sapUiFoucmarker=e.id}f(c,e.id)}}function _(e){var t;if(l.getVersionedLibCss()&&e){t="?version="+e.version;if(o.versioninfo){t+="&sap-ui-dist-version="+o.versioninfo.version}}return t}t.apply(C);document.documentElement.classList.add("sapUiTheme-"+c.getTheme());r.info("Declared theme "+c.getTheme(),null);c.attachChange(function(e){var t=e.themeRoots;var r=e.theme;if(t&&t.forceUpdate){C._updateThemeUrls(c.getTheme())}if(r){R(r)}});c.registerThemeManager(C);return C});
/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/dom/includeStylesheet", ["sap/base/assert"],function(e){"use strict";function t(e,t,r,i){var n=function(){var n=document.createElement("link");n.rel="stylesheet";n.href=e;if(t&&typeof t==="object"){Object.keys(t).forEach(function(e){if(t[e]!=null){n.setAttribute(e,t[e])}})}function a(e){var t=e.type==="error";n.setAttribute("data-sap-ui-ready",!t);n.removeEventListener("load",a);n.removeEventListener("error",a);var o=t?i:r;if(typeof o==="function"){o()}}n.addEventListener("load",a);n.addEventListener("error",a);return n};var a=t&&t.id;var o=document.getElementById(a);var s=n();if(o&&o.tagName==="LINK"&&o.rel==="stylesheet"){if(typeof r==="function"||typeof i==="function"||o.href!==s.href){if(o.getAttribute("data-sap-ui-foucmarker")===a){o.removeAttribute("id");o.parentNode.insertBefore(s,o)}else{o.parentNode.replaceChild(s,o)}}else if(o.getAttribute("data-sap-ui-foucmarker")===a){o.removeAttribute("data-sap-ui-foucmarker")}}else{var u=document.getElementById("sap-ui-core-customcss");if(u){u.parentNode.insertBefore(s,u)}else{document.head.appendChild(s)}}}var r=function r(i,n,a,o){var s;if(typeof i==="string"){s=typeof n==="string"?{id:n}:n;t(i,s,a,o)}else{e(typeof i==="object"&&i.url,"vUrl must be an object and requires a URL");s=Object.assign({},i.attributes);if(i.id){s.id=i.id}return new Promise(function(e,r){t(i.url,s,e,r)})}};return r});
//# sourceMappingURL=Theming-preload.js.map