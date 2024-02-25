/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","sap/ui/Device","sap/ui/core/Lib"],function(e,t,i){"use strict";var s={apiVersion:2};s.render=function(s,n){var a=n.getSliders(),r=n.getLabelText()||"",l=i.getResourceBundleFor("sap.m"),o,d=e.getRTL();s.openStart("div",n);s.class("sapMWSContainer");s.style("width",n.getWidth());s.style("height",n.getHeight());s.accessibilityState(n,{label:(r+" "+l.getText("TIMEPICKER_SCREENREADER_TAG")).trim()});s.openEnd();if(!t.system.desktop){s.openStart("div",n.getId()+"-label");s.class("sapMWSContainerLabel");s.openEnd();s.style("display","block");s.text(r);s.close("div")}if(d){for(o=a.length-1;o>=0;o--){s.renderControl(a[o])}}else{for(o=0;o<a.length;o++){s.renderControl(a[o])}}s.close("div")};return s},true);
//# sourceMappingURL=WheelSliderContainerRenderer.js.map