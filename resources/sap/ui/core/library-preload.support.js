//@ui5-bundle sap/ui/core/library-preload.support.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Adds support rules to the core
 */
sap.ui.predefine("sap/ui/core/library.support", [
	"./rules/Misc.support",
	"./rules/Config.support",
	"./rules/Model.support",
	"./rules/View.support",
	"./rules/App.support",
	"./rules/Rendering.support",
	"./rules/Theming.support"
],
	function(MiscSupport, ConfigSupport, ModelSupport, ViewSupport, AppSupport, RenderingSupport, ThemingSupport) {
	"use strict";

	return {
		name: "sap.ui.core",
		niceName: "UI5 Core Library",
		ruleset: [
			MiscSupport,
			ConfigSupport,
			ModelSupport,
			ViewSupport,
			AppSupport,
			RenderingSupport,
			ThemingSupport
		]
	};
}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines Application related support rules.
 */
sap.ui.predefine("sap/ui/core/rules/App.support", [
	"sap/ui/support/library",
	"sap/ui/core/mvc/View",
	"sap/ui/core/mvc/Controller",
	"sap/ui/thirdparty/jquery"
], function(SupportLib, View, Controller, jQuery) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories; // Accessibility, Performance, Memory, ...
	var Severity = SupportLib.Severity; // Hint, Warning, Error
	var Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************
	/**
	 * Check controller code for obsolete function calls.
	 *
	 * e.g. <code>{aObsoleteFunctionNames:["jQuery.sap.sjax"]}</code>
	 * @deprecated Since 1.119
	 */
	var oControllerSyncCodeCheckRule = {
		id: "controllerSyncCodeCheck",
		audiences: [Audiences.Internal],
		categories: [Categories.Consistency],
		enabled: true,
		minversion: "1.32",
		title: "Synchronous calls in controller code",
		description: "Synchronous calls are deprecated within the Google Chrome browser and block the UI.",
		resolution: "Use asynchronous XHR calls instead",
		resolutionurls: [{
			text: 'Documentation: Loading a Module',
			href: 'https://sdk.openui5.org/topic/d12024e38385472a89c1ad204e1edb48'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			// get the controllers and the associated viewId
			var aElements = oScope.getElementsByClassName(View);
			var aControllersWithViewId = [];
			aElements.forEach(function(oElement) {
				if (oElement.getController) {
					var oController = oElement.getController();
					if (oController) {
						aControllersWithViewId.push({
							controller: oController,
							viewId: oElement.getId()
						});
					}
				}
			});

			const aObsoleteFunctionNames = ["jQuery.sap.require", "$.sap.require", "sap.ui.requireSync", "jQuery.sap.sjax"];
			// avoid spoiling the globalAPIRule by using Object.getOwnPropertyDescriptor
			if (jQuery && jQuery.sap && Object.getOwnPropertyDescriptor(jQuery.sap, "sjax").value) {
				aObsoleteFunctionNames.push(
					"jQuery.sap.syncHead",
					"jQuery.sap.syncGet",
					"jQuery.sap.syncPost",
					"jQuery.sap.syncGetText",
					"jQuery.sap.syncGetJSON");
			}

			// checks the given module's functions code for invalidContent
			// returns an array which contains the functions with invalid content
			var fnGatherInvalidControllerFunctions = function(oController, viewId, aInvalidContent, fnProcessInvalidFunction) {
				var _aInvalidControllerFunctions = [];
				Object.keys(oController).forEach(function(sProtoKey) {
					var sFnContent = oController[sProtoKey].toString().replace(/(\r\n|\n|\r)/gm, "");

					aInvalidContent.forEach(function(sInvalidContent) {
						if (sFnContent.indexOf(sInvalidContent) > 0) {
							fnProcessInvalidFunction(oController.getMetadata().getName(), sProtoKey, sInvalidContent, viewId);
						}
					});


				});
				return _aInvalidControllerFunctions;
			};

			var mViewIdToControllerFunctions = {};

			// check the code for each controller and their prototype
			// and stores it grouped by view id in <code>mViewIdToControllerFunctions</code>
			aControllersWithViewId.forEach(function(oControllerWithViewId) {

				var fnMapUsingViewIds = function(sControllerName, sFnName, sInvalidContent, sViewId) {
					mViewIdToControllerFunctions[sViewId] = mViewIdToControllerFunctions[sViewId] || [];
					mViewIdToControllerFunctions[sViewId].push({
						controllerName: sControllerName,
						functionName: sFnName,
						invalidContent: sInvalidContent
					});
				};

				// check each controller and their prototypes
				var oController = oControllerWithViewId.controller;
				while (oController) {
					fnGatherInvalidControllerFunctions(oController, oControllerWithViewId.viewId, aObsoleteFunctionNames, fnMapUsingViewIds);
					var oControllerPrototype = Object.getPrototypeOf(oController);
					// sanity check to avoid potential endless loops and limit recursion only up to the Controller itself
					if (oController === oControllerPrototype || oControllerPrototype === Controller.prototype) {
						break;
					}
					oController = oControllerPrototype;
				}
			});


			// add issues for each invalid controller function
			Object.keys(mViewIdToControllerFunctions).forEach(function(sViewId) {
				var aControllerFunctions = mViewIdToControllerFunctions[sViewId];
				oIssueManager.addIssue({
					severity: Severity.Medium,
					details: aControllerFunctions.map(function(oController) {
						return "Synchronous call " + oController.invalidContent + " found in " + oController.controllerName + "#" + oController.functionName;
					}).reduce(function(sFullText, sCurrentText) {
						return sFullText + "\n" + sCurrentText;
					}),
					context: {
						id: sViewId
					}
				});

			});
		}

	};

	/**
	 * Check for usage of stubbed global API, which leads to a sync request and should be avoided.
	 *
	 * e.g. <code>jQuery.sap.assert(bValue)</code>
	 * @deprecated Since 1.119
	 */
	var oGlobalAPIRule = {
		id: "globalApiUsage",
		audiences: [Audiences.Internal],
		categories: [Categories.Modularization],
		enabled: true,
		minversion: "1.58",
		title: "Call of deprecated global API",
		description: "Calls of deprecated global API without declaring the according dependency should be avoided.",
		resolution: "Declare the dependency properly or even better: Migrate to the modern module API as documented.",
		resolutionurls: [{
			text: 'Documentation: Modularization',
			href: 'https://sdk.openui5.org/topic/b8fdf0c903424c9191f142842323ae22'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var oLoggedObjects = oScope.getLoggedObjects("jquery.sap.stubs");
			oLoggedObjects.forEach(function(oLoggedObject) {
				oIssueManager.addIssue({
					severity: Severity.High,
					details: oLoggedObject.message,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	/**
	 * Check for usage of jquery.sap modules and provide a hint on the alternatives.
	 * @deprecated Since 1.119
	 */
	var oJquerySapRule = {
		id: "jquerySapUsage",
		audiences: [Audiences.Internal],
		categories: [Categories.Modularization],
		enabled: true,
		minversion: "1.58",
		async: true,
		title: "Usage of deprecated jquery.sap module",
		description: "Usage of deprecated jquery.sap API should be avoided and dependencies to jquery.sap " +
			"are not needed any longer. This rule only works on global execution scope.",
		resolution: "Migrate to the modern module API as documented.",
		resolutionurls: [{
			text: 'Documentation: Modularization',
			href: 'https://sdk.openui5.org/topic/a075ed88ef324261bca41813a6ac4a1c'
		}],
		check: function(oIssueManager, oCoreFacade, oScope, fnResolve) {
			if (oScope.getType() === "global") {
				sap.ui.require(["sap/base/util/LoaderExtensions"], function(LoaderExtensions) {
					var sDetails = "Usage of deprecated jquery.sap modules detected: \n" +
						LoaderExtensions.getAllRequiredModules().filter(function(sModuleName) {
							return sModuleName.startsWith("jquery.sap");
						}).reduce(function(sModuleList, sModuleName) {
							return sModuleList + "\t- " + sModuleName + "\n";
						}, "");

					oIssueManager.addIssue({
						severity: Severity.Medium,
						details: sDetails,
						context: {
							id: "WEBPAGE"
						}
					});

					fnResolve();
				});
			}
		}
	};

	/**
	 * Check if deprecated factories are called.
	 * @deprecated Since 1.119
	 */
	var oSyncFactoryLoadingRule = {
		id: "syncFactoryLoading",
		audiences: [Audiences.Internal],
		categories: [Categories.Modularization],
		enabled: true,
		minversion: "1.58",
		title: "Usage of deprecated synchronous factories",
		description: "Usage of deprecated synchronous factories",
		resolution: "Avoid using synchronous factory functions. Use the create() and/or load() functions of the respective modules instead. For example: View.create(...) or Component.load(). Migrate to the modern module API as documented.",
		resolutionurls: [{
			text: 'Documentation: Legacy Factories Replacement',
			href: 'https://sdk.openui5.org/topic/491bd9c70b9f4c4d913c8c7b4a970833'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var aFactoryTypes = [
				"sap.ui.fragment",
				"sap.ui.xmlfragment",
				"sap.ui.jsfragment",
				"sap.ui.htmlfragment",
				"sap.ui.controller",
				"sap.ui.extensionpoint",
				"sap.ui.component",
				"sap.ui.view",
				"sap.ui.template"
			];

			aFactoryTypes.forEach(function(sType) {
				var oLoggedObjects = oScope.getLoggedObjects(sType);
				oLoggedObjects.forEach(function(oLoggedObject) {
					oIssueManager.addIssue({
						severity: Severity.High,
						details: oLoggedObject.message,
						context: {
							id: "WEBPAGE"
						}
					});
				});
			});
		}
	};

	/**
	 * Check if deprecated sap.ui.core.mvc.JSView is used.
	 * @deprecated Since 1.119
	 */
	 var oJSViewRule = {
		id: "deprecatedJSViewUsage",
		audiences: [Audiences.Internal],
		categories: [Categories.Modularization],
		enabled: true,
		minversion: "1.90",
		title: "Usage of deprecated JSView",
		description: "Usage of deprecated JSView",
		resolution: "Avoid using sap.ui.core.mvc.JSView. Instead use Typed Views by defining the view class with 'sap.ui.core.mvc.View.extend' and creating the view instances with 'sap.ui.core.mvc.View.create'.",
		resolutionurls: [{
			text: 'Documentation: Typed Views',
			href: 'https://sdk.openui5.org/topic/e6bb33d076dc4f23be50c082c271b9f0'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var oLoggedObjects = oScope.getLoggedObjects("sap.ui.core.mvc.JSView");
			oLoggedObjects.forEach(function(oLoggedObject) {
				oIssueManager.addIssue({
					severity: Severity.High,
					details: oLoggedObject.message,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	/**
	 * Check for avoidable synchronous XHRs.
	 * @deprecated Since 1.119
	 */
	var oGlobalSyncXhrRule = {
		id: "globalSyncXHR",
		audiences: [Audiences.Internal],
		categories: [Categories.Consistency],
		enabled: true,
		minversion: "1.59",
		title: "Sending of synchronous XHR",
		description: "Sending synchronus XHRs has to be avoided.",
		resolution: "Check the details of the findings for tips to fix the issue.",
		resolutionurls: [{
			text: "Performance: Speed Up Your App",
			href: "https://sdk.openui5.org/topic/408b40efed3c416681e1bd8cdd8910d4"
		},
		{
			text: "Configuration of 'sap.ui.loader'",
			href: "https://sdk.openui5.org/api/sap.ui.loader"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var oLoggedObjects = oScope.getLoggedObjects("SyncXHR");
			oLoggedObjects.forEach(function(oLoggedObject) {
				oIssueManager.addIssue({
					severity: Severity.High,
					details: oLoggedObject.message,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	/**
	 * Check for deprecated API calls in general.
	 * Not specific to factories or already covered APIs.
	 * @deprecated Since 1.119
	 */
	var oDeprecatedAPIRule = {
		id: "deprecatedApiUsage",
		audiences: [Audiences.Internal],
		categories: [Categories.Modularization],
		enabled: true,
		minversion: "1.59",
		title: "Usage of deprecated API",
		description: "Usage of deprecated API should be avoided.",
		resolution: "Check the details of the findings for tips to fix the issue.",
		resolutionurls: [{
			text: 'Documentation: Adapting to the Modularization of the Core',
			href: 'https://sdk.openui5.org/topic/b8fdf0c903424c9191f142842323ae22'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var oLoggedObjects = oScope.getLoggedObjects("Deprecation");
			oLoggedObjects.forEach(function(oLoggedObject) {
				oIssueManager.addIssue({
					severity: Severity.High,
					details: oLoggedObject.message,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	/**
	 * Check for usage of Controller Extension API.
	 */
	var oControllerExtensionRule = {
		id: "controllerExtension",
		audiences: [Audiences.Internal],
		categories: [Categories.Usage],
		enabled: true,
		minversion: "1.61",
		title: "Wrong usage of Controller Extension API",
		description: "Your controller extension definition is a subclass of sap.ui.core.mvc.Controller.",
		resolution: "Your controller extension module should return a plain object.",
		check: function(oIssueManager, oCoreFacade, oScope) {
			var oLoggedObjects = oScope.getLoggedObjects("ControllerExtension");
			oLoggedObjects.forEach(function(oLoggedObject) {
				oIssueManager.addIssue({
					severity: Severity.Medium,
					details: oLoggedObject.message,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	/**
	 * With jQuery 3.x we provide a compatibility layer to bridge gaps between jQuery 3.x and 2.x.
	 * Our compatibility module logs warnings when deprecated jQuery APIs are used.
	 * @deprecated Since 1.119
	 */
	var oJQueryThreeDeprecationRule = {
		id: "jQueryThreeDeprecation",
		audiences: [Audiences.Application, Audiences.Control, Audiences.Internal],
		categories: [Categories.Usage],
		enabled: true,
		minversion: "1.79",
		title: "Usage of deprecated jQuery API",
		description: "With the upgrade from jQuery 2.x to jQuery 3.x, some jQuery APIs have been deprecated and might be removed in future jQuery versions. To be future-proof for jQuery 4.x, the deprecated API calls should be removed or replaced with current alternatives.",
		resolution: "Please see the browser console warnings containing the string 'JQMIGRATE' to identify the code locations which cause the issue. Please also see the jQuery migration guide for further information on the deprecated APIs and their newer alternatives.",
		resolutionurls: [{
			text: "jQuery Migrate",
			href: "https://github.com/jquery/jquery-migrate"
		},
		{
			text: "jQuery 3 Upgrade Guide",
			href: "https://jquery.com/upgrade-guide/3.0/"
		},
		{
			text: "jQuery 3 Migrate warnings",
			href: "https://github.com/jquery/jquery-migrate"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var oLoggedObjects = oScope.getLoggedObjects("jQueryThreeDeprecation");
			oLoggedObjects.forEach(function(oLoggedObject) {
				oIssueManager.addIssue({
					severity: Severity.Medium,
					details: oLoggedObject.message,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	/**
	 * Checks for missing super init() calls on sap.ui.core.UIComponents.
	 */
	 var oMissingSuperInitRule = {
		id: "missingInitInUIComponent",
		audiences: [Audiences.Application, Audiences.Control, Audiences.Internal],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "1.89",
		title: "Missing super init() call in sap.ui.core.UIComponent",
		description: "A sub-class of sap.ui.core.UIComponent which overrides the init() function must apply the super init() function as well.",
		resolution: "A bound call to sap.ui.core.UIComponent.prototype.init must be introduced in the sub-class.",
		resolutionurls: [{
			text: "API Documentation: sap.ui.core.UIComponent#init",
			href: "https://sdk.openui5.org/api/sap.ui.core.UIComponent/methods/init"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var oLoggedObjects = oScope.getLoggedObjects("missingInitInUIComponent");
			oLoggedObjects.forEach(function(oLoggedObject) {
				oIssueManager.addIssue({
					severity: Severity.High,
					details: oLoggedObject.message,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	/**
	 * Checks for missing super constructor calls on sap.ui.core.Component and sap.ui.core.mvc.Controller.
	 */
	 var oMissingSuperConstructorRule = {
		id: "missingSuperConstructor",
		audiences: [Audiences.Application, Audiences.Control, Audiences.Internal],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "1.93",
		title: "Missing super constructor call",
		description: "A sub-class of sap.ui.core.Component or sap.ui.core.mvc.Controller which overrides the constructor must apply the super constructor as well.",
		resolution: "A bound call to sap.ui.core.Component or sap.ui.core.mvc.Controller must be introduced in the sub-class.",
		resolutionurls: [{
			text: "API Documentation: sap.ui.core.mvc.Controller",
			href: "https://sdk.openui5.org/api/sap.ui.core.mvc.Controller"
		},
		{
			text: "API Documentation: sap.ui.core.Component",
			href: "https://sdk.openui5.org/api/sap.ui.core.Component"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var oLoggedObjects = oScope.getLoggedObjects("missingSuperConstructor");
			oLoggedObjects.forEach(function(oLoggedObject) {
				oIssueManager.addIssue({
					severity: Severity.High,
					details: oLoggedObject.message,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	return [
		/** @deprecated */
		oControllerSyncCodeCheckRule,
		/** @deprecated */
		oGlobalAPIRule,
		/** @deprecated */
		oJquerySapRule,
		/** @deprecated */
		oSyncFactoryLoadingRule,
		/** @deprecated */
		oGlobalSyncXhrRule,
		/** @deprecated */
		oDeprecatedAPIRule,
		/** @deprecated */
		oJQueryThreeDeprecationRule,
		/** @deprecated */
		oJSViewRule,

		oMissingSuperInitRule,
		oMissingSuperConstructorRule,
		oControllerExtensionRule
	];
}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules for the app configuration.
 */
sap.ui.predefine("sap/ui/core/rules/Config.support", [
	"sap/base/util/LoaderExtensions",
	"sap/ui/support/library",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/Lib",
	"sap/ui/core/Supportability"
], function(
	LoaderExtensions,
	SupportLib,
	XMLView,
	Library,
	Supportability
) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories; // Accessibility, Performance, Memory, ...
	var Severity = SupportLib.Severity; // Hint, Warning, Error
	var Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************
	/**
	 * Checks whether the preload configuration was set correctly to async
	 */
	var oPreloadAsyncCheck = {
		id: "preloadAsyncCheck",
		audiences: [Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.58",
		title: "Preload Configuration",
		description: "Checks whether the preload configuration was set correctly to async",
		resolution: "Please execute this rule to get a specific solution based on the application's preload mode configuration.",
		resolutionurls: [
			{
				text: "Performance: Speed Up Your App",
				href: "https://sdk.openui5.org/topic/408b40efed3c416681e1bd8cdd8910d4"
			},
			{
				text: "Best Practices for Loading Modules Asynchronously",
				href: "https://sdk.openui5.org/topic/00737d6c1b864dc3ab72ef56611491c4"
			},
			{
				text: "Is Your Application Ready for Asynchronous Loading?",
				href: "https://sdk.openui5.org/topic/493a15aa978d4fe9a67ea9407166eb01"
			}
		]
	};

	oPreloadAsyncCheck.check = function(oIssueManager, oCoreFacade) {
		// Check for debug mode
		var bIsDebug = Supportability.isDebugModeEnabled();
		if (bIsDebug) {
			return;
		}
		// Check for FLP scenario
		var oUshellLib = Library.all()["sap.ushell"];
		if (oUshellLib) {
			return;
		}

		var vPreloadMode = Library.getPreloadMode(),
			bLoaderIsAsync = sap.ui.loader.config().async;

		var sDetails = "It is recommended to use the configuration option " +
			"'data-sap-ui-async=\"true\"' instead of 'data-sap-ui-preload=\"async\"'. " +
			"With this option single modules and preload files will be loaded asynchronously. " +
			"Note: Enabling this behaviour requires intensive testing of the application.";

		// "data-sap-ui-preload" attribute is set to async and could be replaced with "data-sap-ui-async" (recommended).
		if (vPreloadMode === "async" && !bLoaderIsAsync) {
			oPreloadAsyncCheck.resolution = "Please replace 'data-sap-ui-preload=\"async\"' with 'data-sap-ui-async=\"true\"' " +
				"in the bootstrap script, as it implicitly sets the loading behaviour of preload files to be asynchronous.";
			oIssueManager.addIssue({
				severity: Severity.High,
				details: sDetails,
				context: {
					id: "WEBPAGE"
				}
			});
		// "data-sap-ui-preload" attribute is set to any value, but not async.
		} else if (vPreloadMode !== "async" && !bLoaderIsAsync) {
			oPreloadAsyncCheck.resolution = "Please configure 'data-sap-ui-async=\"true\"' in the bootstrap script, " +
				"as it implicitly sets the loading behaviour of preload files to be asynchronous. " +
				"In case you have already configured the 'data-sap-ui-preload' option, you should remove it.";
			oIssueManager.addIssue({
				severity: Severity.High,
				details: sDetails,
				context: {
					id: "WEBPAGE"
				}
			});
		}
	};

	/**
	 * Checks whether all requests for SAPUI5 repository resources contain a cache buster token
	 * It checks the requests under ICF node "/sap/bc/ui5_ui5/"
	 */
	var oCacheBusterToken = {
		id: "cacheBusterToken",
		audiences: [Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.28",
		title: "Application Resource Caching",
		description: "Checks whether the application uses cache buster tokens in its requests for static resources from SAPUI5 repositories",
		resolution: "Change the application\n" +
			"Note: Not using cache buster tokens has a negative impact on performance.\n" +
			"For more information, see the SAPUI5 developer guide.",
		resolutionurls: [{
			text: "Documentation: Cache Buster for SAPUI5 Application Resources",
			href: "https://sdk.openui5.org/topic/4cfe7eff3001447a9d4b0abeaba95166"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var sUI5ICFNode = "/sap/bc/ui5_ui5/";
			var aAppNames = [];
			var sAppName;
			var aRequests = performance.getEntriesByType("resource");
			for (var i = 0; i < aRequests.length; i++) {
				var sUrl = aRequests[i].name;
				//We limit the check to requests under ICF node "/sap/bc/ui5_ui5/", only these are relevant here
				if (sUrl.indexOf(sUI5ICFNode) > 0) {
					if (!sUrl.match(/\/~[A-Z0-9]*~/g)) {
						if (sUrl.indexOf("/sap-ui-cachebuster/sap-ui-core.js") < 0 && sUrl.indexOf("sap-ui-cachebuster-info.json") < 0) {
							var aSegments = sUrl.split(sUI5ICFNode);
							aSegments = aSegments[1].split("/");
							sAppName = aSegments[0] === "sap" ? aSegments[1] : "/" + aSegments[0] + "/" + aSegments[1];
							if (aAppNames.indexOf(sAppName) < 0) {
								aAppNames.push(sAppName);
							}
						}
					}
				}
			}
			for (var i = 0; i < aAppNames.length; i++) {
				sAppName = aAppNames[i];
				var sICFPath = sUI5ICFNode + (sAppName.charAt(0) === "/" ? sAppName.substr(1) : "sap/" + sAppName);
				oIssueManager.addIssue({
					severity: Severity.Medium,
					details: "Application '" + sAppName + "' has no cache buster tokens in some or all of its requests.\n " +
						"For more information about the URLs affected under application '" + sAppName + "' please check the network trace for URLs starting with '" + sICFPath + "'",
					context: {
						id: "WEBPAGE"
					}
				});
			}
		}
	};

	var oLibraryUsage = {
		id: "libraryUsage",
		audiences: [Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.34",
		title: "Library Usage",
		description: "Checks whether there are unused loaded libraries. This rule only works on global execution scope.",
		resolution: "Adapt your application descriptor and your application coding to improve the performance",
		resolutionurls: [{
			text: 'Documentation: Descriptor Dependencies to Libraries and Components',
			href: 'https://sdk.openui5.org/topic/8521ad1955f340f9a6207d615c88d7fd'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			if (oScope.getType() === "global") {
				//1. Ignore libraries with instantiated elements
				var mLibraries = Library.all();
				oScope.getElements().forEach(function(oElement) {
					var sElementLib = oElement.getMetadata().getLibraryName();
					if (mLibraries[sElementLib]) {
						delete mLibraries[sElementLib];
					}
				});

				// 2. Ignore libraries with declared modules
				// Alternative: More exact, but request-dependent solution would be loading and evaluating the resources.json file for each library

				var aDeclaredModules = LoaderExtensions.getAllRequiredModules();
				Object.keys(mLibraries).forEach(function(sLibrary) {
					var sLibraryWithDot = sLibrary + ".";
					for (var i = 0; i < aDeclaredModules.length; i++) {
						// Ignore library types and library enum files
						var sDeclaredModule = aDeclaredModules[i];
						if (sDeclaredModule.indexOf(sLibraryWithDot) === 0 &&
							mLibraries[sLibrary].types.indexOf(sDeclaredModule) === -1 &&
							sDeclaredModule.lastIndexOf(".library") !== sDeclaredModule.length - ".library".length &&
							sDeclaredModule.lastIndexOf(".library-preload") !== sDeclaredModule.length - ".library-preload".length &&
							sDeclaredModule.lastIndexOf(".flexibility") !== sDeclaredModule.length - ".flexibility".length &&
							sDeclaredModule.lastIndexOf(".support") !== sDeclaredModule.length - ".support".length) {
							delete mLibraries[sLibrary];
							break;
						}
					}
				});

				// 3. Remove unused library dependent unused libraries
				var aUnusedLibrary = Object.keys(mLibraries);
				Object.keys(mLibraries).forEach(function(sLibrary) {
					mLibraries[sLibrary].dependencies.forEach(function(oDependency) {
						var iIndex = aUnusedLibrary.indexOf(oDependency);
						if (iIndex > -1) {
							aUnusedLibrary.splice(iIndex, 1);
						}
					});
				});

				aUnusedLibrary.forEach(function(sUnusedLibrary) {
					// There are apps which use modules with default lib (empty string)
					if (sUnusedLibrary){
						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "The library '" + sUnusedLibrary + "' has been loaded, but not used so far in the analyzed scope of the application. There are two options to solve this issue: \n" +
								"1. If the library is needed at later state in your application, you can make use of lazy library loading (see resolution section)." +
								" Please be aware that if this lazy flag isn't used correctly this might lead to a performance decrease. \n" +
								"2. If the library has been loaded by accident and is never used in the application, you should remove the library from the bootstrap or application descriptor.",
							context: {
								id: "WEBPAGE"
							}
						});
					}
				});
			}
		}
	};

	var oLazyComponents = {
		id: "lazyComponents",
		audiences: [Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.48",
		title: "Lazy loading of components",
		description: "Checks whether lazy loading of components is used",
		resolution: "Adapt your application descriptor and your application coding to improve the performance",
		resolutionurls: [{
			text: 'Documentation: Descriptor Dependencies to Libraries and Components',
			href: 'https://sdk.openui5.org/topic/8521ad1955f340f9a6207d615c88d7fd'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var mComponents = oCoreFacade.getComponents();
			var mComponentReuseUsage = {};
			var bComponentLazyKnown = false;

			Object.keys(mComponents).forEach(function(sComponentId) {
				var oManifest = mComponents[sComponentId].getManifest();
				if (oManifest && oManifest['sap.ui5'] && oManifest['sap.ui5'].dependencies) {
					var mComps = oManifest['sap.ui5'].dependencies.components;
					if (mComps && Object.keys(mComps).length > 0) {
						mComponentReuseUsage[sComponentId] = true;
						Object.keys(mComps).forEach(function(sComp) {
							if (mComps[sComp].lazy !== undefined) {
								bComponentLazyKnown = true;
							}
						});
					}
				}
			});

			if (Object.keys(mComponentReuseUsage).length > 0 && !bComponentLazyKnown) {
				Object.keys(mComponentReuseUsage).forEach(function(sComponent) {
					oIssueManager.addIssue({
						severity: Severity.Medium,
						details: "No lazy Component loading detected. Define lazy components in your application descriptor, if this feature can be used in the application.",
						context: {
							id: sComponent
						}
					});
				});
			}
		}
	};

	var oReuseComponents = {
		id: "reuseComponents",
		audiences: [Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.48",
		title: "Components reusage via componentUsages",
		description: "Components are more performant and flexible, if defined via componentUsages",
		resolution: "Adapt your application descriptor and your application coding to improve the performance",
		resolutionurls: [{
			text: 'Documentation: Using and Nesting Components',
			href: 'https://sdk.openui5.org/topic/346599f0890d4dfaaa11c6b4ffa96312'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var mComponents = oCoreFacade.getComponents();
			var mComponentUsage = {};
			var bComponentUsagesUsed = false;

			Object.keys(mComponents).forEach(function(sComponentId) {
				var oManifest = mComponents[sComponentId].getManifest();
				var oManifestSapUi5 = oManifest['sap.ui5'];

				// Check usage of old way of defining Components
				if (oManifestSapUi5 && oManifestSapUi5.dependencies &&
					oManifestSapUi5.dependencies['components'] &&
					Object.keys(oManifestSapUi5.dependencies['components']).length > 0) {
					mComponentUsage[sComponentId] = true;
				}

				// Check usage of new way of defining Components
				if (oManifestSapUi5 && oManifestSapUi5.componentUsages !== undefined) {
					bComponentUsagesUsed = true;
				}
			});

			if (Object.keys(mComponentUsage).length > 0 && !bComponentUsagesUsed) {
				Object.keys(mComponentUsage).forEach(function(sComponentId) {
					oIssueManager.addIssue({
						severity: Severity.Medium,
						details: "There are defined reuse components in the application descriptor. Please check the documentation," +
							" whether you can define your components via componentUsage.",
						context: {
							id: sComponentId
						}
					});
				});
			}
		}
	};

	var oModelPreloading = {
		id: "modelPreloading",
		audiences: [Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.38",
		title: "Model preloading",
		description: "Preloaded models, which load their data from external locations, can load data earlier",
		resolution: "Adapt your application descriptor and your application coding to improve the performance",
		resolutionurls: [{
			text: 'Documentation: Manifest Model Preload',
			href: 'https://sdk.openui5.org/topic/26ba6a5c1e5c417f8b21cce1411dba2c'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var mComponents = oCoreFacade.getComponents();
			var mComponentsWithRelevantModels = {};
			var bModelPreloadKnown = false;

			Object.keys(mComponents).forEach(function(sComponentId) {
				var oManifest = mComponents[sComponentId].getManifest();
				var mModels = oManifest['sap.ui5'].models || {};
				var mDataSources = oManifest['sap.app'].dataSources;
				Object.keys(mModels).forEach(function(sModel) {
					var mModel = mModels[sModel];
					var mDataSource;
					if (mModel.dataSource) {
						mDataSource = mDataSources[mModel.dataSource];
					}
					if (mModel.type === "sap.ui.model.odata.v2.ODataModel"
						|| mModel.type === "sap.ui.model.odata.v4.ODataModel"
						|| mDataSource && mDataSource.type === "OData") {
						mComponentsWithRelevantModels[sComponentId] = true;
						if (mModel.preload !== undefined) {
							bModelPreloadKnown = true;
						}
					}
				});
			});
			if (!bModelPreloadKnown) {
				Object.keys(mComponentsWithRelevantModels).forEach(function(sComponentId) {
					oIssueManager.addIssue({
						severity: Severity.High,
						details: "The used OData models don't make use of the preloading feature.",
						context: {
							id: sComponentId
						}
					});
				});
			}
		}
	};

	var oModelPreloadAndEarlyRequests = {
		id: "modelPreloadAndEarlyRequests",
		audiences: [Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.53",
		title: "OData V4 model preloading and no earlyRequests",
		description: "Manifest model preload is useless if V4 ODataModel earlyRequests is false",
		resolution: "Set manifest parameter models[<Model Name>].settings.earlyRequests to true",
		resolutionurls: [{
			text: 'Documentation: Manifest Model Preload',
			href: 'https://sdk.openui5.org/topic/26ba6a5c1e5c417f8b21cce1411dba2c'
		}, {
			text: 'API: V4 ODataModel, parameter earlyRequests',
			href: 'https://sdk.openui5.org/api/sap.ui.model.odata.v4.ODataModel'
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var mComponents = oCoreFacade.getComponents();

			Object.keys(mComponents).forEach(function(sComponentId) {
				var oManifest = mComponents[sComponentId].getManifest(),
					mDataSources = oManifest['sap.app'] && oManifest['sap.app'].dataSources || {},
					mModels = oManifest['sap.ui5'] && oManifest['sap.ui5'].models || {};

				Object.keys(mModels).forEach(function(sModel) {
					var mDataSource,
						mModel = mModels[sModel];

					if (mModel.dataSource) {
						mDataSource = mDataSources[mModel.dataSource];
					}
					if (mModel.type === "sap.ui.model.odata.v4.ODataModel"
						|| mDataSource && mDataSource.type === "OData" && mDataSource.settings
							 && mDataSource.settings.odataVersion === "4.0") {
						if (mModel.preload === true
							&& !(mModel.settings && mModel.settings.earlyRequests === true)) {
							oIssueManager.addIssue({
								severity: Severity.High,
								details: "Set sap.ui5.models['" + sModel + "'].settings" +
									".earlyRequests in manifest to true",
								context: {
									id: sComponentId
								}
							});
						}
					}
				});
			});
		}
	};

	/**
	 * @deprecated Since 1.119
	 */
	var oAsynchronousXMLViews = {
		id: "asynchronousXMLViews",
		audiences: [Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.34",
		title: "Asynchronous XML views",
		description: "Asynchronous XML views leads to smoother view transitions, doesn't block the UI and allows for more efficient SAPUI5 flexibility services",
		resolution: "Adapt your application descriptor and your application coding to improve the performance and efficiency",
		resolutionurls: [{
			text: 'Documentation: Routing Configuration',
			href: 'https://sdk.openui5.org/topic/902313063d6f45aeaa3388cc4c13c34e'
		}, {
			text: "Documentation: Instantiating Views",
			href: "https://sdk.openui5.org/topic/68d0e58857a647d49470d9f92dd859bd"
		}, {
			text: "Documentation: UI Adaptation at Runtime: Enable Your App",
			href: "https://sdk.openui5.org/topic/f1430c0337534d469da3a56307ff76af"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var mComponents = oCoreFacade.getComponents();
			var mComponentsRoutingSync = {};

			// 1. Collect XML views in analyzed scope
			var aSyncXMLViews = oScope.getElementsByClassName(XMLView).filter(function(oXMLView) {
				return oXMLView.oAsyncState === undefined && !oXMLView.isSubView();
			});

			Object.keys(mComponents).forEach(function(sComponentId) {
				// 2. Check router instances and collect connected views (also other view types than XML)
				var oRouter = mComponents[sComponentId].getRouter && mComponents[sComponentId].getRouter();
				if (oRouter && oRouter._oConfig) {
					if (oRouter._oConfig._async !== true) {
						mComponentsRoutingSync[sComponentId] = [];
						if (mComponents[sComponentId].getTargets() &&
							mComponents[sComponentId].getTargets()._oViews &&
							mComponents[sComponentId].getTargets()._oViews._oViews) {
							var oTargetViews = mComponents[sComponentId].getTargets()._oViews._oViews;
							Object.keys(oTargetViews).forEach(function(sViewId) {
								var sViewName = oTargetViews[sViewId].getViewName().split("\.").pop();
								mComponentsRoutingSync[sComponentId].push(sViewName);
								aSyncXMLViews = aSyncXMLViews.filter(function(oXMLView) {
									return oTargetViews[sViewId] !== oXMLView;
								});
							});
						}
					}
				}
			});

			Object.keys(mComponentsRoutingSync).forEach(function(sComponentId) {
				oIssueManager.addIssue({
					severity: Severity.High,
					details: "Routing between views (" + mComponentsRoutingSync[sComponentId].join(', ') + ") is used, but configured to be synchronous." +
						" Please take a look at the resolution 'Routing Configuration'.",
					context: {
						id: sComponentId
					}
				});
			});

			aSyncXMLViews.forEach(function(oSyncView) {
				var sSyncViewId = oSyncView.getId();
				var sViewName = oSyncView.getViewName().split("\.").pop();
				oIssueManager.addIssue({
					severity: Severity.Medium,
					details: "The XML view '" + sViewName + " is loaded synchronous. Please take a look at the resolution 'Instantiating Views'.",
					context: {
						id: sSyncViewId
					}
				});
			});
		}
	};

	return [
		oPreloadAsyncCheck,
		oCacheBusterToken,
		oLibraryUsage,
		oLazyComponents,
		oReuseComponents,
		oModelPreloading,
		oModelPreloadAndEarlyRequests,
		/** @deprecated */
		oAsynchronousXMLViews
	];
}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Helper for core functionality in Support Tool infrastructure.
 */
sap.ui.predefine("sap/ui/core/rules/CoreHelper.support", ["sap/ui/core/Element", "sap/ui/core/Theming"],
	function(Element, Theming) {
		"use strict";

		var CoreHelper = {
			/**
			 * Checks if passed node has parent control of type UI5.
			 *
			 * @param node HTML element that will be checked.
			 * @param oScope Scope in which checking will be executed.
			 * @returns {boolean} If node has parent of type UI5 control it will return true, otherwise false.
			 */
			nodeHasUI5ParentControl : function (node, oScope) {
				/**
				 * Here we list all controls that can contain DOM elements with style different than the framework style
				 */
				var skipParents = ["sap.ui.core.HTML"],
					parentNode = Element.closestTo(node);

				if (!parentNode) {
					return false;
				}

				var parentName = parentNode.getMetadata().getName(),
					isParentOutOfSkipList = skipParents.indexOf(parentName) === -1,
					isParentInScope = oScope.getElements().indexOf(parentNode) > -1;

				return isParentOutOfSkipList && isParentInScope;

			},

			/**
			 * Search and filter all style sheets that are not loaded by the default theme and controls.
			 * @returns {array} List of all custom CSS files paths.
			 */
			getExternalStyleSheets : function () {
				return Array.from(document.styleSheets).filter(function (styleSheet) {
					var themeName = Theming.getTheme(),
						styleSheetEnding = "/themes/" + themeName + "/library.css",
						hasHref = !styleSheet.href || !(styleSheet.href.indexOf(styleSheetEnding) !== -1),
						hasRules = !!styleSheet.rules;

					return hasHref && hasRules;
				});
			},

			/**
			 * Gets the right path to the style sheet.
			 * @param styleSheet Style sheet that need to be checked.
			 * @returns {string} Full path to the file if its loaded externally and "Inline" if applied style is added by <style> tag
			 */
			getStyleSheetName : function (styleSheet) {
				return styleSheet.href || "Inline";
			},

			/**
			 * Gets the only the style sheet name from source.
			 * @param styleSheet
			 * @returns {string} Name of the file source or "<style> tag" if style sheet is inline.
			 */
			getStyleSource: function (styleSheet) {
				var styleSheetSourceName;

				if (styleSheet.href) {
					// This will get only the name of the styleSheet example: "/customstyle.css"
					styleSheetSourceName = styleSheet.href.substr(styleSheet.href.lastIndexOf("/"), styleSheet.href.length - 1);
				} else {
					styleSheetSourceName = " <style> tag ";
				}

				return styleSheetSourceName;
			}
		};

		return CoreHelper;

	}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines miscellaneous support rules.
 */
sap.ui.predefine("sap/ui/core/rules/Misc.support", [
	"sap/base/Log",
	"sap/ui/core/ComponentRegistry",
	"sap/ui/support/library"
], function(Log, ComponentRegistry, SupportLib) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories; // Accessibility, Performance, Memory, ...
	var Severity = SupportLib.Severity; // Hint, Warning, Error
	var Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * checks the error logs
	 */
	var oErrorLogs = {
		id: "errorLogs",
		audiences: [Audiences.Control, Audiences.Internal],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.32",
		title: "Error logs",
		description: "Checks for the amount of error logs in the console",
		resolution: "Error logs should be fixed",
		resolutionurls: [],
		check: function(oIssueManager, oCoreFacade) {
			var count = 0,
				message = "";

			var log = Log.getLogEntries();
			log.forEach(function(logEntry) {
				if (logEntry.level === Log.Level.ERROR) {
					count++;
					if (count <= 20) {
						message += "- " + logEntry.message + "\n";
					}
				}
			});

			if (count > 0) {
				oIssueManager.addIssue({
					severity: Severity.Low,
					details: "Total error logs: " + count + "\n" + message,
					context: {
						id: "WEBPAGE"
					}
				});
			}
		}
	};

	/**
	 * checks the EventBus for logs
	 *
	 * Excluded are events which are published to the channel "sap." as these are internal
	 */
	var oEventBusLogs = {
		id: "eventBusSilentPublish",
		audiences: [Audiences.Internal],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "1.32",
		title: "EventBus publish",
		description: "Checks the EventBus publications for missing listeners",
		resolution: "Calls to EventBus#publish should be removed or adapted such that associated listeners are found",
		resolutionurls: [],
		check: function(oIssueManager, oCoreFacade) {

			var aLogEntries = Log.getLogEntries();
			var aMessages = [];
			aLogEntries.forEach(function(oLogEntry) {
				if (oLogEntry.component === "sap.ui.core.EventBus") {
					if (oLogEntry.details && oLogEntry.details.indexOf("sap.") !== 0) {
						if (aMessages.indexOf(oLogEntry.message) === -1) {
							aMessages.push(oLogEntry.message);
						}
					}

				}
			});
			aMessages.forEach(function(sMessage) {
				oIssueManager.addIssue({
					severity: Severity.Low,
					details: "EventBus publish without listeners " + sMessage,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	/**
	 * Checks if the corresponding Component or Library of a Component is already loaded in case the Component is embeddedBy a resource.
	 */
	var oMissingEmbeddedByLibrary = {
		id: "embeddedByLibNotLoaded",
		audiences: [Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.97",
		title: "Embedding Component or Library not loaded",
		description: "Checks if the corresponding Component or Library of a Component is already loaded in case the Component is embedded by a resource.",
		resolution: "Before using a Component embedded by a Library or another Component, it's necessary to load the embedding Library or Component in advance. " +
			"The 'sap.app/embeddedBy' property must be relative path inside the deployment unit (library or component).",
		resolutionurls: [],
		check: function(oIssueManager) {
			var oRegisteredComponents = {}, sComponentName;
			var filterComponents = function (sComponentName) {
				return function (oComponent) {
					return oComponent.getManifestObject().getEntry("/sap.app/id") === sComponentName;
				};
			};
			var createIssue = function (oComponentWithMissingEmbeddedBy) {
				return function (oComponent) {
					oIssueManager.addIssue({
						severity: Severity.High,
						details: oComponentWithMissingEmbeddedBy.message,
						context: {
							id: oComponent.getId()
						}
					});
				};
			};

			Log.getLogEntries().forEach(function(oLogEntry) {
				var oRegexGetComponentName = /^Component '([a-zA-Z0-9\.]*)'.*$/;
				if (oLogEntry.component === "sap.ui.core.Component#embeddedBy") {
					oRegisteredComponents[oRegexGetComponentName.exec(oLogEntry.message)[1]] = oLogEntry;
				}
			});

			for (sComponentName in oRegisteredComponents) {
				if (Object.hasOwn(oRegisteredComponents, sComponentName)) {
					var aComponents = ComponentRegistry.filter(filterComponents(sComponentName));
					aComponents.forEach(createIssue(oRegisteredComponents[sComponentName]));
				}
			}
		}
	};

	return [
		oEventBusLogs,
		oErrorLogs,
		oMissingEmbeddedByLibrary
	];
}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules related to the model.
 */
sap.ui.predefine("sap/ui/core/rules/Model.support", [
	"sap/ui/support/library",
	"sap/ui/support/supportRules/util/StringAnalyzer",
	"sap/ui/model/CompositeBinding",
	"sap/ui/model/ListBinding",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/ODataMetadata"
],
	function(
		SupportLib,
		StringAnalyzer,
		CompositeBinding,
		ListBinding,
		JSONModel,
		ODataMetadata
	) {
	"use strict";
	/*eslint max-nested-callbacks: 0 */

	// shortcuts
	var Categories = SupportLib.Categories; // Accessibility, Performance, Memory, ...
	var Severity = SupportLib.Severity; // Hint, Warning, Error
	var Audiences = SupportLib.Audiences; // Control, Internal, Application

	function _fnFindBestMatch(aValues, sBindingPath) {
		var iJsonModelMin = -1;
		var sJsonModelBestMatch = false;
		aValues.forEach(function(sKey) {
			var iCurrDest = StringAnalyzer.calculateLevenshteinDistance(sBindingPath, sKey);
			if (iJsonModelMin === -1 || iCurrDest < iJsonModelMin) {
				iJsonModelMin = iCurrDest;
				sJsonModelBestMatch = sKey;
			}
		});
		return sJsonModelBestMatch;
	}

	//**********************************************************
	// Check Functions
	//**********************************************************

	var fnCheckSelect = function (oIssueManager, oCoreFacade, oScope) {
		oScope.getElements().forEach(function (oElement) {
			var mBindingInfos = {};

			Object.assign(mBindingInfos, oElement.mBindingInfos, oElement.mObjectBindingInfos);

			Object.keys(mBindingInfos).forEach(function (sName) {
				var oBinding = mBindingInfos[sName].binding,
					sDetails;

				if (!oBinding
						|| oBinding.isA("sap.ui.model.CompositeBinding")
						|| oBinding.getModel().bAutoExpandSelect) {
					return;
				}

				if (oBinding.isA("sap.ui.model.odata.v2.ODataListBinding") &&
						(!oBinding.mParameters || !oBinding.mParameters.select)) {
					sDetails = "The aggregation '" + sName + "' of element " + oElement.getId()
						+ " with binding path '" + oBinding.getPath() + "' is bound against a "
						+ "collection, yet no binding parameter 'select' is used. Using 'select' "
						+ "may improve performance.";
				} else if (oBinding.isA("sap.ui.model.odata.v4.ODataListBinding")
						&& (!oBinding.mParameters || !oBinding.mParameters.$select)) {
					sDetails = "The aggregation '" + sName + "' of element "
						+ oElement.getId() + " with binding path '" + oBinding.getPath() + "' is "
						+ "bound against a collection, yet no OData query option '$select' is used."
						+ " Using '$select' may improve performance. Alternatively, enable the "
						+ "automatic generation of '$select' and '$expand' in the model using the "
						+ "'autoExpandSelect' parameter.";
				} else if (oBinding.isA("sap.ui.model.odata.v2.ODataContextBinding")
						&& (!oBinding.mParameters || !oBinding.mParameters.select)) {
					sDetails = "The element " + oElement.getId() + " with binding path '"
						+ oBinding.getPath() + "' is bound against an entity, yet no binding "
						+ "parameter 'select' is used. Using 'select' may improve performance.";
				} else if (oBinding.isA("sap.ui.model.odata.v4.ODataContextBinding")
						&& (!oBinding.mParameters || !oBinding.mParameters.$select)) {
					sDetails = "The element " + oElement.getId() + " with binding path '"
						+ oBinding.getPath() + "' is bound against an entity, yet no OData query"
						+ " option '$select' is used. Using '$select' may improve performance. "
						+ "Alternatively, enable the automatic generation of '$select' and "
						+ "'$expand' in the model using the 'autoExpandSelect' parameter.";
				}

				if (sDetails) {
					oIssueManager.addIssue({
						context : {
							id : oElement.getId()
						},
						details : sDetails,
						severity : Severity.Low
					});
				}
			});
		});
	};

	//**********************************************************
	// Rule Definitions
	//**********************************************************
	/**
	 * Checks whether there are bindings for models where the model is available but a binding has no result.
	 * It checks the path structure and checks for typos.
	 */
	var oBindingPathSyntaxValidation = {
		id: "bindingPathSyntaxValidation",
		audiences: [Audiences.Control, Audiences.Application],
		categories: [Categories.Bindings],
		enabled: true,
		minversion: "1.32",
		title: "Model: Unresolved binding path",
		description: "The binding path used in the model could not be resolved",
		resolution: "Check the binding path for typos",
		resolutionurls: [
			{
				href: "https://sdk.openui5.org/api/sap.ui.model.Context",
				text: "API Reference: Context"
			},
			{
				href: "https://sdk.openui5.org/topic/e5310932a71f42daa41f3a6143efca9c",
				text: "Documentation: Data Binding Tutorial"
			},
			{
				href: "https://sdk.openui5.org/topic/97830de2d7314e93b5c1ee3878a17be9",
				text: "Documentation: Data Binding Tutorial - Step 12: Aggregation Binding Using Templates"
			},
			{
				href: "https://sdk.openui5.org/topic/6c7c5c266b534e7ea9a28f861dc515f5",
				text: "Documentation: Data Binding Tutorial - Step 13: Element Binding"
			}
		],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var mElements = oScope.getElements();
			Object.keys(mElements).forEach(function(sElement) {

				var oElement = mElements[sElement],
					mBindingInfos = oElement.mBindingInfos;

				Object.keys(mBindingInfos).forEach(function(sBindingInfo) {

					var oBinding = mBindingInfos[sBindingInfo].binding;
					if (oBinding && !(oBinding instanceof CompositeBinding) && oBinding.getModel && oBinding.getModel()) {
						var oModel = oBinding.getModel();

						//find elements with unresolved PropertyBindings
						if ((oBinding.getValue && oBinding.getValue() === undefined)
							|| (oBinding instanceof ListBinding && oBinding.getLength() === 0)) {
							var sJsonModelBestMatch = false;

							if (oModel instanceof JSONModel) {
								var oJsonModelResult = oModel.getObject(oBinding.getPath());
								if (!oJsonModelResult) {
									var oData = oModel.getData();
									sJsonModelBestMatch = _fnFindBestMatch(Object.keys(oData), oBinding.getPath());
								}
							} else if (oModel.oMetadata && oModel.oMetadata instanceof ODataMetadata) {
								//try to look it up
								var result = oModel.oMetadata._getEntityTypeByPath(oBinding.getPath());
								if (!result) {
									var aValues = [];
									oModel.oMetadata.getServiceMetadata().dataServices.schema.forEach(function(mShema) {

										if (mShema.entityContainer) {
											mShema.entityContainer.forEach(function(mContainer) {
												if (mContainer.entitySet) {
													mContainer.entitySet.forEach(function(mEntitySet) {
														if (mEntitySet.name) {
															aValues.push(mEntitySet.name);
														}
													});
												}
											});
										}

									});
									sJsonModelBestMatch = _fnFindBestMatch(aValues, oBinding.getPath());
								}
							}

							if (sJsonModelBestMatch) {
								oIssueManager.addIssue({
									severity: Severity.Medium,
									details: "Element " + oElement.getId() + " with binding path '" + oBinding.getPath() + "' has unresolved bindings." +
									" You could try '" + sJsonModelBestMatch + "' instead",
									context: {
										id: oElement.getId()
									}
								});
							}

						} else if (oBinding.getValue && oBinding.getValue() === oBinding.getPath()) {
							oIssueManager.addIssue({
								severity: Severity.Low,
								details: "Element " + oElement.getId() + " with binding path '" + oBinding.getPath() + "' has the same value as the path. Potential Error.",
								context: {
									id: oElement.getId()
								}
							});
						}
					}
				});
			});
		}
	};

	/**
	 * Checks whether the select(v2)/$select(v4) parameter is used when binding against an
	 * aggregation.
	 */
	var oSelectUsedInAggregation = {
			audiences : [Audiences.Application],
			categories : [Categories.Bindings, Categories.Performance],
			description : "Using $select allows the back end to send only necessary properties",
			enabled : true,
			id : "selectUsedInBoundAggregation",
			minversion : "1.38",
			resolution : "Use the '$select' binding parameter when binding an aggregation against "
				+ "an OData V4 model, or 'select' in case of an OData V2 model",
			resolutionurls : [{
				href : "https://sdk.openui5.org/topic/408b40efed3c416681e1bd8cdd8910d4#section_useSelectQuery",
				text : "Documentation: Performance: Speed Up Your App"
			}, {
				href : "https://sdk.openui5.org/topic/10ca58b701414f7f93cd97156f898f80",
				text : "OData V4 only: Automatic determination of $expand and $select"
			}, {
				href : "https://sdk.openui5.org/api/sap.ui.model.odata.v4.ODataModel/methods/bindList",
				text : "Documentation: v4.ODataModel#bindList"
			}, {
				href : "https://sdk.openui5.org/api/sap.ui.model.odata.v2.ODataModel/methods/bindList",
				text : "Documentation: v2.ODataModel#bindList"
			}],
			title : "Model: Use the $select/select binding parameter when binding aggregations to "
				+ "improve performance",
			check : fnCheckSelect
		};

	return [oBindingPathSyntaxValidation, oSelectUsedInAggregation];
}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules related to the view.
 */
sap.ui.predefine("sap/ui/core/rules/Rendering.support", [
		"sap/ui/support/library",
		"sap/ui/core/RenderManager"
	],
	function(SupportLib, RenderManager) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories;
	var Severity = SupportLib.Severity;
	var Audiences = SupportLib.Audiences;

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Checks for renderers not using semantic rendering
	 */
	var oRendererInterfaceVersion = {
		id: "semanticRenderingNotUsed",
		audiences: [Audiences.Control],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "-",
		title: "Control and renderer not migrated to modern rendering syntax",
		description: "Controls must use modern rendering syntax.",
		resolution: "Control and renderer must be migrated to modern rendering syntax. For more information consult with documentation.",
		resolutionurls: [{
			text: "Documentation: RenderManager syntax",
			href: "https://sdk.openui5.org/api/sap.ui.core.RenderManager"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var aControls = oScope.getElements().filter(function (oElement) { return oElement.isA("sap.ui.core.Control"); });

			aControls.forEach(function (oControl) {
				if (RenderManager.getApiVersion(oControl.getRenderer()) < 2) {
					var sControlName = oControl.getMetadata().getName();

					oIssueManager.addIssue({
						severity: Severity.Medium,
						category: Categories.Performance,
						details: "The control '" + sControlName + "' is not migrated to modern rendering syntax. " +
										 "This means it cannot benefit from UI5's modern, DOM-based rendering engine. " +
										 "Please consult with the referred documentation regarding the modern API of RenderManager.",
						context: {
							id: oControl.getId()
						}
					});

				}
			});
		}
	};

	return [
		oRendererInterfaceVersion
	];
}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines miscellaneous support rules.
 */
sap.ui.predefine("sap/ui/core/rules/Theming.support", [
	"sap/ui/core/Element",
	"sap/ui/support/library",
	"./CoreHelper.support"
], function(Element, SupportLib, CoreHelper) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories; // Accessibility, Performance, Memory, ...
	var Severity = SupportLib.Severity; // Hint, Warning, Error
	var Audiences = SupportLib.Audiences; // Control, Internal, Application

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Checks for custom css files
	 */
	var oCssCheckCustomStyles = {
		id: "cssCheckCustomStyles",
		audiences: [Audiences.Application],
		categories: [Categories.Consistency],
		enabled: true,
		minversion: "1.38",
		title: "CSS modifications - List of custom styles",
		description: "Checks and report for custom CSS files/styles that overwrite standard UI5 control's CSS values ",
		resolution: "Avoid CSS manipulations with custom CSS values as this could lead to rendering issues ",
		resolutionurls: [{
			text: 'CSS Styling Issues',
			href: 'https://sdk.openui5.org/topic/9d87f925dfbb4e99b9e2963693aa00ef'
		}, {
			text: 'General Guidelines',
			href: 'https://sdk.openui5.org/topic/5e08ff90b7434990bcb459513d8c52c4'
		}],
		check: function (issueManager, oCoreFacade, oScope) {
			var cssFilesMessage = "Following stylesheet file(s) contain 'custom' CSS that could affects (overwrites) UI5 controls' own styles: \n",
				externalStyleSheets = CoreHelper.getExternalStyleSheets(),
				foundIssues = 0;

			externalStyleSheets.forEach(function (styleSheet) {
				var affectsUI5Controls = false;

				Array.from(styleSheet.rules).forEach(function (rule) {
					var selector = rule.selectorText,
						matchedNodes = document.querySelectorAll(selector);

					matchedNodes.forEach(function (node) {
						var hasUI5Parent = CoreHelper.nodeHasUI5ParentControl(node, oScope);
						if (hasUI5Parent) {
							affectsUI5Controls = true;
						}
					});
				});

				if (affectsUI5Controls) {
					cssFilesMessage += "- " + CoreHelper.getStyleSheetName(styleSheet) + "\n";
					foundIssues++;
				}
			});

			if (foundIssues > 0) {
				issueManager.addIssue({
					severity: Severity.Medium,
					details: cssFilesMessage,
					context: {
						id: "WEBPAGE"
					}
				});
			}
		}
	};

	/**
	 * Checks for custom styles applied on UI elements
	 */
	var oCssCheckCustomStylesThatAffectControls = {
		id: "cssCheckCustomStylesThatAffectControls",
		audiences: [Audiences.Application],
		categories: [Categories.Consistency],
		enabled: true,
		minversion: "1.38",
		title: "CSS modifications - List of affected controls",
		description: "Checks and report all overwritten standard control's CSS values ",
		resolution: "Avoid CSS manipulations with custom CSS values as this could lead to rendering issues ",
		resolutionurls: [{
			text: 'CSS Styling Issues',
			href: 'https://sdk.openui5.org/topic/9d87f925dfbb4e99b9e2963693aa00ef'
		}, {
			text: 'General Guidelines',
			href: 'https://sdk.openui5.org/topic/5e08ff90b7434990bcb459513d8c52c4'
		}],
		check: function (issueManager, oCoreFacade, oScope) {
			var controlCustomCssHashMap = {},
				externalStyleSheets = CoreHelper.getExternalStyleSheets();

			externalStyleSheets.forEach(function (styleSheet) {

				Array.from(styleSheet.rules).forEach(function (rule) {
					var selector = rule.selectorText,
						matchedNodes = document.querySelectorAll(selector);

					matchedNodes.forEach(function (node) {
						var hasUI5Parent = CoreHelper.nodeHasUI5ParentControl(node, oScope);
						if (hasUI5Parent) {
							// jQuery Plugin "control"
							var ui5Control = Element.closestTo(node);

							if (!controlCustomCssHashMap.hasOwnProperty(ui5Control.getId())) {
								controlCustomCssHashMap[ui5Control.getId()] =  "";
							}

							var cssSource = CoreHelper.getStyleSource(styleSheet);
							controlCustomCssHashMap[ui5Control.getId()] += "'" + selector + "'" + " from " + cssSource + ",\n";
						}
					});
				});
			});

			Object.keys(controlCustomCssHashMap).forEach(function(id) {
				issueManager.addIssue({
					severity: Severity.Low,
					details: "The following selector(s) " + controlCustomCssHashMap[id] + " affects standard style setting for control",
					context: {
						id: id
					}
				});

			});
		}
	};

	/**
	 * Checks for custom styles applied on UI elements
	 *
	 * @deprecated Since 1.119
	 */
	var oCheckForLegacyParametersGet = {
		id: "checkForLegacyParametersGet",
		audiences: [Audiences.Control],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "1.87",
		title: "Legacy sap.ui.core.theming.Parameters#get API",
		description: "Checks usage of the legecy variant of the Parameters.get API",
		resolution: "Use asynchronous variant of the Parameters.get API",
		resolutionurls: [{
			text: 'Parameters.get API Reference',
			href: 'https://sdk.openui5.org/api/sap.ui.core.theming.Parameters/methods/sap.ui.core.theming.Parameters.get'
		}],
		check: function (issueManager, oCoreFacade, oScope) {
			var oLoggedObjects = oScope.getLoggedObjects("LegacyParametersGet");
			oLoggedObjects.forEach(function(oLoggedObject) {
				issueManager.addIssue({
					severity: Severity.Medium,
					details: oLoggedObject.message,
					context: {
						id: "WEBPAGE"
					}
				});
			});
		}
	};

	return [
		/** @deprecated */
		oCheckForLegacyParametersGet,

		oCssCheckCustomStyles,
		oCssCheckCustomStylesThatAffectControls
	];
}, true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Defines support rules related to the view.
 */
sap.ui.predefine("sap/ui/core/rules/View.support", ["sap/base/Log", "sap/ui/support/library", "sap/ui/core/Element", "sap/ui/thirdparty/jquery", "sap/base/util/isEmptyObject", "sap/ui/base/DataType"],
	function(Log, SupportLib, Element, jQuery, isEmptyObject, DataType) {
	"use strict";

	// shortcuts
	var Categories = SupportLib.Categories; // Accessibility, Performance, Memory, ...
	var Severity = SupportLib.Severity; // Hint, Warning, Error
	var Audiences = SupportLib.Audiences; // Control, Internal, Application

	var isDefaultValue = function (oPropertyMetadata, vValue) {
		if (oPropertyMetadata.defaultValue !== null) {
			return oPropertyMetadata.defaultValue === vValue;
		}

		return vValue === DataType.getType(oPropertyMetadata.type).getDefaultValue();
	};

	//**********************************************************
	// Rule Definitions
	//**********************************************************

	/**
	 * Checks for wrongly configured view namespace
	 */
	var oXMLViewWrongNamespace = {
		id: "xmlViewWrongNamespace",
		audiences: [Audiences.Application],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "-",
		title: "XML View is not configured with namespace 'sap.ui.core.mvc'",
		description: "For consistency and proper resource loading, the root node of an XML view must be configured with the namespace 'mvc'",
		resolution: "Define the XML view as '<mvc:View ...>' and configure the XML namespace as 'xmlns:mvc=\"sap.ui.core.mvc\"'",
		resolutionurls: [{
			text: "Documentation: Namespaces in XML Views",
			href: "https://sdk.openui5.org/topic/2421a2c9fa574b2e937461b5313671f0"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var aXMLViews = oScope.getElements().filter(function (oControl) {
				return oControl.isA("sap.ui.core.mvc.XMLView") && !oControl.isSubView();
			});

			aXMLViews.forEach(function (oXMLView) {
				if (oXMLView._xContent.namespaceURI !== "sap.ui.core.mvc") {
					var sViewName = oXMLView.getViewName().split("\.").pop();
					oIssueManager.addIssue({
						severity: Severity.Medium,
						details: "The view '" + sViewName + "' (" + oXMLView.getId() + ") is configured with namespace '" + oXMLView._xContent.namespaceURI + "' instead of 'sap.ui.core.mvc'",
						context: {
							id: oXMLView.getId()
						}
					});
				}
			});
		}
	};

	/**
	 * Checks if a default namespaces is set in an XML view
	 */
	var oXMLViewDefaultNamespace = {
		id: "xmlViewDefaultNamespace",
		audiences: [Audiences.Control, Audiences.Application],
		categories: [Categories.Performance],
		enabled: true,
		minversion: "-",
		title: "Default namespace missing in XML view",
		description: "If the default namespace is missing, the code is less readable and parsing performance may be slow",
		resolution: "Set the namespace of the control library that holds most of the controls you use as default namespace (e.g. xmlns=\"sap.m\")",
		resolutionurls: [{
			text: "Documentation: Namespaces in XML Views",
			href: "https://sdk.openui5.org/topic/2421a2c9fa574b2e937461b5313671f0"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var aXMLViews = oScope.getElements().filter(function (oControl) {
				return oControl.isA("sap.ui.core.mvc.XMLView") && !oControl.isSubView();
			});

			aXMLViews.forEach(function (oXMLView) {
				if (!oXMLView._xContent.attributes.getNamedItem("xmlns")) {
					var sViewName = oXMLView.getViewName().split("\.").pop();
					oIssueManager.addIssue({
						severity: Severity.Low,
						details: "The view '" + sViewName + "' (" + oXMLView.getId() + ") does not contain a default namespace",
						context: {
							id: oXMLView.getId()
						}
					});
				}
			});
		}
	};

	var oXMLViewLowerCaseControl = {
		id: "xmlViewLowerCaseControl",
		audiences: ["Control","Application"],
		categories: ["Performance"],
		enabled: true,
		minversion: "-",
		title: "Control tag in XML view starts with lower case",
		description: "Control tags with lower case cannot be loaded in Linux-based systems",
		resolution: "Start the Control tag with upper case",
		resolutionurls: [{
			text: "Documentation: SAPUI5 Control Development Guidelines",
			href: "https://sdk.openui5.org/topic/4549da61e2d949d6a3d20ad8a9d17a6f"
		}],
		check: function (oIssueManager, oCoreFacade, oScope) {
			var aRelevantLogMessages = Log.getLogEntries().filter(function(oEntry) {
				return oEntry.component === "sap.ui.core.XMLTemplateProcessor#lowerCase";
			});
			aRelevantLogMessages.forEach(function(oMessage) {
				oIssueManager.addIssue({
					severity: Severity.High,
					details: oMessage.message,
					context: {
						id: oMessage.details
					}
				});
			});
		}
	};

	/**
	 * Checks for unused namespaces inside an XML view
	 */
	var oXMLViewUnusedNamespaces = {
		id: "xmlViewUnusedNamespaces",
		audiences: [Audiences.Control, Audiences.Application],
		categories: [Categories.Usability],
		enabled: true,
		minversion: "-",
		title: "Unused namespaces in XML view",
		description: "Namespaces that are declared but not used may confuse readers of the code",
		resolution: "Remove the unused namespaces from the view definition",
		resolutionurls: [{
			text: "Documentation: Namespaces in XML Views",
			href: "https://sdk.openui5.org/topic/2421a2c9fa574b2e937461b5313671f0"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			var aXMLViews = oScope.getElements().filter(function (oControl) {
				return oControl.isA("sap.ui.core.mvc.XMLView");
			});

			aXMLViews.forEach(function (oXMLView) {
				for (var i = 0; i < oXMLView._xContent.attributes.length; i++) {
					var sName = oXMLView._xContent.attributes.item(i).name;
					var sLocalName = oXMLView._xContent.attributes.item(i).localName;
					var sFullName = oXMLView._xContent.attributes.item(i).value;

					// check all explicit namespaces except for the injected support namespace
					// and the mvc, because the use of mvc is checked in other rule
					if (sName.match("xmlns:")
						&& sLocalName !== "xmlns:support"
						&& sLocalName !== "mvc"
						&& sFullName.indexOf("schemas.sap.com") < 0) {
							// get the xml code of the view as a string
							var sContent = jQuery(oXMLView._xContent)[0].outerHTML;

							// check if there is a reference of this namespace inside the view
							if (!sContent.match("<" + sLocalName + ":") && !sContent.match(" " + sLocalName + ":")) {
								var sViewName = oXMLView.getViewName().split("\.").pop();
								oIssueManager.addIssue({
									severity: Severity.Medium,
									details: "View '" + sViewName + "' (" + oXMLView.getId() + ") contains an unused XML namespace '" + sLocalName + "' referencing library '" + sFullName + "'",
									context: {
										id: oXMLView.getId()
									}
								});
							}
						}
				}
			});
		}
	};

	/**
	 * Checks for deprecated properties
	 */
	var oDeprecatedPropertyRule = {
		id: "deprecatedProperty",
		audiences: [Audiences.Application],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "1.38",
		title: "Control is using deprecated property",
		description: "Using deprecated properties should be avoided, because they are not maintained anymore",
		resolution: "Refer to the API of the element which property should be used instead.",
		resolutionurls: [{
			text: "API Reference",
			href: "https://sdk.openui5.org/api/deprecated"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName(Element).forEach(function(oElement) {

				var oMetadata = oElement.getMetadata(),
					mProperties = oMetadata.getAllProperties();

				for (var sProperty in mProperties) {
					// if property is deprecated and it is set to a different from the default value
					// Checks only the deprecated properties with defaultValue property is not null
					if (mProperties[sProperty].deprecated &&
						!isDefaultValue(mProperties[sProperty], oElement.getProperty(sProperty))) {

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "Deprecated property '" + sProperty + "' is used for element '" + oElement.getId()
								+ "'. Default value: '" + mProperties[sProperty].defaultValue + "' and current value: '"
								+ oElement.getProperty(sProperty) + "'",
							context: {
								id: oElement.getId()
							}
						});
					}
				}
			});
		}
	};

	/**
	 * Checks for deprecated controls
	 */
	var oDeprecatedElementRule = {
		id: "deprecatedElement",
		audiences: [Audiences.Application],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "1.38",
		title: "Usage of deprecated element",
		description: "Using deprecated controls should be avoided, because they are not maintained anymore",
		resolution: "Refer to the API of the element which element should be used instead.",
		resolutionurls: [{
			text: "API Reference",
			href: "https://sdk.openui5.org/api/deprecated"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName(Element).forEach(function(oElement) {

				var oMetadata = oElement.getMetadata();

				if (oMetadata.isDeprecated()) {
					oIssueManager.addIssue({
						severity: Severity.Medium,
						details: "Deprecated element '" + oElement.getId() + "' is used.",
						context: {
							id: oElement.getId()
						}
					});
				}
			});
		}
	};

	/**
	 * Checks for deprecated aggregations
	 */
	var oDeprecatedAggregationRule = {
		id: "deprecatedAggregation",
		audiences: [Audiences.Application],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "1.38",
		title: "Control is using deprecated aggregation",
		description: "Using deprecated aggregation should be avoided, because they are not maintained anymore",
		resolution: "Refer to the API of the element which aggregation should be used instead.",
		resolutionurls: [{
			text: "API Reference",
			href: "https://sdk.openui5.org/api/deprecated"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName(Element).forEach(function(oElement) {

				var oMetadata = oElement.getMetadata(),
					mAggregations = oMetadata.getAllAggregations();

				for (var sAggregation in mAggregations) {
					// if aggregation is deprecated and contains elements
					if (mAggregations[sAggregation].deprecated
						&& !isEmptyObject(oElement.getAggregation(sAggregation))) {

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "Deprecated aggregation '" + sAggregation + "' is used for element '" + oElement.getId() + "'.",
							context: {
								id: oElement.getId()
							}
						});
					}
				}
			});
		}
	};

	/**
	 * Checks for deprecated associations
	 */
	var oDeprecatedAssociationRule = {
		id: "deprecatedAssociation",
		audiences: [Audiences.Application],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "1.38",
		title: "Control is using deprecated association",
		description: "Using deprecated association should be avoided, because they are not maintained anymore",
		resolution: "Refer to the API of the element which association should be used instead.",
		resolutionurls: [{
			text: "API Reference",
			href: "https://sdk.openui5.org/api/deprecated"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName(Element).forEach(function(oElement) {

				var oMetadata = oElement.getMetadata(),
					mAssociations = oMetadata.getAllAssociations();

				for (var sAssociation in mAssociations) {
					// if association is deprecated and set by developer
					if (mAssociations[sAssociation].deprecated
						&& !isEmptyObject(oElement.getAssociation(sAssociation))) {

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "Deprecated association '" + sAssociation + "' is used for element '" + oElement.getId() + "'.",
							context: {
								id: oElement.getId()
							}
						});
					}
				}
			});
		}
	};

	/**
	 * Checks for deprecated events
	 */
	var oDeprecatedEventRule = {
		id: "deprecatedEvent",
		audiences: [Audiences.Application],
		categories: [Categories.Functionality],
		enabled: true,
		minversion: "1.38",
		title: "Control is using deprecated event",
		description: "Using deprecated event should be avoided, because they are not maintained anymore",
		resolution: "Refer to the API of the element which event should be used instead.",
		resolutionurls: [{
			text: "API Reference",
			href: "https://sdk.openui5.org/api/deprecated"
		}],
		check: function(oIssueManager, oCoreFacade, oScope) {
			oScope.getElementsByClassName(Element).forEach(function(oElement) {

				var oMetadata = oElement.getMetadata(),
					mEvents = oMetadata.getAllEvents();

				for (var sEvent in mEvents) {
					// if event is deprecated and developer added event handler
					if (mEvents[sEvent].deprecated
						&& oElement.mEventRegistry[sEvent] && oElement.mEventRegistry[sEvent].length > 0) {

						oIssueManager.addIssue({
							severity: Severity.Medium,
							details: "Deprecated event '" + sEvent + "' is used for element '" + oElement.getId() + "'.",
							context: {
								id: oElement.getId()
							}
						});
					}
				}
			});
		}
	};

	return [
		oXMLViewWrongNamespace,
		oXMLViewDefaultNamespace,
		oXMLViewLowerCaseControl,
		oXMLViewUnusedNamespaces,
		oDeprecatedPropertyRule,
		oDeprecatedElementRule,
		oDeprecatedAggregationRule,
		oDeprecatedAssociationRule,
		oDeprecatedEventRule
	];
}, true);
//# sourceMappingURL=library-preload.support.js.map
