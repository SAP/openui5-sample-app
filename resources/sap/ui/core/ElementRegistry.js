/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/base/ManagedObjectRegistry","sap/ui/core/Configuration"],(e,t,r)=>{"use strict";const i=function(t,i,a){if(i._sapui_candidateForDestroy){e.debug("destroying dangling template "+i+" when creating new object with same ID");i.destroy()}else{var n="adding element with duplicate id '"+t+"'";if(!r.getNoDuplicateIds()){e.warning(n);return}e.error(n);throw new Error("Error: "+n)}};const a=t.create({onDuplicate:i});return a});
//# sourceMappingURL=ElementRegistry.js.map