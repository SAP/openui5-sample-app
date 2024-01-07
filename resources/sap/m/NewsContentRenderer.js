/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var r=t.getTooltip_AsString();if(typeof r!=="string"){r=""}e.openStart("div",t);e.attr("role","presentation");e.attr("aria-label",r);e.class("sapMNwC");if(t.hasListeners("press")){e.class("sapMPointer");e.attr("tabindex","0")}e.openEnd();e.openStart("div");e.class("sapMNwCCTxt");e.openEnd();e.renderControl(t._oContentText);e.close("div");e.openStart("div",t.getId()+"-subheader");e.class("sapMNwCSbh");e.openEnd();e.renderControl(t._oSubHeaderText);e.close("div");e.close("div")};return e},true);
//# sourceMappingURL=NewsContentRenderer.js.map