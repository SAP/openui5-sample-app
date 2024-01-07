/*!
* OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(function(){"use strict";var e={};e.CONSTANTS={CHARACTER_WIDTH_PX:8,F2_KEYCODE:113,RANGE_MOVEMENT_THRESHOLD:32,HANDLE_CLASS:"sapMSliderHandle",RANGE_SLIDER_NAME:"sap.m.RangeSlider",TOOLTIP_CLASS:"sapMSliderTooltip",SLIDER_SIDE_PADDING:17,TOOLTIP_SIDE_PADDING:8,HANDLE_HALF_WIDTH:16,TOOLTIP_BORDER:1,FOLLOW_OF_TOLERANCE:24,TICKMARKS:{MAX_POSSIBLE:101,MIN_SIZE:{SMALL:8,WITH_LABEL:80}}};e.getPercentOfValue=function(e,t,n){return(e-t)/(n-t)*100};e.getElementScrollableParent=function(e){if(!e){return document.body}if(e.scrollHeight>=e.clientHeight){return e}return this.getElementScrollableParent(e.parentNode)};e.isScrolledIntoView=function(e,t){if(!(e||e.getBoundingClientRect)||!(t||t.getBoundingClientRect)){return false}var n=t.getBoundingClientRect(),i=n.top,r=e.getBoundingClientRect().top,E=i-this.CONSTANTS.FOLLOW_OF_TOLERANCE>r,O=i+n.height-this.CONSTANTS.FOLLOW_OF_TOLERANCE<r;if(E||O){return false}return true};return e});
//# sourceMappingURL=SliderUtilities.js.map