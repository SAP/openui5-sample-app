/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","./library","sap/ui/unified/calendar/CalendarUtils"],function(e,t,a){"use strict";var r=e.extend("sap.ui.unified.DateRange",{metadata:{library:"sap.ui.unified",properties:{startDate:{type:"object",group:"Misc",defaultValue:null},endDate:{type:"object",group:"Misc",defaultValue:null}}}});r.prototype.setStartDate=function(e,t){if(e){a._checkJSDateObject(e);var r=e.getFullYear();a._checkYearInValidRange(r)}this.setProperty("startDate",e,t);return this};r.prototype.setEndDate=function(e,t){if(e){a._checkJSDateObject(e);var r=e.getFullYear();a._checkYearInValidRange(r)}this.setProperty("endDate",e,t);return this};return r});
//# sourceMappingURL=DateRange.js.map