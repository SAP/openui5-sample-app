sap.ui.define([
	"sap/ui/Device",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel"
],
/**
 * @param {sap.ui.Device} Device
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 * @param {typeof sap.ui.model.Filter} Filter
 * @param {typeof sap.ui.model.FilterOperator} FilterOperator
 * @param {typeof sap.ui.model.json.JSONModel} JSONModel
 */
function(Device, Controller, Filter, FilterOperator, JSONModel) {
	"use strict";

	/**
	 * @typedef TodoItem
	 * @property {string} title
	 * @property {boolean} completed
	 */

	class AppController extends Controller {

		/**
		 * @param {string | object[]} sName
		 */
		constructor(sName) {
			super(sName);
			/** @type {sap.ui.model.Filter[]} */
			this.aSearchFilters = [];
			/** @type {sap.ui.model.Filter[]} */
			this.aTabFilters = [];
		}

		/**
		 * @returns {sap.ui.model.json.JSONModel}
		 */
		getTodoDataModel() {
			return /** @type {sap.ui.model.json.JSONModel} */ (this.getView().getModel());
		}

		/**
		 * @returns {sap.ui.model.json.JSONModel}
		 */
		getViewModel() {
			return /** @type {sap.ui.model.json.JSONModel} */ (this.getView().getModel("view"));
		}

		/**
		 * @returns {import('sap/base/i18n/ResourceBundle').default}
		 */
		getI18nResourceBundle() {
			const oResourceModel = /** @type {sap.ui.model.resource.ResourceModel} */ (this.getView().getModel("i18n"));
			return /** @type {import('sap/base/i18n/ResourceBundle').default} */ (oResourceModel.getResourceBundle());
		}

		/**
		 * @param {string} path
		 * @param {sap.ui.model.FilterOperator} operator
		 * @param {any} value
		 * @returns {sap.ui.model.Filter}
		 */
		createFilter(path, operator, value) {
			return new Filter({
				path,
				operator,
				value1: value,

				/** TS-TODO: those parameters should be optional */
				test: /** @type {function} */ (/** @type {unknown} */ (undefined)),
				comparator: /** @type {function} */ (/** @type {unknown} */ (undefined)),
				filters: /** @type {sap.ui.model.Filter[]} */ (/** @type {unknown} */ (undefined)),
			});
		}

		onInit() {
			this.getView().setModel(new JSONModel({
				isMobile: Device.browser.mobile,
				filterText: undefined
			}), "view");
		}

		/**
		 * Adds a new todo item to the bottom of the list.
		 */
		addTodo() {
			var oModel = this.getTodoDataModel();
			var aTodos = /** @type {TodoItem[]} */ (/** @type {unknown} */ (oModel.getProperty("/todos"))).map(function (oTodo) { return Object.assign({}, oTodo); });

			aTodos.push({
				title: oModel.getProperty("/newTodo"),
				completed: false
			});

			oModel.setProperty("/todos", aTodos);
			oModel.setProperty("/newTodo", "");
		}

		/**
		 * Removes all completed items from the todo list.
		 */
		clearCompleted() {
			var oModel = this.getTodoDataModel();
			var aTodos = /** @type {TodoItem[]} */ (/** @type {unknown} */ (oModel.getProperty("/todos"))).map(function (oTodo) { return Object.assign({}, oTodo); });

			var i = aTodos.length;
			while (i--) {
				var oTodo = aTodos[i];
				if (oTodo.completed) {
					aTodos.splice(i, 1);
				}
			}

			oModel.setProperty("/todos", aTodos);
		}

		/**
		 * Updates the number of items not yet completed
		 */
		updateItemsLeftCount() {
			var oModel = this.getTodoDataModel();
			/** @type {TodoItem[]} */
			var aTodos = (oModel.getProperty("/todos")) || [];

			var iItemsLeft = aTodos.filter(function(oTodo) {
				return oTodo.completed !== true;
			}).length;

			oModel.setProperty("/itemsLeftCount", iItemsLeft);
		}

		/**
		 * Trigger search for specific items. The removal of items is disabled as long as the search is used
		 *
		 * @param {sap.ui.base.Event} oEvent SearchField liveChange event
		 */
		onSearch(oEvent) {
			/** @type {sap.m.SearchField} */
			var oSearchField = (oEvent.getSource());
			var oModel = this.getTodoDataModel();

			// First reset current filters
			this.aSearchFilters = [];

			// add filter for search
			this.sSearchQuery = oSearchField.getValue();
			if (this.sSearchQuery && this.sSearchQuery.length > 0) {
				oModel.setProperty("/itemsRemovable", false);
				var filter = this.createFilter("title", FilterOperator.Contains, this.sSearchQuery);
				this.aSearchFilters.push(filter);
			} else {
				oModel.setProperty("/itemsRemovable", true);
			}

			this._applyListFilters();
		}

		/**
		 *
		 * @param {sap.ui.base.Event} oEvent
		 */
		onFilter(oEvent) {
			// First reset current filters
			this.aTabFilters = [];

			// add filter for search
			this.sFilterKey = oEvent.getParameter("item").getKey();

			// eslint-disable-line default-case
			switch (this.sFilterKey) {
				case "active":
					this.aTabFilters.push(this.createFilter("completed", FilterOperator.EQ, false));
					break;
				case "completed":
					this.aTabFilters.push(this.createFilter("completed", FilterOperator.EQ, true));
					break;
				case "all":
				default:
					// Don't use any filter
			}

			this._applyListFilters();
		}

		_applyListFilters() {
			var oList = this.byId("todoList");

			/** @type {sap.ui.model.ListBinding} */
			var oBinding = (oList.getBinding("items"));

			oBinding.filter(this.aSearchFilters.concat(this.aTabFilters));

			var sI18nKey;
			if (this.sFilterKey && this.sFilterKey !== "all") {
				if (this.sFilterKey === "active") {
					sI18nKey = "ACTIVE_ITEMS";
				} else {
					// completed items: sFilterKey = "completed"
					sI18nKey = "COMPLETED_ITEMS";
				}
				if (this.sSearchQuery) {
					sI18nKey += "_CONTAINING";
				}
			} else if (this.sSearchQuery) {
				sI18nKey = "ITEMS_CONTAINING";
			}

			var sFilterText;
			if (sI18nKey) {
				var oResourceBundle = this.getI18nResourceBundle();
				sFilterText = oResourceBundle.getText(sI18nKey, [this.sSearchQuery]);
			}

			this.getViewModel().setProperty("/filterText", sFilterText);
		}

	};

	return AppController;
});
