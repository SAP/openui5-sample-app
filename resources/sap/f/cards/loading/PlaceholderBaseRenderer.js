/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,r){var n=e.getResourceBundleFor("sap.ui.core"),i=n.getText("BUSY_TEXT");if(!r.getHasContent()){return}t.openStart("div",r).class("sapFCardContentPlaceholder").attr("tabindex","0");this.addOuterAttributes(r,t);if(r.getRenderTooltip()){t.attr("title",i)}t.accessibilityState(r,{role:"progressbar",valuemin:"0",valuemax:"100"});t.openEnd();this.renderContent(r,t);t.close("div")};t.addOuterAttributes=function(e,t){};t.renderContent=function(e,t){};return t},true);
//# sourceMappingURL=PlaceholderBaseRenderer.js.map