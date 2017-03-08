sap.ui.define([
	"sap/ui/thirdparty/qunit",
	"sap/ui/qunit/qunit-css",
	"sap/ui/qunit/qunit-junit",
	"sap/ui/core/mvc/View",
	"sap/ui/core/mvc/Controller",
	"sap/ui/todo/controller/App.controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function(qunit, qunitCss, qunitjunit, View, Controller, AppController, JSONModel/*, sinon, sinonQunit*/) {
	"use strict";

	QUnit.module("Test model modification", {

		beforeEach : function () {

			this.oAppController = new AppController();
			this.oViewStub = new View({});
			sinon.stub(Controller.prototype, "getView").returns(this.oViewStub);

			this.oModelData = {
				todos: []
			};
			this.oODataModelStub = new JSONModel(this.oModelData);
			this.oViewStub.setModel(this.oODataModelStub);
		},

		afterEach : function () {
			Controller.prototype.getView.restore();

			this.oViewStub.destroy();
		}
	});

	QUnit.test("Should add a todo element to the model", function (assert) {
		// Arrange
		// initial assumption: to-do list is empty
		assert.strictEqual(this.oODataModelStub.getObject('/todos').length, 0, "There must be no todos defined.");

		// Act
		this.oODataModelStub.setProperty('/newTodo', "new todo item");
		this.oAppController.addTodo();

		// Assumption
		assert.strictEqual(this.oODataModelStub.getObject('/todos').length, 1, "There is one new element.");
	});

	QUnit.test("Should toggle the completed items in the model", function (assert) {
		// Arrange
		var oModelData = {
			todos: [{
				"title": "Start this app",
				"completed": false
			}],
			completedCount: 0
		};
		this.oODataModelStub.setData(oModelData);


		// stub the event
		var oEvt = {
			getSource: function(){}
		};
		var oMockupSource = {
			getSelectedItems: function () {}
		};
		var aSelectedItems = new Array(3);
		sinon.stub(oEvt, "getSource").returns(oMockupSource);
		sinon.stub(oMockupSource, "getSelectedItems").returns(aSelectedItems);

		// initial assumption
		assert.strictEqual(this.oODataModelStub.getObject('/todos').length, 1, "There is one new element.");
		assert.strictEqual(this.oODataModelStub.getProperty('/completedCount'), 0, "There must be no todos defined.");

		// Act
		this.oAppController.toggleCompleted(oEvt);

		// Assumption
		assert.strictEqual(this.oODataModelStub.getProperty('/completedCount'), 3, "There must be 2 todos completed.");
	});

	QUnit.test("Should clear the completed items", function (assert) {
		// Arrange
		var oModelData = {
			todos: [{
				"title": "Start this app1",
				"completed": false
			},{
				"title": "Start this app2",
				"completed": true
			}],
			completedCount: 1
		};
		this.oODataModelStub.setData(oModelData);


		// initial assumption
		assert.strictEqual(this.oODataModelStub.getObject('/todos').length, 2, "There is one new element.");
		assert.strictEqual(this.oODataModelStub.getProperty('/completedCount'), 1, "There must be no todos defined.");

		// Act
		this.oAppController.clearCompleted();

		// Assumption
		assert.strictEqual(this.oODataModelStub.getObject('/todos').length, 1, "There is one new element.");
		assert.strictEqual(this.oODataModelStub.getProperty('/completedCount'), 0, "There must be 2 todos completed.");
	});

});
