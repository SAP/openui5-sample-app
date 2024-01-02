/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control test.designmode.Button.
sap.ui.define(['sap/ui/core/Control'],
	function(Control) {
	"use strict";

	var Button = Control.extend("test.designmode.Button", {

		metadata: {

			designtime: true

		}

	});

	return Button;

});
