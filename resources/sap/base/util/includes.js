/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/values"],function(e){"use strict";var r=function(n,t,i){if(typeof i!=="number"){i=0}if(Array.isArray(n)||typeof n==="string"){if(i<0){i=n.length+i<0?0:n.length+i}return n.includes(t,i)}else{return r(e(n),t,i)}};return r});
//# sourceMappingURL=includes.js.map