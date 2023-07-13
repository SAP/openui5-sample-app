/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./DatePickerRenderer"],function(e,t){"use strict";var r=e.extend(t);r.apiVersion=2;r.writeInnerValue=function(e,t){if(t._inPreferredUserInteraction()){e.attr("value",t._$input.val())}else if(t._bValid){e.attr("value",t._formatValue(t.getDateValue(),t.getSecondDateValue()))}else{e.attr("value",t.getValue())}};r.getAccessibilityState=function(e){var r=t.getAccessibilityState.apply(this,arguments);r["roledescription"]=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_DATERANGEINPUT");return r};return r},true);
//# sourceMappingURL=DateRangeSelectionRenderer.js.map