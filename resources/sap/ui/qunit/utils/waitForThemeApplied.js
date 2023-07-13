/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(e){"use strict";var i=function(){if(typeof sap==="undefined"||!sap.ui||typeof sap.ui.getCore!=="function"){return Promise.reject(new Error("UI5 Core must be loaded and booted before using the sap/ui/qunit/utils/waitForThemeApplied module"))}return new Promise(function(i){if(e.isThemeApplied()){i()}else{var n=function(){i();e.detachThemeChanged(n)};e.attachThemeChanged(n)}})};return i});
//# sourceMappingURL=waitForThemeApplied.js.map