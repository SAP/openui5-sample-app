/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/strings/toHex"],function(r){"use strict";var e=/[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xff\u2028\u2029][0-9A-Fa-f]?/g;var t=function(e){var t=e.charCodeAt(0);if(e.length===1){return"\\"+r(t)}else{return"\\"+r(t)+" "+e.substr(1)}};var n=function(r){return r.replace(e,t)};return n});
//# sourceMappingURL=encodeCSS.js.map