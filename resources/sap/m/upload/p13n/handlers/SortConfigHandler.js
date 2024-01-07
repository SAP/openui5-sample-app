/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/upload/p13n/handlers/BaseConfigHandler"],function(e){"use strict";const n=e.extend("sap.m.upload.p13n.handlers.SortConfigHandler",{});const t="uploadSetTableSortStateChange";n.getEventName=function(){return t};n.prototype.modifyState=function(e,n){const t=e.content,r=t.targetAggregation,d=n||{};d.properties??={};d.properties[r]??={};if(t.deleted){t.deleted.forEach(e=>{d.properties[r][e.key]={key:e.key,prevIndex:e.prevIndex,prevDescending:e.prevDescending,sorted:false}})}if(t.moved){t.moved.forEach(e=>{d.properties[r][e.key]={key:e.key,index:e.index,descending:e.descending,sorted:true}})}if(t.inserted){t.inserted.forEach(e=>{d.properties[r][e.key]={key:e.key,index:e.index,descending:e.descending,sorted:true}})}return d};return n});
//# sourceMappingURL=SortConfigHandler.js.map