/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert"],function(e){"use strict";function t(e,t,n,r){var i=document.createElement("script");i.src=e;i.type="text/javascript";if(t&&typeof t==="object"){for(var o in t){if(t[o]!=null){i.setAttribute(o,t[o])}}}function f(){if(typeof n==="function"){n()}i.removeEventListener("load",f);i.removeEventListener("error",a)}function a(){if(typeof r==="function"){r()}i.removeEventListener("load",f);i.removeEventListener("error",a)}if(typeof n==="function"||typeof r==="function"){i.addEventListener("load",f);i.addEventListener("error",a)}var s=t&&t.id,u=s&&document.getElementById(s);if(u&&u.tagName==="SCRIPT"){u.parentNode.removeChild(u)}document.head.appendChild(i)}var n=function(n,r,i,o){var f;if(typeof n==="string"){f=typeof r==="string"?{id:r}:r;t(n,f,i,o)}else{e(typeof n==="object"&&n.url,"vUrl must be an object and requires a URL");f=Object.assign({},n.attributes);if(n.id){f.id=n.id}return new Promise(function(e,r){t(n.url,f,e,r)})}};return n});
//# sourceMappingURL=includeScript.js.map