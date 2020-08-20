/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/test/gherkin/opa5TestHarness",
		"sap/ui/demo/todo/test/gherkin/Steps"
	], function(opa5TestHarness, Steps) {

		opa5TestHarness.test({
			featurePath: "sap.ui.demo.todo.test.gherkin.Filter",
			steps: Steps
		});

		QUnit.start();
	});
});
