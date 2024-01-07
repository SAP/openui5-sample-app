/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){t.openStart("div",e).class("sapUiLayoutCSSGrid");if(e.getWidth()){t.style("width",e.getWidth())}e.getGridLayoutConfiguration().addGridStyles(t);t.openEnd();e.getItems().forEach(t.renderControl,t);t.close("div")};return t});
//# sourceMappingURL=CSSGridRenderer.js.map