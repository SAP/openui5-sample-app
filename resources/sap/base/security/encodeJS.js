/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/strings/toHex"],function(r){"use strict";var e=/[\x00-\x2b\x2d\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,x={};var a=function(e){var a=x[e];if(!a){var n=e.charCodeAt(0);if(n<256){a="\\x"+r(n,2)}else{a="\\u"+r(n,4)}x[e]=a}return a};var n=function(r){return r.replace(e,a)};return n});
//# sourceMappingURL=encodeJS.js.map