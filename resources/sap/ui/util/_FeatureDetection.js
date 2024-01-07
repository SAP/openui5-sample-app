/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var i={};function t(){var t=document.createElement("div");t.innerHTML='<div dir="rtl"><div><span></span><span></span></div></div>';t.firstChild.style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden";t.firstChild.firstChild.style="width: 2px";t.firstChild.firstChild.firstChild.style="display: inline-block; width: 1px";t.firstChild.firstChild.lastChild.style="display: inline-block; width: 1px";document.documentElement.appendChild(t);var e=t.firstChild;i.initialZero=e.scrollLeft==0;document.documentElement.removeChild(t)}t();var e={initialScrollPositionIsZero:function(){return i.initialZero}};return e});
//# sourceMappingURL=_FeatureDetection.js.map