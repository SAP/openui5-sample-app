/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ComboBoxTextFieldRenderer","sap/ui/core/Renderer","sap/ui/core/library"],function(e,t,s){"use strict";var a=t.extend(e);a.apiVersion=2;a.CSS_CLASS_COMBOBOXBASE="sapMComboBoxBase";a.getAriaDescribedBy=function(t){let s=e.getAriaDescribedBy.apply(this,arguments);if(t.getValueStateLinksForAcc().length){s=s?`${s} ${t.getValueStateLinksShortcutsId()}`:t.getValueStateLinksShortcutsId()}return s};a.getAccessibilityState=function(t){var s=e.getAccessibilityState.call(this,t),a=t.getPicker();if(a){s.controls=a.getId()}return s};a.addOuterClasses=function(t,s){e.addOuterClasses.apply(this,arguments);var i=a.CSS_CLASS_COMBOBOXBASE;t.class(i);if(!s.getEnabled()){t.class(i+"Disabled")}if(!s.getEditable()){t.class(i+"Readonly")}};a.addButtonClasses=function(t,s){e.addButtonClasses.apply(this,arguments);t.class(a.CSS_CLASS_COMBOBOXBASE+"Arrow")};return a},true);
//# sourceMappingURL=ComboBoxBaseRenderer.js.map