sap.ui.define(function () {
	"use strict";
	return {
		name: "QUnit test suite for Todo App",
		defaults: {
			page: "ui5://test-resources/sap/ui/demo/todo/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				versions: {
					"2.24": {
						module : "qunit",
						css: "qunit/qunit/qunit.css"
					}
				},
				version: "2.24"
			},
			sinon: {
				versions: {
					"19" : {
						module : "sinon",
						bridge: "sap/ui/qunit/sinon-qunit-bridge"
					}
				},
				version: "19"
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "sap/ui/demo/todo/",
				never: "test-resources/sap/ui/demo/todo/"
			},
			loader: {
				paths: {
					"sap/ui/demo/todo": "../"
				},
				map: {
					"*": {
						// Ensures that sinon is loaded from UI5 tooling modules middleware instead of sap/ui/thirdparty
						"sinon": "sinon"
					}
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for Todo App"
			},
			"integration/opaTests": {
				title: "Integration tests for Todo App"
			}
		}
	};
});
