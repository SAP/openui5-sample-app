/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * @fileoverview
 * @deprecated
 */
 sap.ui.define([], function () {
	"use strict";

	/**
	 * Specifies possible xml processing modes.
	 *
	 * @enum {string}
	 * @since 1.89.0
	 * @private
	 * @alias sap.ui.core.mvc.XMLProcessingMode
	 */
	var XMLProcessingMode = {

		/**
		 * The processing mode <code>XMLProcessingMode.Sequential</code> is implicitly activated for the following type of views:
		 *  a) async root views in the manifest
		 *  b) XMLViews created with the (XML)View.create factory
		 *  c) XMLViews used via async routing
		 *  d) declaratively nested views if the parent view was created with (XML)View.create
		 *     and the nested views are not forced to be synchronous with async <code>false</code>
		 *
		 * @private
		 */
		Sequential: "Sequential",

		/**
		 * The processing mode <code>XMLProcessingMode.SequentialLegacy</code> is implicitly activated for the following type of views:
		 *  a) XMLViews created with sap.ui.view/sap.ui.xmlview with async <code>true</code>
		 *  b) declaratively nested views if the parent view was created with sap.ui.view/sap.ui.xmlview with async <code>true</code
		 *     and the nested views are not forced to be synchronous with async <code>false</code>
		 *
		 * @private
		 */
		SequentialLegacy: "SequentialLegacy"

	};

	return XMLProcessingMode;
});
