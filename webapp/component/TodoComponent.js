sap.ui.define([
	"sap/ui/core/UIComponent"
], (UIComponent) => {
	"use strict";
	
	return UIComponent.extend("sap.ui.demo.todo.component.TodoComponent", {
		metadata: {
			manifest: "json",
			interfaces: ["sap.ui.core.IAsyncContentCreation"]
		},

		init() {
			// Call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
		},

		createContent() {
			// Return the Todo App view
			return sap.ui.view({
				viewName: "sap.ui.demo.todo.view.App",
				type: sap.ui.core.mvc.ViewType.XML,
				id: "todoAppView"
			});
		}
	});
});
