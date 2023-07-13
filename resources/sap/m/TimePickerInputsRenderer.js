/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){var r=e.getAggregation("_inputs"),n=e.getAggregation("_buttonAmPm"),i=e._getTimeSeparators(e._getDisplayFormatPattern()),a,o;if(r){if(n){r.push(n)}t.openStart("div",e);t.class("sapMTPInputsContainer");t.attr("role","application");t.attr("aria-roledescription",e._getAriaRoleDescription());t.openEnd();for(o=0;o<i.length;o++){if(o>0||i[o]!==""){a=i[o];if(a===undefined){a=""}t.openStart("span");t.attr("aria-hidden","true");t.openEnd();t.text(a);t.close("span")}r[o]&&t.renderControl(r[o])}t.renderControl(e._getCurrentTimeButton());t.close("div")}};return t},true);
//# sourceMappingURL=TimePickerInputsRenderer.js.map