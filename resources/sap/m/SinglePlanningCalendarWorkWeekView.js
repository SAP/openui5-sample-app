/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./SinglePlanningCalendarView","sap/base/i18n/Formatting","sap/ui/core/Locale","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils","sap/ui/core/LocaleData"],function(t,e,a,n,r,i,o){"use strict";var l=e.extend("sap.m.SinglePlanningCalendarWorkWeekView",{metadata:{library:"sap.m"}});l.prototype.getEntityCount=function(){return 5};l.prototype.getScrollEntityCount=function(){return 7};l.prototype.calculateStartDate=function(t){var e=r.fromLocalJSDate(t),a=i._getFirstDateOfWeek(e),n=this._getFormatSettingsLocaleData();if(a.getDay()===n.getWeekendEnd()){a.setDate(a.getDate()+1)}return a.toLocalJSDate()};l.prototype._getFormatSettingsLocaleData=function(){return o.getInstance(new n(a.getLanguageTag()))};return l});
//# sourceMappingURL=SinglePlanningCalendarWorkWeekView.js.map