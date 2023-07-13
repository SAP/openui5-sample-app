/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/core/Configuration"],function(e,t){"use strict";var i={apiVersion:2};i.render=function(i,r){var n=r.getAggregation("_columns"),s=r.getLabelText()||"",a=sap.ui.getCore().getLibraryResourceBundle("sap.m"),o,l=t.getRTL();i.openStart("div",r);i.class("sapMTimePickerContainer");i.style("width",r.getWidth());i.style("height",r.getHeight());i.accessibilityState(r,{label:(s+" "+a.getText("TIMEPICKER_SCREENREADER_TAG")).trim()});i.openEnd();if(!e.system.desktop){i.openStart("div",r.getId()+"-label");i.class("sapMTimePickerContainerLabel");i.openEnd();i.text(s);i.close("div")}if(l){for(o=n.length-1;o>=0;o--){i.renderControl(n[o])}}else{for(o=0;o<n.length;o++){i.renderControl(n[o])}}i.close("div")};return i},true);
//# sourceMappingURL=TimePickerSlidersRenderer.js.map