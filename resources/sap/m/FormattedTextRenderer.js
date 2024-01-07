/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library"],function(t){"use strict";var e={apiVersion:2};var i=t.TextDirection;var r=t.TextAlign;e.render=function(t,e){var n=e.getWidth(),l=e.getHeight(),a=e.getTextDirection(),o=e.getTextAlign(),s=e._getDisplayHtml();t.openStart("div",e);t.class("sapMFT");if(n){t.class("sapMFTOverflowWidth")}if(l){t.class("sapMFTOverflowHeight")}if(a!==i.Inherit){t.attr("dir",a.toLowerCase())}if(o&&o!=r.Initial){t.style("text-align",o.toLowerCase())}if(e.getTooltip_AsString()){t.attr("title",e.getTooltip_AsString())}t.style("width",n||null);t.style("height",l||null);t.openEnd();e.getControls().forEach(function(e){t.renderControl(e)});s=s.replace(/\%\%(\d+)/g,function(t){return'<template id="'+e.getId()+"-$"+t.split("%%")[1]+'"></template>'});t.unsafeHtml(s);t.close("div")};return e},true);
//# sourceMappingURL=FormattedTextRenderer.js.map