/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/upload/p13n/handlers/BaseConfigHandler"],function(e){"use strict";const t=e.extend("sap.m.upload.p13n.handlers.FilterConfigHandler",{});const r="uploadSetTableFilterStateChange";t.getEventName=function(){return r};t.prototype.modifyState=function(e,t){const r=e.content,o=r.targetAggregation,a=t||{};a.properties??={};a.properties[o]??={};if(r.deleted){r.deleted.forEach(e=>{if(a.properties[o][e.key]){delete a.properties[o][e.key]}})}if(r.moved){r.moved.forEach(e=>{a.properties[o][e.key]={key:e.key,index:e.index,path:e.path,operator:e.operator,value:e.value}})}if(r.inserted){r.inserted.forEach(e=>{a.properties[o][e.key]={key:e.key,index:e.index,path:e.path,operator:e.operator,value:e.value}})}return a};return t});
//# sourceMappingURL=FilterConfigHandler.js.map