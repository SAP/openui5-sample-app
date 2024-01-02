/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control test.designmode.TextField.
sap.ui.define(['sap/ui/core/Control'],
	function(Control) {
	"use strict";

	var TextField = Control.extend("test.designmode.TextField", {

		metadata: {

			designtime: {
				css: "TextField.designtime.css",
				icon: "TextField.png",
				name: "{name}",
				description: "{description}"
			}

		}

	});

	return TextField;

});
