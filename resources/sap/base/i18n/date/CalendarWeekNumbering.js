/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/date/_EnumHelper"],function(e){"use strict";var a={Default:"Default",ISO_8601:"ISO_8601",MiddleEastern:"MiddleEastern",WesternTraditional:"WesternTraditional"};e.register("sap.base.i18n.date.CalendarWeekNumbering",a);Object.defineProperty(a,"getWeekConfigurationValues",{value:function(e){switch(e){case a.ISO_8601:return{firstDayOfWeek:1,minimalDaysInFirstWeek:4};case a.MiddleEastern:return{firstDayOfWeek:6,minimalDaysInFirstWeek:1};case a.WesternTraditional:return{firstDayOfWeek:0,minimalDaysInFirstWeek:1};default:return undefined}}});return a});
//# sourceMappingURL=CalendarWeekNumbering.js.map