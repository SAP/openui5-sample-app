/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	'sap/ui/core/XMLComposite'], function (XMLComposite) {
		"use strict";
		var Field = XMLComposite.extend("sap.ui.core.internal.samples.composite.xmlcomposite.exList.comp.field", {
			metadata: {
				aggregations: {
					texts: {
						type: "sap.ui.core.Item",
						multiple: true
					}
				},
				defaultAggregation: "texts"
			}
		});
		return Field;
	});
