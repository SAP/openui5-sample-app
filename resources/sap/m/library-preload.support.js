//@ui5-bundle sap/m/library-preload.support.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Adds support rules of the sap.m library to the support infrastructure.
 */
sap.ui.predefine("sap/m/library.support", [
	"sap/ui/support/library",
	"./rules/Breadcrumbs.support",
	"./rules/Button.support",
	"./rules/CheckBox.support",
	"./rules/DatePicker.support",
	"./rules/DateRangeSelection.support",
	"./rules/Dialog.support",
	"./rules/FacetFilter.support",
	"./rules/IconTabBar.support",
	"./rules/Image.support",
	"./rules/Input.support",
	"./rules/Link.support",
	"./rules/MaskInput.support",
	"./rules/MessagePage.support",
	"./rules/ObjectHeader.support",
	"./rules/ObjectListItem.support",
	"./rules/ObjectMarker.support",
	"./rules/ObjectStatus.support",
	"./rules/Panel.support",
	"./rules/Select.support",
	"./rules/SelectDialog.support",
	"./rules/StepInput.support",
	"./rules/Table.support",
	"./rules/Title.support",
	"./rules/Tokenizer.support",
	"./rules/ViewSettingsDialog.support"
],
	function(
		SupportLib,
		BreadcrumbsSupport,
		ButtonSupport,
		CheckBoxSupport,
		DatePickerSupport,
		DateRangeSelectionSupport,
		DialogSupport,
		FacetFilterSupport,
		IconTabBarSupport,
		ImageSupport,
		InputSupport,
		LinkSupport,
		MaskInputSupport,
		MessagePageSupport,
		ObjectHeaderSupport,
		ObjectListItemSupport,
		ObjectMarkerSupport,
		ObjectStatusSupport,
		PanelSupport,
		SelectSupport,
		SelectDialogSupport,
		StepInputSupport,
		TableSupport,
		TitleSupport,
		TokenizerSupport,
		ViewSettingsDialogSupport
	) {
	"use strict";

	return {
		name: "sap.m",
		niceName: "UI5 Main Library",
		ruleset: [
			BreadcrumbsSupport,
			ButtonSupport,
			CheckBoxSupport,
			DatePickerSupport,
			DateRangeSelectionSupport,
			DialogSupport,
			FacetFilterSupport,
			IconTabBarSupport,
			ImageSupport,
			InputSupport,
			LinkSupport,
			MaskInputSupport,
			MessagePageSupport,
			ObjectHeaderSupport,
			ObjectListItemSupport,
			ObjectMarkerSupport,
			ObjectStatusSupport,
			PanelSupport,
			SelectSupport,
			SelectDialogSupport,
			StepInputSupport,
			TableSupport,
			TitleSupport,
			TokenizerSupport,
			ViewSettingsDialogSupport
		]
	};

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Select control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Breadcrumbs.support", ["sap/ui/support/library"],
	function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity, // Low, Medium, High
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Checks if the Breadcrumbs control is placed in OverflowToolbar
	 */
	var oBreadcrumbsRule = {
		id : "breadcrumbsInOverflowToolbar",
		audiences: [Audiences.Control],
		categories: [Categories.Usability],
		enabled: true,
		minversion: "1.34",
		title: "Breadcrumbs in OverflowToolbar",
		description: "The Breadcrumbs should not be placed inside an OverflowToolbar",
		resolution: "Place breadcrumbs in another container.",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: Breadcrumbs",
			href: "https://experience.sap.com/fiori-design-web/breadcrumb/#guidelines"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.Breadcrumbs")
				.forEach(function(oElement) {

					var sElementId = oElement.getId(),
						sElementName = oElement.getMetadata().getElementName();

					if (oElement.getParent() && oElement.getParent().isA("sap.m.OverflowToolbar")) {
						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "Breadcrumbs '" + sElementName + "' (" + sElementId + ") is placed inside an OverflowToolbar.",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	return [oBreadcrumbsRule];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Button control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Button.support", ["sap/ui/support/library"],
	function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	// Controls that internally have sap.m.Button instances.
	var aExcludeListControls = [
		"sap.ui.comp.smartvariants.SmartVariantManagement",
		"sap.m.SplitButton"
	];

	function isControlExcludeListed(oControl) {
		if (oControl) {
			for (var i = 0; i < aExcludeListControls.length; i++) {
				if (oControl.isA(aExcludeListControls[i])) {
					return true;
				}
			}
		}
		return false;
	}

	function isInsideExcludeListedControl(oButton) {
		if (!oButton) {
			return false;
		}

		// Check one level up.
		if (isControlExcludeListed(oButton.getParent())) {
			return true;
		}
		// Check two levels up.
		if (oButton.getParent() && isControlExcludeListed(oButton.getParent().getParent())) {
			return true;
		}

		return false;
	}

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Checks, if a button consisting of only an icon has a tooltip (design guideline)
	 */
	var oButtonRule = {
		id : "onlyIconButtonNeedsTooltip",
		audiences: [Audiences.Control],
		categories: [Categories.Accessibility],
		enabled: true,
		minversion: "1.28",
		title: "Button: Consists of only an icon, needs a tooltip",
		description: "A button without text needs a tooltip, so that the user knows what the button does",
		resolution: "Add a value to the tooltip property of the button",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: Button",
			href: "https://experience.sap.com/fiori-design-web/button/#guidelines"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.Button")
				.forEach(function(oElement) {
					if (oElement.getProperty("icon")
						&& !oElement.getProperty("text")
						&& !oElement.getAggregation("tooltip")) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						if (!isInsideExcludeListedControl(oElement)) {
							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "Button '" + sElementName + "' (" + sElementId + ") consists of only an icon but has no tooltip",
								context: {
									id: sElementId
								}
							});
						}
					}
				});
		}
	};

	return [oButtonRule];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the CheckBox control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/CheckBox.support", ["sap/ui/support/library"],
	function(SupportLib) {
		"use strict";

		var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
			Severity = SupportLib.Severity, // Low, Medium, High
			Audiences = SupportLib.Audiences; // Control, Internal, Application

		//**********************************************************
		// Rule Definitions
		//**********************************************************

		/**
		* Checks if the control is <code>enabled</code>, when the <code>editable</code> property is true.
		*/
		var oCheckBoxRule = {
			id : "checkBoxDisabledAndEditable",
			audiences: [Audiences.Control],
			categories: [Categories.Functionality],
			enabled: true,
			minversion: "-",
			title: "CheckBox: the control is editable, while the control is disabled",
			description: "Disabled control can`t be edited",
			resolution: "Either set enabled to true ot set editable to false",
			resolutionurls: [{
				text: "API Reference: sap.m.CheckBox",
				href: "https://sdk.openui5.org/api/sap.m.CheckBox"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.CheckBox")
					.forEach(function(oElement) {
						var sElementId,
							sElementName;

						if (oElement.getEditable() && !oElement.getEnabled()) {
								sElementId = oElement.getId();
								sElementName = oElement.getMetadata().getElementName();

								oIssueManager.addIssue({
									severity: Severity.Low,
									details: "CheckBox '" + sElementName + "' (" + sElementId + ") is editable, but disabled",
									context: {
										id: sElementId
									}
								});
							}
						});
			}
		};

		return [oCheckBoxRule];

	}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the DatePicker control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/DatePicker.support", ["sap/ui/support/library"], function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, Bindings, Consistency, FioriGuidelines, Functionality, Usability, DataModel, Modularization, Usage, Other
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Checks, if a only one of the value or dateValue properties is bound.
	 */
	var oExclusiveValueDateValueBindingRule = {
		id: "exclusiveValueDateValueBindingRule",
		audiences: [Audiences.Control],
		categories: [Categories.Bindings],
		enabled: true,
		minversion: "1.28",
		title: "DatePicker: Only one of the value or dateValue properties can be bound",
		description: "Only one of the value or dateValue properties can be bound",
		resolution: "Choose and bind one of the properties value or dateValue. They both serve the same purpose",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: DatePicker",
			href: "https://experience.sap.com/fiori-design-web/date-picker/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.DatePicker")
				.forEach(function(oElement) {
					if (oElement.getBinding("value") && oElement.getBinding("dateValue")) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "DatePicker '" + sElementName + "' (" + sElementId + ") has both value and dataValue properties bound.",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	/**
	 * Checks, if there is a constraint for the displayFormat, when type sap.ui.model.odata.type.DateTime is used for value binding.
	 */
	var oDateTimeBindingConstraintRule = {
		id: "dateTimeBindingConstraintRule",
		audiences: [Audiences.Control],
		categories: [Categories.Bindings],
		enabled: true,
		minversion: "1.28",
		title: "DatePicker: sap.ui.model.odata.type.DateTime value binding should use displayFormat:'Date' constraint",
		description: "sap.ui.model.odata.type.DateTime value binding should use displayFormat:'Date' constraint",
		resolution: "If you are using binding type sap.ui.model.odata.type.DateTime you also need to specify binding constraint like this:\n" +
			"value: {path : 'path_to_value', type : 'sap.ui.model.odata.type.DateTime', constraints : {displayFormat : 'Date'}}",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: DatePicker",
			href: "https://experience.sap.com/fiori-design-web/date-picker/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.DatePicker")
				.forEach(function(oElement) {
					var oValueBinding = oElement.getBinding("value");
					if (oValueBinding && oValueBinding.getType()
						&& oValueBinding.getType().isA("sap.ui.model.odata.type.DateTime")
						&& (!oValueBinding.getType().oConstraints || !oValueBinding.getType().oConstraints.isDateOnly)) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "DatePicker '" + sElementName + "' (" + sElementId
								+ ") is bound to a model of type sap.ui.model.odata.type.DateTime and the displayFormat is not 'Date'",
							context: {
								id: sElementId
							}
						});
					}
				}
				);
		}
	};

	/**
	 * Checks, if value binding type is correct for JSON binding.
	 */
	var oJSONValueBindingIsCorrect = {
		id: "jsonValueBindingIsCorrect",
		audiences: [Audiences.Control],
		categories: [Categories.Bindings],
		enabled: true,
		minversion: "1.28",
		title: "DatePicker: Binding type sap.ui.model.odata.type.Date is not correct for JSON binding",
		description: "sap.ui.model.odata.type.Date is not correct for JSON binding. The correct type is sap.ui.model.type.Date",
		resolution: "Use binding type sap.ui.model.type.Date for JSON binding",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: DatePicker",
			href: "https://experience.sap.com/fiori-design-web/date-picker/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.DatePicker")
				.forEach(function(oElement) {
					var oValueBinding = oElement.getBinding("value");
					if (oValueBinding
						&& oElement.getModel() && oElement.getModel().isA("sap.ui.model.json.JSONModel")
						&& oValueBinding.getType() && oValueBinding.getType().isA("sap.ui.model.odata.type.Date")) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "DatePicker '" + sElementName + "' (" + sElementId
								+ ") is bound to a model of type sap.ui.model.odata.type.Date but it should be sap.ui.model.type.Date",
							context: {
								id: sElementId
							}
						});
					}
				}
				);
		}
	};

	/**
	 *  Checks if a dateValue contains JS Date object with hours, minutes and seconds different than 0, 0, 0, local time - warxing.
	 */
	var oDateValueHasHoursMinutesSeconds = {
		id: "dateValueHasHoursMinutesSeconds",
		audiences: [Audiences.Control],
		categories: [Categories.Usage],
		enabled: true,
		minversion: "1.28",
		title: "DatePicker: dateValue has hours, minutes or seconds",
		description: "The dateValue contains JS Date object with hours, minutes and seconds different than 0, 0, 0, local time - warxing.",
		resolution: "Do not set hours, minutes and seconds, when you set dateValue",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: DatePicker",
			href: "https://experience.sap.com/fiori-design-web/date-picker/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.DatePicker")
				.forEach(function(oElement) {
					var dateValue = oElement.getDateValue();
					if (dateValue && (dateValue.getHours() || dateValue.getMinutes() || dateValue.getSeconds())) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "DatePicker '" + sElementName + "' (" + sElementId
								+ ")'s dateValue has hours, minutes or seconds set",
							context: {
								id: sElementId
							}
						});
					}
				}
				);
		}
	};

	return [
		oExclusiveValueDateValueBindingRule,
		oDateTimeBindingConstraintRule,
		oJSONValueBindingIsCorrect,
		oDateValueHasHoursMinutesSeconds
	];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the DateRangeSelection control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/DateRangeSelection.support", ["sap/ui/support/library"], function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, Bindings, Consistency, FioriGuidelines, Functionality, Usability, DataModel, Modularization, Usage, Other
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Checks, if a either value or dateValue/secondDateValue properties are bound.
	 */
	var oExclusiveValueDateValueBindingRule = {
		id: "drsBindingRule",
		audiences: [Audiences.Control],
		categories: [Categories.Bindings],
		enabled: true,
		minversion: "1.28",
		title: "DateRangeSelection: Either value or dateValue/secondDateValue properties can be bound",
		description: "Either value or dateValue/secondDateValue properties can be bound",
		resolution: "Choose one option for binding - either value or dateValue/secondDateValue. They serve the same purpose",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: DateRangeSelection",
			href: "https://experience.sap.com/fiori-design-web/date-range-selection/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.DateRangeSelection")
				.forEach(function(oElement) {
					if (oElement.getBinding("value") && (oElement.getBinding("dateValue") || oElement.getBinding("secondDateValue"))) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "DateRangeSelection '" + sElementName + "' (" + sElementId + ") has value and dataValue/secondDateValue properties bound",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	/**
	 * Checks, if valueFormat property is set.
	 */
	var oDoNotSupportValueFormatRule = {
		id: "drsValueFormatRule",
		audiences: [Audiences.Control],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "1.28",
		title: "DateRangeSelection: valueFormat property is not supported",
		description: "valueFormat property is not supported.",
		resolution: "Do not use the valueFormat property.",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: DateRangeSelection",
			href: "https://experience.sap.com/fiori-design-web/date-range-selection/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.DateRangeSelection")
				.forEach(function(oElement) {
					if (oElement.getValueFormat()) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "DateRangeSelection '" + sElementName + "' (" + sElementId + ") has valueFormat property set.",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	return [
		oExclusiveValueDateValueBindingRule,
		oDoNotSupportValueFormatRule
	];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Dialog control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Dialog.support", ["sap/ui/support/library"],
	function(SupportLib) {
	"use strict";

	//shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	var oDialogRuleForJaws = {
		id: "dialogAriaLabelledBy",
		audiences: [Audiences.Application],
		categories: [Categories.Accessibility],
		enabled: true,
		minversion: "*",
		title: "Dialog: The content will not be read if there is no focusable control inside it unless ariaLabelledBy is set",
		description: "When the Dialog is opened and ariaLabelledBy is not set, if there are focusable controls the first focusable control will be read, if there are no focusable controls in the content, JAWS will read only the footer and header of the Dialog ",
		resolution: "Add ariaLabelledBy for the Dialog, with value - IDs of the non focusable control(s) which are inside the Dialog content",
		resolutionurls: [{
			text: "Dialog controls: Accessibility",
			href: "https://ui5.sap.com/#/topic/5709e73d51f2401a9a5a89d8f5479132"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.Dialog")
				.forEach(function(oElement) {
					if (!oElement.getAssociation("ariaLabelledBy")) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "Dialog '" + sElementName + "' (" + sElementId + ") has no ariaLabelledBy association set",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	return [oDialogRuleForJaws];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the FacetFilter control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/FacetFilter.support", ["sap/ui/support/library", "sap/ui/model/BindingMode"], function(SupportLib, BindingMode) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, Bindings, Consistency, FioriGuidelines, Functionality, Usability, DataModel, Modularization, Usage, Other
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 *  Checks if growing is set along with one-way binding
	 */
	var oFacetFilterGrowingOneWayBinding = {
		id: "facetFilterGrowingOneWayBinding",
		audiences: [Audiences.Control],
		categories: [Categories.Usage],
		enabled: true,
		minversion: "1.28",
		title: "FacetFilter: growing is set along with two-way binding",
		description: "Growing works only with one-way binding",
		resolution: "Growing works only with one-way binding",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: FacetFilter",
			href: "https://experience.sap.com/fiori-design-web/facet-filter/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.FacetFilterList")
				.forEach(function(oElement) {
					if (oElement.getGrowing()
						&& oElement.getModel()
						&& oElement.getModel().getDefaultBindingMode() === BindingMode.TwoWay) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "FacetFilter '" + sElementName + "' (" + sElementId
								+ ") growing property is set to true, when binding mode is two-way",
							context: {
								id: sElementId
							}
						});
					}
				}
				);
		}
	};

	return [
		oFacetFilterGrowingOneWayBinding
	];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the IconTabBar control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/IconTabBar.support", ["sap/ui/support/library", "sap/m/library"],
	function(SupportLib, mobileLibrary) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences, // Control, Internal, Application
		IconTabFilterDesign = mobileLibrary.IconTabFilterDesign;

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	var oIconTabBarRuleHDesign = {
		id: "iconTabFilterWithHorizontalDesignShouldHaveIcons",
		audiences: [Audiences.Application],
		categories: [Categories.FioriGuidelines],
		enabled: true,
		minversion: "*",
		title: "IconTabBar: tab filters with horizontal design should always have icons",
		description: "According to Fiori guidelines tab filters with horizontal design shall always have icons",
		resolution: 'Add icons to all tabs \n Note: There is one exception - if "showAll" is set to true, icon may not be set',
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: IconTabBar",
			href: "https://experience.sap.com/fiori-design-web/icontabbar/#guidelines"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.IconTabFilter")
				.forEach(function(oElement) {
					if (oElement.getProperty("design") === IconTabFilterDesign.Horizontal
						&& !oElement.getProperty("icon")
						&& !oElement.getProperty("showAll")) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "IconTabFilter '" + sElementName + "' (" + sElementId + ") consists only of text, icon needs to be set",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	var oIconTabBarRuleIcons = {
		id: "iconTabBarIconsRule",
		audiences: [Audiences.Application],
		categories: [Categories.FioriGuidelines],
		enabled: true,
		minversion: "*",
		title: "IconTabBar: Icons rule for tabs",
		description: 'Either all tabs should have icons or none of them. Note: There is one exception - There is one exception - if "showAll" is set to true, icon may not be set',
		resolution: "Make all tabs the same type",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: IconTabBar",
			href: "https://experience.sap.com/fiori-design-web/icontabbar/#guidelines"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.IconTabBar")
				.forEach(function(oElement) {
					var aIconTabFilters = oElement.getItems();
					var bHasIconFirstTab;
					var bHasIconSomeTab;
					var bHasDifference = false;
					var bFirstCheckedTab = true;

					for (var index = 0; index < aIconTabFilters.length; index++) {
						if (aIconTabFilters[index].isA('sap.m.IconTabFilter') && !aIconTabFilters[index].getProperty("showAll")) {
							if (bFirstCheckedTab) {
								bHasIconFirstTab = !!aIconTabFilters[index].getIcon();
								bFirstCheckedTab = false;
							} else {
								bHasIconSomeTab = !!aIconTabFilters[index].getIcon();
								if (bHasIconFirstTab !== bHasIconSomeTab) {
									bHasDifference = true;
									break;
								}
							}
						}
					}

					if (bHasDifference) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "In one IconTabBar '" + sElementName + "' (" + sElementId + ") all tabs should have icons or all tabs shouldn't have icons",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	var oIconTabBarRuleIconsLongCount = {
		id: "iconTabFilterWithIconsAndLongCount",
		audiences: [Audiences.Application],
		categories: [Categories.FioriGuidelines],
		enabled: true,
		minversion: "*",
		title: "IconTabBar: IconTabFilters with icons and long count number should have horizontal design",
		description: "Note: All filters in one IconTabBar should have the same design",
		resolution: "Change the design property to horizontal for all tabs in the IconTabBar",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: IconTabBar",
			href: "https://experience.sap.com/fiori-design-web/icontabbar/#guidelines"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.IconTabFilter")
				.forEach(function(oElement) {
					if (oElement.getProperty("design") === IconTabFilterDesign.Vertical
						&& oElement.getProperty("icon")
						&& oElement.getProperty("count").length > 4) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "IconTabFilter '" + sElementName + "' (" + sElementId + ") has long count and should have horizontal design",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};


	return [oIconTabBarRuleHDesign, oIconTabBarRuleIcons, oIconTabBarRuleIconsLongCount];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Image control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Image.support", ["sap/ui/support/library"],
	function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity, // Low, Medium, High
		Audiences = SupportLib.Audiences; // Control, Internal, Application


	//**********************************************************
	// Utils
	//**********************************************************
	var HIGH_DENSITIES = [1.5, 2], // these are the densities mostly expected to be supported by the app (3x and 4x will be skipped to avoid too many requests that prolong the check)
		REQUEST_TIMEOUT = 3000; //ms

	function downloadHighDensityImage(oImage, iDensity) {

		return new Promise(function(resolve, reject) {

			var sSrc = oImage.getSrc(),
				sDensityAwareSrc = oImage._generateSrcByDensity(sSrc, iDensity),
				oDomElement = document.createElement("IMG"),
				bDone = false;

			// check src availability using src property of a dummy dom element
			// to avoid making AJAX request (may be forbidden if conflicts with CORS)
			oDomElement.setAttribute("src", sDensityAwareSrc);
			oDomElement.style.position = "absolute";
			oDomElement.style.left = "-10000px";
			oDomElement.style.top = "-10000px";

			function onLoad() {
				cleanup();
				resolve(true);
			}

			function onError() {
				cleanup();
				resolve(false);
			}

			function cleanup() {
				if (oDomElement && oDomElement.parentNode !== null) { // allow this element and its attached listeners be picked up by the GC
					oDomElement.parentNode.removeChild(oDomElement);
				}
				bDone = true;
			}

			oDomElement.addEventListener("load", onLoad);
			oDomElement.addEventListener("error", onError);
			document.body.appendChild(oDomElement);

			// ensure check is completed even if none of the events are called
			// (e.g. iOS may not fire load for an already loaded and cached image)
			setTimeout(function() {
				if (!bDone) {
					reject(); // densityAwareSrc availability is not confirmed
				}
			}, REQUEST_TIMEOUT);

		});
	}

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Checks if the <code>densityAware</code> property of <code>sap.m.Image</code> is enabled when density-perfect image version exists
	 */
	var oImageRule = {
		id : "densityAwareImage",
		audiences: [Audiences.Control],
		categories: [Categories.Usability],
		enabled: true,
		async: true,
		minversion: "1.60",
		title: "Image: Density awareness disabled",
		description: "We checked that your application provides high-density version(s) of the listed image(s). "
					+ "However, the high-density version(s) will be ignored, because the \"densityAware\" property of this image is disabled. "
					+ "Since UI5 1.60, the \"densityAware\" property is no longer enabled by default. You need to enable it explicitly.",
		resolution: "Enable the \"densityAware\" property of this image control",
		resolutionurls: [{
			text: "API Refrence for sap.m.Image",
			href: "https://sdk.openui5.org/api/sap.m.Image"
		}],
		check: function (oIssueManager, oCoreFacade, oScope, fnResolve) {

			var aAsyncTasks = [],
				aIssuedImageIds = [],
				oTask,
				sImageId,
				sImageName;

			oScope.getElementsByClassName("sap.m.Image")
				.forEach(function(oImage) {
					if (!oImage.getDensityAware()) {

						HIGH_DENSITIES.forEach(function(iDensity) {

							oTask = downloadHighDensityImage(oImage, iDensity);

							aAsyncTasks.push(oTask);

							oTask.then(function(bSuccess) {
								if (!bSuccess) {
									return;
								}

								sImageId = oImage.getId();

								if (aIssuedImageIds.indexOf(sImageId) > -1) {
									return; // already issued warning for this image
								}

								aIssuedImageIds.push(sImageId);

								sImageName = oImage.getMetadata().getElementName();

								oIssueManager.addIssue({
									severity: Severity.Low,
									details: "Image '" + sImageName + "' (" + sImageId + ") has 'densityAware' disabled even though high-density version is also available",
									context: {
										id: sImageId
									}
								});
							})
							.catch(function() {
								// ignore as only the cases of successful executions are of interest to this rule
							});
						});
					}
				});

			Promise.all(aAsyncTasks).then(fnResolve);
		}
	};

	return [oImageRule];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the List, Table and Tree controls of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Input.support", ["sap/ui/support/library"],
	function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	function isInsideFormOrTable(oControl) {
		var oParent = oControl.getParent();

		if (!oParent) {
			return false;
		}

		return oParent.isA("sap.ui.layout.form.SimpleForm") || oParent.isA("sap.m.Table") || isInsideFormOrTable(oParent);
	}

	function isLabelled(oInput, aLabels) {
		var bHasLabelForInput = aLabels.some(function (oLabel) {
			return oLabel.getLabelFor() === oInput.getId();
		});

		if (bHasLabelForInput) {
			return true;
		}

		// form and table manage the labelling automatically
		return isInsideFormOrTable(oInput);
	}

	/**
	 * Input field needs to have a label association
	 */
	var oInputNeedsLabelRule = {
		id: "inputNeedsLabel",
		audiences: [Audiences.Control],
		categories: [Categories.Accessibility],
		enabled: true,
		minversion: "1.28",
		title: "Input field: Missing label",
		description:"An input field needs a label",
		resolution: "Define a sap.m.Label for the input field in the xml view and set the labelFor property to this input field Id.",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: Input field",
			href:"https://experience.sap.com/fiori-design-web/input-field/#guidelines"
		}],
		check: function (issueManager, oCoreFacade, oScope) {
			var aLabels = oScope.getElementsByClassName("sap.m.Label");

			oScope.getElementsByClassName("sap.m.Input")
				.filter(function (oInput) {
					return oInput.getUIArea(); // filter aggregation binding templates
				})
				.forEach(function(oInput) {
					if (!isLabelled(oInput, aLabels)) {
						issueManager.addIssue({
							severity: Severity.Medium,
							details: "Input field" + " (" + oInput.getId() + ") is missing a label.",
							context: {
								id: oInput.getId()
							}
						});
					}
				});
		}
	};

	return [oInputNeedsLabelRule];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Link control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Link.support", ["sap/ui/support/library"],
	function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 *Checks, if a link with attached press handler has no href property set
	 */
	var oLinkRule = {
		id : "linkWithPressHandlerNoHref",
		audiences: [Audiences.Control],
		categories: [Categories.Usability],
		enabled: true,
		minversion: "1.28",
		title: "Link: If a press handler is attached, the href property should not be set",
		description: "If a JavaScript action should be triggered using the press event, the href property should not be set",
		resolution: "Remove the href property of the link",
		resolutionurls: [{
			text: "API Reference: sap.m.Link",
			href: "https://sdk.openui5.org/api/sap.m.Link"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.Link")
				.forEach(function(oElement) {
					if (oElement.getProperty("href")
						&& oElement.mEventRegistry.hasOwnProperty("press")) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "Link '" + sElementName + "' (" + sElementId + ") has both press handler attached and href property set",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	return [oLinkRule];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the MaskInput control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/MaskInput.support", ["sap/ui/support/library"], function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, Bindings, Consistency, FioriGuidelines, Functionality, Usability, DataModel, Modularization, Usage, Other
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 *  Checks if the rules are valid
	 */
	var oMaskUsesValidRules = {
		id: "maskUsesValidRules",
		audiences: [Audiences.Control],
		categories: [Categories.Usage],
		enabled: true,
		minversion: "1.34",
		title: "MaskInput: Check the rules",
		description: "Checks if the rules are valid",
		resolution: "Define valid rules",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: MaskInput",
			href: "https://experience.sap.com/fiori-design-web/generic-mask-input/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.MaskInput")
				.forEach(function(oElement) {
					var sValidationErrorMsg = oElement._validateDependencies();

					if (sValidationErrorMsg) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "MaskInput '" + sElementName + "' (" + sElementId + "): " + sValidationErrorMsg,
							context: {
								id: sElementId
							}
						});
					}
				}
				);
		}
	};

	return [
		oMaskUsesValidRules
	];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the MessagePage control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/MessagePage.support", ["sap/ui/support/library"],
function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity, // Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Determines <code>Control</code> computed height.
	 * @param {sap.ui.core.Control} oControl
	 * @returns {number}
	 */
	var getControlHeight = function(oControl) {
		return oControl.getDomRef().getBoundingClientRect().height;
	};

	/**
	 * Checks, if MessagePage is in a container which has no set height
	 */
	var oMessagePageHeightRule = {
		id: "messagePageShouldNotBeInAContainerWithoutSetHeight",
		audiences: [Audiences.Application],
		categories: [Categories.Usability],
		enabled: true,
		minversion: "1.28",
		title: "Message Page: In a container without set height",
		description: "Message Page should not be used in a container which has no set height",
		resolution: "Use Message Page in a container with set height, such as sap.m.App",
		resolutionurls: [{
			text: "sap.m.MessagePage API Reference",
			href: "https://sdk.openui5.org/api/sap.m.MessagePage"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.MessagePage").forEach(function(oMPage) {

				var sMPageId = oMPage.getId(),
					iMPageHeight = getControlHeight(oMPage),
					iMPageHeaderHeight = oMPage.getShowHeader() ? getControlHeight(oMPage.getAggregation("_internalHeader")) : 0,
					iMPageContentHeight = iMPageHeight - iMPageHeaderHeight;

				if (oMPage.getParent() === oMPage.getUIArea() && iMPageContentHeight <= 0) {
					oIssueManager.addIssue({
						severity: Severity.High,
						details: "Message Page" + " (" + sMPageId + ") is used in a container which has no height set.",
						context: {
							id: sMPageId
						}
					});
				}
			});
		}
	};

	/**
	 * Checks, if MessagePage is a top-level control
	 */
	var oMessagePageHierarchyRule = {
		id: "messagePageShouldNotBeTopLevel",
		audiences: [Audiences.Application],
		categories: [Categories.Usability],
		enabled: true,
		minversion: "1.28",
		title: "Message Page: Top-level control",
		description: "Message Page should not be a top-level control",
		resolution: "Use Message Page as described in the SAP Fiori Design Guidelines",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: Message Page",
			href: "https://experience.sap.com/fiori-design-web/message-page"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.MessagePage").forEach(function(oMPage) {
				var oMPageUIAreaControls = oMPage.getUIArea().getAggregation("content"),
					sMPageId = oMPage.getId();

				if (oMPageUIAreaControls.length > 1 && oMPage.getParent() === oMPage.getUIArea()) {
					oIssueManager.addIssue({
						severity: Severity.Medium,
						details: "Message Page" + " (" + sMPageId + ") is a top-level control.",
						context: {
							id: sMPageId
						}
					});
				}
			});
		}
	};

	return [oMessagePageHeightRule, oMessagePageHierarchyRule];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the ObjectHeader control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/ObjectHeader.support", ["sap/ui/support/library"],
	function(SupportLib) {
		"use strict";

		// shortcuts
		var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
			Severity = SupportLib.Severity, // Low, Medium, High
			Audiences = SupportLib.Audiences; // Control, Internal, Application

		//**********************************************************
		// Rule Definitions
		//**********************************************************

		/**
		 * Checks if the ObjectHeader control uses both markers and deprecated markedFlagged or markedFavorite
		 */
		var oObjHeaderMarkersRule = {
			id : "objectHeaderMarkers",
			audiences: [Audiences.Control],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "1.42",
			title: "ObjectHeader: markers aggregation",
			description: "Checks if markers aggregation is used together with deprecated properties markFlagged or markFavorite",
			resolution: "Use markers aggregation",
			resolutionurls: [{
				text: "API Reference: sap.m.ObjectHeader",
				href: "https://sdk.openui5.org/api/sap.m.ObjectHeader"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.ObjectHeader")
					.forEach(function(oElement) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName(),
							iDeprecatedMark = oElement.getMarkFlagged() + oElement.getMarkFavorite();

						if (oElement.getMarkers().length > iDeprecatedMark && iDeprecatedMark > 0) {
							oIssueManager.addIssue({
								severity: Severity.High,
								details: "ObjectHeader '" + sElementName + "' (" + sElementId + ") uses both markers aggregation and deprecated properties markFlagged or markFavorite.",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		/**
		 * Checks if the ObjectHeader control uses both statuses and deprecated firstStatus or secondStatus
		 */
		var oObjHeaderStatusessRule = {
			id : "objectHeaderStatuses",
			audiences: [Audiences.Control],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "1.16",
			title: "ObjectHeader: statuses aggregation",
			description: "Checks if statuses aggregation is used together with deprecated aggregation firstStatus or secondStatus",
			resolution: "Use statuses aggregation",
			resolutionurls: [{
				text: "API Reference: sap.m.ObjectHeader",
				href: "https://sdk.openui5.org/api/sap.m.ObjectHeader"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.ObjectHeader")
					.forEach(function(oElement) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						if (oElement.getStatuses().length && (oElement.getFirstStatus() || oElement.getSecondStatus())) {
							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "ObjectHeader '" + sElementName + "' (" + sElementId + ") uses both statuses aggregation and deprecated aggregations firstStatus or secondStatus.",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		/**
		 * Checks if the responsive property is set to false when condensed property is used
		 */
		var oObjHeaderCondensedRule = {
			id : "objectHeaderCondensed",
			audiences: [Audiences.Control],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "1.21",
			title: "ObjectHeader: condensed property",
			description: "Checks if condensed property is set to true and responsive property is set to false",
			resolution: "Change the responsive property to false",
			resolutionurls: [{
				text: "API Reference: sap.m.ObjectHeader",
				href: "https://sdk.openui5.org/api/sap.m.ObjectHeader"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.ObjectHeader")
					.forEach(function(oElement) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						if (oElement.getCondensed() && oElement.getResponsive()) {
							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "ObjectHeader '" + sElementName + "' (" + sElementId + ") sets both condensed and responsive property to true.",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		/**
		 * Checks if the responsive property is set to true when fullScreenOptimized property is used
		 */
		var oObjHeaderFullScreenOptimizedRule = {
			id : "objectHeaderFullScreenOptimized",
			audiences: [Audiences.Control],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "1.28",
			title: "ObjectHeader: fullScreenOptimized property",
			description: "Checks if fullScreenOptimized property is set to true and responsive property is set to true",
			resolution: "Change the responsive property to true",
			resolutionurls: [{
				text: "API Reference: sap.m.ObjectHeader",
				href: "https://sdk.openui5.org/api/sap.m.ObjectHeader"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.ObjectHeader")
					.forEach(function(oElement) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						if (oElement.getFullScreenOptimized() && !oElement.getResponsive()) {
							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "ObjectHeader '" + sElementName + "' (" + sElementId + ") sets fullScreenOptimized to true but responsive property is false.",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		/**
		 * Checks if the responsive property is set to false when additionalNumbers aggregation is used
		 */
		var oObjHeaderAdditionalNumbersRule = {
			id : "objectHeaderAdditionalNumbers",
			audiences: [Audiences.Control],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "1.38",
			title: "ObjectHeader: additionalNumbers aggregation",
			description: "Checks if additionalNumbers aggregation is used and responsive property is set to false",
			resolution: "Change the responsive property to false",
			resolutionurls: [{
				text: "API Reference: sap.m.ObjectHeader",
				href: "https://sdk.openui5.org/api/sap.m.ObjectHeader"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.ObjectHeader")
					.forEach(function(oElement) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						if (oElement.getAdditionalNumbers().length && oElement.getResponsive()) {
							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "ObjectHeader '" + sElementName + "' (" + sElementId + ") uses additionalNumbers aggregation and responsive property is true.",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		/**
		 * Checks if the responsive property is set to true when headerContainer aggregation is used
		 */
		var oObjHeaderHeaderContainerRule = {
			id : "objectHeaderHeaderContainer",
			audiences: [Audiences.Control],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "1.21",
			title: "ObjectHeader: headerContainer aggregation",
			description: "Checks if headerContainer aggregation is used and responsive property is set to true",
			resolution: "Change the responsive property to true",
			resolutionurls: [{
				text: "API Reference: sap.m.ObjectHeader",
				href: "https://sdk.openui5.org/api/sap.m.ObjectHeader"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.ObjectHeader")
					.forEach(function(oElement) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						if (oElement.getHeaderContainer() && !oElement.getResponsive()) {
							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "ObjectHeader '" + sElementName + "' (" + sElementId + ") sets headerContainer aggregation but responsive property is false.",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};


		return [
			oObjHeaderMarkersRule,
			oObjHeaderStatusessRule,
			oObjHeaderCondensedRule,
			oObjHeaderFullScreenOptimizedRule,
			oObjHeaderAdditionalNumbersRule,
			oObjHeaderHeaderContainerRule
		];

	}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the ObjectListItem control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/ObjectListItem.support", ["sap/ui/support/library"],
	function(SupportLib) {
		"use strict";

		// shortcuts
		var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
			Severity = SupportLib.Severity, // Low, Medium, High
			Audiences = SupportLib.Audiences; // Control, Internal, Application

		//**********************************************************
		// Rule Definitions
		//**********************************************************

		/**
		 * Checks if the ObjectListItem control uses both markers and deprecated markedFlagged or markedFavorite
		 */
		var oObjListItemMarkersRule = {
			id : "objectListItemMarkers",
			audiences: [Audiences.Control],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "*",
			title: "ObjectListItem: markers aggregation",
			description: "Checks if markers aggregation is used together with deprecated properties markFlagged or markFavorite",
			resolution: "Use markers aggregation",
			resolutionurls: [{
				text: "API Reference: sap.m.ObjectListItem",
				href: "https://sdk.openui5.org/api/sap.m.ObjectListItem"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.ObjectListItem")
					.forEach(function(oElement) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName(),
							iDeprecatedMark = oElement.getMarkFlagged() + oElement.getMarkFavorite();

						if (oElement.getMarkers().length > iDeprecatedMark && iDeprecatedMark > 0) {
							oIssueManager.addIssue({
								severity: Severity.High,
								details: "ObjectListItem '" + sElementName + "' (" + sElementId + ") uses both markers aggregation and deprecated properties markFlagged or markFavorite.",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		return [
			oObjListItemMarkersRule
		];

	}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the ObjectMarker control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/ObjectMarker.support", ["sap/ui/support/library"],
	function(SupportLib) {
		"use strict";

		// shortcuts
		var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
			Severity = SupportLib.Severity, // Low, Medium, High
			Audiences = SupportLib.Audiences; // Control, Internal, Application

		//**********************************************************
		// Rule Definitions
		//**********************************************************

		/**
		 * Checks if the ObjectMarker sets type property when additionalInfo use used
		 */
		var oObjMarkerAdditionalInfoRule = {
			id : "objectMarkerAdditionalInfo",
			audiences: [Audiences.Control],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "*",
			title: "ObjectMarker: additionalInfo property",
			description: "Checks if additionalInfo property is used but no type is set",
			resolution: "Set type of the ObjectMarker",
			resolutionurls: [{
				text: "API Reference: sap.m.ObjectMarker",
				href: "https://sdk.openui5.org/api/sap.m.ObjectMarker"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.ObjectMarker")
					.forEach(function(oElement) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						if (oElement.getAdditionalInfo() && !oElement.getType()) {
							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "ObjectMarker '" + sElementName + "' (" + sElementId + ") sets additionalInfo but has no type.",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		return [
			oObjMarkerAdditionalInfoRule
		];

	}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the ObjectStatus control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/ObjectStatus.support", ["sap/ui/support/library"],
	function(SupportLib) {
		"use strict";

		// shortcuts
		var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
			Severity = SupportLib.Severity, // Low, Medium, High
			Audiences = SupportLib.Audiences; // Control, Internal, Application

		//**********************************************************
		// Rule Definitions
		//**********************************************************

		/**
		 * Checks if the ObjectStatus control sets text or icon when active property is set
		 */
		var oObjStatusActiveRule = {
			id : "objectStatusActive",
			audiences: [Audiences.Control],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "*",
			title: "ObjectStatus: active property",
			description: "Checks if active property is set to true but no icon or text are set.",
			resolution: "Set text or icon when active property is true",
			resolutionurls: [{
				text: "API Reference: sap.m.ObjectStatus",
				href: "https://sdk.openui5.org/api/sap.m.ObjectStatus"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.ObjectStatus")
					.forEach(function(oElement) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						if (oElement.getActive() && !oElement.getText() && !oElement.getIcon()) {
							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "ObjectStatus '" + sElementName + "' (" + sElementId + ") sets active to true but no icon or text.",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		return [
			oObjStatusActiveRule
		];

	}, true);
/* eslint-disable linebreak-style */
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Panel control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Panel.support", [
	"sap/ui/support/library",
	"sap/base/util/isEmptyObject"
],
	function(SupportLib, isEmptyObject) {
		"use strict";
		// shortcuts
		var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
			Severity = SupportLib.Severity,	// Hint, Warning, Error
			Audiences = SupportLib.Audiences; // Control, Internal, Application

		//**********************************************************
		// Rule Definitions
		//**********************************************************

		/**
		 *Checks if a panel has a title or a header toolbar with a title
		 */
		var oPanelNeedHeaderRule = {
			id : "panelWithheaderTextOrWithHeaderToolbarWithTitle",
			audiences: [Audiences.Control],
			categories: [Categories.Usability],
			enabled: true,
			minversion: "1.28",
			title: "Panel: Header text is missing",
			description: "According to the SAP Fiori Guidelines, a panel needs a header text or a header toolbar.",
			resolution: "Add a title directly to the panel or use a headerToolbar with title element",
			resolutionurls: [{
				text: "SAP Fiori Design Guidelines: Panel",
				href: "https://experience.sap.com/fiori-design-web/panel/#components",
				text2: "Explored Sample",
				href2: "https://sdk.openui5.org/entity/sap.m.Panel/sample/sap.m.sample.Panel"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.Panel")
					.forEach(function(oElement) {
						if (!isEmptyObject(oElement.getAggregation("Title text"))
							|| !isEmptyObject(oElement.getAggregation("Toolbar"))) {

							var sElementId = oElement.getId(),
								sElementName = oElement.getMetadata().getElementName();

							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "Panel '" + sElementName + "' (" + sElementId + ") does not have a title or a toolbar aggregation",
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		return [oPanelNeedHeaderRule];

	}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Select control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Select.support", ["sap/ui/support/library", "sap/ui/model/BindingMode"],
	function(SupportLib, BindingMode) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity, // Low, Medium, High
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	// const
	var DEFAULT_MODEL_SIZE_LIMIT = 100;

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 *Checks if the 'items' aggregation binding of sap.m.Select is limited to 100 items
	 */
	var oSelectRule = {
		id : "selectItemsSizeLimit",
		audiences: [Audiences.Control],
		categories: [Categories.Usability],
		enabled: true,
		minversion: "1.28",
		title: "Select: Items have size limit of 100",
		description: "The 'items' model imposes a default size limit of 100",
		resolution: "Use the sap.ui.model.Model.prototype.setSizeLimit to adjust the size limit of the 'items' model if you expect more than 100 items",
		resolutionurls: [{
			text: "API Reference for sap.ui.model.Model",
			href: "https://sdk.openui5.org/api/sap.ui.model.Model"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.Select")
				.forEach(function(oElement) {

					var oBinding = oElement.getBinding("items"),
						oModel = oBinding && oBinding.oModel;

					if (oModel && (oModel.iSizeLimit === DEFAULT_MODEL_SIZE_LIMIT)) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.Low,
							details: "Select '" + sElementName + "' (" + sElementId + ") model has a default limit of 100 items",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	var oSelectedKeyBindingRule = {
		id: "selectedKeyBindingRule",
		audiences: [Audiences.Control],
		categories: [Categories.Bindings],
		enabled: true,
		minversion: "1.64",
		title: "Select: 'selectedKey' property incorrectly bound to item which is bound to the 'items' aggregation",
		description: "Binding the 'selectedKey' property to the 'items' aggregation results in a non-working Select " +
			"control in TwoWay binding mode. When the user changes the selected item, the key of the bound item " +
			"(under the list bound to the 'items' aggregation) also changes, resulting in an incorrect change of the " +
			"selected item.",
		resolution: "If binding of 'selectedKey' is necessary, bind it to a model entry which is not bound to the " +
			"'items' aggregation of the Select control.",
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.Select")
				.forEach(function(oElement) {
					var sElementId,
						sElementName,
						oSelectedKeyModel,
						oItemsModel,
						sSelectedKeyBindingPath,
						sItemsBindingPath,
						sSelectedKeyMinusItemsBindingPath;

					if (
						oElement.isBound("selectedKey") &&
						oElement.isBound("items")
					) { // Both metadata entries are bound

						oSelectedKeyModel = oElement.getBinding("selectedKey").getModel();
						oItemsModel = oElement.getBinding("items").getModel();

						if (
							oSelectedKeyModel && // We have a model for the selectedKey
							oItemsModel && // We have a model for the items
							oSelectedKeyModel.getId() === oItemsModel.getId() && // Both entries are bound to the same model
							oSelectedKeyModel.getDefaultBindingMode() === BindingMode.TwoWay // Model is in TwoWay binding mode
						) {

							sSelectedKeyBindingPath = oElement.getBindingPath("selectedKey");
							sItemsBindingPath = oElement.getBindingPath("items");
							sSelectedKeyMinusItemsBindingPath = sSelectedKeyBindingPath.replace(sItemsBindingPath, "");

							// We will check that the binding path of the "selectedKey" is not a child of the "items"
							// binding path
							//
							// For example:
							// * "selectedKey" bindingPath equals "/ProductCollection/1/ProductId"
							// * "items" bindingPath equals "/ProductCollection"
							// * Subtracting "items" from "selectedKey" binding path should remain "/1/ProductId"
							if (
								sSelectedKeyBindingPath.indexOf(sItemsBindingPath) === 0 && // "selectedKey" starts with "items" binding path
								sSelectedKeyMinusItemsBindingPath.length > 0 && // "selectedKey" is longer than "items" binding path
								sSelectedKeyMinusItemsBindingPath[0] === "/" // remaining binding path starts with slash
							) {
								sElementId = oElement.getId();
								sElementName = oElement.getMetadata().getElementName();

								oIssueManager.addIssue({
									severity: Severity.High,
									details: "Select '" + sElementName + "' (" + sElementId + ") 'selectedKey' property incorrectly bound to item which is bound to the 'items' aggregation",
									context: {
										id: sElementId
									}
								});
							}

						}

					}

				});
		}
	};

	return [
		oSelectRule,
		oSelectedKeyBindingRule
	];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the SelectDialog control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/SelectDialog.support", ["sap/ui/support/library", "sap/m/library"],
	function(SupportLib, mobileLibrary) {
		"use strict";

		// shortcuts
		var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
			Severity = SupportLib.Severity,	// Hint, Warning, Error
			Audiences = SupportLib.Audiences, // Control, Internal, Application
			ListType = mobileLibrary.ListType;

		//**********************************************************
		// Rule Definitions
		//**********************************************************

		/**
		 *Checks, if a selectDialog does not contain inactive list items
		 */
		var oSelectDialogNonActiveItem = {
			id : "noContainInactiveItemsInSelectDialog",
			audiences: [Audiences.Control],
			categories: [Categories.Usability],
			enabled: true,
			minversion: "1.28",
			title: "SelectDialog: Select Dialog should not contain inactive items",
			description: "All items in a Select Dialog should be interactable/selectable",
			resolution: "Make all items interactable/selectable or remove the inactive ones",
			resolutionurls: [{
				text: "SAP Fiori Design Guidelines: SelectDialog",
				href: "https://experience.sap.com/fiori-design-web/select-dialog/#behavior-and-interaction"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.SelectDialog")
					.forEach(function(oElement) {
						var aListItems = oElement.getItems(),
							sListOfInactiveItems = "";

						aListItems.forEach(function(oListItem){
							if (oListItem.getType() === ListType.Inactive) {
								var sListItemId = oListItem.getId(),
									sListItemName = oListItem.getMetadata().getElementName();

								sListOfInactiveItems += sListItemName + " (" + sListItemId + "); ";

							}
						});

						if (sListOfInactiveItems) {
							var sElementId = oElement.getId(),
								sElementName = oElement.getMetadata().getElementName();

							oIssueManager.addIssue({
								severity: Severity.Medium,
								details: "SelectDialog '" + sElementName + "' (" + sElementId + ") contains one or more items of type 'Inactive' : " + sListOfInactiveItems,
								context: {
									id: sElementId
								}
							});
						}
					});
			}
		};

		return [oSelectDialogNonActiveItem];

	}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the StepInput control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/StepInput.support", ["sap/ui/support/library"], function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, Bindings, Consistency, FioriGuidelines, Functionality, Usability, DataModel, Modularization, Usage, Other
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Checks, if the value of the step property
	 * does not contain more digigs after the decimal point
	 * that the value of the displayValuePrecision
	 */
	var oStepInputStepProperty = {
		id: "stepInputStepProperty",
		audiences: [Audiences.Control],
		categories: [Categories.Consistency],
		enabled: true,
		minversion: "1.46",
		title: "StepInput: Step property precision is not greater than displayValuePrecision",
		description: "The value of the step property should not contain more digits after the decimal point than what is set to the displayValuePrecision property, as it may lead to an increase/decrease that is not visible",
		resolution: "Set step property to a value with less precision than the displayValuePrecision",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: StepInput",
			href: "https://experience.sap.com/fiori-design-web/step-input/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.StepInput")
				.forEach(function(oElement) {
					var sStep = oElement.getStep().toString();
					var iPrecision = sStep.indexOf(".") >= 0 ? sStep.split(".")[1].length : 0;
					if (iPrecision > oElement.getDisplayValuePrecision()) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "StepInput '" + sElementName + "' (" + sElementId + ")'s step precision is greater than displayValuePrecision",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	var oStepInputFieldWidth = {
		id: "stepInputFieldWidth",
		audiences: [Audiences.Control],
		categories: [Categories.Consistency],
		enabled: true,
		minversion: "1.46",
		title: "StepInput: The fieldWidth property takes effect only if the description property is also set.",
		description: "This property takes effect only if the description property is also set.",
		resolution: "Set fieldWidth when you want to control the availbale width for the description",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: StepInput",
			href: "https://experience.sap.com/fiori-design-web/step-input/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.StepInput")
				.forEach(function(oElement) {
					if (oElement.getFieldWidth() !== oElement.getMetadata().getAllProperties().fieldWidth.defaultValue && !oElement.getDescription()) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "StepInput '" + sElementName + "' (" + sElementId + ") fieldWidth property is set and description is not",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};

	return [
		oStepInputStepProperty,
		oStepInputFieldWidth
	];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Link control of sap.m Table.
 */
sap.ui.predefine("sap/m/rules/Table.support", ["sap/ui/support/library", "sap/m/ListBase", "sap/ui/core/message/MessageType"],
	function(SupportLib, ListBase, MessageType) {
		"use strict";

		// shortcuts
		var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
			Severity = SupportLib.Severity,	// Hint, Warning, Error
			Audiences = SupportLib.Audiences; // Control, Internal, Application

		//**********************************************************
		// Rule Definitions
		//**********************************************************

		/**
		 * Checks column widths configuration
		 */
		var oColumnWidthRule = {
			id: "definingColumnWidths",
			audiences: [Audiences.Control],
			categories: [Categories.Usability],
			enabled: true,
			minversion: "1.28",
			title: "Table: Defining column widths",
			description: "Defining column widths",
			resolution: "Configure at least 1 column with width=auto or use fixedLayout=Strict",
			resolutionurls: [{
				text: "Documentation: Defining Column Widths",
				href: "https://sdk.openui5.org/topic/6f778a805bc3453dbb66e246d8271839"
			}],
			check: function (oIssueManager, oCoreFacade, oScope) {
				oScope.getElementsByClassName("sap.m.Table").filter(function(oTable) {
					return oTable.getFixedLayout() == true;
				}).forEach(function (oTable) {
					var aColumn = oTable.getColumns(),
						bSomeColumnNoWidth;
					if (!aColumn.length) {
						return;
					}
					bSomeColumnNoWidth = aColumn.some(function (oColumn) {
						var sWidth = oColumn.getWidth();
						return sWidth === "" || "auto";
					});
					if (!bSomeColumnNoWidth) {
						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "All the columns are configured with a width. Either set at least for one column width=auto, or fixedLayout=Strict for the table",
							context: {
								id: oTable.getId()
							}
						});
					}
				});
			}
		};

		/*
		 * Validates whether the highlightText property of the item is correctly set.
		 */
		var oItemHighlightTextRule = {
			id: "accessibleItemHighlight",
			audiences: [Audiences.Application],
			categories: [Categories.Accessibility],
			enabled: true,
			minversion: "1.62",
			title: "ListItem: Accessible Highlight",
			description: "Checks whether the item highlights are accessible.",
			resolution: "Use the 'highlightText' property of the item to define the semantics of the 'highlight'.",
			resolutionurls: [{
				text: "API Reference: sap.m.ListItemBase#getHighlight",
				href: "https://sdk.openui5.org/api/sap.m.ListItemBase/methods/getHighlight"
			}, {
				text: "API Reference: sap.m.ListItemBase#getHighlightText",
				href: "https://sdk.openui5.org/api/sap.m.ListItemBase/methods/getHighlightText"
			}],
			check: function(oIssueManager, oCoreFacade, oScope) {
				function checkItemHighlight(oListItemBase) {
					var sHighlight = oListItemBase.getHighlight();
					var sHighlightText = oListItemBase.getHighlightText();
					var sItemId = oListItemBase.getId();
					var sListId = oListItemBase.getParent().getId();

					if (!(sHighlight in MessageType) && sHighlightText === "") {
						oIssueManager.addIssue({
							severity: Severity.High,
							details: "Item '" + sItemId + "' does not have a highlight text.",
							context: {
								id: sListId
							}
						});
					}
				}

				oScope.getElementsByClassName(ListBase).forEach(function(oListBase) {
					oListBase.getItems().forEach(checkItemHighlight);
				});
			}
		};

		return [oColumnWidthRule, oItemHighlightTextRule];
	}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Title control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Title.support", ["sap/ui/support/library", "sap/ui/core/library"],
	function(SupportLib, coreLibrary) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences, // Control, Internal, Application
		TitleLevel = coreLibrary.TitleLevel;

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	var oTitleRule = {
		id: "titleLevelProperty",
		audiences: [Audiences.Internal],
		categories: [Categories.FioriGuidelines, Categories.Accessibility],
		enabled: true,
		minversion: "*",
		title: "Title: It is recommended to set the level property",
		description: "Level defines the semantic level of the title. This information is used by assistive technologies like screen readers to create a hierarchical site map for faster navigation.",
		resolution: "Add value to the level property",
		resolutionurls: [
		{
			text: "SAP Fiori Design Guidelines: Title",
			href: "https://experience.sap.com/fiori-design-web/title/#guidelines"
		},
		{
			text: "API Reference: Title",
			href: "https://ui5.sap.com/#/api/sap.m.Title/controlProperties"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.Title")
				.forEach(function(oElement) {
					if (oElement.getProperty("level") === TitleLevel.Auto) {

						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.Low,
							details: "Title '" + sElementName + "' (" + sElementId + ") has no level property set",
							context: {
								id: sElementId
							}
						});
					}
				});
		}
	};


	return [oTitleRule];

}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the Tokenizer control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/Tokenizer.support", ["sap/ui/support/library"],
function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, ...
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	var oTokenizerParentRule = {
			id : "tokenizerParentRule",
			audiences: [Audiences.Application],
			categories: [Categories.Usage],
			enabled: true,
			minversion: "1.28",
			title : "Tokenizer: Tokenizer parent control",
			description : "The tokenizer can only be used as part of MultiComboBox, MultiInput or ValueHelpDialog.",
			resolution : "Do not use the Tokenizer control standalone.",
			check : function(oIssueManager, oCoreFacade, oScope) {
				var oTokenizers = oScope.getElementsByClassName("sap.m.Tokenizer"),
					bParent, oParent;
				oTokenizers.forEach(function (oTokenizer) {
					oParent = oTokenizer.getParent();
					bParent = oParent && (
								oParent.isA(["sap.m.MultiInput", "sap.m.MultiComboBox"]) ||
								// Value Help Dialog uses the tokenizer in a horizontal layout with special style class
								oParent.hasStyleClass("compVHTokenizerHLayout")
							  );
					if (!bParent) {
						oIssueManager.addIssue({
							severity: Severity.High,
							details: "Tokenizer with id: " + oTokenizer.getId() + " is not inside a MultiComboBox, MultiInput or ValueHelpDialog",
							context: {
								id: oTokenizer.getId()
							}
						});
					}
				});
			}
		};

	return [oTokenizerParentRule];
}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules of the ViewSettingsDialog control of sap.m library.
 */
sap.ui.predefine("sap/m/rules/ViewSettingsDialog.support", ["sap/ui/support/library"], function(SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories, // Accessibility, Performance, Memory, Bindings, Consistency, FioriGuidelines, Functionality, Usability, DataModel, Modularization, Usage, Other
		Severity = SupportLib.Severity,	// Hint, Warning, Error
		Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 *  Checks if every item has a key
	 */
	var oVSDItemsHasKeys = {
		id: "vsdItemsHaveKeys",
		audiences: [Audiences.Control],
		categories: [Categories.Usage],
		enabled: true,
		minversion: "1.28",
		title: "ViewSettingsDialog: not all items have keys",
		description: "All items should have keys",
		resolution: "Provide keys for all items",
		resolutionurls: [{
			text: "SAP Fiori Design Guidelines: DatePicker",
			href: "https://experience.sap.com/fiori-design-web/date-picker/"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName("sap.m.ViewSettingsDialog")
				.forEach(function(oElement) {
					var aFilterItems = oElement.getFilterItems();
					var aSortItems = oElement.getSortItems();
					var aGroupItems = oElement.getGroupItems();
					var fnFilterNoKeyItems = function(f) { return !f.getKey(); };
					if (aFilterItems.filter(fnFilterNoKeyItems).length
						|| aSortItems.filter(fnFilterNoKeyItems).length
						|| aGroupItems.filter(fnFilterNoKeyItems).length) {
						var sElementId = oElement.getId(),
							sElementName = oElement.getMetadata().getElementName();

						oIssueManager.addIssue({
							severity: Severity.High,
							details: "ViewSettingsDialog '" + sElementName + "' (" + sElementId
								+ ")'s items do not have keys",
							context: {
								id: sElementId
							}
						});
					}
				}
				);
		}
	};

	return [
		oVSDItemsHasKeys
	];

}, true);
//# sourceMappingURL=library-preload.support.js.map
