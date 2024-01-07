/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var n=t._getIllustration(),s=t._getTitle(),a=t._getDescription(),r=t.getAdditionalContent(),o=t.getEnableVerticalResponsiveness(),i=t._shouldRenderTitle(),l=t._shouldRenderDescription();e.openStart("figure",t);e.class("sapMIllustratedMessage");if(o){e.class("sapMIllustratedMessageScalable")}e.openEnd();e.openStart("div");e.class("sapMIllustratedMessageMainContent");e.openEnd();e.renderControl(n);if(i||l){e.openStart("figcaption").openEnd();if(i){e.renderControl(s)}if(l){e.renderControl(a.addStyleClass("sapMIllustratedMessageDescription"))}e.close("figcaption")}e.close("div");e.openStart("div");e.class("sapMIllustratedMessageAdditionalContent");e.openEnd();r.forEach(function(t){e.renderControl(t)});e.close("div");e.close("figure")};return e},true);
//# sourceMappingURL=IllustratedMessageRenderer.js.map