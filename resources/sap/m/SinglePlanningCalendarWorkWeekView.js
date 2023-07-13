/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./SinglePlanningCalendarView","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils","sap/ui/core/LocaleData","sap/ui/core/Configuration"],function(t,e,a,n,r,i){"use strict";var o=e.extend("sap.m.SinglePlanningCalendarWorkWeekView",{metadata:{library:"sap.m"}});o.prototype.getEntityCount=function(){return 5};o.prototype.getScrollEntityCount=function(){return 7};o.prototype.calculateStartDate=function(t){var e=a.fromLocalJSDate(t),r=n._getFirstDateOfWeek(e),i=this._getFormatSettingsLocaleData();if(r.getDay()===i.getWeekendEnd()){r.setDate(r.getDate()+1)}return r.toLocalJSDate()};o.prototype._getFormatSettingsLocaleData=function(){return r.getInstance(i.getFormatSettings().getFormatLocale())};return o});
//# sourceMappingURL=SinglePlanningCalendarWorkWeekView.js.map