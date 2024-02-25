/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ComboBoxBaseRenderer","./ComboBoxTextFieldRenderer","sap/ui/core/Lib","sap/ui/core/Renderer"],function(e,t,r,i){"use strict";var n=i.extend(e);n.apiVersion=2;n.CSS_CLASS_MULTICOMBOBOX="sapMMultiComboBox";n.addOuterClasses=function(t,r){e.addOuterClasses.apply(this,arguments);t.class(n.CSS_CLASS_MULTICOMBOBOX);if(r.getProperty("hasSelection")){t.class("sapMMultiComboBoxHasToken")}};n.getAriaDescribedBy=function(e){var r=t.getAriaDescribedBy.apply(this,arguments),i=e.getAggregation("tokenizer"),n=i&&i.getTokensInfoId();return(r?r+" ":"")+n};n.getAccessibilityState=function(t){var i=e.getAccessibilityState.apply(this,arguments),n=r.getResourceBundleFor("sap.m");i.roledescription=n.getText("MULTICOMBOBOX_ARIA_ROLE_DESCRIPTION");return i};n.prependInnerContent=function(e,t){e.renderControl(t.getAggregation("tokenizer"))};return n},true);
//# sourceMappingURL=MultiComboBoxRenderer.js.map