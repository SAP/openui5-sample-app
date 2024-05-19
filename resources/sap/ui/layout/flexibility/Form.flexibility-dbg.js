/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/*global sap */

sap.ui.define([
	"sap/ui/fl/apply/api/DelegateMediatorAPI",
	"sap/ui/layout/changeHandler/AddFormContainer",
	"sap/ui/layout/changeHandler/AddFormField"
], function (DelegateMediatorAPI, AddGroup, AddFormField) {
	"use strict";

	DelegateMediatorAPI.registerWriteDelegate({
		controlType: "sap.ui.layout.form.Form",
		delegate: "sap/ui/comp/smartfield/flexibility/SmartFieldWriteDelegate",
		requiredLibraries: {
			"sap.ui.comp": {
				minVersion: "1.81",
				lazy: false
			}
		}
	});

	return {
		"moveControls": "default",
		"addGroup": AddGroup,
		"addFormField" : AddFormField

	};
}, /* bExport= */true);
