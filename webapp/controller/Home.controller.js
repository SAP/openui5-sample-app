sap.ui.define([
	"sap/ui/core/mvc/Controller",
], (Controller) => {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.Home", {

		doIt() {
			sap.m.MessageToast.show("Hi!")
		}

	});

});
