/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./List","./library","./GrowingListRenderer","sap/ui/core/Configuration"],function(t,e,r,o){"use strict";var i=t.extend("sap.m.GrowingList",{metadata:{deprecated:true,library:"sap.m",properties:{threshold:{type:"int",group:"Misc",defaultValue:20},triggerText:{type:"string",group:"Appearance",defaultValue:null},scrollToLoad:{type:"boolean",group:"Behavior",defaultValue:false}}},renderer:r});i.prototype._isIncompatible=function(){return o.getCompatibilityVersion("sapMGrowingList").compareTo("1.16")>=0};i.prototype.init=function(){t.prototype.init.call(this);if(!this._isIncompatible()){this.setGrowing()}};i.prototype.setGrowing=function(){return t.prototype.setGrowing.call(this,true)};!function(t,e){["Threshold","TriggerText","ScrollToLoad"].forEach(function(r){t["set"+r]=e["setGrowing"+r];t["get"+r]=e["getGrowing"+r]})}(i.prototype,t.prototype);return i});
//# sourceMappingURL=GrowingList.js.map