/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={Default:"Default",ISO_8601:"ISO_8601",MiddleEastern:"MiddleEastern",WesternTraditional:"WesternTraditional"};Object.defineProperty(e,"getWeekConfigurationValues",{value:function(t){switch(t){case e.ISO_8601:return{firstDayOfWeek:1,minimalDaysInFirstWeek:4};case e.MiddleEastern:return{firstDayOfWeek:6,minimalDaysInFirstWeek:1};case e.WesternTraditional:return{firstDayOfWeek:0,minimalDaysInFirstWeek:1};default:return undefined}}});return e});
//# sourceMappingURL=CalendarWeekNumbering.js.map