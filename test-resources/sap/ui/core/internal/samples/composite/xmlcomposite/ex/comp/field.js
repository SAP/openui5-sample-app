/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	'sap/ui/core/XMLComposite'], function(XMLComposite) {
	"use strict";
	var Field = XMLComposite.extend("sap.ui.core.internal.samples.composite.xmlcomposite.ex.comp.field", {
		metadata: {
			properties: {
				text: {
					type: "string",
					defaultValue: "Default Value Text"
				},
				value: {
					type: "string",
					defaultValue: "Default Value Input"
				}
			}
		},
		fragment: "sap.ui.core.internal.samples.composite.xmlcomposite.ex.comp.field"
	});
	return Field;
});
