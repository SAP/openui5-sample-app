/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,r){var t=r._getHeader(),n=r._getCurrentGrid();e.openStart("div",r);e.accessibilityState({role:"region",roledescription:r._oRB.getText("SPC_CONTROL_NAME"),labelledby:{value:t.getId()+"-Title "+n.getId()+"-nowMarkerText",append:true}});e.class("sapMSinglePC");e.openEnd();e.renderControl(t);e.renderControl(n);e.close("div")};return e},true);
//# sourceMappingURL=SinglePlanningCalendarRenderer.js.map