/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","sap/base/util/uid","sap/ui/fl/util/ManagedObjectModel"],function(e,t){"use strict";var n={};var r="$sap.m.flexibility.CombineButtonsModel";function o(t,n,o,a,i,u,c,s,d){var l="";var g="";var m="";var v=[];var f=e.getRTL();var p=[];return t.reduce(function(e,t,b){var h;var C=b;var y;var I;var P=s.buttonsIdForSave[C];var S;var B="$sap.m.flexibility.MenuButtonModel"+C;return e.then(n.getProperty.bind(n,t,"text")).then(function(e){S=e;return n.createControl("sap.m.MenuItem",o,c,P)}).then(function(e){y=e;return n.findIndexInParentAggregation(t)}).then(function(e){d.insertIndexes[C]=e;return n.createControl("sap.ui.fl.util.ManagedObjectModel",o,c,Object.assign({},P,{id:P.id+"-managedObjectModel"}),{object:t,name:r})}).then(function(e){I=e;return n.insertAggregation(y,"dependents",I,0,c)}).then(function(){return n.createControl("sap.ui.core.CustomData",o,c,Object.assign({},P,{id:P.id+"-customData"}),{key:"{ path: '"+r+">key' }",value:"{ path: '"+r+">value' }"})}).then(function(e){n.bindProperty(y,"text",r+">/text");n.bindProperty(y,"icon",r+">/icon");n.bindProperty(y,"enabled",r+">/enabled");n.bindProperty(y,"visible",r+">/visible");return n.bindAggregation(y,"customData",{path:r+">/customData",template:e,templateShareable:false},c)}).then(function(){if(S){f?p.unshift(S):p.push(S)}var e=Object.assign({},P,{id:P.id+"-originalButtonId"});return n.createControl("sap.ui.core.CustomData",o,c,e)}).then(function(e){h=e;n.setProperty(h,"key","originalButtonId");n.setProperty(h,"value",n.getId(t));return n.removeAggregation(i,u,t)}).then(function(){return n.insertAggregation(i,"dependents",t,0,c)}).then(function(){n.insertAggregation(t,"customData",h,0,c)}).then(function(){n.insertAggregation(a,"items",y,C,c)}).then(function(){return n.createControl("sap.ui.fl.util.ManagedObjectModel",o,c,Object.assign({},P,{id:P.id+"-managedObjectModelMenuItem"}),{object:y,name:B})}).then(function(e){v[C]=e;l=l+m+"${"+B+">/enabled}";g=g+m+"${"+B+">/visible}";m=" || ";return{menuButtonModels:v,menuButtonName:p,propertyEnabled:l,propertyVisible:g}})},Promise.resolve())}n.applyChange=function(e,t,r){if(r.modifier.targets!=="jsControlTree"){return Promise.reject(new Error("Combine buttons change can't be applied on XML tree"))}var a=e.getContent();var i=r.modifier;var u=r.view;var c=r.appComponent;var s;var d;var l;var g;var m;var v;var f;var p={parentAggregation:"",insertIndexes:[]};var b=[];var h=[];return Promise.resolve().then(i.bySelector.bind(i,a.combineButtonSelectors[0],c,u)).then(function(e){d=e;s=i.getParent(d);var t=[];a.combineButtonSelectors.forEach(function(e){var n=Promise.resolve().then(i.bySelector.bind(i,e,c,u));t.push(n)});return Promise.all(t)}).then(function(e){m=e;return i.getParentAggregationName(m[0],s)}).then(function(e){g=e;p.parentAggregation=g;return i.findIndexInParentAggregation(d)}).then(function(e){l=e;return i.createControl("sap.m.Menu",c,u,a.menuIdSelector)}).then(function(e){v=e;e.attachEvent("itemSelected","sap.m.changeHandler.CombineButtons.pressHandler",n.pressHandler);return o(m,i,c,v,s,g,u,a,p)}).then(function(e){b=e.menuButtonModels;h=e.menuButtonName;var t=e.propertyVisible;var n=e.propertyEnabled;return i.createControl("sap.m.MenuButton",c,u,a.menuButtonIdSelector,{visible:"{= "+t+"}",enabled:"{= "+n+"}"})}).then(function(e){f=e;return b.reduce(function(e,t){return e.then(i.insertAggregation.bind(i,f,"dependents",t,0,u))},Promise.resolve())}).then(function(){i.setProperty(f,"text",h.join("/"));return Promise.resolve().then(i.insertAggregation.bind(i,f,"menu",v,0,u)).then(i.insertAggregation.bind(i,s,g,f,l,u)).then(function(){e.setRevertData(p)})})};function a(e,t){return e.reduce(function(e,n){return e.then(function(){return t.getProperty(n,"key")}).then(function(e){if(e==="originalButtonId"){return t.destroy(n)}return undefined})},Promise.resolve())}n.revertChange=function(e,t,n){var r=n.modifier;var o=n.view;var i=e.getRevertData();var u=e.getContent();var c=i.parentAggregation;var s,d,l;return Promise.resolve().then(function(){return r.bySelector(u.menuButtonIdSelector,n.appComponent,o)}).then(function(e){s=e;d=r.getParent(s);l=u.combineButtonSelectors.slice().reverse();return r.removeAggregation(d,c,s)}).then(function(){return r.destroy(s)}).then(function(){var t=l.length;return l.reduce(function(e,u,s){var l=s;var g;return e.then(function(){return r.bySelector(u,n.appComponent,o)}).then(function(e){g=e;return r.getAggregation(g,"customData")}).then(function(e){return a(e,r)}).then(function(){return r.insertAggregation(d,c,g,i.insertIndexes[t-l-1],o)})},Promise.resolve()).then(function(){e.resetRevertData()})})};n.completeChangeContent=function(e,n,r){var o=r.modifier;var a=r.appComponent;var i=n.combineElementIds;if(i&&i.length>1){var u={};e.addDependentControl(i,"combinedButtons",r);u.combineButtonSelectors=i.map(function(e){return o.getSelector(e,a)});u.menuButtonIdSelector=o.getSelector(a.createId(t()),a);u.menuIdSelector=o.getSelector(a.createId(t()),a);u.buttonsIdForSave=i.map(function(){return o.getSelector(a.createId(t()),a)});e.setContent(u)}else{throw new Error("Combine buttons action cannot be completed: oSpecificChangeInfo.combineElementIds attribute required")}};n.pressHandler=function(e){var t=e.getParameter("item").getModel(r).getObject();t.firePress()};return n},true);
//# sourceMappingURL=CombineButtons.js.map