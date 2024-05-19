/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object"],t=>{"use strict";const e=t.extend("sap.m.p13n.MetadataHelper",{constructor:function(e){t.apply(this,arguments);this._aProperties=e}});e.prototype.getProperties=function(){return this._aProperties};e.prototype.getProperty=function(t){return this._aProperties.find(e=>e.key===t)};e.prototype.getPath=function(t){return this.getProperty(t).path};return e});
//# sourceMappingURL=MetadataHelper.js.map