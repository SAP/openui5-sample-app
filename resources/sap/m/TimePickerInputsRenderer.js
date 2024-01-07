/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){var n=e.getAggregation("_inputs"),r=e.getAggregation("_buttonAmPm"),i=n&&n.length?Array(n.length-1).fill(":"):[],o;if(n){if(r){n.push(r);i.push(" ")}t.openStart("div",e);t.class("sapMTPInputsContainer");t.attr("role","application");t.attr("aria-roledescription",e._getAriaRoleDescription());t.openEnd();for(o=0;o<n.length;o++){t.renderControl(n[o]);if(i[o]){t.openStart("span");t.attr("aria-hidden","true");t.openEnd();t.text(i[o]);t.close("span")}}t.renderControl(e._getCurrentTimeButton());t.close("div")}};return t},true);
//# sourceMappingURL=TimePickerInputsRenderer.js.map