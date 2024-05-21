sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/base/strings/formatMessage",
	"sap/ui/core/BarColor",
	"sap/ui/demo/todo/util/Helper",
], (Controller, Filter, FilterOperator, formatMessage, BarColor, Helper) => {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.App", {

		onInit() {
			this.aSearchFilters = [];
			this.aTabFilters = [];
			this.BarColor = BarColor;

			this.getView().setModel(new sap.ui.model.json.JSONModel({
				isMobile: sap.ui.Device.browser.mobile
			}), "view");
		},

		onAfterRendering() {
			const avatarDOM = jQuery("#container-todo---app--avatar-profile");
			const avatarCtr = avatarDOM.control(0);
			avatarCtr.setSrc(Helper.resolvePath('./img/logo_ui5.png'));

			sap.ui.require(["sap/m/Button"], (Button) => {
				const clearBtn = new Button({
					id: "clearCompleted",
					enabled: "{/itemsRemovable}",
					icon: "sap-icon://delete",
					text: "{i18n>CLEAR_COMPLETED}",
					tap: this.onClearCompleted.bind(this),
				});

				this.byId("toolbar").addContent(clearBtn);
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

			aTodos.push({
				title: oModel.getProperty("/newTodo"),
				completed: false
			});

			oModel.setProperty("/todos", aTodos);
			oModel.setProperty("/newTodo", "");
		},

		/**
		 * Trigger removal of all completed items from the todo list.
		 */
		onClearCompleted() {
			const aTodos = this.getTodos().map((oTodo) => Object.assign({}, oTodo));
			this.removeCompletedTodos(aTodos);
			this.getModel().setProperty("/todos", aTodos);
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
			const iItemsLeft = this.getTodos().filter((oTodo) => oTodo.completed !== true).length;
			this.getModel().setProperty("/itemsLeftCount", iItemsLeft);
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
			const oList = sap.ui.getCore().byId("container-todo---app--todoList");
			// const oList = this.byId("todoList");
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
		}
	});

});
