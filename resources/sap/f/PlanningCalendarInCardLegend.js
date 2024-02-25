/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/PlanningCalendarLegend","sap/ui/core/Lib","sap/ui/unified/CalendarLegendItem","./PlanningCalendarInCardLegendRenderer"],function(e,t,n,i){"use strict";var a=e.extend("sap.f.PlanningCalendarInCardLegend",{metadata:{library:"sap.f",properties:{visibleLegendItemsCount:{type:"int",group:"Data",defaultValue:2}}},renderer:i});a.prototype.exit=function(){e.prototype.exit.call(this,arguments);if(this._oItemsLink){this._oItemsLink.destroy();this._oItemsLink=null}};a.prototype._getMoreItemsText=function(e){if(!this._oItemsLink){var i=t.getResourceBundleFor("sap.f");this._oItemsLink=new n({text:i.getText("CALENDAR_LEGEND_MORE")+" ("+e+")"})}return this._oItemsLink};return a});
//# sourceMappingURL=PlanningCalendarInCardLegend.js.map