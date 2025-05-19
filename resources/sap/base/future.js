/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","sap/base/config","sap/base/Log"],(e,s,r)=>{"use strict";const f=s.get({name:"sapUiXxFuture",type:s.Type.Boolean,external:true});let i=f;function a(e,s,f,...a){if(i){throw new Error(s,{cause:f?.cause})}if(f){if(f.suffix){s+=" "+f.suffix}if(f.cause){a.unshift(f.cause)}if(!f.cause&&!f.suffix){a.unshift(f)}}r[e]("[FUTURE FATAL] "+s,...a)}function t(e,s,f,a,t,...n){if(i){s(new Error(a,{cause:t?.cause}));return}if(t){if(t.suffix){a+=" "+t.suffix}if(t.cause){n.unshift(t.cause)}if(!t.cause&&!t.suffix){n.unshift(t)}}e();r[f]("[FUTURE FATAL] "+a,...n)}const n={get active(){return i},set active(e){i=!!(e??f)},fatalThrows(...e){a("fatal",...e)},errorThrows(...e){a("error",...e)},warningThrows(...e){a("warning",...e)},assertThrows(s,r){const f=typeof r==="function"?r():r;if(!s&&i){throw new Error(r)}e(s,"[FUTURE FATAL] "+f)},warningRejects(e,s,...r){t(e,s,"warning",...r)}};return n});
//# sourceMappingURL=future.js.map