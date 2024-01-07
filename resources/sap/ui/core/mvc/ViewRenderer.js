/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e={apiVersion:2};e.render=function(t,i){t.openStart("div",i);t.class("sapUiView");e.addDisplayClass(t,i);t.style("width",i.getWidth());t.style("height",i.getHeight());t.openEnd();i.getContent().forEach(t.renderControl,t);t.close("div")};e.addDisplayClass=function(e,t){if(t.getDisplayBlock()||t.getWidth()==="100%"&&t.getHeight()==="100%"){e.class("sapUiViewDisplayBlock")}};return e},true);
//# sourceMappingURL=ViewRenderer.js.map