sap.ui.require([
	"sap/ui/Device",
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/AggregationLengthEquals",
	"sap/ui/test/matchers/PropertyStrictEquals",
	"sap/ui/test/matchers/Ancestor",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/actions/EnterText",
	"sap/ui/test/actions/Press"
], function (Device, Opa5, AggregationLengthEquals, PropertyStrictEquals, Ancestor, Properties, EnterText, Press) {
	"use strict";

	var sViewName = "sap.ui.demo.todo.view.App";
	var sAddToItemInputId = "addTodoItemInput";
	var sSearchTodoItemsInputId = "searchTodoItemsInput";
	var sItemListId = "todoList";
	var sClearCompletedId = Device.browser.mobile ? "clearCompleted-footer" : "clearCompleted";

	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
				iEnterTextForNewItemAndPressEnter: function(text) {
					return this.waitFor({
						id: sAddToItemInputId,
						viewName: sViewName,
						actions: [new EnterText({ text: text })],
						errorMessage: "The text cannot be entered"
					});
				},
				iEnterTextForSearchAndPressEnter: function(text) {
					return this.waitFor({
						id: sSearchTodoItemsInputId,
						viewName: sViewName,
						actions: [new EnterText({ text: text })],
						errorMessage: "The text cannot be entered"
					});
				},
				iSelectTheLastItem: function(bSelected) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						// selectionChange
						actions: [function(oList) {
							var iLength = oList.getItems().length;
							var oListItem = oList.getItems()[iLength - 1].getContent()[0].getItems()[0];
							this._triggerCheckboxSelection(oListItem, bSelected);
						}.bind(this)],
						errorMessage: "Last checkbox cannot be pressed"
					});
				},
				iSelectAllItems: function(bSelected) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						actions: [function(oList) {

							oList.getItems().forEach(function(oListItem) {
								var oCheckbox = oListItem.getContent()[0].getItems()[0];
								this._triggerCheckboxSelection(oCheckbox, bSelected)

							}.bind(this));
						}.bind(this)],
						errorMessage: "checkbox cannot be pressed"
					});
				},
				_triggerCheckboxSelection: function(oListItem, bSelected) {
					//determine existing selection state and ensure that it becomes <code>bSelected</code>
					if (oListItem.getSelected() && !bSelected || !oListItem.getSelected() && bSelected) {
						var oPress = new Press();
						//search within the CustomListItem for the checkbox id ending with 'selectMulti-CB'
						oPress.controlAdapters["sap.m.CustomListItem"] = "selectMulti-CB";
						oPress.executeOn(oListItem);
					}
				},
				iClearTheCompletedItems: function() {
					this._waitForToolbar();
					return this.waitFor({
						id: sClearCompletedId,
						viewName: sViewName,
						actions: [new Press()],
						errorMessage: "checkbox cannot be pressed"
					});
				},
				iFilterForItems: function(filterKey) {
					this._waitForToolbar();
					return this.waitFor({
						viewName: sViewName,
						controlType: "sap.m.SegmentedButtonItem",
						matchers: [
							new Properties({ key: filterKey })
						],
						actions: [new Press()],
						errorMessage: "SegmentedButton can not be pressed"
					});
				},
				_waitForToolbar: function() {
					this.waitFor({
						viewName: sViewName,
						controlType: "sap.m.OverflowToolbar",
						success: function (oToolbar) {
							return this.waitFor({
								controlType: "sap.m.ToggleButton",
								visible: false, // look for ANY toggle button in the toolbar
								matchers: new Ancestor(oToolbar),
								success: function (aToggleButton) {
									if (aToggleButton[0].$().length) {
										// if the button exists, press on it
										this.waitFor({
											controlType: "sap.m.ToggleButton",
											matchers: new Ancestor(oToolbar),
											actions: new Press()
										});
									} else {
										Opa5.assert.ok(true, "The overflow toggle button is not present");
									}
								}
							})
						}
					});
					// this.waitFor({
					// 	viewName: sViewName,
					// 	controlType: "sap.m.OverflowToolbar",
					// 	matchers: [
					// 		new Properties({ visible: true })
					// 	],
					// 	actions: [function(oToolbar) {



					// 	}.bind(this)],
					// 	errorMessage: "OverflowToolbar is not visible"
					// });
				}
			},

			assertions: {
				iShouldSeeTheItemBeingAdded: function(iItemCount, sLastAddedText) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						matchers: [new AggregationLengthEquals({
							name: "items",
							length: iItemCount
						}), function(oControl) {
							var iLength = oControl.getItems().length;
							var oInput = oControl.getItems()[iLength - 1].getContent()[0].getItems()[1].getItems()[0];
							return new PropertyStrictEquals({
								name: "text",
								value: sLastAddedText
							}).isMatching(oInput);
						}],
						success: function() {
							Opa5.assert.ok(true, "The table has " + iItemCount + " item(s), with '" + sLastAddedText + "' as last item");
						},
						errorMessage: "List does not have expected entry '" + sLastAddedText + "'."
					});
				},
				iShouldSeeTheLastItemBeingCompleted: function(bSelected) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						matchers: [function(oControl) {
							var iLength = oControl.getItems().length;
							var oCheckbox = oControl.getItems()[iLength - 1].getContent()[0].getItems()[0];
							return bSelected && oCheckbox.getSelected() || !bSelected && !oCheckbox.getSelected();
						}],
						success: function() {
							Opa5.assert.ok(true, "The last item is marked as completed");
						},
						errorMessage: "The last item is not disabled."
					});
				},
				iShouldSeeAllButOneItemBeingRemoved: function(sLastItemText) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						matchers: [new AggregationLengthEquals({
							name: "items",
							length: 1
						}), function(oControl) {
							var oInput = oControl.getItems()[0].getContent()[0].getItems()[1].getItems()[0];
							return new PropertyStrictEquals({
								name: "text",
								value: sLastItemText
							}).isMatching(oInput);
						}],
						success: function() {
							Opa5.assert.ok(true, "The table has 1 item, with '" + sLastItemText + "' as Last item");
						},
						errorMessage: "List does not have expected entry '" + sLastItemText + "'."
					});
				},
				iShouldSeeItemCount: function(iItemCount) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						matchers: [new AggregationLengthEquals({
							name: "items",
							length: iItemCount
						})],
						success: function() {
							Opa5.assert.ok(true, "The table has " + iItemCount + " item(s)");
						},
						errorMessage: "List does not have expected number of items '" + iItemCount + "'."
					});
				}
			}

		}
	});

});
