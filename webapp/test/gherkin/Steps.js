sap.ui.define([
	"sap/base/Log",
	"sap/ui/test/gherkin/StepDefinitions",
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/AggregationLengthEquals",
	"sap/ui/test/matchers/PropertyStrictEquals",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/actions/EnterText",
	"sap/ui/test/actions/Press"
], function(
	Log, StepDefinitions, Opa5,
	AggregationLengthEquals, PropertyStrictEquals, Properties, EnterText, Press
) {
	"use strict";

	const sViewName = "sap.ui.demo.todo.view.App";
	// var sAddToItemInputId = "addTodoItemInput";
	// var sSearchTodoItemsInputId = "searchTodoItemsInput";
	const sItemListId = "todoList";
	// var sClearCompletedId = "clearCompleted";

	const oOpa5 = new Opa5();

	const Steps = StepDefinitions.extend("sap.ui.demo.todo.test.gherkin.Steps", {
		init: function() {

			this.register(/^I have started the app$/i, function() {
				oOpa5.iStartMyUIComponent({
					componentConfig: {
						name: "sap.ui.demo.todo",
						async: true,
						manifest: true
					}
				});
			});

			this.register(/^I can see ([0-9]+) items? in the list$/i, function(sItemCount) {
				const iItemCount = parseInt(sItemCount, 10);
				oOpa5.waitFor({
					id: sItemListId,
					viewName: sViewName,
					matchers: [new AggregationLengthEquals({
						name: "items",
						length: iItemCount
					})],
					success: function() {
						Opa5.assert.ok(true, "The list has " + iItemCount + " item(s)");
					},
					errorMessage: "List does not have expected number of items '" + iItemCount + "'."
				});
			});

			this.register(/^I filter for (active|completed) items$/i, function(filterKey) {
				oOpa5.waitFor({
					viewName: sViewName,
					controlType: "sap.m.SegmentedButtonItem",
					matchers: [
						new Properties({ key: filterKey })
					],
					actions: [new Press()],
					errorMessage: "SegmentedButton can not be pressed"
				});
			});

		},

		closeApplication: function() {
			Log.info("Closing application");
		}
	});

	return Steps;

});
