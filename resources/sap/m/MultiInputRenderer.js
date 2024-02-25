/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./InputRenderer","sap/ui/core/Lib","sap/ui/core/Renderer"],function(e,t,n){"use strict";var r=n.extend(e);r.apiVersion=2;r.prependInnerContent=function(e,t){e.renderControl(t.getAggregation("tokenizer"))};r.addOuterClasses=function(t,n){e.addOuterClasses.apply(this,arguments);t.class("sapMMultiInput");if(n.getTokens().length>0){t.class("sapMMultiInputHasTokens")}};r.getAriaDescribedBy=function(t){var n=e.getAriaDescribedBy.apply(this,arguments),r=t.getAggregation("tokenizer")&&t.getAggregation("tokenizer").getTokensInfoId();if(n){n=n+" "+r}else{n=r}return n};r.getAccessibilityState=function(n){var r=e.getAccessibilityState.apply(this,arguments),i=t.getResourceBundleFor("sap.m");r.roledescription=i.getText("MULTIINPUT_ARIA_ROLE_DESCRIPTION");return r};return r},true);
//# sourceMappingURL=MultiInputRenderer.js.map