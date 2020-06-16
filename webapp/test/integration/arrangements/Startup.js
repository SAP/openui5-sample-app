sap.ui.define([
	"sap/ui/test/Opa5"
], (Opa5) => {
	"use strict";

	return Opa5.extend("sap.ui.demo.todo.test.integration.arrangements.Startup", {

		iStartMyApp: function () {
			this.iStartMyAppInAFrame(sap.ui.require.toUrl("sap/ui/demo/todo/index") + ".html");
		}

	});
});
