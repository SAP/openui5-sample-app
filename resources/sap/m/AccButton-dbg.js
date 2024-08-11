/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.m.AccButton.
sap.ui.define(['./Button','./AccButtonRenderer'],
	function(Button, AccButtonRenderer) {
		"use strict";

	/**
	 * Constructor for a new AccButton.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * The AccButton control represents button with additional capabilities for accessability settings. It is meant for private usage.
	 *
	 * @extends sap.m.Button
	 *
	 * @author SAP SE
	 * @version 1.127.0
	 *
	 * @constructor
	 * @private
	 * @alias sap.m.AccButton
	 */
	var AccButton = Button.extend("sap.m.AccButton", {
		metadata: {
			library : "sap.m",
			properties : {
				"tabIndex": {type : "string", defaultValue : null, bindable : "bindable"},
				"ariaHidden": {type : "string", defaultValue : null, bindable : "bindable"},
				"ariaHaspopup": {type : "string", defaultValue : null, bindable : "bindable"}
			}
		},

		renderer: AccButtonRenderer
	});

	return AccButton;
});
