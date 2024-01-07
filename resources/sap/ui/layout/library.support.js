/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Adds support rules of the sap.layout library to the support infrastructure.
 */
sap.ui.define(["./rules/Form.support"],
	function(FormSupport) {
	"use strict";

	return {
		name: "sap.ui.layout",
		niceName: "UI5 Layout Library",
		ruleset: [
			FormSupport
		]
	};

}, true);