/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./SinglePlanningCalendarView","sap/ui/core/LocaleData","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils","sap/ui/core/Configuration","sap/ui/core/date/CalendarUtils","sap/ui/core/Locale"],function(e,t,a,i,n,r,o,l){"use strict";var s=t.extend("sap.m.SinglePlanningCalendarWeekView",{metadata:{library:"sap.m"}});s.prototype.getEntityCount=function(){return 7};s.prototype.getScrollEntityCount=function(){return 7};s.prototype.calculateStartDate=function(e){var t=r.getFormatSettings().getFormatLocale().toString();var s=a.getInstance(r.getFormatSettings().getFormatLocale()),g=this.getFirstDayOfWeek();if(g<0||g>6){var u=o.getWeekConfigurationValues(this.getCalendarWeekNumbering(),new l(t));if(u){g=u.firstDayOfWeek}else{g=s.getFirstDayOfWeek()}}e.setDate(e.getDate()-e.getDay()+g);return n._getFirstDateOfWeek(i.fromLocalJSDate(e),{firstDayOfWeek:g,minimalDaysInFirstWeek:s.getMinimalDaysInFirstWeek()}).toLocalJSDate()};return s});
//# sourceMappingURL=SinglePlanningCalendarWeekView.js.map