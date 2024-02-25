/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(t){"use strict";var e={apiVersion:2};e.CSS_CLASS="sapMSliderTooltip";e.render=function(t,i){t.openStart("div",i).class(e.CSS_CLASS);if(!i.getEditable()){t.class(e.CSS_CLASS+"NonEditableWrapper")}if(i.getWidth()){t.style("width",i.getWidth())}t.openEnd();this.renderTooltipElement(t,i);t.close("div")};e.renderTooltipElement=function(i,a){var r=t.getResourceBundleFor("sap.m");i.voidStart("input",a.getId()+"-input").class(e.CSS_CLASS+"Input");if(!a.getEditable()){i.class(e.CSS_CLASS+"NonEditable")}i.attr("aria-label",r.getText("SLIDER_INPUT_LABEL"));i.accessibilityState(a).attr("tabindex","-1").attr("value",a.getValue()).attr("type","number").attr("step",a.getStep()).voidEnd()};return e},true);
//# sourceMappingURL=SliderTooltipRenderer.js.map