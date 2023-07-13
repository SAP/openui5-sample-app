/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([], function() {
    "use strict";

    var MemoryConfigurationProvider = function() {
        this.oConfig = Object.create(null);
    };

    MemoryConfigurationProvider.prototype.get = function(sName) {
        return this.oConfig[sName];
    };

    MemoryConfigurationProvider.prototype.set = function(sName, vValue) {
        this.oConfig[sName] = vValue;
    };

    return MemoryConfigurationProvider;
});