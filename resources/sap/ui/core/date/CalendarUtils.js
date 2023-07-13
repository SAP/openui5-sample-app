/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/date/CalendarWeekNumbering","sap/ui/core/Configuration","sap/ui/core/LocaleData"],function(e,t,a){"use strict";var i={getWeekConfigurationValues:function(n,r){var u,o;if(!n){return i.getWeekConfigurationValues(t.getCalendarWeekNumbering(),r)}o=e.getWeekConfigurationValues(n);if(o){return o}if(n===e.Default){r=r||t.getFormatSettings().getFormatLocale();u=a.getInstance(r);return{firstDayOfWeek:u.getFirstDayOfWeek(),minimalDaysInFirstWeek:u.getMinimalDaysInFirstWeek()}}return undefined}};return i});
//# sourceMappingURL=CalendarUtils.js.map