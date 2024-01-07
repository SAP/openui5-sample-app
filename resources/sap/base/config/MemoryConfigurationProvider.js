/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/uid"],function(t){"use strict";var i=function(){this.oConfig=Object.create(null);this.id=t()};i.prototype.getId=function(){return this.id};i.prototype.get=function(t){return this.oConfig[t]};i.prototype.set=function(t,i){this.oConfig[t]=i};return i});
//# sourceMappingURL=MemoryConfigurationProvider.js.map