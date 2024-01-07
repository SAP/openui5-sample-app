/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/SyncPromise"],function(e){"use strict";return function(){return new e(function(e,n){if(document.readyState!=="loading"){e()}else{var t=function(n){document.removeEventListener("DOMContentLoaded",t);e()};document.addEventListener("DOMContentLoaded",t)}})}});
//# sourceMappingURL=_ready.js.map