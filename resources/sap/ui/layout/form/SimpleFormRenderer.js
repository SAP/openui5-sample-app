/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){t._bChangedByMe=true;e.openStart("div",t).class("sapUiSimpleForm").style("width",t.getWidth()).openEnd();var r=t.getAggregation("form");if(r.getLayout()){e.renderControl(r)}e.close("div");t._bChangedByMe=false};return e},true);
//# sourceMappingURL=SimpleFormRenderer.js.map