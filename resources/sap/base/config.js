/*!
* OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/base/config/MemoryConfigurationProvider","ui5loader-autoconfig"],e=>{"use strict";const r=sap.ui.require("sap/base/config/_Configuration");r.getWritableInstance=()=>{const t=new e;return{set(e,i){const n=/^[a-z][A-Za-z0-9]*$/;if(n.test(e)){t.set(e,i);r._.invalidate()}else{throw new TypeError("Invalid configuration key '"+e+"'!")}},get(e){e.provider=t;return r.get(e)},Type:r.Type}};return r});
//# sourceMappingURL=config.js.map