/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Formatting","sap/base/i18n/date/CalendarWeekNumbering","sap/ui/core/Locale","sap/ui/core/LocaleData"],function(e,a,n,i){"use strict";var t={getWeekConfigurationValues:function(r,u){var s,g;if(!r){return t.getWeekConfigurationValues(e.getCalendarWeekNumbering(),u)}g=a.getWeekConfigurationValues(r);if(g){return g}if(r===a.Default){u=u||new n(e.getLanguageTag());s=i.getInstance(u);return{firstDayOfWeek:s.getFirstDayOfWeek(),minimalDaysInFirstWeek:s.getMinimalDaysInFirstWeek()}}return undefined}};return t});
//# sourceMappingURL=CalendarUtils.js.map