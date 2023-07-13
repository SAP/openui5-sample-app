/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath"],function(t){"use strict";var n=Object.create(null);function e(e,i,o){var r,f;if(i&&e[0]in i){f=e.length>1?t.get(e.slice(0,-1),i):i;r=f&&f[e[e.length-1]];if(typeof r==="function"&&o.bindContext){r=r.bind(o.rootContext||f)}return r}return n}var i=function(i,o,r){o=o||{};r=r||{};r.bindContext=r.bindContext!==false;r.bindDotContext=r.bindDotContext!==false;var f=i.split("."),b=f.shift()||".",d=b===".",x=n;f.unshift(b);if(r.preferDotContext&&!d){x=e(f,o["."],{bindContext:r.bindContext&&r.bindDotContext,rootContext:o["."]})}if(x===n){x=e(f,o,{bindContext:r.bindContext&&(d?r.bindDotContext:f.length>1),rootContext:d?o["."]:undefined})}if(x===n){x=t.get(i)}return x};return i});
//# sourceMappingURL=resolveReference.js.map