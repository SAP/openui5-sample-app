/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,r){e.openStart("div",r);e.class("sapMDTI");var i=r.getWidth();if(i){e.style("width",i)}e.openEnd();var t=r.getAggregation("_picker");if(t){e.renderControl(t)}e.close("div")};return e},true);
//# sourceMappingURL=DateTimeInputRenderer.js.map