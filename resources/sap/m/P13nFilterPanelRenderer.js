/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer"],function(e){"use strict";return e.extend("sap.m.P13nFilterPanelRenderer",{renderer:{apiVersion:2,render:function(e,n){e.openStart("section",n);e.class("sapMFilterPanel");e.openEnd();e.openStart("div");e.class("sapMFilterPanelContent");e.class("sapMFilterPanelBG");e.openEnd();n.getAggregation("content").forEach(function(n){e.renderControl(n)});e.close("div");e.close("section")}}})},true);
//# sourceMappingURL=P13nFilterPanelRenderer.js.map