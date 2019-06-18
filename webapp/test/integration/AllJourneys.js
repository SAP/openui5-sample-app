sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/demo/todo/test/integration/arrangements/Startup",
	"sap/ui/demo/todo/test/integration/TodoListJourney",
	"sap/ui/demo/todo/test/integration/SearchJourney",
	"sap/ui/demo/todo/test/integration/FilterJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		pollingInterval: 1,
		extensions: ["sap/ui/core/support/RuleEngineOpaExtension"],
		appParams: {
			"sap-ui-support": "true,silent"
		},
		assertions: new Opa5({
			iShouldNotHaveAnySupportRuleFailures: function() {
				return this.waitFor({
					success: function() {
						Opa5.assert.noRuleFailures({
							failOnAnyRuleIssues: true,
							executionScope: {
								type: 'global'
							}
						});
					}
				});
			},
			iShouldGetSupportRuleReport: function() {
				return this.waitFor({
					success: function() {
						Opa5.assert.getFinalReport();
					}
				});
			}
		})
	});

	QUnit.module("Support Assistant");
	opaTest("Final Report", function(Given, When, Then) {
		Then.iShouldGetSupportRuleReport();
	})

});
