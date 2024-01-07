/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item"],function(e,t){"use strict";var r=t.extend("sap.m.P13nFilterItem",{metadata:{library:"sap.m",properties:{operation:{type:"string",group:"Misc",defaultValue:null},value1:{type:"string",group:"Misc",defaultValue:null},value2:{type:"string",group:"Misc",defaultValue:null},columnKey:{type:"string",group:"Misc",defaultValue:null},exclude:{type:"boolean",group:"Misc",defaultValue:false}}}});r.prototype.setOperation=function(e){return this.setProperty("operation",e,true)};r.prototype.setColumnKey=function(e){return this.setProperty("columnKey",e,true)};r.prototype.setValue1=function(e){return this.setProperty("value1",e,true)};r.prototype.setValue2=function(e){return this.setProperty("value2",e,true)};r.prototype.setExclude=function(e){return this.setProperty("exclude",e,true)};return r});
//# sourceMappingURL=P13nFilterItem.js.map