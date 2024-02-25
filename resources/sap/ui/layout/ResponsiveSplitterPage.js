/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/Element"],function(e,t,n){"use strict";var i=t.extend("sap.ui.layout.ResponsiveSplitterPage",{metadata:{library:"sap.ui.layout",associations:{content:{type:"sap.ui.core.Control",multiple:false,singularName:"content"}}},renderer:{apiVersion:2,render:function(e,t){e.openStart("div",t).class("sapUiResponsiveSplitterPage").openEnd();var i=n.getElementById(t.getAssociation("content"));if(i){e.renderControl(i)}e.close("div")}}});i.prototype.containsControl=function(e){var t=n.getElementById(this.getAssociation("content"));if(!t){return false}if(t.isA("sap.ui.layout.AssociativeSplitter")){return t.containsControl(e)}return t.getId()===e};return i});
//# sourceMappingURL=ResponsiveSplitterPage.js.map