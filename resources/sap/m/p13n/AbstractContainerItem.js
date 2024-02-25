/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element"],t=>{"use strict";const e=t.extend("sap.m.p13n.AbstractContainerItem",{metadata:{library:"sap.m",defaultAggregation:"content",properties:{key:{type:"string",defaultValue:null},text:{type:"string",defaultValue:null},icon:{type:"string",defaultValue:null}},aggregations:{content:{type:"sap.ui.core.Control",multiple:false}}}});e.prototype.exit=function(){t.prototype.exit.apply(this,arguments);if(this._oContent){this._oContent.destroy();this._oContent=null}};e.prototype.setContent=function(t){this.setAggregation("content",t);if(t){this._oContent=t}return this};e.prototype.getContent=function(){return this._oContent};return e});
//# sourceMappingURL=AbstractContainerItem.js.map