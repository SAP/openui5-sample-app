sap.ui.define([
	"sap/ui/test/Opa5"
], (Opa5) => {
	"use strict";

	return Opa5.extend("sap.ui.demo.todo.test.integration.arrangements.Startup", {

		iStartMyApp() {
			this.iStartMyUIComponent({
				componentConfig: {
					name: "sap.ui.demo.todo",
					async: true,
					manifest: true
				}
			});
		}

	});
});
