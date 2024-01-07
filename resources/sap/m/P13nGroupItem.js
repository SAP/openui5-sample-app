/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item"],function(e,t){"use strict";var r=t.extend("sap.m.P13nGroupItem",{metadata:{library:"sap.m",properties:{operation:{type:"string",group:"Misc",defaultValue:null},columnKey:{type:"string",group:"Misc",defaultValue:null},showIfGrouped:{type:"boolean",group:"Misc",defaultValue:false}}}});r.prototype.setColumnKey=function(e){return this.setProperty("columnKey",e,true)};r.prototype.setOperation=function(e){return this.setProperty("operation",e,true)};r.prototype.setShowIfGrouped=function(e){return this.setProperty("showIfGrouped",e,true)};return r});
//# sourceMappingURL=P13nGroupItem.js.map