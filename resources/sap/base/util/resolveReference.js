/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath"],function(t){"use strict";var n=Object.create(null);function e(e,i,o){var r,f;if(i&&e[0]in i){f=e.length>1?t.get(e.slice(0,-1),i):i;r=f&&f[e[e.length-1]];if(typeof r==="function"&&o.bindContext){r=r.bind(o.rootContext||f)}return r}return n}var i=function(i,o,r){o=o||{};r=r||{};r.bindContext=r.bindContext!==false;r.bindDotContext=r.bindDotContext!==false;var f=i.split("."),u=f.shift()||".",d=u===".",b=n;f.unshift(u);if(r.preferDotContext&&!d){b=e(f,o["."],{bindContext:r.bindContext&&r.bindDotContext,rootContext:o["."]})}if(b===n){b=e(f,o,{bindContext:r.bindContext&&(d?r.bindDotContext:f.length>1),rootContext:d?o["."]:undefined})}if(!d){if(b===n&&r.useProbingRequire){b=sap.ui.require(i.replace(/\./g,"/"));if(b===undefined){b=n}}if(b===n){b=t.get(i)}}return b===n?undefined:b};return i});
//# sourceMappingURL=resolveReference.js.map