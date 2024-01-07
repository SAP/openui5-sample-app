/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","./library","sap/ui/unified/library"],function(e,a,t){"use strict";var p=t.CalendarIntervalType;var r=t.CalendarAppointmentHeight;var n=e.extend("sap.m.PlanningCalendarView",{metadata:{library:"sap.m",properties:{key:{type:"string",group:"Data",defaultValue:null},intervalType:{type:"sap.ui.unified.CalendarIntervalType",group:"Appearance",defaultValue:p.Hour},intervalSize:{type:"int",group:"Appearance",defaultValue:1},intervalLabelFormatter:{type:"object",group:"Appearance"},relative:{type:"boolean",group:"Appearance",defaultValue:false},description:{type:"string",group:"Data"},intervalsS:{type:"int",group:"Appearance",defaultValue:6},intervalsM:{type:"int",group:"Appearance",defaultValue:8},intervalsL:{type:"int",group:"Appearance",defaultValue:12},showSubIntervals:{type:"boolean",group:"Appearance",defaultValue:false},appointmentHeight:{type:"sap.ui.unified.CalendarAppointmentHeight",group:"Appearance",defaultValue:r.Regular}}}});return n});
//# sourceMappingURL=PlanningCalendarView.js.map