/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert"],function(n){"use strict";let t;const e=function(e,r,u){n(typeof e==="function","fn must be a function");var s=t;try{t=r;return e.call(u)}finally{t=s}};e.getCurrentOwnerId=()=>t;return e});
//# sourceMappingURL=_runWithOwner.js.map