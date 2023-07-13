/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/unified/CalendarAppointment"],function(e){"use strict";var t=e.extend("sap.f.CalendarAppointmentInCard",{metadata:{library:"sap.f",properties:{clickable:{type:"boolean",group:"Data",defaultValue:false}},events:{press:{}}}});t.prototype.ontap=function(){this._firePress()};t.prototype.onsapenter=function(){this._firePress()};t.prototype._firePress=function(){if(this.getClickable()){this.$().addClass("sapUiCalendarAppSel");setTimeout(function(){this.$().removeClass("sapUiCalendarAppSel")}.bind(this),180);this.firePress({})}};return t});
//# sourceMappingURL=CalendarAppointmentInCard.js.map