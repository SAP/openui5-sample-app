/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./DateTimeFieldRenderer","sap/ui/core/library"],function(e,t,a){"use strict";var i=e.extend(t);i.apiVersion=2;i.writeInnerValue=function(e,t){if(t._inPreferredUserInteraction()){e.attr("value",t._$input.val())}else if(t._bValid||t._bOutOfAllowedRange){e.attr("value",t._formatValue(t.getDateValue()))}else{e.attr("value",t.getValue())}};i.writeInnerAttributes=function(e,t){e.attr("type","text");if(t._bMobile){e.attr("readonly","readonly")}};i.getAccessibilityState=function(e){var i=t.getAccessibilityState.apply(this,arguments);i["roledescription"]=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_DATEINPUT");i["autocomplete"]="none";i["haspopup"]=a.aria.HasPopup.Grid.toLowerCase();i["disabled"]=null;if(e._bMobile&&e.getEnabled()&&e.getEditable()){i["readonly"]=false}return i};i.addOuterClasses=function(e,a){if(a.getHideInput()){e.class("sapMDatePickerHiddenInput")}t.addOuterClasses.apply(this,arguments)};return i},true);
//# sourceMappingURL=DatePickerRenderer.js.map