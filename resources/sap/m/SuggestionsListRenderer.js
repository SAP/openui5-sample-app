/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element"],function(e){"use strict";var t={apiVersion:2};t.render=function(e,t){e.openStart("ul",t).class("sapMSuL").class("sapMSelectList").style("width",t.getWidth()).style("max-width",t.getMaxWidth());e.accessibilityState({role:"listbox",multiselectable:false});e.openEnd();this.renderItems(e,t);e.close("ul")};t.renderItems=function(t,s){var n;var a=s.getSelectedItemIndex();try{n=e.getElementById(s.getParentInput()).getValue()}catch(e){n=""}s.getItems().forEach(function(e,s){e.render(t,e,n,s===a)})};return t});
//# sourceMappingURL=SuggestionsListRenderer.js.map