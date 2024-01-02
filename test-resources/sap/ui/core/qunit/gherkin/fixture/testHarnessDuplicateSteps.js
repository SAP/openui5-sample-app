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

			this.register(/^duplicate regex$/i, function() {
				this.assert.ok(true);
			});

			// this second call will fail!
			this.register(/^duplicate regex$/i, function() {
				this.assert.ok(true);
			});
		}
	});

});