sap.ui.define([
	"sap/ui/core/mvc/Controller"
], (Controller) => {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.Documentation", {
		onInit() {
			console.log("=== Documentation Controller onInit START ===");
			console.log("Documentation controller initialized successfully");
			console.log("=== Documentation Controller onInit END ===");
		}
	});
});
