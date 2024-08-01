/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./InputBaseRenderer","sap/ui/core/Renderer"],function(t,e){"use strict";var a=e.extend(t);a.apiVersion=2;a.CSS_CLASS_COMBOBOXTEXTFIELD="sapMComboBoxTextField";a.writeInnerAttributes=function(t,e){t.attr("role","combobox");t.attr("aria-haspopup","dialog");t.attr("aria-autocomplete","both");t.attr("aria-expanded","false");t.attr("autocomplete","off");t.attr("autocorrect","off");t.attr("autocapitalize","off");t.attr("type","text")};a.getAriaRole=function(){};a.addOuterStyles=function(t,e){t.style("max-width",e.getMaxWidth())};a.writeIcons=function(t,e){t.openStart("div").attr("tabindex","-1").attr("aria-hidden","true").class("sapMInputBaseIconContainer").openEnd();e.forEach(t.renderControl,t);t.close("div")};return a},true);
//# sourceMappingURL=ComboBoxTextFieldRenderer.js.map