/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Element"],function(t,e){"use strict";var a=e.extend("sap.ui.layout.SplitPane",{metadata:{library:"sap.ui.layout",properties:{demandPane:{type:"boolean",group:"Behavior",defaultValue:true},requiredParentWidth:{type:"int",defaultValue:800}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:false,singularName:"content"}}}});a.prototype.setLayoutData=function(t){var e=this.getContent();if(e){return e.setLayoutData(t)}this._oLayoutData=t;return this};a.prototype.getLayoutData=function(){var t=this.getContent();if(t){return t.getLayoutData()}return this._oLayoutData};a.prototype.setContent=function(t){if(this._oLayoutData){t.setLayoutData(this._oLayoutData);this._oLayoutData=null}return this.setAggregation("content",t)};a.prototype.onLayoutDataChange=function(){var t=this.getParent();if(t){t._oSplitter._delayedResize()}};a.prototype._isInInterval=function(t){return this.getRequiredParentWidth()<=t};return a});
//# sourceMappingURL=SplitPane.js.map