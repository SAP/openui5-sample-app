/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./NonWorkingPeriod"],function(e){"use strict";var r=e.extend("sap.ui.unified.RecurringNonWorkingPeriod",{metadata:{library:"sap.ui.unified",properties:{recurrenceType:{type:"sap.ui.unified.RecurrenceType",group:"Misc"},recurrenceEndDate:{type:"object",group:"Data"},recurrencePattern:{type:"int",group:"Behavior",defaultValue:1}}}});r.prototype.isRecurring=function(){return true};return r});
//# sourceMappingURL=RecurringNonWorkingPeriod.js.map