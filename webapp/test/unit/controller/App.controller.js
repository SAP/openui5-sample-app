sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/mvc/Controller",
	"sap/ui/demo/todo/controller/App.controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/Device"
], function(ManagedObject, Controller, AppController, JSONModel, ResourceModel, Device) {
	"use strict";
	
	QUnit.module("Test init state", {

		beforeEach: function() {
			this.oAppController = new AppController();
			this.oViewStub = new ManagedObject({});
			sinon.stub(Controller.prototype, "getView").returns(this.oViewStub);

			this.oJSONModelStub = new JSONModel({
				todos: []
			});
			this.oViewStub.setModel(this.oJSONModelStub);
		},

		afterEach: function() {
			Controller.prototype.getView.restore();

			this.oViewStub.destroy();
		}
	});
	
	QUnit.test("Check controller's initial state", function (assert) {
		// Act
		this.oAppController.onInit();
		
		// Assert
		assert.deepEqual(this.oAppController.aSearchFilters, [], "Search filters have been instantiated empty");
		assert.deepEqual(this.oAppController.aTabFilters, [], "Tab filters have been instantiated empty");
		
		var oModel = this.oAppController.getView().getModel("view").getData();
		assert.deepEqual(oModel, {isMobile: Device.browser.mobile, filterText: undefined});
	});

	QUnit.module("Test model modification", {

		beforeEach: function() {
			this.oAppController = new AppController();
			this.oViewStub = new ManagedObject({});
			sinon.stub(Controller.prototype, "getView").returns(this.oViewStub);

			this.oJSONModelStub = new JSONModel({
				todos: []
			});
			this.oViewStub.setModel(this.oJSONModelStub);
		},

		afterEach: function() {
			Controller.prototype.getView.restore();

			this.oViewStub.destroy();
		}
	});

	QUnit.test("Should add a todo element to the model", function(assert) {
		// Arrange
		// initial assumption: to-do list is empty
		assert.strictEqual(this.oJSONModelStub.getObject("/todos").length, 0, "There must be no todos defined.");

		// Act
		this.oJSONModelStub.setProperty("/todos", [{title: "Completed item", completed: true}]);
		this.oJSONModelStub.setProperty("/newTodo", "new todo item");
		this.oAppController.addTodo();

		// Assumption
		assert.strictEqual(this.oJSONModelStub.getObject("/todos").length, 2, "There are couple items in ToDo list.");
	});

	QUnit.test("Should toggle the completed items in the model", function(assert) {
		// Arrange
		var oModelData = {
			todos: [{
				"title": "Start this app",
				"completed": false
			}],
			itemsLeftCount: 1
		};
		this.oJSONModelStub.setData(oModelData);

		// initial assumption
		assert.strictEqual(this.oJSONModelStub.getObject("/todos").length, 1, "There is one item.");
		assert.strictEqual(this.oJSONModelStub.getProperty("/itemsLeftCount"), 1, "There is one item left.");

		// Act
		this.oJSONModelStub.setProperty("/todos/0/completed", true);
		this.oAppController.updateItemsLeftCount();

		// Assumption
		assert.strictEqual(this.oJSONModelStub.getProperty("/itemsLeftCount"), 0, "There is no item left.");
	});

	QUnit.test("Should clear the completed items", function(assert) {
		// Arrange
		var oModelData = {
			todos: [{
				"title": "Start this app1",
				"completed": false
			}, {
				"title": "Start this app2",
				"completed": true
			}],
			itemsLeftCount: 1
		};
		this.oJSONModelStub.setData(oModelData);


		// initial assumption
		assert.strictEqual(this.oJSONModelStub.getObject("/todos").length, 2, "There are two items.");
		assert.strictEqual(this.oJSONModelStub.getProperty("/itemsLeftCount"), 1, "There is no item left.");

		// Act
		this.oAppController.clearCompleted();
		this.oAppController.updateItemsLeftCount();

		// Assumption
		assert.strictEqual(this.oJSONModelStub.getObject("/todos").length, 1, "There is one item left.");
		assert.strictEqual(this.oJSONModelStub.getProperty("/itemsLeftCount"), 1, "There is one item left.");
	});

	QUnit.test("Should update items left count when no todos are loaded, yet", function(assert) {
		// Arrange
		var oModelData = {};
		this.oJSONModelStub.setData(oModelData);

		// initial assumption
		assert.strictEqual(this.oJSONModelStub.getObject("/todos"), undefined, "There are no items.");
		assert.strictEqual(this.oJSONModelStub.getProperty("/itemsLeftCount"), undefined, "Items left is not set");

		// Act
		this.oAppController.updateItemsLeftCount();

		// Assumption
		assert.strictEqual(this.oJSONModelStub.getProperty("/itemsLeftCount"), 0, "There is no item left.");
	});

		QUnit.module("Test search", {
			beforeEach: function () {
				this.oAppController = new AppController();
				this.oViewStub = new ManagedObject({});
				this.oListStub = new ManagedObject({});
				sinon
					.stub(Controller.prototype, "getView")
					.returns(this.oViewStub);
				sinon
					.stub(Controller.prototype, "byId")
					.returns(this.oListStub);
				sinon
					.stub(this.oListStub, "getBinding")
					.returns({ filter: function () {} });

				this.oJSONModelStub = new JSONModel({
					todos: [],
				});
				this.oViewStub.setModel(this.oJSONModelStub);
				this.oViewStub.setModel(new JSONModel({}), "view");
				this.oViewStub.setModel(
					new ResourceModel({ bundleName: "i18n_en_US" }),
					"i18n"
				);
			},

			afterEach: function () {
				Controller.prototype.getView.restore();
				Controller.prototype.byId.restore();

				this.oViewStub.destroy();
				this.oListStub.destroy();
			},
		});

		QUnit.test("Empty search", function (assert) {
			// Setup
			var oEvent = { getSource: function () {
				return { getValue: function () { return ""; } };
			}};

			// Act
			this.oAppController.onSearch(oEvent);

			// Assert
			assert.strictEqual(
				this.oAppController.sSearchQuery,
				"",
				"The search term is an empty string"
			);
			assert.deepEqual(
				this.oAppController.aSearchFilters,
				[],
				"Search filters are empty"
			);
			assert.strictEqual(
				this.oAppController
					.getView()
					.getModel()
					.getProperty("/itemsRemovable"),
				true,
				"Button toggle is properly set"
			);
		});

		QUnit.test("Do a search", function (assert) {
			// Setup
			var sSearchQuery = "ToDo item";
			var oEvent = { getSource: function () {
				return { getValue: function () {
					return sSearchQuery;
				}};
			}};

			// Act
			this.oAppController.onSearch(oEvent);

			// Assert
			assert.strictEqual(
				this.oAppController.sSearchQuery,
				sSearchQuery,
				"The search term is an empty string"
			);
			assert.strictEqual(
				this.oAppController.aSearchFilters.length,
				1,
				"A search filter is constructed"
			);
			assert.strictEqual(
				this.oAppController
					.getView()
					.getModel()
					.getProperty("/itemsRemovable"),
				false,
				"Button toggle is properly set"
			);
		});

		QUnit.module("Test filtering", {
			beforeEach: function () {
				this.oAppController = new AppController();
				this.oViewStub = new ManagedObject({});
				this.oListStub = new ManagedObject({});
				sinon
					.stub(Controller.prototype, "getView")
					.returns(this.oViewStub);
				sinon
					.stub(Controller.prototype, "byId")
					.returns(this.oListStub);
				sinon
					.stub(this.oListStub, "getBinding")
					.returns({ filter: function () {} });

				this.oJSONModelStub = new JSONModel({
					todos: [],
				});
				this.oViewStub.setModel(this.oJSONModelStub);
				this.oViewStub.setModel(new JSONModel({}), "view");
				this.oViewStub.setModel(
					new ResourceModel({ bundleName: "i18n_en_US" }),
					"i18n"
				);
			},

			afterEach: function () {
				Controller.prototype.getView.restore();
				Controller.prototype.byId.restore();

				this.oViewStub.destroy();
				this.oListStub.destroy();
			},
		});

		QUnit.test("Toggle filters", function (assert) {
			// Setup
			var sKey = "";
			var oEvent = { getParameter: function () {
				return { getKey: function () { return sKey; } };
			}};

			// Act
			this.oAppController.aSearchFilters = [];
			this.oAppController.onFilter(oEvent);

			// Assert
			assert.strictEqual(
				this.oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				this.oAppController.aTabFilters.length,
				0,
				"Empty key == no filter"
			);

			// Act
			sKey = "active"; // alters oEvent
			this.oAppController.onFilter(oEvent);
			// Assert
			assert.strictEqual(
				this.oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				this.oAppController.aTabFilters.length,
				1,
				"A filter is constructed"
			);

			// Act
			sKey = "completed"; // alters oEvent
			this.oAppController.onFilter(oEvent);
			// Assert
			assert.strictEqual(
				this.oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				this.oAppController.aTabFilters.length,
				1,
				"A filter is constructed"
			);

			// Act
			sKey = "completed"; // alters oEvent
			this.oAppController.sSearchQuery = "test";
			this.oAppController.onFilter(oEvent);
			// Assert
			assert.strictEqual(
				this.oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				this.oAppController.aTabFilters.length,
				1,
				"A filter is constructed"
			);

			// Act
			sKey = "all"; // alters oEvent
			this.oAppController.onFilter(oEvent);
			// Assert
			assert.strictEqual(
				this.oAppController.sFilterKey,
				sKey,
				"Correct filter key is applied"
			);
			assert.strictEqual(
				this.oAppController.aTabFilters.length,
				0,
				"Cleans up filters"
			);
		});
	}
);
