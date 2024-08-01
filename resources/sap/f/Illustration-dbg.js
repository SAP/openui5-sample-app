/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.f.Illustration.
sap.ui.define([
	"sap/m/Illustration",
	"sap/m/IllustrationRenderer",
	"./library"
], function(
	sapMIllustration,
	IllustrationRenderer
	/*, library */
) {
	"use strict";

	/**
	 * Constructor for a new <code>Illustration</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * A simple control which uses a Symbol ID to visualize an SVG
	 * which has already been loaded in the {@link sap.f.IllustrationPool}.
	 *
	 * To build a Symbol ID, all of the <code>Illustration</code> properties must be populated with data.
	 * @extends sap.m.Illustration
	 *
	 * @author SAP SE
	 * @version 1.126.1
	 *
	 * @constructor
	 * @public
	 * @deprecated as of version 1.98. Use the {@link sap.m.Illustration} instead.
	 * @since 1.88
	 * @alias sap.f.Illustration
	 */
	var Illustration = sapMIllustration.extend("sap.f.Illustration", /** @lends sap.f.Illustration.prototype */ {
		metadata: {
			library: "sap.f",
			deprecated: true,
			properties: { }
		},
		renderer: IllustrationRenderer
	});

	return Illustration;
});
