sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.Documentation2", {
		onInit() {
			console.log("Documentation2 controller initialized");
		},

		onTestPress() {
			MessageToast.show("Documentation2 funziona!");
		}
	});
});
