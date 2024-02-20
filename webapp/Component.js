sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/ComponentSupport"], (UIComponent) => {
	"use strict";
	return UIComponent.extend("sap.ui.demo.todo.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		}
	});
});
