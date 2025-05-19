/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/base/Log","sap/base/i18n/date/CalendarWeekNumbering","sap/ui/core/Element"],function(e,t,n,r){"use strict";var a=r.extend("sap.m.SinglePlanningCalendarView",{metadata:{library:"sap.m",properties:{key:{type:"string",group:"Data"},title:{type:"string",group:"Appearance"},firstDayOfWeek:{type:"int",group:"Appearance",defaultValue:-1},calendarWeekNumbering:{type:"sap.base.i18n.date.CalendarWeekNumbering",group:"Appearance",defaultValue:null}}}});a.prototype.getEntityCount=function(){throw new Error("This method should be implemented in one of the inherited classes.")};a.prototype.getScrollEntityCount=function(){throw new Error("This method should be implemented in one of the inherited classes.")};a.prototype.calculateStartDate=function(e){throw new Error("This method should be implemented in one of the inherited classes.")};return a});
//# sourceMappingURL=SinglePlanningCalendarView.js.map