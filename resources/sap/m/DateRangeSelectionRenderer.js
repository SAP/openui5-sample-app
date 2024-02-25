/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/ui/core/Renderer","./DatePickerRenderer"],function(e,t,r){"use strict";var a=t.extend(r);a.apiVersion=2;a.writeInnerValue=function(e,t){if(t._inPreferredUserInteraction()){e.attr("value",t._$input.val())}else if(t._bValid){e.attr("value",t._formatValue(t.getDateValue(),t.getSecondDateValue()))}else{e.attr("value",t.getValue())}};a.getAccessibilityState=function(t){var a=r.getAccessibilityState.apply(this,arguments);a["roledescription"]=e.getResourceBundleFor("sap.m").getText("ACC_CTR_TYPE_DATERANGEINPUT");return a};return a},true);
//# sourceMappingURL=DateRangeSelectionRenderer.js.map