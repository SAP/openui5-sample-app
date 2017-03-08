sap.ui.require([
	"sap/ui/thirdparty/qunit",
	"sap/ui/qunit/qunit-css",
	"sap/ui/qunit/qunit-junit",
	"sap/ui/test/Opa5",
	"sap/ui/test/opaQUnit",
	"sap/ui/todo/test/integration/TodoList"

], function (qunit, qunitCss, qunitjunit, Opa5, opaTest, TodoList) {
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
			.and.iSelectTheFirstItem();

		// Assertions
		Then.onTheTodoListPage.iShouldSeeTheFirstItemBeingCompleted().
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
			.and.iSelectTheFirstItem()
			.and.iSelectTheFirstItem(false);

		// Assertions
		Then.onTheTodoListPage.iShouldSeeTheFirstItemBeingCompleted(false).
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
			.and.iSelectTheFirstItem()
			.and.iEnterTextForNewItemAndPressEnter("second")
			.and.iEnterTextForNewItemAndPressEnter("third")
			.and.iSelectTheFirstItem();

		// Assertions
		Then.onTheTodoListPage.iShouldSeeSelectedCount(2).
			and.iTeardownMyAppFrame();
	});
});
