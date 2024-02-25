/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Formatting","sap/ui/core/Locale","sap/ui/core/date/CalendarWeekNumbering","sap/ui/core/LocaleData"],function(e,a,n,i){"use strict";var t={getWeekConfigurationValues:function(r,u){var s,g;if(!r){return t.getWeekConfigurationValues(e.getCalendarWeekNumbering(),u)}g=n.getWeekConfigurationValues(r);if(g){return g}if(r===n.Default){u=u||new a(e.getLanguageTag());s=i.getInstance(u);return{firstDayOfWeek:s.getFirstDayOfWeek(),minimalDaysInFirstWeek:s.getMinimalDaysInFirstWeek()}}return undefined}};return t});
//# sourceMappingURL=CalendarUtils.js.map