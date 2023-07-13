/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/core/Configuration"],function(e,t){"use strict";var i={apiVersion:2};i.render=function(i,n){var r=n._getAllButtons(),o=n.getAggregation("_invisibleAriaTexts"),s=sap.ui.getCore().getLibraryResourceBundle("sap.m"),a=r.length,l=t.getAccessibility(),u=r.filter(function(e){return e.getVisible()}).length,g,c,f,d,p=1,A=function(e){return o.filter(function(t){return t.getId().indexOf(e.getId())>-1})[0]};for(c=0;c<a;c++){d=r[c];if(d.getIcon()&&d.getVisible()){f=true}}i.openStart("div",n);i.class("sapMActionSheet");if(f){i.class("sapMActionSheetMixedButtons")}var C=n.getTooltip_AsString();if(C){i.attr("title",C)}l&&i.attr("role","presentation");i.openEnd();for(c=0;c<a;c++){d=r[c];i.renderControl(r[c]);if(l&&d.getVisible()){g=A(d);if(g){g.setText(s.getText("ACTIONSHEET_BUTTON_INDEX",[p,u]));i.renderControl(g)}p++}}if(e.system.phone&&n.getShowCancelButton()){i.renderControl(n._getCancelButton())}i.close("div")};return i},true);
//# sourceMappingURL=ActionSheetRenderer.js.map