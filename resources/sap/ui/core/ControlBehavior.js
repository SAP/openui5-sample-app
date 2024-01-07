/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/config","sap/base/Eventing","sap/ui/core/AnimationMode"],(e,n,t)=>{"use strict";const a=e.getWritableInstance();const i=new n;const o={attachChange:e=>{i.attachEvent("change",e)},detachChange:e=>{i.detachEvent("change",e)},isAccessibilityEnabled:()=>a.get({name:"sapUiAccessibility",type:e.Type.Boolean,defaultValue:true,external:true}),getAnimationMode:()=>{let n=a.get({name:"sapUiAnimationMode",type:t,defaultValue:undefined,external:true});const i=a.get({name:"sapUiAnimation",type:e.Type.Boolean,defaultValue:true,external:true});if(n===undefined){if(i){n=t.full}else{n=t.minimal}}e._.checkEnum(t,n,"animationMode");return n},setAnimationMode:n=>{e._.checkEnum(t,n,"animationMode");const i=a.get({name:"sapUiAnimationMode",type:t,defaultValue:undefined,external:true});a.set("sapUiAnimationMode",n);if(i!=n){s({animationMode:n})}}};function s(e){i.fireEvent("change",e)}return o});
//# sourceMappingURL=ControlBehavior.js.map