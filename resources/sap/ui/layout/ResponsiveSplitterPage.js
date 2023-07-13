/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/Core"],function(t,e,n){"use strict";var i=e.extend("sap.ui.layout.ResponsiveSplitterPage",{metadata:{library:"sap.ui.layout",associations:{content:{type:"sap.ui.core.Control",multiple:false,singularName:"content"}}},renderer:{apiVersion:2,render:function(t,e){t.openStart("div",e).class("sapUiResponsiveSplitterPage").openEnd();var i=n.byId(e.getAssociation("content"));if(i){t.renderControl(i)}t.close("div")}}});i.prototype.containsControl=function(t){var e=n.byId(this.getAssociation("content"));if(!e){return false}if(e.isA("sap.ui.layout.AssociativeSplitter")){return e.containsControl(t)}return e.getId()===t};return i});
//# sourceMappingURL=ResponsiveSplitterPage.js.map