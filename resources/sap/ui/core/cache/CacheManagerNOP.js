/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";var n={name:"CacheManagerNOP",logResolved:function(n){e.debug("Cache Manager is not supported on this environment.")},set:function(){return Promise.resolve()},get:function(){return Promise.resolve(undefined)},has:function(){return Promise.resolve(false)},del:function(){return Promise.resolve()},delWithFilters:function(){return Promise.resolve()},reset:function(){return Promise.resolve()},init:function(){return Promise.resolve(this)},_db:{close:function(){}},_getCount:function(){return Promise.resolve(0)},_destroy:function(){},_getVersion:function(){return""}};return n});
//# sourceMappingURL=CacheManagerNOP.js.map