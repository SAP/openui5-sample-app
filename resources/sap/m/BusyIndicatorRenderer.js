/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var i=t.getTooltip_AsString();e.openStart("div",t).class("sapMBusyIndicator");e.style("font-size",t.getSize());e.accessibilityState(t);if(i){e.attr("title",i)}e.openEnd();if(t.getCustomIcon()){e.renderControl(t._iconImage)}else{e.openStart("div",t.getId()+"-busy-area");e.class("sapMBusyIndicatorBusyArea").openEnd().close("div")}if(t._busyLabel){e.renderControl(t._busyLabel)}e.close("div")};return e},true);
//# sourceMappingURL=BusyIndicatorRenderer.js.map