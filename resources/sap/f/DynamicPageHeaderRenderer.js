/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,n){var a=n._getState(),t="sapFDynamicPageHeader",r=n.getBackgroundDesign();e.openStart("section",n);e.accessibilityState({role:"region"});e.class("sapContrastPlus");e.class(t);if(a.headerHasContent){e.class("sapFDynamicPageHeaderWithContent")}if(a.headerPinnable){e.class("sapFDynamicPageHeaderPinnable")}if(r){e.class(t+r)}e.openEnd();this._renderHeaderContent(e,a);e.renderControl(a.collapseButton);if(a.headerPinnable){e.renderControl(a.pinButton)}e.close("section")};e._renderHeaderContent=function(e,n){if(n.headerHasContent){e.openStart("div");e.class("sapFDynamicPageHeaderContent");e.openEnd();n.content.forEach(e.renderControl,e);e.close("div")}};return e},true);
//# sourceMappingURL=DynamicPageHeaderRenderer.js.map