/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./isPlainObject"],function(e){"use strict";var r=function(e,r){if(!r){r=10}return n(e,0,r)};function n(e,r,n){if(r>n){throw new TypeError("The structure depth of the source exceeds the maximum depth ("+n+")")}if(e==null){return e}else if(e instanceof Date){if(e.clone){return e.clone()}return new Date(e.getTime())}else if(Array.isArray(e)){return t(e,r,n)}else if(typeof e==="object"){return i(e,r,n)}else{return e}}function t(e,r,t){var i=[];for(var o=0;o<e.length;o++){i.push(n(e[o],r+1,t))}return i}function i(r,t,i){if(!e(r)){throw new TypeError("Cloning is only supported for plain objects")}var o={};for(var u in r){if(u==="__proto__"){continue}o[u]=n(r[u],t+1,i)}return o}return r});
//# sourceMappingURL=deepClone.js.map