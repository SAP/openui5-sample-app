/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/config","sap/base/Eventing","sap/ui/core/AnimationMode"],function(e,n,a){"use strict";var t=e.getWritableInstance();var i={attachChange:function(e){i.attachEvent("change",e)},detachChange:function(e){i.detachEvent("change",e)},isAccessibilityEnabled:function(){return t.get({name:"sapUiAccessibility",type:e.Type.Boolean,defaultValue:true,external:true})},getAnimationMode:function(){var n=t.get({name:"sapUiAnimationMode",type:a,defaultValue:undefined,external:true});var i=t.get({name:"sapUiAnimation",type:e.Type.Boolean,defaultValue:true,external:true});if(n===undefined){if(i){n=a.full}else{n=a.minimal}}e._.checkEnum(a,n,"animationMode");return n},setAnimationMode:function(n){e._.checkEnum(a,n,"animationMode");var i=t.get({name:"sapUiAnimationMode",type:a,defaultValue:undefined,external:true});t.set("sapUiAnimationMode",n);if(i!=n){u({animationMode:n})}}};function u(e){i.fireEvent("change",e)}n.apply(i);return i});
//# sourceMappingURL=ControlBehavior.js.map