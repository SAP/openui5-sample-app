/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/core/Core","sap/ui/core/Control","sap/ui/core/InvisibleText"],function(e,t,i,s){"use strict";var a=i.extend("sap.m.SelectDialogBase",{metadata:{library:"sap.m",abstract:true,properties:{},aggregations:{},events:{updateStarted:{parameters:{reason:{type:"string"},actual:{type:"int"},total:{type:"int"}}},updateFinished:{parameters:{reason:{type:"string"},actual:{type:"int"},total:{type:"int"}}},selectionChange:{parameters:{listItem:{type:"sap.m.ListItemBase"},listItems:{type:"sap.m.ListItemBase[]"},selected:{type:"boolean"},selectAll:{type:"boolean"}}}}},renderer:{apiVersion:2,render:function(){}}});a.getInvisibleText=function(){if(!this.oInvisibleText){this.oInvisibleText=new s({text:t.getLibraryResourceBundle("sap.m").getText("SELECTDIALOGBASE_LISTLABEL")}).toStatic()}return this.oInvisibleText};a.prototype._setInitialFocus=function(){if(!e.system.desktop){return}var t=this._oDialog.getContent()[1];this._oDialog.setInitialFocus(t)};return a});
//# sourceMappingURL=SelectDialogBase.js.map