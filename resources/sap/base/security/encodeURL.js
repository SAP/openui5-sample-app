/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/strings/toHex"],function(e){"use strict";var f=/[\ud800-\udbff][\udc00-\udfff]|[\x00-\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,r={};var u=function(f){var u=r[f];if(!u){var i=f.codePointAt(0);if(i<128){u="%"+e(i,2)}else if(i<2048){u="%"+e(i>>6|192,2)+"%"+e(i&63|128,2)}else if(i<65536){u="%"+e(i>>12|224,2)+"%"+e(i>>6&63|128,2)+"%"+e(i&63|128,2)}else{u="%"+e(i>>18|240,2)+"%"+e(i>>12&63|128,2)+"%"+e(i>>6&63|128,2)+"%"+e(i&63|128,2)}r[f]=u}return u};var i=function(e){return e.replace(f,u)};return i});
//# sourceMappingURL=encodeURL.js.map