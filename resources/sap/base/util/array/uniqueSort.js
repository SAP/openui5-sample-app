/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert"],function(r){"use strict";var a=function(a){r(Array.isArray(a),"uniqueSort: input parameter must be an Array");var e=a.length;if(e>1){a.sort();var i=0;for(var t=1;t<e;t++){if(a.indexOf(a[t])===t){a[++i]=a[t]}}if(++i<e){a.splice(i,e-i)}}return a};return a});
//# sourceMappingURL=uniqueSort.js.map