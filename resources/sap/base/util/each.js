/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r=function(r,e){var a=Array.isArray(r),f,i;if(a){for(i=0,f=r.length;i<f;i++){if(e.call(r[i],i,r[i])===false){break}}}else{for(i in r){if(e.call(r[i],i,r[i])===false){break}}}return r};return r});
//# sourceMappingURL=each.js.map