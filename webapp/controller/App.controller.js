sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
	'use strict';

	return Controller.extend('todo.controller.App', {

		/**
		 * Adds a new to-do item to the bottom of the list.
		 */
		addTodo: function() {
			var oModel = this.getView().getModel();
			var aTodos = oModel.getObject('/todos');
			aTodos.push({
				title: oModel.getProperty('/newTodo'),
				completed: false
			});
			oModel.setProperty('/newTodo', '');
		},

		/**
		 * Marks an item in the to-do-list as completed.
		 * @param {Object} oEvt - List item selected event.
		 */
		toggleCompleted: function(oEvt) {
			var iCount = this.getView().getModel().getProperty('/completedCount');
			var iModification = oEvt.getParameters().selected ? 1 : -1;
			this._updateCompletedCount(iCount + iModification);
		},

		/**
		 * Removes all completed items from the to-do list.
		 * @param {Object} oEvt - Button pressed event.
		 */
		clearCompleted: function(oEvt) {
			var aTodos = this.getView().getModel().getObject('/todos');
			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					aTodos.splice(i, 1);
				}
			}
			this._updateCompletedCount(0);
		},

		_updateCompletedCount: function(iCount) {
			var oModel = this.getView().getModel();
			oModel.setProperty('/completedCount', iCount);
			oModel.setProperty('/someCompleted', iCount > 0);
		},

		/**
		 * Trigger search for specific items. The removal of items is disable as long as the search is used.
		 * @param {Object} oEvt - Input changed event.
		 */
		onSearch: function(oEvt) {
			var oModel = this.getView().getModel();

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
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
