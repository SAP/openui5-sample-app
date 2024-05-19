/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_Cache","./_ConcatHelper"],function(e,n){"use strict";return{createCache:function(r,t,u,a){var c={},i,o,f=new Promise(function(e){o=e});function s(e){var n,r={};function t(e){r[e]??={};return r[e]}for(n in c){t(c[n].measure)[c[n].method]=e[n]}o(r)}i=e.create(r,t,a,true);n.enhanceCache(i,u,[s],c);i.getMeasureRangePromise=function(){return f};return i}}},false);
//# sourceMappingURL=_MinMaxHelper.js.map