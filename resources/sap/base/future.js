/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","sap/base/config","sap/base/Log"],(r,e,a)=>{"use strict";const s=e.get({name:"sapUiXxFuture",type:e.Type.Boolean,external:true});function t(r,e,...t){e="[FUTURE FATAL] "+e;if(s){a.fatal(e,...t);throw new Error(e)}a[r](e,...t)}const o={fatalThrows(...r){t("fatal",...r)},errorThrows(...r){t("error",...r)},warningThrows(...r){t("warning",...r)},assertThrows(e,a){const t=typeof a==="function"?a():a;if(!e&&s){throw new Error(a)}r(e,"[FUTURE FATAL] "+t)}};return o});
//# sourceMappingURL=future.js.map