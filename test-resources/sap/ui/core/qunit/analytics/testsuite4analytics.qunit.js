/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/*global QUnit */

QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/core/Core",
	"sap/ui/core/qunit/analytics/AnalyticalBinding.qunit",
	"sap/ui/core/qunit/analytics/odata4analytics.qunit"
	// AnalyticalTable.qunit requires sinon 4; run testsuite.models.qunit.js instead
	// "sap/ui/table/qunit/AnalyticalTable.qunit"
], function (Core) {
	"use strict";
	Core.ready().then(function() {
		QUnit.start();
	});
});

