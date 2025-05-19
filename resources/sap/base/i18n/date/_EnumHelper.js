/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";let e;const n=new Map;return{inject:function(t){if(!e){e=t;n.forEach((n,t)=>{e(t,n)})}},register:function(t,i){if(e){e(t,i)}else{n.set(t,i)}}}});
//# sourceMappingURL=_EnumHelper.js.map