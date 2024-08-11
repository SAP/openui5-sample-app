/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/m/semantic/SemanticButton'], function(SemanticButton) {
	"use strict";

	/**
	 * Constructor for a new AddAction.
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Optional initial settings for the new control:  a map/JSON-object with initial property values, event listeners etc. for the new object
	 *
	 * @class
	 * An AddAction button has default semantic-specific properties and is
	 * eligible for aggregation content of a {@link sap.m.semantic.SemanticPage}.
	 *
	 * See {@link sap.m.semantic.MasterPage#addAction}, {@link sap.m.semantic.FullscreenPage#addAction}, {@link sap.m.semantic.DetailPage#addAction}
	 *
	 * @extends sap.m.semantic.SemanticButton
	 *
	 * @author SAP SE
	 * @version 1.127.0
	 *
	 * @constructor
	 * @public
	 * @since 1.30.0
	 * @alias sap.m.semantic.AddAction
	 */

	var AddAction = SemanticButton.extend("sap.m.semantic.AddAction", /** @lends sap.m.semantic.AddAction.prototype */ {
		metadata: {
			library: "sap.m"
		}
	});

	return AddAction;
});
