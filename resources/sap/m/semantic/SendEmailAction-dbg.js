/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/m/semantic/SemanticButton'], function(SemanticButton) {
	"use strict";

	/**
	 * Constructor for a new SendEmailAction.
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Optional initial settings for the new control:  a map/JSON-object with initial property values, event listeners etc. for the new object
	 *
	 * @class
	 * A SendEmailAction button has default semantic-specific properties and is
	 * eligible for aggregation content of a {@link sap.m.semantic.SemanticPage}.
	 *
	 * @extends sap.m.semantic.SemanticButton
	 *
	 * @author SAP SE
	 * @version 1.128.0
	 *
	 * @constructor
	 * @public
	 * @since 1.30.0
	 * @alias sap.m.semantic.SendEmailAction
	 */

	var SendEmailAction = SemanticButton.extend("sap.m.semantic.SendEmailAction", /** @lends sap.m.semantic.SendEmailAction.prototype */ {
		metadata: {
			library: "sap.m"
		}
	});

	return SendEmailAction;

});
