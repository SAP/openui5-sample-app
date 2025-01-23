jQuery.sap.declare("sap.ui.demo.todo.Component");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.core.ComponentSupport");

sap.ui.core.UIComponent.extend("sap.ui.demo.todo.Component", {
	metadata: {
		manifest: "json",
		interfaces: ["sap.ui.core.IAsyncContentCreation"],
	}
});
