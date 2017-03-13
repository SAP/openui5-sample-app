/**
 * Tests the to-do list functionality regarding actions
 */
sap.ui.require([
	'sap/ui/test/Opa5',
	'sap/ui/test/matchers/AggregationLengthEquals',
	'sap/ui/test/matchers/AggregationContainsPropertyEqual',
	'sap/ui/test/matchers/PropertyStrictEquals',
	'sap/ui/test/actions/EnterText',
	'sap/ui/test/actions/Press'
],
	function(Opa5, AggregationLengthEquals, AggregationContainsPropertyEqual, PropertyStrictEquals, EnterText, Press) {
		"use strict";
		var sViewName = "todo.view.App",
			sAddToItemInputId = "addTodoItemInput",
			sItemListId = "todoList",
			sClearCompletedId = "idClearCompleted",
			sSelectedLabelId = "idSelectedLabel";

		Opa5.createPageObjects({
			onTheTodoListPage: {
				actions: {
					iEnterTextForNewItemAndPressEnter: function(text) {
						text = text || "my test";
						return this.waitFor({
							id: sAddToItemInputId,
							viewName: sViewName,
							actions: [new EnterText({ text: text })],
							errorMessage: "The text cannot be entered"
						});
					},
					iSelectTheLastItem: function(bSelected) {
						bSelected = bSelected || true;
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							// selectionChange
							actions: [function(oList) {
								var iLength = oList.getItems().length;
								var oListItem = oList.getItems()[iLength - 1];
								this._triggerCheckboxSelection(oListItem, bSelected);
							}.bind(this)],
							errorMessage: "Last checkbox cannot be pressed"
						});
					},
					iSelectAllItems: function(bSelected) {
						bSelected = bSelected || true;
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							actions: [function(oList) {

								oList.getItems().forEach(function(oListItem) {
									this._triggerCheckboxSelection(oListItem, bSelected)

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
						return this.waitFor({
							id: sClearCompletedId,
							viewName: sViewName,
							actions: [new Press()],
							errorMessage: "checkbox cannot be pressed"
						});
					}
				},
				assertions: {
					iShouldSeeTheItemBeingAdded: function(iItemCount, sLastAddedText) {
						iItemCount = iItemCount || 0;
						sLastAddedText = sLastAddedText || "my test";
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							matchers: [new AggregationLengthEquals({
								name: "items",
								length: iItemCount
							}), function(oControl) {
								var iLength = oControl.getItems().length;
								var oInput = oControl.getItems()[iLength - 1].getContent()[0];
								return new PropertyStrictEquals({
									name: "value",
									value: sLastAddedText
								}).isMatching(oInput);
							}],
							success: function() {
								Opa5.assert.ok(true, "The table has " + iItemCount + " item, with '" + sLastAddedText + "' as last item");
							},
							errorMessage: "List does not have expected entry '" + sLastAddedText + "'."
						});
					},
					iShouldSeeTheLastItemBeingCompleted: function(bSelected) {
						bSelected = bSelected || true;
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							matchers: [function(oControl) {
								var iLength = oControl.getItems().length;
								var oInput = oControl.getItems()[iLength - 1].getContent()[0];
								return bSelected && !oInput.getEnabled() || !bSelected && oInput.getEnabled();
							}],
							success: function() {
								Opa5.assert.ok(true, "The last item is marked as completed");
							},
							errorMessage: "The last item is not disabled."
						});
					},
					iShouldSeeAllButOneItemBeingRemoved: function(sLastItemText) {
						sLastItemText = sLastItemText || "my test";
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							matchers: [new AggregationLengthEquals({
								name: "items",
								length: 1
							}), function(oControl) {
								var oInput = oControl.getItems()[0].getContent()[0];
								return new PropertyStrictEquals({
									name: "value",
									value: sLastItemText
								}).isMatching(oInput);
							}],
							success: function() {
								Opa5.assert.ok(true, "The table has 1 item, with '" + sLastItemText + "' as Last item");
							},
							errorMessage: "List does not have expected entry '" + sLastItemText + "'."
						});
					},
					iShouldSeeSelectedCount: function(iNumberCompleted) {
						iNumberCompleted = iNumberCompleted || 0;
						return this.waitFor({
							id: sSelectedLabelId,
							viewName: sViewName,
							matchers: [new PropertyStrictEquals({
								name: "text",
								value: iNumberCompleted + " completed"
							})
							],
							success: function() {
								Opa5.assert.ok(true, "" + iNumberCompleted + " items are selected");
							},
							errorMessage: "Items are not selected."
						});
					}
				}
			}
		});
	});
