/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item"],function(t,e){"use strict";var r=e.extend("sap.m.P13nSortItem",{metadata:{library:"sap.m",properties:{operation:{type:"string",group:"Misc",defaultValue:null},columnKey:{type:"string",group:"Misc",defaultValue:null}}}});r.prototype.setColumnKey=function(t){return this.setProperty("columnKey",t,true)};r.prototype.setOperation=function(t){return this.setProperty("operation",t,true)};return r});
//# sourceMappingURL=P13nSortItem.js.map