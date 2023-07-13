/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/*global sap */

sap.ui.define([
	"sap/ui/layout/changeHandler/AddFormContainer",
	"sap/ui/layout/changeHandler/AddFormField"
], function (AddGroup, AddFormField) {
	"use strict";

	return {
		"moveControls": "default",
		"addGroup": AddGroup,
		"addFormField" : AddFormField

	};
}, /* bExport= */true);
