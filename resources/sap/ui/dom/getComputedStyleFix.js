/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=function(){var e=window.getComputedStyle;window.getComputedStyle=function(t,n){var r=e.call(this,t,n);if(r===null){if(document.body==null){var o=document.createElement("body");var l=document.getElementsByTagName("html")[0];l.insertBefore(o,l.firstChild);var u=o.style;o.parentNode.removeChild(o);return u}return document.body.cloneNode(false).style}return r}};return e});
//# sourceMappingURL=getComputedStyleFix.js.map