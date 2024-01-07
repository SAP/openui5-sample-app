/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";e.setLogEntriesLimit(Infinity);var t=[];var n="DEBUG";var i=n;return{setLevel:function(n){n=n&&n.toUpperCase();if(n&&e.Level[n]){i=n}t.forEach(function(t){e.setLevel(e.Level[i],t)})},getLogger:function(r){t.push(r);var o=e.getLogger(r,e.Level[i]);o.timestamp=function(t){if(console.timeStamp&&e.Level[this.getLevel()]>=e.Level[n]){console.timeStamp(t)}};return o},getLevel:function(){return i}}},true);
//# sourceMappingURL=_OpaLogger.js.map