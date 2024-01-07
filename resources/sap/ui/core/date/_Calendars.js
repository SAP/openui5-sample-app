/*
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=new Map;var r={get:function(r){if(!e.has(r)){sap.ui.requireSync("sap/ui/core/date/"+r)}if(e.has(r)){return e.get(r)}throw new TypeError("Load required calendar 'sap/ui/core/date/"+r+"' in advance")},set:function(r,a){e.set(r,a)}};return r});
//# sourceMappingURL=_Calendars.js.map