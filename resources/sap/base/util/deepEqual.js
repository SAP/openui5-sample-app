/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";var r=function(t,n,f,a,u){if(typeof f=="boolean"){a=f;f=undefined}if(!u){u=0}if(!f){f=10}if(u>f){e.warning("deepEqual comparison exceeded maximum recursion depth of "+f+". Treating values as unequal");return false}if(t===n||Number.isNaN(t)&&Number.isNaN(n)){return true}if(Array.isArray(t)&&Array.isArray(n)){if(!a&&t.length!==n.length){return false}if(t.length>n.length){return false}for(var i=0;i<t.length;i++){if(!r(t[i],n[i],f,a,u+1)){return false}}return true}if(typeof t=="object"&&typeof n=="object"){if(!t||!n){return false}if(t.constructor!==n.constructor){return false}if(!a&&Object.keys(t).length!==Object.keys(n).length){return false}if(t instanceof Node){return t.isEqualNode(n)}if(t instanceof Date){return t.valueOf()===n.valueOf()}for(var i in t){if(!r(t[i],n[i],f,a,u+1)){return false}}return true}return false};return r});
//# sourceMappingURL=deepEqual.js.map