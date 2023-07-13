/*
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=new Map;var t={get:function(t){if(!e.has(t)){sap.ui.requireSync("sap/ui/core/date/"+t)}return e.get(t)},set:function(t,n){e.set(t,n)}};return t});
//# sourceMappingURL=_Calendars.js.map