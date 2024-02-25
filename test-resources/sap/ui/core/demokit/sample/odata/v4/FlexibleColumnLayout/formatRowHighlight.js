/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([], function () {
	"use strict";

	return function (_aAllMessages, _oRowData) {
		var aMessages,
			// 'this' is the control!
			oRowContext = this.getBindingContext();

		if (oRowContext) { // formatter is called with oRowContext null initially
			aMessages = oRowContext.getMessages();
			if (aMessages.length) {
				return aMessages[0].type;
			}
		}
		return null;
	};
}, true);
