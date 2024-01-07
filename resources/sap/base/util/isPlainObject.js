/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={};var r=t.hasOwnProperty;var e=t.toString;var c=r.toString;var n=c.call(Object);var a=function(t){
/*
		 * The code in this function is taken from jQuery 3.6.0 "jQuery.isPlainObject" and got modified.
		 *
		 * jQuery JavaScript Library v3.6.0
		 * http://jquery.com/
		 *
		 * Copyright OpenJS Foundation and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 */
var a,o;if(!t||e.call(t)!=="[object Object]"){return false}a=Object.getPrototypeOf(t);if(!a){return true}o=r.call(a,"constructor")&&a.constructor;return typeof o==="function"&&c.call(o)===n};return a});
//# sourceMappingURL=isPlainObject.js.map