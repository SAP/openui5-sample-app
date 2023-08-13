/*!
* OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/base/config/MemoryConfigurationProvider","ui5loader-autoconfig"],function(e){"use strict";var n=sap.ui.require("sap/base/config/_Configuration");n.getWritableInstance=function(){var i=new e;return{set:function(e,r){var t=/^[a-z][A-Za-z0-9]*$/;if(t.test(e)){i.set(e,r);n._.invalidate()}else{throw new TypeError("Invalid configuration key '"+e+"'!")}},get:function(e){e.provider=i;return n.get(e)},Type:n.Type}};return n});
//# sourceMappingURL=config.js.map