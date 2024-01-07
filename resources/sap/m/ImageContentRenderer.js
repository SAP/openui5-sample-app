/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){t.openStart("div",e);t.class("sapMImageContent");var n=e.getTooltip_AsString();if(n){t.attr("title",n)}if(e.hasListeners("press")){t.class("sapMPointer");t.attr("tabindex","0")}t.openEnd();var a=e.getAggregation("_content");if(a){a.addStyleClass("sapMImageContentImageIcon");t.renderControl(a)}t.close("div")};return t},true);
//# sourceMappingURL=ImageContentRenderer.js.map