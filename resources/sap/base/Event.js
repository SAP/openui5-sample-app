/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert"],function(t){"use strict";var e=Symbol("parameters");var r=function(t,r,a){if(arguments.length>0){this.type=t;this.target=r;this.bStopPropagation=false;this.bPreventDefault=false;for(var i in a){this[i]=a[i];Object.defineProperty(this,i,{configurable:false,writable:false})}this[e]=a;Object.defineProperty(this,"type",{configurable:false,writable:false});Object.defineProperty(this,"target",{configurable:false,writable:false})}};r.prototype.preventDefault=function(){this.bPreventDefault=true};r.prototype.stopPropagation=function(){this.bStopPropagation=true};r.getParameters=function(t){return t[e]};return r});
//# sourceMappingURL=Event.js.map