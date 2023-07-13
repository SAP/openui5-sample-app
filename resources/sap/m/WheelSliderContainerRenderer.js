/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/core/Configuration"],function(e,t){"use strict";var i={apiVersion:2};i.render=function(i,r){var s=r.getSliders(),n=r.getLabelText()||"",a=sap.ui.getCore().getLibraryResourceBundle("sap.m"),o,l=t.getRTL();i.openStart("div",r);i.class("sapMWSContainer");i.style("width",r.getWidth());i.style("height",r.getHeight());i.accessibilityState(r,{label:(n+" "+a.getText("TIMEPICKER_SCREENREADER_TAG")).trim()});i.openEnd();if(!e.system.desktop){i.openStart("div",r.getId()+"-label");i.class("sapMWSContainerLabel");i.openEnd();i.style("display","block");i.text(n);i.close("div")}if(l){for(o=s.length-1;o>=0;o--){i.renderControl(s[o])}}else{for(o=0;o<s.length;o++){i.renderControl(s[o])}}i.close("div")};return i},true);
//# sourceMappingURL=WheelSliderContainerRenderer.js.map