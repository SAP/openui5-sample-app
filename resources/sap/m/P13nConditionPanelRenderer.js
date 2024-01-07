/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer"],function(n){"use strict";return n.extend("sap.m.P13nConditionPanelRenderer",{renderer:{apiVersion:2,render:function(n,e){n.openStart("section",e);n.class("sapMConditionPanel");n.openEnd();n.openStart("div");n.class("sapMConditionPanelContent");n.class("sapMConditionPanelBG");n.openEnd();e.getAggregation("content").forEach(function(e){n.renderControl(e)});n.close("div");n.close("section")}}})},true);
//# sourceMappingURL=P13nConditionPanelRenderer.js.map