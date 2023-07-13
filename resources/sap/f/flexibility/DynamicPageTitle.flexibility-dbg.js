/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/changeHandler/CombineButtons",
	"sap/m/changeHandler/SplitMenuButton",
	"sap/f/changeHandler/MoveDynamicPageTitleActions"
], function (CombineButtonsHandler, SplitMenuButtonHandler, MoveDynamicPageTitleActions) {
	"use strict";

	return {
		"hideControl": "default",
		"unhideControl": "default",
		"combineButtons": {
			"changeHandler": CombineButtonsHandler,
			"layers": {
				"CUSTOMER": false
			}
		},
		"splitMenuButton": {
			"changeHandler": SplitMenuButtonHandler,
			"layers": {
				"CUSTOMER": false
			}
		},
		"moveActions": {
			"changeHandler": MoveDynamicPageTitleActions
		},
		"moveControls": "default"
	};
}, /* bExport= */ true);
