sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/mvc/XMLView",
	"sap/m/MessageToast"
], (Controller, XMLView, MessageToast) => {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.Main", {

		onInit() {
			// Load all views initially
			this._loadTodoAppView();
			this._loadHelloWorldView();
			this._loadDocumentationView();
			// Documentation2 is now static in the view
		},

		/**
		 * Handle tab selection
		 * @param {sap.ui.base.Event} oEvent Tab select event
		 */
		onTabSelect(oEvent) {
			const sKey = oEvent.getParameter("key");
			const oContent = this.byId("content");

			// FORZA IL RICARICAMENTO DELLA VIEW DOCUMENTATION
			if (sKey === "documentation") {
				delete this.oViews["Documentation"];
			}

			const showView = (sViewName) => {
				if (!this.oViews[sViewName]) {
					MessageToast.show(`Caricamento view: ${sViewName}...`);
					this._loadView(sViewName)
						.then((oView) => {
							this.oViews[sViewName] = oView;
							oContent.removeAllContent();
							oContent.addContent(oView);
							MessageToast.show(`View ${sViewName} caricata con successo!`);
						})
						.catch((oError) => {
							console.error(`Errore nel caricamento di ${sViewName}:`, oError);
							MessageToast.show(`Errore nel caricamento di ${sViewName}. Controlla la console.`);
						});
				} else {
					oContent.removeAllContent();
					oContent.addContent(this.oViews[sViewName]);
				}
			};

			switch (sKey) {
				case "todoApp":
					MessageToast.show("📝 Todo App caricata!", { duration: 2000 });
					break;
				case "helloWorldApp":
					this._loadHelloWorldView();
					MessageToast.show("🌍 Hello World App caricata!", { duration: 2000 });
					break;
				case "aboutApp":
					MessageToast.show("ℹ️ Informazioni visualizzate!", { duration: 2000 });
					break;
				case "documentationApp":
					this._loadDocumentationView();
					MessageToast.show("📚 Documentazione tecnica caricata!", { duration: 2000 });
					break;
				case "documentation2App":
					MessageToast.show("📖 Documentazione statica caricata!", { duration: 2000 });
					break;
			}
		},

		/**
		 * Load Hello World view dynamically
		 */
		_loadHelloWorldView() {
			const oContainer = this.byId("helloWorldContainer");
			
			// Check if view is already loaded
			if (oContainer.getItems().length > 0) {
				return;
			}

			// Create and load the Hello World view
			XMLView.create({
				viewName: "sap.ui.demo.todo.view.HelloWorld",
				id: this.getView().getId() + "--helloWorldView"
			}).then((oView) => {
				oContainer.addItem(oView);
			}).catch((oError) => {
				MessageToast.show("Errore nel caricamento della Hello World view: " + oError.message);
				console.error("Error loading Hello World view:", oError);
			});
		},

		/**
		 * Load Todo App view dynamically
		 */
		_loadTodoAppView() {
			const oContainer = this.byId("todoAppContainer");
			
			// Check if view is already loaded
			if (oContainer.getItems().length > 0) {
				return;
			}

			// Create and load the Todo App view
			XMLView.create({
				viewName: "sap.ui.demo.todo.view.App",
				id: this.getView().getId() + "--todoAppView"
			}).then((oView) => {
				oContainer.addItem(oView);
			}).catch((oError) => {
				MessageToast.show("Errore nel caricamento della Todo App: " + oError.message);
				console.error("Error loading Todo App view:", oError);
			});
		},

		/**
		 * Load Documentation view dynamically
		 */
		_loadDocumentationView() {
			const oContainer = this.byId("documentationContainer");
			
			// Check if view is already loaded
			if (oContainer.getItems().length > 0) {
				return;
			}

			// Create and load the Documentation view
			XMLView.create({
				viewName: "sap.ui.demo.todo.view.Documentation",
				id: this.getView().getId() + "--documentationView"
			}).then((oView) => {
				oContainer.addItem(oView);
			}).catch((oError) => {
				MessageToast.show("Errore nel caricamento della Documentation: " + oError.message);
				console.error("Error loading Documentation view:", oError);
			});
		}
	});
});
