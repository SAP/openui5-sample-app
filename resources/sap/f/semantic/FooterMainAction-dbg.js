/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(["./MainAction"], function(MainAction) {
	"use strict";

	/**
	* Constructor for a new <code>FooterMainAction</code>.
	* @param {string} [sId] ID for the new control, generated automatically if no ID is given
	* @param {object} [mSettings] Optional initial settings for the new control:  a map/JSON-object with initial property values, event listeners etc. for the new object
	*
	* @class
	* A semantic-specific button, eligible for the <code>footerMainAction</code> aggregation of the
	* {@link sap.f.semantic.SemanticPage} to be placed in its footer.
	*
	* @extends sap.f.semantic.MainAction
	*
	* @author SAP SE
	* @version 1.121.0
	*
	* @constructor
	* @public
	* @since 1.46.0
	* @alias sap.f.semantic.FooterMainAction
	*/
	var FooterMainAction =  MainAction.extend("sap.f.semantic.FooterMainAction", /** @lends sap.f.semantic.FooterMainAction.prototype */ {
		metadata: {
			library: "sap.f"
		}
	});

	return FooterMainAction;
});
