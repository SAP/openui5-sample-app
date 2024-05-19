/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","sap/base/config","sap/base/Log"],(e,r,s)=>{"use strict";const t=r.get({name:"sapUiXxFuture",type:r.Type.Boolean,external:true});let n=t;function a(e,r,t,...a){if(n){throw new Error(r,{cause:t?.cause})}if(t){if(t.suffix){r+=" "+t.suffix}else{a.unshift(t)}}s[e]("[FUTURE FATAL] "+r,...a)}function i(e,r,t,a,i,...f){if(n){r(new Error(a,{cause:i?.cause}));return}if(i){if(i.suffix){a+=" "+i.suffix}else{f.unshift(i)}}e();s[t]("[FUTURE FATAL] "+a,...f)}const f={get active(){return n},set active(e){n=!!(e??t)},fatalThrows(...e){a("fatal",...e)},errorThrows(...e){a("error",...e)},warningThrows(...e){a("warning",...e)},assertThrows(r,s){const t=typeof s==="function"?s():s;if(!r&&n){throw new Error(s)}e(r,"[FUTURE FATAL] "+t)},warningRejects(e,r,...s){i(e,r,"warning",...s)}};return f});
//# sourceMappingURL=future.js.map