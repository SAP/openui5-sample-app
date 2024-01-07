/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=function e(r,t){if(r.type!="mouseover"&&r.type!="mouseout"){return false}var a=false;var u=t;var n=r.relatedTarget;try{while(n&&n!==u){n=n.parentNode}if(n!==u){a=true}}catch(e){}return a};return e});
//# sourceMappingURL=checkMouseEnterOrLeave.js.map