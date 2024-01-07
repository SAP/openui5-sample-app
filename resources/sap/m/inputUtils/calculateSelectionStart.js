/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/selectionRange"],function(t){"use strict";var r=function(t,r){if(typeof t!="string"||t===""||typeof r!="string"||r===""){return false}return t.toLowerCase().startsWith(r.toLowerCase())};var e=function(t,e,n,s){var i=t&&t.start!==t.end,a=r(e,n),o=!(a&&(i||s));return o?0:t.start};return e});
//# sourceMappingURL=calculateSelectionStart.js.map