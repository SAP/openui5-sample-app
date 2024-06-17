/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/base/Log","sap/ui/core/Element"],function(e,t,n){"use strict";var r=n.extend("sap.m.SinglePlanningCalendarView",{metadata:{library:"sap.m",properties:{key:{type:"string",group:"Data"},title:{type:"string",group:"Appearance"},firstDayOfWeek:{type:"int",group:"Appearance",defaultValue:-1},calendarWeekNumbering:{type:"sap.ui.core.date.CalendarWeekNumbering",group:"Appearance",defaultValue:null}}}});r.prototype.getEntityCount=function(){throw new Error("This method should be implemented in one of the inherited classes.")};r.prototype.getScrollEntityCount=function(){throw new Error("This method should be implemented in one of the inherited classes.")};r.prototype.calculateStartDate=function(e){throw new Error("This method should be implemented in one of the inherited classes.")};return r});
//# sourceMappingURL=SinglePlanningCalendarView.js.map