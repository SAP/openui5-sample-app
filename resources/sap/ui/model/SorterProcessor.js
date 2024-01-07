/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Sorter","sap/base/util/each"],function(r,t){"use strict";var e={};e.apply=function(e,a,n,i){var o=this,p=[],f=[],u,s;if(!a||a.length==0){return e}for(var c=0;c<a.length;c++){s=a[c];f[c]=s.fnCompare||r.defaultComparator;t(e,function(r,t){u=n(t,s.sPath);if(typeof u=="string"){u=u.toLocaleUpperCase()}if(!p[c]){p[c]=[]}if(i){t=i(t)}p[c][t]=u})}e.sort(function(r,t){if(i){r=i(r);t=i(t)}var e=p[0][r],n=p[0][t];return o._applySortCompare(a,r,t,e,n,p,f,0)});return e};e._applySortCompare=function(r,t,e,a,n,i,o,p){var f=r[p],u=o[p],s;s=u(a,n);if(f.bDescending){s=-s}if(s==0&&r[p+1]){a=i[p+1][t];n=i[p+1][e];s=this._applySortCompare(r,t,e,a,n,i,o,p+1)}return s};return e});
//# sourceMappingURL=SorterProcessor.js.map