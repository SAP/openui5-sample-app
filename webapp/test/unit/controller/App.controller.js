/* global QUnit, sinon */

sap.ui.define([
	"sap/ui/demo/todo/controller/App.controller",
	"sap/ui/model/json/JSONModel"
], (AppController, JSONModel) => {
	"use strict";

	let oAppController;

	QUnit.module("App.controller.js", {

		beforeEach() {
			oAppController = new AppController();
		},

		afterEach() {
			oAppController.destroy();
		}
	});

	QUnit.test("getI18NKey", (assert) => {
		assert.strictEqual(oAppController.getI18NKey(), undefined);
		assert.strictEqual(oAppController.getI18NKey(undefined, "My Todo"), "ITEMS_CONTAINING");
		assert.strictEqual(oAppController.getI18NKey("all"), undefined);
		assert.strictEqual(oAppController.getI18NKey("active"), "ACTIVE_ITEMS");
		assert.strictEqual(oAppController.getI18NKey("active", "My Todo"), "ACTIVE_ITEMS_CONTAINING");
		assert.strictEqual(oAppController.getI18NKey("completed"), "COMPLETED_ITEMS");
		assert.strictEqual(oAppController.getI18NKey("completed", "My Todo"), "COMPLETED_ITEMS_CONTAINING");
	});


	QUnit.test("removeCompletedTodos", (assert) => {
		const aTodos = [{title: "My Todo", completed: false}, {title: "My Todo 2", completed: false}];
		oAppController.removeCompletedTodos(aTodos);
		assert.deepEqual(aTodos, [{title: "My Todo", completed: false}, {title: "My Todo 2", completed: false}]);

		aTodos[1].completed = true;
		oAppController.removeCompletedTodos(aTodos)
		assert.deepEqual(aTodos, [{title: "My Todo", completed: false}]);
	});


	QUnit.test("getTodos", (assert) => {
		// Prepare
		const oViewStub = {};
		oViewStub.getModel = () => {
			return new JSONModel();
		};
		const oGetViewStub = sinon.stub(oAppController, "getView");
		oGetViewStub.returns(oViewStub);

		// Act
		assert.deepEqual(oAppController.getTodos(), []);

		// Clean-up
		oGetViewStub.restore();
	});
});
