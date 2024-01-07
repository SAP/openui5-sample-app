/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/core/Theming"],(e,r)=>{"use strict";const t=()=>{let t=false;e.ready(()=>{t=true});if(!t){return Promise.reject(new Error("UI5 Core must be loaded and booted before using the sap/ui/qunit/utils/waitForThemeApplied module"))}return new Promise(e=>{r.attachAppliedOnce(e)})};return t});
//# sourceMappingURL=waitForThemeApplied.js.map