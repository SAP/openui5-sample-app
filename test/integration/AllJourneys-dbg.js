sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/demo/todo/test/integration/arrangements/Startup",
	"sap/ui/demo/todo/test/integration/TodoListJourney",
	"sap/ui/demo/todo/test/integration/SearchJourney",
	"sap/ui/demo/todo/test/integration/FilterJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		autoWait: true
	});

});
