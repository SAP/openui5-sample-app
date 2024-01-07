/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_AggregationHelper"],function(e){"use strict";return{enhanceCache:function(t,n,s,i){var u;t.getResourcePathWithQuery=function(t,s){var a=e.buildApply(n,Object.assign({},this.mQueryOptions,{$skip:t,$top:s-t}),1,u,i);u=true;return this.sResourcePath+this.oRequestor.buildQueryString(this.sMetaPath,a,false,true)};t.handleResponse=function(e){s.forEach(function(t){var n;if(t){n=e.value.shift();if("UI5__count"in n){e["@odata.count"]=n.UI5__count}t(n)}});delete this.handleResponse;return this.handleResponse.apply(this,arguments)}}}},false);
//# sourceMappingURL=_ConcatHelper.js.map