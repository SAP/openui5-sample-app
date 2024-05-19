/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t=/^[0-9]+(?:\.([0-9]+)(?:\.([0-9]+))?)?(.*)$/;function n(r,i,e,o){if(r instanceof n){return r}if(!(this instanceof n)){return new n(r,i,e,o)}var u;if(typeof r==="string"){u=t.exec(r)}else if(Array.isArray(r)){u=r}else{u=arguments}u=u||[];function f(t){t=parseInt(t);return isNaN(t)?0:t}r=f(u[0]);i=f(u[1]);e=f(u[2]);o=String(u[3]||"");this.toString=function(){return r+"."+i+"."+e+o};this.getMajor=function(){return r};this.getMinor=function(){return i};this.getPatch=function(){return e};this.getSuffix=function(){return o};this.compareTo=function(t,u,f,s){var a=n.apply(window,arguments);return r-a.getMajor()||i-a.getMinor()||e-a.getPatch()||(o<a.getSuffix()?-1:o===a.getSuffix()?0:1)}}n.prototype.inRange=function(t,n){return this.compareTo(t)>=0&&this.compareTo(n)<0};return n});
//# sourceMappingURL=Version.js.map