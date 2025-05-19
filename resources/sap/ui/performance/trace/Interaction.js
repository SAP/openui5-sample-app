/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";let n=false;let t;var i={getAll:function(n){return[]},filter:function(n){return[]},getPending:function(){return undefined},clear:function(){},start:function(n,t){},end:function(n){},getActive:function(){return n},setActive:async function(e){n=e;if(e){await new Promise((n,o)=>{sap.ui.require(["sap/ui/performance/trace/_InteractionImpl"],o=>{Object.assign(i,o);t=o;t._setActive(e);n()},o)})}else{t?._setActive(e)}},notifyNavigation:function(){},notifyShowBusyIndicator:function(n){},notifyHideBusyIndicator:function(n){},notifyStepStart:function(n,t,i){},notifyAsyncStep:function(n){return()=>{}},notifyAsyncStepStart:function(){},notifyAsyncStepEnd:function(n){},notifyStepEnd:function(n){},notifyEventStart:function(n){},notifyScrollEvent:function(n){},notifyEventEnd:function(){},onInteractionStarted:null,onInteractionFinished:null,setStepComponent:function(n){},addBusyDuration:function(n){},setFESR:function(n){t?._setFESR(n)}};return i});
//# sourceMappingURL=Interaction.js.map