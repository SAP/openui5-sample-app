/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";var o={init:function(){var o=false;document.addEventListener("keydown",function(r){try{if(r.keyCode===18){o=typeof r.location!=="number"||r.location===1;return}if(r.shiftKey&&r.altKey&&r.ctrlKey&&o){if(r.keyCode===80){r.preventDefault();sap.ui.require(["sap/ui/core/support/techinfo/TechnicalInfo"],function(e){e.open(function(){var e={modules:sap.ui.loader._.getAllModules(),prefixes:sap.ui.loader._.getUrlPrefixes()};return{modules:e.modules,prefixes:e.prefixes}})},function(o){e.error("Could not load module 'sap/ui/core/support/techinfo/TechnicalInfo':",o)})}else if(r.keyCode===83){r.preventDefault();sap.ui.require(["sap/ui/core/support/Support"],function(e){var o=e.getStub();if(o.getType()!=e.StubType.APPLICATION){return}o.openSupportTool()},function(o){e.error("Could not load module 'sap/ui/core/support/Support':",o)})}}}catch(e){}})}};return o});
//# sourceMappingURL=Hotkeys.js.map