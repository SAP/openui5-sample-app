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
	function (Opa5, AggregationLengthEquals, AggregationContainsPropertyEqual, PropertyStrictEquals, EnterText, Press) {
		"use strict";
		var sViewName = "todo.view.App",
			sAddToItemInputId = "addTodoItemInput",
			sItemListId = "todoList",
			sClearCompletedId = "idClearCompleted",
			sSelectedLabelId = "idSelectedLabel"
			;
		Opa5.createPageObjects({
			onTheTodoListPage: {
				actions: {
					iEnterTextForNewItemAndPressEnter: function (text) {
						text = text || "my test";
						return this.waitFor({
							id: sAddToItemInputId,
							viewName: sViewName,
							actions: [new EnterText({text: text})],
							errorMessage: "The text cannot be entered"
						});
					},
					iSelectTheFirstItem: function (bSelected) {
						bSelected = bSelected || true;
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							// selectionChange
							actions: [function(oList){
								var oListItem = oList.getItems()[0];
								this._triggerCheckboxSelection(oListItem, bSelected);
							}.bind(this)],
							errorMessage: "first checkbox cannot be pressed"
						});
					},
					iSelectAllItems: function (bSelected) {
						bSelected = bSelected || true;
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							actions: [function(oList){

								oList.getItems().forEach(function (oListItem) {
									this._triggerCheckboxSelection(oListItem, bSelected)

								}.bind(this));
							}.bind(this)],
							errorMessage: "checkbox cannot be pressed"
						});
					},
					_triggerCheckboxSelection: function (oListItem, bSelected) {
						//determine existing selection state and ensure that it becomes <code>bSelected</code>
						if (oListItem.getSelected() && !bSelected || !oListItem.getSelected() && bSelected) {
							var press = new Press();
							//search within the CustomListItem for the checkbox id ending with 'selectMulti-CB'
							press.controlAdapters["sap.m.CustomListItem"] = "selectMulti-CB";
							press.executeOn(oListItem);
						}
					},
					iClearTheCompletedItems: function () {
						return this.waitFor({
							id: sClearCompletedId,
							viewName: sViewName,
							actions: [new Press()],
							errorMessage: "checkbox cannot be pressed"
						});
					}
				},
				assertions: {
					iShouldSeeTheItemBeingAdded: function (iItemCount, sFirstItemText) {
						iItemCount = iItemCount || 0;
						sFirstItemText = sFirstItemText || "my test";
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							matchers:  [new AggregationLengthEquals({
								name: "items",
								length: iItemCount
							}), function(oControl) {
								var oInput = oControl.getItems()[0].getContent()[0];
								return new PropertyStrictEquals({
									name: "value",
									value: sFirstItemText
								}).isMatching(oInput);
							}],
							success: function () {
								Opa5.assert.ok(true, "The table has "+iItemCount+" item, with '"+sFirstItemText+"' as first item");
							},
							errorMessage: "List does not have expected entry '"+sFirstItemText+"'."
						});
					},
					iShouldSeeTheFirstItemBeingCompleted: function (bSelected) {
						bSelected = bSelected || true;
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							matchers:  [function(oControl) {
								var oInput = oControl.getItems()[0].getContent()[0];
								return bSelected && !oInput.getEnabled() || !bSelected && oInput.getEnabled();
							}],
							success: function () {
								Opa5.assert.ok(true, "The first item is marked as completed");
							},
							errorMessage: "The first item is not disabled."
						});
					},
					iShouldSeeAllButOneItemBeingRemoved: function (sFirstItemText) {
						sFirstItemText = sFirstItemText || "my test";
						return this.waitFor({
							id: sItemListId,
							viewName: sViewName,
							matchers:  [new AggregationLengthEquals({
								name: "items",
								length: 1
							}), function(oControl) {
								var oInput = oControl.getItems()[0].getContent()[0];
								return new PropertyStrictEquals({
									name: "value",
									value: sFirstItemText
								}).isMatching(oInput);
							}],
							success: function () {
								Opa5.assert.ok(true, "The table has 1 item, with '"+sFirstItemText+"' as first item");
							},
							errorMessage: "List does not have expected entry '"+sFirstItemText+"'."
						});
					},
					iShouldSeeSelectedCount: function (numberCompleted) {
						numberCompleted = numberCompleted || 0;
						return this.waitFor({
							id: sSelectedLabelId,
							viewName: sViewName,
							matchers:  [new PropertyStrictEquals({
									name: "text",
									value: numberCompleted+" completed"
								})
							],
							success: function () {
								Opa5.assert.ok(true, ""+numberCompleted+" items are selected");
							},
							errorMessage: "Items are not selected."
						});
					}
				}
			}
		});
	});
