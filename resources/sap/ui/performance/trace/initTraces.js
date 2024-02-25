/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/performance/trace/FESR","sap/base/Log","sap/base/config"],function(e,t,r){"use strict";return function(){var n,i=false,a=r.get({name:"sapUiFesr",type:r.Type.String,external:true,freeze:true});if(a){i=a!="false";n=["true","false","x","X",undefined].indexOf(a)===-1?a:undefined}if(typeof performance.getEntriesByType==="function"){e.setActive(i,n)}else{t.debug("FESR is not supported in clients without support of window.Performance extensions.")}if(r.get({name:"sapUiXxE2eTrace",type:r.Type.Boolean,external:true,freeze:true})){sap.ui.require(["sap/ui/core/support/trace/E2eTraceLib"])}}});
//# sourceMappingURL=initTraces.js.map