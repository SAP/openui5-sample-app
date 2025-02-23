/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","./QuickAction","./QuickActionItem","sap/m/Switch"],function(t,e,n,o){"use strict";var i=n.extend("sap.m.table.columnmenu.QuickGroupItem",{metadata:{library:"sap.m",properties:{grouped:{type:"boolean",defaultValue:false}}}});i.prototype._getAction=function(){var n=this.getLabel();var o=new e({label:n,content:[this.getContent()],category:t.table.columnmenu.Category.Group,contentSize:t.InputListItemContentSize.S});this.addDependent(o);return o};i.prototype.getContent=function(){if(!this._oContent){this._oContent=new o({state:this.getGrouped(),customTextOn:" ",customTextOff:" ",change:[{item:this},this._onGroupChange,this]})}return this._oContent};i.prototype.setGrouped=function(t){this.setProperty("grouped",t,true);this.getContent().setState(t);return this};i.prototype._onGroupChange=function(t,e){var n=t.getSource().getState();this.setGrouped(n);this.getParent().onChange(e.item)};return i});
//# sourceMappingURL=QuickGroupItem.js.map