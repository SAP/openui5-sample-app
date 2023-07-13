/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,r){var a=r.mBindingInfos;e.openStart("div",r).class("sapFCardHeaderSideIndicator").class("sapFCardHeaderSideIndicatorState"+r.getState());if(a.title||a.number||a.unit){e.class("sapFCardHeaderItemBinded")}e.openEnd();var t=r.getAggregation("_title");if(t){t.addStyleClass("sapFCardHeaderSITitle");e.renderControl(t)}e.openStart("div").class("sapFCardHeaderSINumber");if(a.title||a.number||a.unit||a.state){e.class("sapFCardHeaderItemBinded")}e.openEnd();var n=r.getAggregation("_number");if(n){e.renderControl(n)}var d=r.getAggregation("_unit");if(d){e.renderControl(d)}e.close("div");e.close("div")};return e},true);
//# sourceMappingURL=NumericSideIndicatorRenderer.js.map