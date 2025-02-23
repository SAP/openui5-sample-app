/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","./QuickAction","./QuickActionItem","sap/m/Switch"],function(t,e,n,o){"use strict";var a=n.extend("sap.m.table.columnmenu.QuickTotalItem",{metadata:{library:"sap.m",properties:{totaled:{type:"boolean",defaultValue:false}}}});a.prototype._getAction=function(){var n=this.getLabel();var o=new e({label:n,content:[this.getContent()],category:t.table.columnmenu.Category.Aggregate,contentSize:t.InputListItemContentSize.S});this.addDependent(o);return o};a.prototype.getContent=function(){if(!this._oContent){this._oContent=new o({state:this.getTotaled(),customTextOn:" ",customTextOff:" ",change:[{item:this},this._onTotalChange,this]})}return this._oContent};a.prototype.setTotaled=function(t){this.setProperty("totaled",t,true);this.getContent().setState(t);return this};a.prototype._onTotalChange=function(t,e){var n=t.getSource().getState();this.setTotaled(n);this.getParent().onChange(e.item)};return a});
//# sourceMappingURL=QuickTotalItem.js.map