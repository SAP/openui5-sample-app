/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,n){var t=n.getFixContent();e.openStart("div",n);e.class("sapUiSimpleFixFlex");e.openEnd();if(t){t.toggleStyleClass("sapUiSimpleFixFlexFixedWrap",n.getFitParent());e.renderControl(t.addStyleClass("sapUiSimpleFixFlexFixed"))}this.renderFlexContentContainer(e,n);e.close("div")};e.renderFlexContentContainer=function(e,n){var t=n.getFlexContent();e.openStart("div",n.getId()+"-flexContentContainer");e.class("sapUiSimpleFixFlexFlexContentContainer");e.openEnd();if(t){e.openStart("div");e.class("sapUiSimpleFixFlexFlexContent");e.openEnd();t.forEach(function(n){e.renderControl(n)});e.close("div")}e.close("div")};return e},true);
//# sourceMappingURL=SimpleFixFlexRenderer.js.map