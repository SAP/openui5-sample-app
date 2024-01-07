/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/upload/p13n/handlers/BaseConfigHandler"],function(e){"use strict";const r=e.extend("sap.m.upload.p13n.handlers.GroupConfigHandler",{});const t="uploadSetTableGroupStateChange";r.getEventName=function(){return t};r.prototype.modifyState=function(e,r){const t=e.content,n=t.targetAggregation,o=r||{};o.properties??={};o.properties[n]??={};if(t.deleted){t.deleted.forEach(e=>{o.properties[n][e.key]={key:e.key,prevIndex:e.prevIndex,grouped:false}})}if(t.moved){t.moved.forEach(e=>{o.properties[n][e.key]={key:e.key,index:e.index,grouped:true}})}if(t.inserted){t.inserted.forEach(e=>{o.properties[n][e.key]={key:e.key,index:e.index,grouped:true}})}return o};return r});
//# sourceMappingURL=GroupConfigHandler.js.map