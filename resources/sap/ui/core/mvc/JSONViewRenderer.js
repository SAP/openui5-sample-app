/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ViewRenderer"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,i){t.openStart("div",i);t.class("sapUiView");t.class("sapUiJSONView");e.addDisplayClass(t,i);t.style("width",i.getWidth());t.style("height",i.getHeight());t.openEnd();i.getContent().forEach(t.renderControl,t);t.close("div")};return t},true);
//# sourceMappingURL=JSONViewRenderer.js.map