/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library"],function(t){"use strict";var o=t.BlockRowColorSets;var e={apiVersion:2};e.render=function(t,o){this.startLayout(t,o);this.addContent(t,o);this.endLayout(t)};e.startLayout=function(t,o){t.openStart("div",o).class("sapUiBlockLayout").class("sapUiBlockLayoutBackground"+o.getBackground());if(o.getKeepFontSize()){t.class("sapUiBlockLayoutKeepFontSize")}t.openEnd()};e.addContent=function(t,e){var n=e.getContent(),a=Object.keys(o).map(function(t){return o[t]}),r=a.length;n.forEach(function(o,e,n){var s=o.getRowColorSet()||a[e%r],i="sapUiBlockLayoutBackground"+s,u=e&&n[e-1]||null;if(u&&u.hasStyleClass(i)){o.removeStyleClass(i);i+="Inverted"}if(i){o.addStyleClass(i)}t.renderControl(o)})};e.endLayout=function(t){t.close("div")};return e},true);
//# sourceMappingURL=BlockLayoutRenderer.js.map