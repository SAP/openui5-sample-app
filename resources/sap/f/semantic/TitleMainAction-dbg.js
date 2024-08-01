/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(["./MainAction"], function(MainAction) {
	"use strict";

	/**
	* Constructor for a new <code>TitleMainAction</code>.
	* @param {string} [sId] ID for the new control, generated automatically if no ID is given
	* @param {object} [mSettings] Optional initial settings for the new control:  a map/JSON-object with initial property values, event listeners etc. for the new object
	*
	* @class
	* A semantic-specific button, eligible for the <code>titleMainAction</code> aggregation of the
	* {@link sap.f.semantic.SemanticPage} to be placed in its title.
	*
	* @extends sap.f.semantic.MainAction
	*
	* @author SAP SE
	* @version 1.126.1
	*
	* @constructor
	* @public
	* @since 1.46.0
	* @alias sap.f.semantic.TitleMainAction
	*/
	var TitleMainAction = MainAction.extend("sap.f.semantic.TitleMainAction", /** @lends sap.f.semantic.TitleMainAction.prototype */ {
		metadata: {
			library: "sap.f"
		}
	});

	return TitleMainAction;
});
