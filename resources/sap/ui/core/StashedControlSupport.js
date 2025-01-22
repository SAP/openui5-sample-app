/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","sap/base/Log","sap/ui/core/Element"],function(t,e,r){"use strict";var n={},a={};n.mixInto=function(e){t(!e.prototype.unstash,"StashedControlSupport: fnClass already has method 'unstash', sideeffects possible",e.getMetadata().getName());if(e.getMetadata().isA("sap.ui.core.Fragment")||e.getMetadata().isA("sap.ui.core.mvc.View")){throw new Error("Stashing is not supported for sap.ui.core.Fragment or sap.ui.core.mvc.View")}o(e)};function o(t){t.prototype.unstash=function(t){if(this.isStashed()){if(!t){e.fatal("Unstashing synchronous is no longer supported. Please switch to the asynchronous variant!");return u(this)}return i(this)}return this};t.prototype.isStashed=function(){return!!a[this.getId()]};var r=t.prototype.clone;t.prototype.clone=function(){if(this.isStashed()){throw new Error("A stashed control cannot be cloned, id: '"+this.getId()+"'.")}return r.apply(this,arguments)};var n=t.prototype.destroy;t.prototype.destroy=function(){delete a[this.getId()];n.apply(this,arguments)}}function s(t,e){var r=a[t.getId()];var n=t.getParent();var o=sap.ui.require("sap/ui/core/Component");var s=o&&n&&o.getOwnerComponentFor(n);var i;var u=r.fnCreate;if(s){i=s.runAsOwner(u.bind(null,!!e))}else{i=u(!!e)}return i}async function i(t){var e=await s(t);delete a[t.getId()];return e[0]}function u(t){var e=s(t,true);delete a[t.getId()];return e[0]}function p(t,e){var n=[];for(var o in a){var s=r.getElementById(a[o].wrapperId);var i=t?s:o;var u=s&&s.getParent();if(!e||u&&u.getId()===e){n.push(i)}}return n}n.getStashedControlIds=function(t){return p(false,t)};n.getStashedControls=function(t){return p(true,t)};n.createStashedControl=function(t){var e={wrapperId:t.wrapperId,fnCreate:t.fnCreate};a[t.wrapperId]=e;return e};return n});
//# sourceMappingURL=StashedControlSupport.js.map