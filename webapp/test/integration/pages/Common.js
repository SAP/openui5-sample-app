sap.ui.define([
	"sap/ui/test/Opa5"
], function(Opa5) {
	"use strict";

	return Opa5.extend("sap.ui.demo.todo.test.integration.pages.Common", {

		iStartTheApp: function() {
			this.iStartMyUIComponent({
				componentConfig: {
					name: "sap.ui.demo.todo",
					async: true
				}
			});
		},

		iTeardownTheApp: function() {
			this.iTeardownMyUIComponent();
		}

	});

});
