/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/*global QUnit */

QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/core/qunit/odata/ODataAnnotations.qunit",
	"sap/ui/core/qunit/odata/v2/ODataAnnotationsV2.qunit"
], function () {
	"use strict";

	// Note: these tests MUST run last because their afterEach() cleans up the global XHR created by
	// ODataAnnotationsFakeService.js
	sap.ui.require([
		"sap/ui/core/qunit/odata/AnnotationHelper.qunit",
		"sap/ui/core/qunit/odata/AnnotationParserNoFakeService.qunit",
		"sap/ui/core/qunit/odata/ODataMetaModel.qunit",
		"sap/ui/core/qunit/odata/_AnnotationHelperBasics.qunit",
		"sap/ui/core/qunit/odata/_AnnotationHelperExpression.qunit",
		"sap/ui/core/qunit/odata/_ODataMetaModelUtils.qunit"
	], function () {
		QUnit.start();
	});
});
