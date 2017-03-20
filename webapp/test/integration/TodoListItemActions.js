sap.ui.require([
	"sap/ui/qunit/qunit-junit",
	"sap/ui/test/Opa5",
	"sap/ui/test/opaQUnit",
	"sap/ui/todo/test/integration/TodoList"

], function (qunitjunit, Opa5, opaTest, TodoList) {
	"use strict";

	QUnit.module("Actions");

	opaTest("should add an item", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyAppInAFrame("../../index.html");

		//Actions
		When.onTheTodoListPage.iEnterTextForNewItemAndPressEnter();

		// Assertions
		Then.onTheTodoListPage.iShouldSeeTheItemBeingAdded(3).
			and.iTeardownMyAppFrame();
	});


	opaTest("should remove a completed item", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyAppInAFrame("../../index.html");

		//Actions
		When.onTheTodoListPage.iEnterTextForNewItemAndPressEnter()
			.and.iSelectAllItems()
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter();

		// Assertions
		Then.onTheTodoListPage.iShouldSeeAllButOneItemBeingRemoved().
			and.iTeardownMyAppFrame();
	});

	opaTest("should select an item", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyAppInAFrame("../../index.html");

		//Actions
		When.onTheTodoListPage.iEnterTextForNewItemAndPressEnter()
			.and.iSelectTheLastItem();

		// Assertions
		Then.onTheTodoListPage.iShouldSeeTheLastItemBeingCompleted().
			and.iTeardownMyAppFrame();
	});

	opaTest("should unselect an item", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyAppInAFrame("../../index.html");

		//Actions
		When.onTheTodoListPage.iEnterTextForNewItemAndPressEnter()
			.and.iSelectAllItems()
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter()
			.and.iSelectTheLastItem()
			.and.iSelectTheLastItem(false);

		// Assertions
		Then.onTheTodoListPage.iShouldSeeTheLastItemBeingCompleted(false).
			and.iTeardownMyAppFrame();
	});

	opaTest("should show correct count for completed items", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyAppInAFrame("../../index.html");

		//Actions
		When.onTheTodoListPage.iEnterTextForNewItemAndPressEnter()
			.and.iSelectAllItems()
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter("first")
			.and.iSelectTheLastItem()
			.and.iEnterTextForNewItemAndPressEnter("second")
			.and.iEnterTextForNewItemAndPressEnter("third")
			.and.iSelectTheLastItem();

		// Assertions
		Then.onTheTodoListPage.iShouldSeeSelectedCount(2).
		and.iTeardownMyAppFrame();
	});
});
