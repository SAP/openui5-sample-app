/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={ALT:18,T:84};return{init:function(){var t=false;document.addEventListener("keydown",function(n){if(n.keyCode===e.ALT){t=typeof n.location!=="number"||n.location===1;return}if(n.shiftKey&&n.altKey&&n.ctrlKey&&n.keyCode===e.T&&t){n.preventDefault();sap.ui.require(["sap/ui/testrecorder/Bootstrap"],function(e){e.init(["true"])},function(e){console.warn("Could not load module 'sap/ui/testrecorder/Bootstrap'! Details: "+e)})}})}}});
//# sourceMappingURL=RecorderHotkeyListener.js.map