/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/base/ManagedObjectRegistry","sap/ui/core/ElementRegistry"],(e,t,n)=>{"use strict";const r=function(t){var r=sap.ui.require("sap/ui/core/Component");n.forEach(function(n,a){var i=r.getOwnerIdFor(n);if(i===t&&!n.getParent()){if(n._sapui_candidateForDestroy){e.debug("destroying dangling template "+n+" when destroying the owner component");n.destroy()}}})};const a=t.create({onDeregister:r});return a});
//# sourceMappingURL=ComponentRegistry.js.map