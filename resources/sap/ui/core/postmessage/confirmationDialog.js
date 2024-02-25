/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(i){"use strict";return function(n){return new Promise(function(e,o){var s=i.isLoaded("sap.m");if(s){sap.ui.require(["sap/m/MessageBox"],function(i){i.confirm(n,{actions:[i.Action.YES,i.Action.NO],onClose:function(n){if(n===i.Action.YES){e()}else{o()}}})},o)}else{var c=window.confirm(n);if(c){e()}else{o()}}})}});
//# sourceMappingURL=confirmationDialog.js.map