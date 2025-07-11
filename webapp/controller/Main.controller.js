sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/mvc/XMLView",
	"sap/m/MessageToast"
], (Controller, XMLView, MessageToast) => {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.Main", {

		onInit() {
			console.log("=== Main Controller Init START ===");
			// Load all views initially
			console.log("Loading initial views...");
			this._loadTodoAppView();
			this._loadHelloWorldView();
			this._loadDocumentationView();
			// Documentation2 is now static in the view
			console.log("=== Main Controller Init END ===");
		},

		/**
		 * Handle tab selection
		 * @param {sap.ui.base.Event} oEvent Tab select event
		 */
		onTabSelect(oEvent) {
			console.log("=== TAB SELECT EVENT ===");
			const sKey = oEvent.getParameter("key");
			console.log("Selected tab key:", sKey);
			const oContent = this.byId("content");

			// FORZA IL RICARICAMENTO DELLA VIEW DOCUMENTATION
			if (sKey === "documentation") {
				delete this.oViews["Documentation"];
			}

			const showView = (sViewName) => {
				console.log("showView function called for:", sViewName);
				if (!this.oViews[sViewName]) {
					console.log("View not cached, loading:", sViewName);
					MessageToast.show(`Caricamento view: ${sViewName}...`);
					this._loadView(sViewName)
						.then((oView) => {
							console.log("View loaded successfully:", sViewName);
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
					console.log("View found in cache:", sViewName);
					oContent.removeAllContent();
					oContent.addContent(this.oViews[sViewName]);
				}
			};

			switch (sKey) {
				case "todoApp":
					console.log("📝 Loading Todo App...");
					MessageToast.show("📝 Todo App caricata!", { 
						duration: 2000
					});
					break;
				case "helloWorldApp":
					console.log("🌍 Loading Hello World App...");
					this._loadHelloWorldView();
					MessageToast.show("🌍 Hello World App caricata!", { 
						duration: 2000
					});
					break;
				case "aboutApp":
					console.log("ℹ️ Loading About App...");
					MessageToast.show("ℹ️ Informazioni visualizzate!", { 
						duration: 2000
					});
					break;
				case "documentationApp":
					console.log("📚 Loading Documentation App...");
					this._loadDocumentationView();
					MessageToast.show("📚 Documentazione tecnica caricata!", { 
						duration: 2000
					});
					break;
				case "documentation2App":
					console.log("📖 Loading Documentation2 App...");
					MessageToast.show("📖 Documentazione statica caricata!", { 
						duration: 2000
					});
					break;
				default:
					console.log("Unknown tab key:", sKey);
			}
			console.log("=== TAB SELECT EVENT END ===");
		},

		/**
		 * Load Hello World view dynamically
		 */
		_loadHelloWorldView() {
			console.log("=== _loadHelloWorldView START ===");
			const oContainer = this.byId("helloWorldContainer");
			console.log("HelloWorld Container found:", !!oContainer);
			console.log("HelloWorld Container items count:", oContainer ? oContainer.getItems().length : "N/A");
			
			// Check if view is already loaded
			if (oContainer.getItems().length > 0) {
				console.log("HelloWorld view already loaded, investigating...");
				const oExistingView = oContainer.getItems()[0];
				console.log("Existing HelloWorld view:", !!oExistingView);
				console.log("Existing HelloWorld view ID:", oExistingView?.getId());
				console.log("Existing HelloWorld view visible:", oExistingView ? oExistingView.getVisible() : "N/A");
				console.log("Existing HelloWorld view controller:", !!oExistingView?.getController());
				console.log("Existing HelloWorld view type:", oExistingView?.getMetadata()?.getName());
				
				// DISTRUGGI COMPLETAMENTE la view esistente per evitare conflitti di ID
				console.log("Destroying existing HelloWorld view to prevent ID conflicts...");
				oContainer.removeAllItems();
				if (oExistingView && typeof oExistingView.destroy === 'function') {
					oExistingView.destroy();
					console.log("Existing HelloWorld view destroyed successfully");
				}
			}

			console.log("Creating HelloWorld XMLView...");
			// Create and load the Hello World view
			XMLView.create({
				viewName: "sap.ui.demo.todo.view.HelloWorld",
				id: this.getView().getId() + "--helloWorldView"
			}).then((oView) => {
				console.log("HelloWorld XMLView created successfully:", !!oView);
				console.log("HelloWorld view ID:", oView.getId());
				console.log("HelloWorld view controller:", !!oView.getController());
				console.log("Adding HelloWorld view to container...");
				oContainer.addItem(oView);
				console.log("HelloWorld view added successfully");
				console.log("=== _loadHelloWorldView SUCCESS ===");
			}).catch((oError) => {
				console.error("=== _loadHelloWorldView ERROR ===");
				console.error("Error details:", oError);
				console.error("Error message:", oError.message);
				console.error("Error stack:", oError.stack);
				MessageToast.show("Errore nel caricamento della Hello World view: " + oError.message);
				console.error("Error loading Hello World view:", oError);
			});
		},

		/**
		 * Load Todo App view dynamically
		 */
		_loadTodoAppView() {
			console.log("=== _loadTodoAppView START ===");
			const oContainer = this.byId("todoAppContainer");
			console.log("TodoApp Container found:", !!oContainer);
			console.log("TodoApp Container items count:", oContainer ? oContainer.getItems().length : "N/A");
			
			// Check if view is already loaded
			if (oContainer.getItems().length > 0) {
				console.log("TodoApp view already loaded, investigating...");
				const oExistingView = oContainer.getItems()[0];
				console.log("Existing TodoApp view:", !!oExistingView);
				console.log("Existing TodoApp view ID:", oExistingView?.getId());
				console.log("Existing TodoApp view visible:", oExistingView ? oExistingView.getVisible() : "N/A");
				console.log("Existing TodoApp view controller:", !!oExistingView?.getController());
				console.log("Existing TodoApp view type:", oExistingView?.getMetadata()?.getName());
				
				// DISTRUGGI COMPLETAMENTE la view esistente per evitare conflitti di ID
				console.log("Destroying existing TodoApp view to prevent ID conflicts...");
				oContainer.removeAllItems();
				if (oExistingView && typeof oExistingView.destroy === 'function') {
					oExistingView.destroy();
					console.log("Existing TodoApp view destroyed successfully");
				}
			}

			console.log("Creating TodoApp XMLView...");
			// Create and load the Todo App view
			XMLView.create({
				viewName: "sap.ui.demo.todo.view.App",
				id: this.getView().getId() + "--todoAppView"
			}).then((oView) => {
				console.log("TodoApp XMLView created successfully:", !!oView);
				console.log("Adding TodoApp view to container...");
				oContainer.addItem(oView);
				console.log("TodoApp view added successfully");
				console.log("=== _loadTodoAppView SUCCESS ===");
			}).catch((oError) => {
				console.error("=== _loadTodoAppView ERROR ===");
				console.error("Error details:", oError);
				console.error("Error message:", oError.message);
				console.error("Error stack:", oError.stack);
				MessageToast.show("Errore nel caricamento della Todo App: " + oError.message);
				console.error("Error loading Todo App view:", oError);
			});
		},

		/**
		 * Load Documentation view dynamically
		 */
		_loadDocumentationView() {
			console.log("=== _loadDocumentationView START ===");
			const oContainer = this.byId("documentationContainer");
			console.log("Documentation Container found:", !!oContainer);
			console.log("Documentation Container items count:", oContainer ? oContainer.getItems().length : "N/A");
			
			// Check if view is already loaded
			if (oContainer.getItems().length > 0) {
				console.log("Documentation view already loaded, investigating...");
				const oExistingView = oContainer.getItems()[0];
				console.log("Existing Documentation view:", !!oExistingView);
				console.log("Existing Documentation view ID:", oExistingView?.getId());
				console.log("Existing Documentation view visible:", oExistingView ? oExistingView.getVisible() : "N/A");
				console.log("Existing Documentation view controller:", !!oExistingView?.getController());
				console.log("Existing Documentation view type:", oExistingView?.getMetadata()?.getName());
				
				// DISTRUGGI COMPLETAMENTE la view esistente per evitare conflitti di ID
				console.log("Destroying existing Documentation view to prevent ID conflicts...");
				oContainer.removeAllItems();
				if (oExistingView && typeof oExistingView.destroy === 'function') {
					oExistingView.destroy();
					console.log("Existing Documentation view destroyed successfully");
				}
			}

			console.log("Creating Documentation XMLView...");
			// Create and load the Documentation view
			XMLView.create({
				viewName: "sap.ui.demo.todo.view.Documentation",
				id: this.getView().getId() + "--documentationView"
			}).then((oView) => {
				console.log("Documentation XMLView created successfully:", !!oView);
				console.log("Adding Documentation view to container...");
				oContainer.addItem(oView);
				console.log("Documentation view added successfully");
				console.log("=== _loadDocumentationView SUCCESS ===");
			}).catch((oError) => {
				console.error("=== _loadDocumentationView ERROR ===");
				console.error("Error details:", oError);
				console.error("Error message:", oError.message);
				console.error("Error stack:", oError.stack);
				MessageToast.show("Errore nel caricamento della Documentation: " + oError.message);
				console.error("Error loading Documentation view:", oError);
			});
		}
	});
});
