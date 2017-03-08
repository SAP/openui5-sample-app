sap.ui.define([
		"sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"]
, function(Controller, JSONModel, Filter, FilterOperator) {
	'use strict';

	return Controller.extend('todo.controller.App', {

		addTodo: function () {
			var oModel = this.getView().getModel();
			var aTodos = oModel.getObject('/todos');
			aTodos.unshift({
				title: oModel.getProperty('/newTodo'),
				completed: false
			});
			oModel.setProperty('/newTodo', '');
		},
		toggleCompleted: function (oEvt) {
			this._setCompletedCount(oEvt.getSource().getSelectedItems().length);
		},

		clearCompleted: function (oEvt) {
			var aTodos = this.getView().getModel().getObject('/todos');
			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					aTodos.splice(i, 1);
				}
			}
			this._setCompletedCount(0);
		},
		_setCompletedCount: function (iCount) {
			var oModel = this.getView().getModel();
			oModel.setProperty('/completedCount', iCount);
			oModel.setProperty('/someCompleted', iCount > 0);
		},
		onSearch: function (oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("title", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var oList = this.getView().byId("todoList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "todos");
		}

	});

});
