/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/base/Log",
	"sap/ui/core/Element",
	"sap/ui/core/fieldhelp/FieldHelpUtil"
], function (Log, Element, FieldHelpUtil) {
	/*global sinon, QUnit*/
	"use strict";

	//*********************************************************************************************
	QUnit.module("sap/ui/core/fieldhelp/FieldHelpUtil", {
		beforeEach : function () {
			this.oLogMock = this.mock(Log);
			this.oLogMock.expects("error").never();
			this.oLogMock.expects("warning").never();
		}
	});

	//*********************************************************************************************
[true, false].forEach((bFieldHelpActive) => {
	QUnit.test("setDocumentationRef: field help is active: " + bFieldHelpActive, function (assert) {
		const oElement = new Element();
		const oElementMock = this.mock(oElement);
		const aDocumentationRefs = ["~vValue"];
		oElementMock.expects("data")
			.withExactArgs("sap-ui-DocumentationRef",
				sinon.match.same(aDocumentationRefs).and(sinon.match(["~vValue"])),
				false);
		if (bFieldHelpActive) {
			oElement.updateFieldHelp = () => {};
			oElementMock.expects("updateFieldHelp").withExactArgs();
		}

		// code under test
		FieldHelpUtil.setDocumentationRef(oElement, aDocumentationRefs);

		oElementMock.expects("data").withExactArgs("sap-ui-DocumentationRef", ["~vValue0"], false);
		if (bFieldHelpActive) {
			oElementMock.expects("updateFieldHelp").withExactArgs();
		}

		// code under test - single documentation ref is always passed as array for the update
		FieldHelpUtil.setDocumentationRef(oElement, "~vValue0");

		if (bFieldHelpActive) {
			oElementMock.expects("updateFieldHelp").withExactArgs();
		}

		// code under test
		oElement.destroy();
	});
});
});