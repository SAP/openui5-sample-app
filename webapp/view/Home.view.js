sap.ui.jsview("sap.ui.demo.todo.view.Home", {
	getControllerName() {
		"use strict";
		return "sap.ui.demo.todo.controller.Home";
	},

	createContent(oController) {
		"use strict";
		var oPanel = new sap.m.Panel();
		var oButton = new sap.m.Button(this.createId("Button1"), { text: "Hello JS View" });
		oButton.attachPress(oController.doIt, oController);
		oPanel.addContent(oButton);
		return oButton;
	}
});
