/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var s=t.getTooltip_AsString();var r=t.getSubheader();if(typeof s!=="string"){s=""}e.openStart("div",t);e.attr("role","presentation");e.attr("aria-label",s);e.class("sapMNwC");if(t.hasListeners("press")){e.class("sapMPointer");e.attr("tabindex","0")}e.openEnd();e.openStart("div",t.getId()+"-title");e.class("sapMNwCCTxt");if(!r){e.class("sapMNwCExtend")}e.openEnd();e.renderControl(t._oContentText);e.close("div");e.openStart("div",t.getId()+"-subheader");e.class("sapMNwCSbh");e.class("sapMNwCExtend");e.openEnd();e.renderControl(t._oSubHeaderText);e.close("div");e.close("div")};return e},true);
//# sourceMappingURL=NewsContentRenderer.js.map