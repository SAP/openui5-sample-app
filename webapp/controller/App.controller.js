sap.ui.define([
	"sap/ui/Device",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"sap/base/strings/formatMessage",
	"sap/m/MessageToast"
], (Device, Controller, Filter, FilterOperator, JSONModel, formatMessage, MessageToast) => {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.App", {

		onInit() {
			this.aSearchFilters = [];
			this.aTabFilters = [];

			this.getView().setModel(new JSONModel({
				isMobile: Device.browser.mobile
			}), "view");
			
			// Initialize counters when data is loaded
			this.getView().attachAfterRendering(() => {
				this.onUpdateItemsLeftCount();
			});
		},

		/**
		 * Get the default model from the view
		 *
		 * @returns {sap.ui.model.json.JSONModel} The model containing the todo list, etc.
		 */
		getModel() {
			return this.getView().getModel();
		},

		/**
		 * Adds a new todo item to the bottom of the list.
		 */
		addTodo() {
			const oModel = this.getModel();
			const aTodos = this.getTodos().map((oTodo) => Object.assign({}, oTodo));
			const sNewTodo = oModel.getProperty("/newTodo");
			const sPriority = oModel.getProperty("/newTodoPriority") || "medium";

			if (!sNewTodo.trim()) {
				MessageToast.show("Inserisci un task valido!", {
					duration: 3000
				});
				return;
			}

			const newTodo = {
				id: "todo-" + Date.now(),
				title: sNewTodo,
				completed: false,
				priority: sPriority,
				createdDate: new Date().toISOString(),
				dueDate: null,
				category: "personal",
				editing: false
			};

			aTodos.push(newTodo);

			oModel.setProperty("/todos", aTodos);
			oModel.setProperty("/newTodo", "");
			oModel.setProperty("/newTodoPriority", "medium");
			
			// Update counters
			this.onUpdateItemsLeftCount();
			
			MessageToast.show("Task aggiunto con successo!", {
				duration: 3000
			});
		},

		/**
		 * Trigger removal of all completed items from the todo list.
		 */
		onClearCompleted() {
			const aTodos = this.getTodos().map((oTodo) => Object.assign({}, oTodo));
			this.removeCompletedTodos(aTodos);
			this.getModel().setProperty("/todos", aTodos);
			
			// Update counters
			this.onUpdateItemsLeftCount();
		},

		/**
		 * Removes all completed items from the given todos.
		 *
		 * @param {object[]} aTodos
		 */
		removeCompletedTodos(aTodos) {
			let i = aTodos.length;
			while (i--) {
				const oTodo = aTodos[i];
				if (oTodo.completed) {
					aTodos.splice(i, 1);
				}
			}
		},

		/**
		 * Determines the todo list
		 *
		 * @returns {object[]} The todo list
		 */
		getTodos(){
			const oModel = this.getModel();
			return oModel && oModel.getProperty("/todos") || [];
		},

		/**
		 * Updates the number of items not yet completed
		 */
		onUpdateItemsLeftCount() {
			const aTodos = this.getTodos();
			const iItemsLeft = aTodos.filter((oTodo) => oTodo.completed !== true).length;
			const iCompletedCount = aTodos.filter((oTodo) => oTodo.completed === true).length;
			
			this.getModel().setProperty("/itemsLeftCount", iItemsLeft);
			this.getModel().setProperty("/completedCount", iCompletedCount);
		},

		/**
		 * Trigger search for specific items. The removal of items is disable as long as the search is used.
		 * @param {sap.ui.base.Event} oEvent Input changed event
		 */
		onSearch(oEvent) {
			const oModel = this.getModel();

			// First reset current filters
			this.aSearchFilters = [];

			// add filter for search
			this.sSearchQuery = oEvent.getSource().getValue();
			if (this.sSearchQuery && this.sSearchQuery.length > 0) {
				oModel.setProperty("/itemsRemovable", false);
				const filter = new Filter("title", FilterOperator.Contains, this.sSearchQuery);
				this.aSearchFilters.push(filter);
			} else {
				oModel.setProperty("/itemsRemovable", true);
			}

			this._applyListFilters();
		},

		onFilter(oEvent) {
			// First reset current filters
			this.aTabFilters = [];

			// add filter for search
			this.sFilterKey = oEvent.getParameter("item").getKey();

			switch (this.sFilterKey) {
				case "active":
					this.aTabFilters.push(new Filter("completed", FilterOperator.EQ, false));
					break;
				case "completed":
					this.aTabFilters.push(new Filter("completed", FilterOperator.EQ, true));
					break;
				case "all":
				default:
				// Don't use any filter
			}

			this._applyListFilters();
		},

		_applyListFilters() {
			const oList = this.byId("todoList");
			const oBinding = oList.getBinding("items");

			oBinding.filter(this.aSearchFilters.concat(this.aTabFilters), "todos");

			const sI18nKey = this.getI18NKey(this.sFilterKey, this.sSearchQuery);

			this.byId("filterToolbar").setVisible(!!sI18nKey);
			if (sI18nKey) {
				this.byId("filterLabel").bindProperty("text", {
					path: sI18nKey,
					model: "i18n",
					formatter: (textWithPlaceholder) => {
						return formatMessage(textWithPlaceholder, [this.sSearchQuery]);
					}
				});
			}
		},

		getI18NKey(sFilterKey, sSearchQuery) {
			if (!sFilterKey || sFilterKey === "all") {
				return sSearchQuery ? "ITEMS_CONTAINING" : undefined;
			} else if (sFilterKey === "active") {
				return "ACTIVE_ITEMS" + (sSearchQuery ? "_CONTAINING" : "");
			} else {
				return "COMPLETED_ITEMS" + (sSearchQuery ? "_CONTAINING" : "");
			}
		},

		/**
		 * Enable editing mode for a todo item
		 * @param {sap.ui.base.Event} oEvent Button press event
		 */
		onEditTodo(oEvent) {
			const oBindingContext = oEvent.getSource().getBindingContext();
			const sPath = oBindingContext.getPath();
			const oModel = this.getModel();
			
			// Set editing mode to true
			oModel.setProperty(sPath + "/editing", true);
		},

		/**
		 * Save changes to a todo item
		 * @param {sap.ui.base.Event} oEvent Input change event
		 */
		onSaveTodo(oEvent) {
			const oBindingContext = oEvent.getSource().getBindingContext();
			const sPath = oBindingContext.getPath();
			const oModel = this.getModel();
			const sNewTitle = oEvent.getParameter("value");

			if (!sNewTitle.trim()) {
				MessageToast.show("Il titolo non può essere vuoto!", {
					duration: 3000
				});
				// Reset to original value
				oEvent.getSource().setValue(oModel.getProperty(sPath + "/title"));
				return;
			}

			// Update title and exit editing mode
			oModel.setProperty(sPath + "/title", sNewTitle);
			oModel.setProperty(sPath + "/editing", false);
			
			MessageToast.show("Task aggiornato!", {
				duration: 3000
			});
		},

		/**
		 * Cancel editing mode
		 * @param {sap.ui.base.Event} oEvent Button press event
		 */
		onCancelEdit(oEvent) {
			const oBindingContext = oEvent.getSource().getBindingContext();
			const sPath = oBindingContext.getPath();
			const oModel = this.getModel();
			
			// Exit editing mode without saving
			oModel.setProperty(sPath + "/editing", false);
		},

		/**
		 * Delete a todo item
		 * @param {sap.ui.base.Event} oEvent Button press event
		 */
		onDeleteTodo(oEvent) {
			const oBindingContext = oEvent.getSource().getBindingContext();
			const sPath = oBindingContext.getPath();
			const oModel = this.getModel();
			const aTodos = this.getTodos().map((oTodo) => Object.assign({}, oTodo));
			const iIndex = parseInt(sPath.split("/").pop());

			aTodos.splice(iIndex, 1);
			oModel.setProperty("/todos", aTodos);
			
			// Update counters
			this.onUpdateItemsLeftCount();
			
			MessageToast.show("Task eliminato!", {
				duration: 3000
			});
		},

		/**
		 * Format priority color
		 * @param {string} sPriority Priority level
		 * @returns {string} Color value
		 */
		formatPriorityColor(sPriority) {
			const oPriorities = {
				"high": "#FF5722",
				"medium": "#FF9800", 
				"low": "#4CAF50"
			};
			return oPriorities[sPriority] || "#9E9E9E";
		},

		/**
		 * Format priority text
		 * @param {string} sPriority Priority level
		 * @returns {string} Priority text
		 */
		formatPriorityText(sPriority) {
			const oPriorities = {
				"high": "Alta",
				"medium": "Media",
				"low": "Bassa"
			};
			return oPriorities[sPriority] || "Non definita";
		},

		/**
		 * Format date for display
		 * @param {string} sDate ISO date string
		 * @returns {string} Formatted date
		 */
		formatDate(sDate) {
			if (!sDate) return "";
			const oDate = new Date(sDate);
			return oDate.toLocaleDateString("it-IT", {
				day: "2-digit",
				month: "2-digit", 
				year: "numeric"
			});
		},

		/**
		 * Toggle todo completion status
		 * @param {sap.ui.base.Event} oEvent Checkbox select event
		 */
		onToggleComplete(oEvent) {
			const oBindingContext = oEvent.getSource().getBindingContext();
			const sPath = oBindingContext.getPath();
			const oModel = this.getModel();
			const bCompleted = oEvent.getParameter("selected");
			
			oModel.setProperty(sPath + "/completed", bCompleted);
			
			// Update items left count
			this.onUpdateItemsLeftCount();
			
			MessageToast.show(bCompleted ? "Task completato!" : "Task riattivato!", {
				duration: 3000
			});
		},

		/**
		 * Format completed count text
		 * @param {number} iCount Number of completed items
		 * @returns {string} Formatted text
		 */
		formatCompletedCount(iCount) {
			return `Task completati: ${iCount || 0}`;
		}

	});

});
