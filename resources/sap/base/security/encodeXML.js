/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/strings/toHex"],function(x){"use strict";var e=/[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,t=/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,f={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"};var r=function(e){var r=f[e];if(!r){if(t.test(e)){r="&#xfffd;"}else{r="&#x"+x(e.charCodeAt(0))+";"}f[e]=r}return r};var a=function(x){return x.replace(e,r)};return a});
//# sourceMappingURL=encodeXML.js.map