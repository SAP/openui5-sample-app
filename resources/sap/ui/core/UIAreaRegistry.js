/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/base/ManagedObjectRegistry"],(r,e)=>{"use strict";const a=function(e,a,t){var i="adding UIArea with duplicate id '"+e+"'";r.error(i);throw new Error("Error: "+i)};const t=e.create({onDuplicate:a});return t});
//# sourceMappingURL=UIAreaRegistry.js.map