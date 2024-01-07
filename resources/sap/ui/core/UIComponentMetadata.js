/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ComponentMetadata","sap/ui/core/mvc/ViewType"],function(t,o){"use strict";var e=function(o,e){t.apply(this,arguments)};e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.preprocessClassInfo=function(t){if(t&&typeof t.metadata==="string"){t.metadata={_src:t.metadata}}return t};e.prototype.getRootView=function(t){return this.getManifestEntry("/sap.ui5/rootView",!t)};e.prototype.getRoutingConfig=function(t){return this.getManifestEntry("/sap.ui5/routing/config",!t)};e.prototype.getRoutes=function(t){return this.getManifestEntry("/sap.ui5/routing/routes",!t)};e.prototype._convertLegacyMetadata=function(e,r){t.prototype._convertLegacyMetadata.call(this,e,r);var i=r["sap.ui5"];var n=i["rootView"]||e["rootView"];if(n){i["rootView"]=n}var a=i["routing"]||e["routing"];if(a){i["routing"]=a}if(i["rootView"]&&typeof i["rootView"]==="string"){i["rootView"]={viewName:i["rootView"],type:o.XML}}};return e},true);
//# sourceMappingURL=UIComponentMetadata.js.map