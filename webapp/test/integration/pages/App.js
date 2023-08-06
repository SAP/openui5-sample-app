sap.ui.require([
	"sap/ui/Device",
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/AggregationLengthEquals",
	"sap/ui/test/matchers/PropertyStrictEquals",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/actions/EnterText",
	"sap/ui/test/actions/Press"
], (Device, Opa5, AggregationLengthEquals, PropertyStrictEquals, Properties, EnterText, Press) => {
	"use strict";

	const sViewName = "sap.ui.demo.todo.view.App";
	const sAddToItemInputId = "addTodoItemInput";
	const sSearchTodoItemsInputId = "searchTodoItemsInput";
	const sItemListId = "todoList";
	const sToolbarId = Device.browser.mobile ? "toolbar-footer" : "toolbar";
	const sClearCompletedId = Device.browser.mobile ? "clearCompleted-footer" : "clearCompleted";

	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
				iEnterTextForNewItemAndPressEnter(text) {
					return this.waitFor({
						id: sAddToItemInputId,
						viewName: sViewName,
						actions: [new EnterText({ text: text })],
						errorMessage: "The text cannot be entered"
					});
				},
				iEnterTextForSearchAndPressEnter(text) {
					this._waitForToolbar();
					return this.waitFor({
						id: sSearchTodoItemsInputId,
						viewName: sViewName,
						actions: [new EnterText({ text: text })],
						errorMessage: "The text cannot be entered"
					});
				},
				iSelectTheLastItem(bSelected) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						// selectionChange
						actions: [(oList) => {
							const iLength = oList.getItems().length;
							const oListItem = oList.getItems()[iLength - 1].getContent()[0].getItems()[0];
							this._triggerCheckboxSelection(oListItem, bSelected);
						}],
						errorMessage: "Last checkbox cannot be pressed"
					});
				},
				iSelectAllItems(bSelected) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						actions: [(oList) => {

							oList.getItems().forEach((oListItem) => {
								const oCheckbox = oListItem.getContent()[0].getItems()[0];
								this._triggerCheckboxSelection(oCheckbox, bSelected)

							});
						}],
						errorMessage: "checkbox cannot be pressed"
					});
				},
				_triggerCheckboxSelection(oListItem, bSelected) {
					//determine existing selection state and ensure that it becomes <code>bSelected</code>
					if (oListItem.getSelected() && !bSelected || !oListItem.getSelected() && bSelected) {
						const oPress = new Press();
						//search within the CustomListItem for the checkbox id ending with 'selectMulti-CB'
						oPress.controlAdapters["sap.m.CustomListItem"] = "selectMulti-CB";
						oPress.executeOn(oListItem);
					}
				},
				iClearTheCompletedItems() {
					this._waitForToolbar();
					return this.waitFor({
						id: sClearCompletedId,
						viewName: sViewName,
						actions: [new Press()],
						errorMessage: "checkbox cannot be pressed"
					});
				},
				iFilterForItems(filterKey) {
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
				_waitForToolbar() {
					this.waitFor({
						id: sToolbarId,
						viewName: sViewName,
						success: (oToolbar) => {
							return this.waitFor({
								controlType: "sap.m.ToggleButton",
								visible: false,
								success: (aToggleButtons) => {
									const oToggleButton = aToggleButtons.find((oButton) => oButton.getId().startsWith(oToolbar.getId()) && oButton.getParent() === oToolbar)
									if (oToggleButton) {
										this.waitFor({
											id: oToggleButton.getId(),
											actions: new Press()
										});
									} else {
										Opa5.assert.ok(true, "The overflow toggle button is not present");
									}
								}
							})
						}
					});
				}
			},

			assertions: {
				iShouldSeeTheItemBeingAdded(iItemCount, sLastAddedText) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						matchers: [new AggregationLengthEquals({
							name: "items",
							length: iItemCount
						}), (oControl) => {
							const iLength = oControl.getItems().length;
							const oInput = oControl.getItems()[iLength - 1].getContent()[0].getItems()[1].getItems()[0];
							return new PropertyStrictEquals({
								name: "text",
								value: sLastAddedText
							}).isMatching(oInput);
						}],
						success() {
							Opa5.assert.ok(true, "The table has " + iItemCount + " item(s), with '" + sLastAddedText + "' as last item");
						},
						errorMessage: "List does not have expected entry '" + sLastAddedText + "'."
					});
				},
				iShouldSeeTheLastItemBeingCompleted(bSelected) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						matchers: [(oControl) => {
							const iLength = oControl.getItems().length;
							const oCheckbox = oControl.getItems()[iLength - 1].getContent()[0].getItems()[0];
							return bSelected && oCheckbox.getSelected() || !bSelected && !oCheckbox.getSelected();
						}],
						success() {
							Opa5.assert.ok(true, "The last item is marked as completed");
						},
						errorMessage: "The last item is not disabled."
					});
				},
				iShouldSeeAllButOneItemBeingRemoved(sLastItemText) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						matchers: [new AggregationLengthEquals({
							name: "items",
							length: 1
						}), (oControl) => {
							const oInput = oControl.getItems()[0].getContent()[0].getItems()[1].getItems()[0];
							return new PropertyStrictEquals({
								name: "text",
								value: sLastItemText
							}).isMatching(oInput);
						}],
						success() {
							Opa5.assert.ok(true, "The table has 1 item, with '" + sLastItemText + "' as Last item");
						},
						errorMessage: "List does not have expected entry '" + sLastItemText + "'."
					});
				},
				iShouldSeeItemCount(iItemCount) {
					return this.waitFor({
						id: sItemListId,
						viewName: sViewName,
						matchers: [new AggregationLengthEquals({
							name: "items",
							length: iItemCount
						})],
						success() {
							Opa5.assert.ok(true, "The table has " + iItemCount + " item(s)");
						},
						errorMessage: "List does not have expected number of items '" + iItemCount + "'."
					});
				}
			}

		}
	});

});
