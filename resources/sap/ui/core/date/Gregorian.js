/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./UniversalDate","../CalendarType","./_Calendars"],function(e,t,a){"use strict";var n=e.extend("sap.ui.core.date.Gregorian",{constructor:function(){this.oDate=this.createDate(Date,arguments);this.sCalendarType=t.Gregorian}});n.UTC=function(){return Date.UTC.apply(Date,arguments)};n.now=function(){return Date.now()};a.set(t.Gregorian,n);return n});
//# sourceMappingURL=Gregorian.js.map