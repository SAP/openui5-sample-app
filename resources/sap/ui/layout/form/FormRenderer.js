/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./FormHelper","sap/base/Log"],function(e,t){"use strict";var s={apiVersion:2};s.render=function(s,i){const r=i.getLayout();const a={role:r&&r.hasLabelledContainers(i)?"region":"form"};s.openStart("div",i).class("sapUiForm").class("sapUiFormLblColon").attr("data-sap-ui-customfastnavgroup","true");var o=e.addFormClass();if(o){s.class(o)}if(i.getEditable()){s.class("sapUiFormEdit");s.class("sapUiFormEdit-CTX")}else{a.readonly=""}if(i.getWidth()){s.style("width",i.getWidth())}if(i.getTooltip_AsString()){s.attr("title",i.getTooltip_AsString())}const n=r?.getRenderer().getTitleId(i)||i._sSuggestedTitleId;if(n){a["labelledby"]={value:n,append:true}}s.accessibilityState(i,a);s.openEnd();if(r){s.renderControl(r)}else{t.warning('Form "'+i.getId()+'" - Layout missing!',"Renderer","Form")}s.close("div")};return s},true);
//# sourceMappingURL=FormRenderer.js.map