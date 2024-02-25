/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/core/ControlBehavior","sap/ui/core/Lib"],function(e,t,i){"use strict";var n={apiVersion:2};n.render=function(n,r){var o=r._getAllButtons(),s=r.getAggregation("_invisibleAriaTexts"),l=i.getResourceBundleFor("sap.m"),a=o.length,u=t.isAccessibilityEnabled(),c=o.filter(function(e){return e.getVisible()}).length,g,f,d,p,v=1,A=function(e){return s.filter(function(t){return t.getId().indexOf(e.getId())>-1})[0]};for(f=0;f<a;f++){p=o[f];if(p.getIcon()&&p.getVisible()){d=true}}n.openStart("div",r);n.class("sapMActionSheet");if(d){n.class("sapMActionSheetMixedButtons")}var T=r.getTooltip_AsString();if(T){n.attr("title",T)}u&&n.attr("role","presentation");n.openEnd();for(f=0;f<a;f++){p=o[f];n.renderControl(o[f]);if(u&&p.getVisible()){g=A(p);if(g){g.setText(l.getText("ACTIONSHEET_BUTTON_INDEX",[v,c]));n.renderControl(g)}v++}}if(e.system.phone&&r.getShowCancelButton()){n.renderControl(r._getCancelButton())}n.close("div")};return n},true);
//# sourceMappingURL=ActionSheetRenderer.js.map