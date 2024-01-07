/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";var e={};e.events=["click","dblclick","contextmenu","focusin","focusout","keydown","keypress","keyup","mousedown","mouseout","mouseover","mouseup","select","selectstart","dragstart","dragenter","dragover","dragleave","dragend","drop","compositionstart","compositionend","paste","cut","input","change"];e.bindAnyEvent=function(n){if(n){jQuery(document).on(e.events.join(" "),n)}};e.unbindAnyEvent=function n(t){if(t){jQuery(document).off(e.events.join(" "),t)}};return e});
//# sourceMappingURL=ControlEvents.js.map