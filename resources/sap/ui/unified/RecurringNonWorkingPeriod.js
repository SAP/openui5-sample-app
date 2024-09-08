/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./NonWorkingPeriod"],function(e){"use strict";var t=e.extend("sap.ui.unified.RecurringNonWorkingPeriod",{metadata:{library:"sap.ui.unified",properties:{recurrenceType:{type:"sap.ui.unified.RecurrenceType",group:"Misc"},recurrenceEndDate:{type:"object",group:"Data"},recurrencePattern:{type:"int",group:"Behavior",defaultValue:1}}}});t.prototype.hasNonWorkingAtHour=function(e){const t=this.getStartDate().getHours();const r=t+(this.getStartDate().getMinutes()+this.getDurationInMinutes())/60;const n=e.getHours()+e.getMinutes()/60;return e.getHours()===t||r>=n&&t<=e.getHours()};t.prototype.isRecurring=function(){return true};return t});
//# sourceMappingURL=RecurringNonWorkingPeriod.js.map