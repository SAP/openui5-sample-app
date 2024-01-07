/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,n){var r=n.getAggregation("_actionsToolbar"),o=n.getAggregation("_navigationToolbar");e.openStart("div",n);e.class("sapMPCHead");e.openEnd();if(r){e.renderControl(r)}if(o){e.renderControl(o)}e.close("div")};return e},true);
//# sourceMappingURL=PlanningCalendarHeaderRenderer.js.map