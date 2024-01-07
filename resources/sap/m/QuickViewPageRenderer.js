/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,r){var n=r.getPageContent();e.openStart("div",r).class("sapMQuickViewPage").openEnd();if(n.header){e.renderControl(n.header)}e.renderControl(n.form);e.close("div")};return e},true);
//# sourceMappingURL=QuickViewPageRenderer.js.map