/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/base/ManagedObjectObserver"
], function (ManagedObjectObserver) {
	"use strict";

	const oObserver = new ManagedObjectObserver(handleDestroy);

	/**
	 * Updates the field help information for a destroyed control for which <code>setDocumentationRef</code> had been
	 * called.
	 *
	 * @param {object} oParameters
	 *   The event handler parameters
	 * @param {object} oParameters.object
	 *   The destroyed control for which the field help information has to be updated
	 */
	function handleDestroy(oParameters) {
		oParameters.object.updateFieldHelp?.();
	}

	/**
	 * Util class to set field help information for controls like filter fields that don't have OData property bindings.
	 *
	 * @alias module:sap/ui/core/fieldhelp/FieldHelpUtil
	 * @author SAP SE
	 * @class
	 *
	 * @hideconstructor
	 * @private
	 * @ui5-restricted sap.ui.comp.filterbar, sap.fe.templates.ListReport
	 * @since 1.126.0
	 * @see module:sap/ui/core/fieldhelp/FieldHelp
	 */
	class FieldHelpUtil {
		/**
		 * Sets the field help information for the given element as <code>sap-ui-DocumentationRef</code> custom data.
		 *
		 * @param {sap.ui.core.Element} oElement
		 *   The element on which to set the field help
		 * @param {string|string[]} vDocumentationRefs
		 *   The string value or an array of string values of
		 *   <code>com.sap.vocabularies.Common.v1.DocumentationRef</code> OData annotations
		 *
		 * @private
		 * @ui5-restricted sap.ui.comp.filterbar, sap.fe.templates.ListReport
		 */
		static setDocumentationRef(oElement, vDocumentationRefs) {
			oElement.data("sap-ui-DocumentationRef",
				Array.isArray(vDocumentationRefs) ? vDocumentationRefs : [vDocumentationRefs],
				false);
			// For elements, for which the field help information is set manually (e.g. filter fields), the
			// field help has to be displayed at that element, even if there are child bindings (e.g. value help)
			// that also contribute to the field help information
			oElement.setFieldHelpDisplay(oElement);
			oElement.updateFieldHelp?.();
			oObserver.observe(oElement, {destroy: true});
		}
	}

	return FieldHelpUtil;
});
