/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'./library',
	'sap/ui/core/Control'
], function(library, Control) {
	"use strict";

	/**
	 * Constructor for a new UploadCollectionToolbarPlaceholder.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Used to create a customizable toolbar for the UploadCollection.
	 * A FileUploader instance is required in the toolbar and will be placed by the application.
	 * @extends sap.ui.core.Control
	 *
	 * @author SAP SE
	 * @version 1.128.0
	 *
	 * @constructor
	 * @public
	 * @deprecated as of version 1.88, replaced by {@link sap.m.upload.UploadSetToolbarPlaceholder}.
	 * @since 1.34.0
	 * @alias sap.m.UploadCollectionToolbarPlaceholder
	 */

	var UploadCollectionToolbarPlaceholder = Control.extend("sap.m.UploadCollectionToolbarPlaceholder", {
		metadata: {
			library: "sap.m",
			properties: {}
		},
		renderer: null // this control has no renderer
	});

	return UploadCollectionToolbarPlaceholder;

});
