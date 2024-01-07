/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/changeHandler/SelectIconTabBarFilter"
], function (SelectIconTabBarFilter) {
	"use strict";

	return {
		"moveControls": "default",
		"selectIconTabBarFilter": {
			"changeHandler": SelectIconTabBarFilter,
			"layers": {
				"USER": true
			}
		}
	};
});