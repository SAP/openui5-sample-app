/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert"],function(e){"use strict";function t(){var e=document.documentElement;if(!e){return 16}return parseFloat(window.getComputedStyle(e).getPropertyValue("font-size"))}var r={fromPx:function(r){e(typeof r==="string"&&r!==""&&!isNaN(parseFloat(r))&&typeof parseFloat(r)==="number"||typeof r==="number"&&!isNaN(r),'Rem.fromPx: either the "vPx" parameter must be an integer, or a string e.g.: "16px"');return parseFloat(r)/t()},toPx:function(r){e(typeof r==="string"&&r!==""&&!isNaN(parseFloat(r))&&typeof parseFloat(r)==="number"||typeof r==="number"&&!isNaN(r),'Rem.toPx: either the "vRem" parameter must be an integer, or a string e.g.: "1rem"');return parseFloat(r)*t()}};return r});
//# sourceMappingURL=Rem.js.map