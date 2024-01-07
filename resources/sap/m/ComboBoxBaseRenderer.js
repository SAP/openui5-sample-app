/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ComboBoxTextFieldRenderer","sap/ui/core/Renderer"],function(e,s){"use strict";var t=s.extend(e);t.apiVersion=2;t.CSS_CLASS_COMBOBOXBASE="sapMComboBoxBase";t.getAccessibilityState=function(s){var t=e.getAccessibilityState.call(this,s),a=s.getPicker();if(a){t.controls=a.getId()}return t};t.addOuterClasses=function(s,a){e.addOuterClasses.apply(this,arguments);var i=t.CSS_CLASS_COMBOBOXBASE;s.class(i);if(!a.getEnabled()){s.class(i+"Disabled")}if(!a.getEditable()){s.class(i+"Readonly")}};t.addButtonClasses=function(s,a){e.addButtonClasses.apply(this,arguments);s.class(t.CSS_CLASS_COMBOBOXBASE+"Arrow")};return t},true);
//# sourceMappingURL=ComboBoxBaseRenderer.js.map