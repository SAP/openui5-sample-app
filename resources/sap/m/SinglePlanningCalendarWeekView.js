/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./SinglePlanningCalendarView","sap/base/i18n/Formatting","sap/ui/core/LocaleData","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils","sap/ui/core/date/CalendarUtils","sap/ui/core/Locale"],function(e,a,t,n,i,r,s,l){"use strict";var g=a.extend("sap.m.SinglePlanningCalendarWeekView",{metadata:{library:"sap.m"}});g.prototype.getEntityCount=function(){return 7};g.prototype.getScrollEntityCount=function(){return 7};g.prototype.calculateStartDate=function(e){var a=new l(t.getLanguageTag()).toString();var g=n.getInstance(new l(t.getLanguageTag())),o=this.getFirstDayOfWeek();if(o<0||o>6){var u=s.getWeekConfigurationValues(this.getCalendarWeekNumbering(),new l(a));if(u){o=u.firstDayOfWeek}else{o=g.getFirstDayOfWeek()}}e.setDate(e.getDate()-e.getDay()+o);return r._getFirstDateOfWeek(i.fromLocalJSDate(e),{firstDayOfWeek:o,minimalDaysInFirstWeek:g.getMinimalDaysInFirstWeek()}).toLocalJSDate()};return g});
//# sourceMappingURL=SinglePlanningCalendarWeekView.js.map