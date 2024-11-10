/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/core/Component","sap/ui/fl/util/ManagedObjectModel"],function(e,t){"use strict";var n={};var r="sourceControl";n.applyChange=function(e,t,o){if(o.modifier.targets!=="jsControlTree"){return Promise.reject(new Error("Split change can't be applied on XML tree"))}var a=e.getContent();var i=o.modifier;var u=o.view;var s=o.appComponent;var c=e.getDependentControl(r,o);var d;var g;var l;var p;var f;var v;var m;var h;var C;return Promise.resolve().then(function(){return i.getAggregation(c,"menu")}).then(function(e){d=e;return i.getAggregation(d,"items")}).then(function(e){g=e;C=i.getParent(c);return i.getParentAggregationName(c,C)}).then(function(e){l=e;return i.findIndexInParentAggregation(c)}).then(function(e){p=e;f=a.newElementIds;v={parentAggregation:l,insertIndex:p,insertedButtons:[]};return g.reduce(function(e,t,r){var o;var a;var c;return e.then(function(){a=r;o=f[a];return i.createControl("sap.m.Button",s,u,o)}).then(function(e){c=e;v.insertedButtons.push(o);m="$sap.m.flexibility.SplitButtonsModel";return i.createControl("sap.ui.fl.util.ManagedObjectModel",s,u,Object.assign({},o,{id:o.id+"-managedObjectModel"}),{object:t,name:m})}).then(function(e){h=e;return i.insertAggregation(c,"dependents",h,0,u)}).then(function(){i.bindProperty(c,"text",m+">/text");i.bindProperty(c,"icon",m+">/icon");i.bindProperty(c,"enabled",m+">/enabled");i.bindProperty(c,"visible",m+">/visible");return i.createControl("sap.ui.core.CustomData",s,u,Object.assign({},o,{id:o.id+"-customData"}),{key:{path:m+">key"},value:{path:m+">value"}})}).then(function(e){return i.bindAggregation(c,"customData",{path:m+">/customData",template:e,templateShareable:false})}).then(function(){c.attachEvent("press",{selector:i.getSelector(t,s),appComponentId:s.getId(),menu:d},n.pressHandler);return i.insertAggregation(C,l,c,p+a,u)})},Promise.resolve())}).then(function(){return Promise.resolve().then(i.removeAggregation.bind(i,C,l,c)).then(i.insertAggregation.bind(i,C,"dependents",c,0,u)).then(function(){e.setRevertData(v)})})};n.revertChange=function(e,t,n){var o=n.modifier;var a=e.getRevertData();var i=e.getDependentControl(r,n);var u=n.appComponent;var s=n.view;var c=o.getParent(i);var d=a.parentAggregation;var g=a.insertIndex;var l=[];return Promise.resolve().then(function(){a.insertedButtons.forEach(function(e){l.push(o.bySelector(e,u,s))});return l.reduce(function(e,t){return e.then(function(){return o.removeAggregation(c,d,t)}).then(function(){return o.destroy(t)})},Promise.resolve())}).then(o.insertAggregation.bind(o,c,d,i,g,s)).then(function(){e.resetRevertData()})};n.completeChangeContent=function(e,t,n){var o=n.modifier;var a=n.appComponent;if(!t.newElementIds){throw new Error("Split of MenuButton cannot be applied : oSpecificChangeInfo.newElementIds attribute required")}if(!t.sourceControlId){throw new Error("Split of MenuButton cannot be applied : oSpecificChangeInfo.sourceControlId attribute required")}e.addDependentControl(t.sourceControlId,r,n);var i={};i.sourceSelector=o.getSelector(t.sourceControlId,a);i.newElementIds=t.newElementIds.map(function(e){return o.getSelector(e,a)});e.setContent(i)};n.pressHandler=function(n,r){var o=e.bySelector(r.selector,t.getComponentById(r.appComponentId));o.firePress();r.menu.fireItemSelected({item:o})};return n},true);
//# sourceMappingURL=SplitMenuButton.js.map