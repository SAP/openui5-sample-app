/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";document.documentElement.addEventListener("paste",function(e){var t=document.activeElement;if(e.isTrusted&&t instanceof HTMLElement&&!t.contains(e.target)){var a=new ClipboardEvent("paste",{bubbles:true,cancelable:true,clipboardData:e.clipboardData});t.dispatchEvent(a);e.stopImmediatePropagation();e.preventDefault()}},true)});
//# sourceMappingURL=PasteEventFix.js.map