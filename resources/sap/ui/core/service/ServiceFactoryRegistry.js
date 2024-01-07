/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ServiceFactory","sap/base/assert"],function(e,t){"use strict";var r=Object.create(null);var n=Object.create(null);n.register=function(n,c){t(n,"sServiceFactoryName must not be empty, null or undefined");t(c instanceof e,"oServiceFactory must be an instance of sap.ui.core.service.ServiceFactory");r[n]=c;return this};n.unregister=function(e){t(e,"sServiceFactoryName must not be empty, null or undefined");delete r[e];return this};n.get=function(e){return r[e]};return n},true);
//# sourceMappingURL=ServiceFactoryRegistry.js.map