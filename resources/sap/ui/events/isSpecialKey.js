/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e=function(e){function r(e){var r=e.key;return r==="Shift"||r==="Control"||r==="Alt"||r==="AltGraph"||r==="CapsLock"||r==="NumLock"}function t(e){var r=e.key;return r==="ArrowLeft"||r==="ArrowUp"||r==="ArrowRight"||r==="ArrowDown"}var n=e.key,a=r(e)||t(e)||n==="PageUp"||n==="PageDown"||n==="End"||n==="Home"||n==="PrintScreen"||n==="Insert"||n==="Delete"||n==="F1"||n==="F2"||n==="F3"||n==="F4"||n==="F5"||n==="F6"||n==="F7"||n==="F8"||n==="F9"||n==="F10"||n==="F11"||n==="F12"||n==="Pause"||n==="Backspace"||n==="Tab"||n==="Enter"||n==="Escape"||n==="ScrollLock";switch(e.type){case"keydown":case"keyup":case"keypress":return a;default:return false}};return e});
//# sourceMappingURL=isSpecialKey.js.map