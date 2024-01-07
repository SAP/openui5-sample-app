/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/upload/p13n/handlers/BaseConfigHandler"],function(e){"use strict";const n=e.extend("sap.m.upload.p13n.handlers.ColumnConfigHandler",{});const t="uploadSetTableColumnsStateChange";n.getEventName=function(){return t};n.prototype.modifyState=function(e,n){const t=e.content,a=t.targetAggregation,i=n||{};i.aggregations??={};i.aggregations[a]??={};if(t.deleted){t.deleted.forEach(e=>{i.aggregations[a][e.key]={prevIndex:e.prevIndex,visible:false}})}if(t.moved){t.moved.forEach(e=>{i.aggregations[a][e.key]={index:e.index,visible:true}})}if(t.inserted){t.inserted.forEach(e=>{i.aggregations[a][e.key]={index:e.index,visible:true}})}return i};return n});
//# sourceMappingURL=ColumnConfigHandler.js.map