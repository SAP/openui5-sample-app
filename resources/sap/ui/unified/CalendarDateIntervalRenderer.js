/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./CalendarRenderer"],function(e,a){"use strict";var n=e.extend(a);n.apiVersion=2;n.renderCalContentOverlay=function(){};n.renderCalContentAndArrowsOverlay=function(e,a,n){if(a.getPickerPopup()){e.openStart("div",n+"-contentOver");e.class("sapUiCalContentOver");if(!a._oPopup||!a._oPopup.isOpen()){e.style("display","none")}e.openEnd();e.close("div")}};n.addAttributes=function(e,a){e.class("sapUiCalInt");e.class("sapUiCalDateInt");var n=a._getDays();if(n>a._getDaysLarge()){e.class("sapUiCalIntLarge")}if(n>a._iDaysMonthHead){e.class("sapUiCalIntHead")}if(a.getShowDayNamesLine()){e.class("sapUiCalWithDayNamesLine")}if(a.getShowWeekNumbers()){e.class("sapUiCalWithWeekNumbers")}};return n},true);
//# sourceMappingURL=CalendarDateIntervalRenderer.js.map