/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,r){r._bChangedByMe=true;e.openStart("div",r).class("sapUiSimpleForm").style("width",r.getWidth()).openEnd();var n=r.getAggregation("form");e.renderControl(n);e.close("div");r._bChangedByMe=false};return e},true);
//# sourceMappingURL=SimpleFormRenderer.js.map