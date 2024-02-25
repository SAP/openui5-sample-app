/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","sap/ui/Device","sap/ui/core/Lib"],function(e,t,i){"use strict";var n={apiVersion:2};n.render=function(n,r){var s=r.getAggregation("_columns"),a=r.getLabelText()||"",o=i.getResourceBundleFor("sap.m"),l,c=e.getRTL();n.openStart("div",r);n.class("sapMTimePickerContainer");n.style("width",r.getWidth());n.style("height",r.getHeight());n.accessibilityState(r,{label:(a+" "+o.getText("TIMEPICKER_SCREENREADER_TAG")).trim()});n.openEnd();if(!t.system.desktop){n.openStart("div",r.getId()+"-label");n.class("sapMTimePickerContainerLabel");n.openEnd();n.text(a);n.close("div")}if(c){for(l=s.length-1;l>=0;l--){n.renderControl(s[l])}}else{for(l=0;l<s.length;l++){n.renderControl(s[l])}}n.close("div")};return n},true);
//# sourceMappingURL=TimePickerSlidersRenderer.js.map