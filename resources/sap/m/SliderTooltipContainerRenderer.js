/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2},t={MAIN_CLASS:"sapMSliderTooltipContainer"};e.render=function(e,n){var i=n.getAssociatedTooltipsAsControls();e.openStart("div",n).style("width",n.getWidth()).openEnd();e.openStart("div",n.getId()+"-container").style("left","0%").style("right","0%").class(t.MAIN_CLASS);if(!n.getEnabled()){e.class(t.MAIN_CLASS+"Disabled")}e.openEnd();if(i&&i.length){i.forEach(function(t){e.renderControl(t)})}e.close("div").close("div")};return e},true);
//# sourceMappingURL=SliderTooltipContainerRenderer.js.map