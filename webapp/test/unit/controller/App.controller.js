/* global QUnit, sinon*/

sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/mvc/Controller",
	"sap/ui/demo/todo/controller/App.controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/Device"
], (ManagedObject, Controller, AppController, JSONModel, ResourceModel, Device) => {
	"use strict";

	let oAppController;
	let oViewStub;
	let oJSONModelStub;
	let oListStub;

	QUnit.module("Test init state", {

		beforeEach() {
			oAppController = new AppController();
			oViewStub = new ManagedObject({});
			sinon.stub(Controller.prototype, "getView").returns(oViewStub);

			oJSONModelStub = new JSONModel({
				todos: []
			});
			oViewStub.setModel(oJSONModelStub);
		},

		afterEach() {
			Controller.prototype.getView.restore();

			oViewStub.destroy();
		}
	});

	QUnit.test("Check controller's initial state", (assert) => {
		// Act
		oAppController.onInit();

		// Assert
		assert.deepEqual(oAppController.aSearchFilters, [], "Search filters have been instantiated empty");
		assert.deepEqual(oAppController.aTabFilters, [], "Tab filters have been instantiated empty");

		const oModel = oAppController.getView().getModel("view").getData();
		assert.deepEqual(oModel, {isMobile: Device.browser.mobile, filterText: undefined});
	});

	QUnit.module("Test model modification", {

		beforeEach() {
			oAppController = new AppController();
			oViewStub = new ManagedObject({});
			sinon.stub(Controller.prototype, "getView").returns(oViewStub);

			oJSONModelStub = new JSONModel({
				todos: []
			});
			oViewStub.setModel(oJSONModelStub);
		},

		afterEach() {
			Controller.prototype.getView.restore();

			oViewStub.destroy();
		}
	});

	QUnit.test("Should add a todo element to the model", (assert) => {
		// Arrange
		// initial assumption: to-do list is empty
		assert.strictEqual(oJSONModelStub.getObject("/todos").length, 0, "There must be no todos defined.");

		// Act
		oJSONModelStub.setProperty("/todos", [{title: "Completed item", completed: true}]);
		oJSONModelStub.setProperty("/newTodo", "new todo item");
		oAppController.addTodo();

		// Assumption
		assert.strictEqual(oJSONModelStub.getObject("/todos").length, 2, "There are couple items in ToDo list.");
	});

	QUnit.test("Should toggle the completed items in the model", (assert) => {
		// Arrange
		const oModelData = {
			todos: [{
				"title": "Start this app",
				"completed": false
			}],
			itemsLeftCount: 1
		};
		oJSONModelStub.setData(oModelData);

		// initial assumption
		assert.strictEqual(oJSONModelStub.getObject("/todos").length, 1, "There is one item.");
		assert.strictEqual(oJSONModelStub.getProperty("/itemsLeftCount"), 1, "There is one item left.");

		// Act
		oJSONModelStub.setProperty("/todos/0/completed", true);
		oAppController.updateItemsLeftCount();

		// Assumption
		assert.strictEqual(oJSONModelStub.getProperty("/itemsLeftCount"), 0, "There is no item left.");
	});

	QUnit.test("Should clear the completed items", (assert) => {
		// Arrange
		const oModelData = {
			todos: [{
				"title": "Start this app1",
				"completed": false
			}, {
				"title": "Start this app2",
				"completed": true
			}],
			itemsLeftCount: 1
		};
		oJSONModelStub.setData(oModelData);


		// initial assumption
		assert.strictEqual(oJSONModelStub.getObject("/todos").length, 2, "There are two items.");
		assert.strictEqual(oJSONModelStub.getProperty("/itemsLeftCount"), 1, "There is no item left.");

		// Act
		oAppController.clearCompleted();
		oAppController.updateItemsLeftCount();

		// Assumption
		assert.strictEqual(oJSONModelStub.getObject("/todos").length, 1, "There is one item left.");
		assert.strictEqual(oJSONModelStub.getProperty("/itemsLeftCount"), 1, "There is one item left.");
	});

	QUnit.test("Should update items left count when no todos are loaded, yet", (assert) => {
		// Arrange
		const oModelData = {};
		oJSONModelStub.setData(oModelData);

		// initial assumption
		assert.strictEqual(oJSONModelStub.getObject("/todos"), undefined, "There are no items.");
		assert.strictEqual(oJSONModelStub.getProperty("/itemsLeftCount"), undefined, "Items left is not set");

		// Act
		oAppController.updateItemsLeftCount();

		// Assumption
		assert.strictEqual(oJSONModelStub.getProperty("/itemsLeftCount"), 0, "There is no item left.");
	});

		QUnit.module("Test search", {
			beforeEach() {
				oAppController = new AppController();
				oViewStub = new ManagedObject({});
				oListStub = new ManagedObject({});
				sinon
					.stub(Controller.prototype, "getView")
					.returns(oViewStub);
				sinon
					.stub(Controller.prototype, "byId")
					.returns(oListStub);
				sinon
					.stub(oListStub, "getBinding")
					.returns({ filter(){} });

				oJSONModelStub = new JSONModel({
					todos: [],
				});
				oViewStub.setModel(oJSONModelStub);
				oViewStub.setModel(new JSONModel({}), "view");
				oViewStub.setModel(
					new ResourceModel({ bundleName: "sap.ui.demo.todo.i18n.i18n" }),
					"i18n"
				);
			},

			afterEach() {
				Controller.prototype.getView.restore();
				Controller.prototype.byId.restore();

				oViewStub.destroy();
				oListStub.destroy();
			},
		});

		QUnit.test("Empty search", (assert) => {
			// Setup
			const oEvent = { getSource() {
				return { getValue() { return ""; } };
			}};

			// Act
			oAppController.onSearch(oEvent);

			// Assert
			assert.strictEqual(
				oAppController.sSearchQuery,
				"",
				"The search term is an empty string"
			);
			assert.deepEqual(
				oAppController.aSearchFilters,
				[],
				"Search filters are empty"
			);
			assert.strictEqual(
				oAppController
					.getView()
					.getModel()
					.getProperty("/itemsRemovable"),
				true,
				"Button toggle is properly set"
			);
		});

		QUnit.test("Do a search", (assert) => {
			// Setup
			const sSearchQuery = "ToDo item";
			const oEvent = { getSource() {
				return { getValue() {
					return sSearchQuery;
				}};
			}};

			// Act
			oAppController.onSearch(oEvent);

			// Assert
			assert.strictEqual(
				oAppController.sSearchQuery,
				sSearchQuery,
				"The search term is an empty string"
			);
			assert.strictEqual(
				oAppController.aSearchFilters.length,
				1,
				"A search filter is constructed"
			);
			assert.strictEqual(
				oAppController
					.getView()
					.getModel()
					.getProperty("/itemsRemovable"),
				false,
				"Button toggle is properly set"
			);
		});

		QUnit.module("Test filtering", {
			beforeEach() {
				oAppController = new AppController();
				oViewStub = new ManagedObject({});
				oListStub = new ManagedObject({});
				sinon
					.stub(Controller.prototype, "getView")
					.returns(oViewStub);
				sinon
					.stub(Controller.prototype, "byId")
					.returns(oListStub);
				sinon
					.stub(oListStub, "getBinding")
					.returns({ filter() {} });

				oJSONModelStub = new JSONModel({
					todos: [],
				});
				oViewStub.setModel(oJSONModelStub);
				oViewStub.setModel(new JSONModel({}), "view");
				oViewStub.setModel(
					new ResourceModel({ bundleName: "sap.ui.demo.todo.i18n.i18n" }),
					"i18n"
				);
			},

			afterEach() {
				Controller.prototype.getView.restore();
				Controller.prototype.byId.restore();

				oViewStub.destroy();
				oListStub.destroy();
			},
		});

		QUnit.test("Toggle filters", (assert) => {
			// Setup
			let sKey = "";
			const oEvent = { getParameter() {
				return { getKey() { return sKey; } };
			}};

			// Act
			oAppController.aSearchFilters = [];
			oAppController.onFilter(oEvent);

			// Assert
			assert.strictEqual(
				oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				oAppController.aTabFilters.length,
				0,
				"Empty key == no filter"
			);

			// Act
			sKey = "active"; // alters oEvent
			oAppController.onFilter(oEvent);
			// Assert
			assert.strictEqual(
				oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				oAppController.aTabFilters.length,
				1,
				"A filter is constructed"
			);

			// Act
			sKey = "completed"; // alters oEvent
			oAppController.onFilter(oEvent);
			// Assert
			assert.strictEqual(
				oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				oAppController.aTabFilters.length,
				1,
				"A filter is constructed"
			);

			// Act
			sKey = "completed"; // alters oEvent
			oAppController.sSearchQuery = "test";
			oAppController.onFilter(oEvent);
			// Assert
			assert.strictEqual(
				oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				oAppController.aTabFilters.length,
				1,
				"A filter is constructed"
			);

			// Act
			sKey = "all"; // alters oEvent
			oAppController.onFilter(oEvent);
			// Assert
			assert.strictEqual(
				oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				oAppController.aTabFilters.length,
				0,
				"Cleans up filters"
			);
		});
	}
);
