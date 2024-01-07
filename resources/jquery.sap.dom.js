/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/dom/containsOrEquals","sap/ui/core/syncStyleClass","sap/ui/dom/getOwnerWindow","sap/ui/dom/getScrollbarSize","sap/ui/dom/denormalizeScrollLeftRTL","sap/ui/dom/denormalizeScrollBeginRTL","sap/ui/dom/units/Rem","sap/ui/dom/jquery/Aria","sap/ui/dom/jquery/Selection","sap/ui/dom/jquery/zIndex","sap/ui/dom/jquery/parentByAttribute","sap/ui/dom/jquery/cursorPos","sap/ui/dom/jquery/selectText","sap/ui/dom/jquery/getSelectedText","sap/ui/dom/jquery/rect","sap/ui/dom/jquery/rectContains","sap/ui/dom/jquery/Focusable","sap/ui/dom/jquery/hasTabIndex","sap/ui/dom/jquery/scrollLeftRTL","sap/ui/dom/jquery/scrollRightRTL","sap/ui/dom/jquery/Selectors"],function(jQuery,e,r,o,u,s,t,a){"use strict";jQuery.sap.domById=function e(r,o){return r?(o||window).document.getElementById(r):null};jQuery.sap.byId=function e(r,o){var u="";if(r){u="#"+r.replace(/(:|\.)/g,"\\$1")}return jQuery(u,o)};jQuery.sap.focus=function e(r){if(!r){return}r.focus();return true};jQuery.sap.pxToRem=a.fromPx;jQuery.sap.remToPx=a.toPx;jQuery.fn.outerHTML=function(){var e=this.get(0);if(e&&e.outerHTML){return e.outerHTML.trim()}else{var r=this[0]?this[0].ownerDocument:document;var o=r.createElement("div");o.appendChild(e.cloneNode(true));return o.innerHTML}};jQuery.sap.containsOrEquals=e;jQuery.sap.denormalizeScrollLeftRTL=s;jQuery.sap.denormalizeScrollBeginRTL=t;
/*
	 * The following implementation of jQuery.support.selectstart is taken from jQuery UI core but modified.
	 *
	 * jQuery UI Core
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */jQuery.support.selectstart="onselectstart"in document.createElement("div");jQuery.sap.ownerWindow=o;jQuery.sap.scrollbarSize=u;jQuery.sap.syncStyleClass=r;return jQuery});
//# sourceMappingURL=jquery.sap.dom.js.map