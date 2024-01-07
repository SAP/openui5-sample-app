/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ViewRenderer"],function(e){"use strict";var i={apiVersion:2};i.render=function(i,t){i.openStart("div",t);i.class("sapUiView");i.class("sapUiTmplView");e.addDisplayClass(i,t);i.style("width",t.getWidth());i.style("height",t.getHeight());i.openEnd();i.renderControl(t._oTemplate);i.close("div")};return i},true);
//# sourceMappingURL=TemplateViewRenderer.js.map