/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	'sap/ui/core/XMLComposite', 'sap/ui/model/type/Float'
], function (XMLComposite, Float) {
	"use strict";
	var Field = XMLComposite.extend("sap.ui.core.internal.samples.composite.xmlcomposite.ex2.comp.field", {
		metadata: {
			properties: {
				valueFloat: {
					type: "float"
				},
				valueString: {
					type: "string"
				}
			}
		},
		fragment: "sap.ui.core.internal.samples.composite.xmlcomposite.ex2.comp.field"
	});
	return Field;
});
