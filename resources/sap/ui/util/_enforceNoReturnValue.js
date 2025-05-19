/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/future","sap/base/Log"],function(e,n){"use strict";function t(t,r){if(t!==undefined){const a=r.name?`'${r.name}' `:"";if(typeof t.then==="function"){t.catch(e=>{n.error(`The registered Event Listener ${a}of '${r.component}' failed.`,e)})}e.fatalThrows(`${r.component}: The registered Event Listener ${a}must not have a return value.`)}}return t});
//# sourceMappingURL=_enforceNoReturnValue.js.map