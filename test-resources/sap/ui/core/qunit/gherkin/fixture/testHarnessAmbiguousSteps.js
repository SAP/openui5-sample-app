/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* eslint-disable quotes */

sap.ui.define([
	"sap/ui/test/gherkin/StepDefinitions"
], function(StepDefinitions) {
	"use strict";

	return StepDefinitions.extend("test.Steps", {
		init: function() {

			// This step definition matches the test step "I should be served a coffee"
			this.register(/^I should be served a coffee$/i, function() {
				this.assert.ok(true);
			});

			// this step definition ALSO matches the test step "I should be served a coffee"!
			this.register(/^I should be served a .*$/i, function() {
				this.assert.ok(true);
			});
		}
	});

});