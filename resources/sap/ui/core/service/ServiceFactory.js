/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/core/service/Service","sap/base/assert"],function(e,r,t){"use strict";var c=e.extend("sap.ui.core.service.ServiceFactory",{metadata:{library:"sap.ui.core"},constructor:function(c){e.apply(this);var o=typeof c==="object"?r.create(c):c;t(!o||o&&typeof o==="function","The service constructor either should be undefined or a constructor function!");this._fnService=o}});c.prototype.destroy=function(){e.prototype.destroy.apply(this,arguments);delete this._fnService};c.prototype.createInstance=function(e){if(typeof this._fnService==="function"){return Promise.resolve(new this._fnService(e))}else{return Promise.reject(new Error("Usage of sap.ui.core.service.ServiceFactory requires a service constructor function to create a new service instance or to override the createInstance function!"))}};return c});
//# sourceMappingURL=ServiceFactory.js.map