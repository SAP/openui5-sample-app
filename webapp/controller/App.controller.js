sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
	'use strict';

	return Controller.extend('sap.ui.demo.todo.controller.App', {

		/**
		 * Adds a new todo item to the bottom of the list.
		 */
		addTodo: function() {
			var oModel = this.getView().getModel();
			var aTodos = jQuery.extend(true, [], oModel.getProperty('/todos'));

			aTodos.push({
				title: oModel.getProperty('/newTodo'),
				completed: false
			});

			oModel.setProperty('/todos', aTodos);
			oModel.setProperty('/newTodo', '');
		},

		/**
		 * Removes all completed items from the todo list.
		 */
		clearCompleted: function() {
			var oModel = this.getView().getModel();
			var aTodos = jQuery.extend(true, [], oModel.getProperty('/todos'));

			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					aTodos.splice(i, 1);
				}
			}

			oModel.setProperty('/todos', aTodos);
		},

		/**
		 * Updates the number of completed items in the model.
		 */
		updateCompletedCount: function() {
			var oModel = this.getView().getModel();
			var aTodos = oModel.getProperty('/todos') || [];

			var iCompleted = aTodos.filter(function(oTodo) {
				return oTodo.completed === true;
			}).length;

			oModel.setProperty('/completedCount', iCompleted);
		},

		/**
		 * Trigger search for specific items. The removal of items is disable as long as the search is used.
		 * @param {sap.ui.base.Event} oEvent Input changed event
		 */
		onSearch: function(oEvent) {
			var oModel = this.getView().getModel();

			// add filter for search
			var aFilters = [];
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				oModel.setProperty('/itemsRemovable', false);
				var filter = new Filter("title", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			} else {
				oModel.setProperty('/itemsRemovable', true);
			}

			// update list binding
			var oList = this.byId("todoList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "todos");
		}

	});

});
