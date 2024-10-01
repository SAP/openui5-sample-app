/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/core/Lib","sap/ui/model/json/JSONModel","sap/m/VBox","sap/ui/core/Control","sap/m/Column","sap/m/Text","sap/ui/model/Filter","sap/m/Table","sap/m/OverflowToolbar","sap/m/SearchField","sap/m/ToolbarSpacer","sap/m/OverflowToolbarButton","sap/m/OverflowToolbarLayoutData","sap/ui/core/dnd/DragDropInfo","sap/ui/core/ShortcutHintsMixin","sap/ui/events/KeyCodes","sap/base/Log","sap/ui/Device","sap/m/library","sap/ui/core/library","sap/m/p13n/MessageStrip","sap/ui/core/InvisibleText"],(t,e,o,i,n,s,r,a,l,h,p,_,u,g,d,c,f,m,y,v,M,E,B)=>{"use strict";const T=n.extend("sap.m.p13n.BasePanel",{metadata:{library:"sap.m",interfaces:["sap.m.p13n.IContent"],associations:{},properties:{title:{type:"string"},enableReorder:{type:"boolean",defaultValue:true},_useFixedWidth:{type:"boolean",defaultValue:false,visibility:"hidden"}},aggregations:{messageStrip:{type:"sap.m.MessageStrip",multiple:false},_content:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},_template:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},events:{change:{parameters:{reason:{type:"string"},item:{type:"sap.m.p13n.Item"}}}}},renderer:{apiVersion:2,render:function(t,e){t.openStart("div",e);t.style("height","100%");if(e.getProperty("_useFixedWidth")){t.style("width",e.getWidth())}t.openEnd();t.renderControl(e.getAggregation("_content"));t.close("div")}}});T.prototype.P13N_MODEL="$p13n";T.prototype.CHANGE_REASON_ADD="Add";T.prototype.CHANGE_REASON_REMOVE="Remove";T.prototype.CHANGE_REASON_MOVE="Move";T.prototype.CHANGE_REASON_SELECTALL="SelectAll";T.prototype.CHANGE_REASON_DESELECTALL="DeselectAll";T.prototype.CHANGE_REASON_RANGESELECT="RangeSelect";T.prototype.PRESENCE_ATTRIBUTE="visible";T.prototype.WIDTH="30rem";T.prototype.applySettings=function(t){n.prototype.applySettings.apply(this,arguments);if(!t||t&&t.enableReorder===undefined){this._updateMovement(true)}};T.prototype.init=function(){n.prototype.init.apply(this,arguments);this._oP13nModel=new o({});this._oP13nModel.setSizeLimit(1e4);this.setModel(this._oP13nModel,this.P13N_MODEL);this._oListControl=this._createInnerListControl();this._oInvText=new B({text:this.getTitle()});this._oListControl.addAriaLabelledBy(this._oInvText);this._bFocusOnRearrange=true;this._setInnerLayout()};T.prototype.onAfterRendering=function(){if(!this._oResizeObserver){this._oResizeObserver=new ResizeObserver(this._onResize.bind(this))}this._oResizeObserver.observe(this.getDomRef())};T.prototype._setInnerLayout=function(){this.setAggregation("_content",new i({items:[this._oListControl,this._oInvText]}))};T.prototype.setP13nData=function(t){this._getP13nModel().setProperty("/items",t);return this};T.prototype.getP13nData=function(t){let e=this._getP13nModel().getProperty("/items");if(t){e=e.filter(t=>t[this.PRESENCE_ATTRIBUTE])}return e};T.prototype.getItemByKey=function(t){return this.getP13nData().find(e=>e.name==t)};T.prototype.setMessageStrip=function(t){if(!t){this.getAggregation("_content").removeItem(this._oMessageStrip);this._oMessageStrip=null}else{t.addStyleClass("sapUiSmallMargin");if(this._oMessageStrip){this._oMessageStrip.destroy()}this._oMessageStrip=t;this.getAggregation("_content").insertItem(t,0)}return this};T.prototype.getMessageStrip=function(){return this._oMessageStrip};T.prototype.getWidth=function(){return this.WIDTH};T.prototype._updateMovement=function(t){const e=this.getAggregation("_template");if(t){this._addHover(e)}else if(e&&e.aDelegates&&e.aDelegates.length>0){e.removeEventDelegate(e.aDelegates[0].oDelegate)}this._getDragDropConfig().setEnabled(t);this._setMoveButtonVisibility(t);return this};T.prototype.setEnableReorder=function(t){this.setProperty("enableReorder",t);this._updateMovement(t);return this};T.prototype.onReset=function(){this._getSearchField()?.setValue("");this._oListControl.getBinding("items")?.filter([])};T.prototype._getDragDropConfig=function(){if(!this._oDragDropInfo){this._oDragDropInfo=new d({enabled:false,sourceAggregation:"items",targetAggregation:"items",dropPosition:"Between",drop:[this._onRearrange,this]})}return this._oDragDropInfo};T.prototype._getMoveTopButton=function(){if(!this._oMoveTopButton){this._oMoveTopButton=new u(this.getId()+"-moveTopBtn",{type:"Transparent",tooltip:this._getResourceText("p13n.MOVE_TO_TOP"),icon:"sap-icon://collapse-group",press:[this._onPressButtonMoveToTop,this],visible:false});this.addDependent(this._oMoveTopButton);c.addConfig(this._oMoveTopButton,{addAccessibilityLabel:true,message:this._getResourceText(y.os.macintosh?"p13n.SHORTCUT_MOVE_TO_TOP_MAC":"p13n.SHORTCUT_MOVE_TO_TOP")},this)}return this._oMoveTopButton};T.prototype._getMoveUpButton=function(){if(!this._oMoveUpButton){this._oMoveUpButton=new u(this.getId()+"-moveUpBtn",{type:"Transparent",tooltip:this._getResourceText("p13n.MOVE_UP"),icon:"sap-icon://navigation-up-arrow",press:[this._onPressButtonMoveUp,this],visible:false});this.addDependent(this._oMoveUpButton);c.addConfig(this._oMoveUpButton,{addAccessibilityLabel:true,message:this._getResourceText(y.os.macintosh?"p13n.SHORTCUT_MOVE_UP_MAC":"p13n.SHORTCUT_MOVE_UP")},this)}return this._oMoveUpButton};T.prototype._getMoveDownButton=function(){if(!this._oMoveDownButton){this._oMoveDownButton=new u(this.getId()+"-moveDownpBtn",{type:"Transparent",tooltip:this._getResourceText("p13n.MOVE_DOWN"),icon:"sap-icon://navigation-down-arrow",press:[this._onPressButtonMoveDown,this],visible:false});this.addDependent(this._oMoveDownButton);c.addConfig(this._oMoveDownButton,{addAccessibilityLabel:true,message:this._getResourceText(y.os.macintosh?"p13n.SHORTCUT_MOVE_DOWN_MAC":"p13n.SHORTCUT_MOVE_DOWN")},this)}return this._oMoveDownButton};T.prototype._getMoveBottomButton=function(){if(!this._oMoveBottomButton){this._oMoveBottomButton=new u(this.getId()+"-moveBottomBtn",{type:"Transparent",tooltip:this._getResourceText("p13n.MOVE_TO_BOTTOM"),icon:"sap-icon://expand-group",press:[this._onPressButtonMoveToBottom,this],visible:false});this.addDependent(this._oMoveBottomButton);c.addConfig(this._oMoveBottomButton,{addAccessibilityLabel:true,message:this._getResourceText(y.os.macintosh?"p13n.SHORTCUT_MOVE_TO_BOTTOM_MAC":"p13n.SHORTCUT_MOVE_TO_BOTTOM")},this)}return this._oMoveBottomButton};T.prototype._onResize=function(t){const e=t[0].contentRect;if(this._oMoveTopButton){this._oMoveTopButton.setVisible(e.width>400)}if(this._oMoveBottomButton){this._oMoveBottomButton.setVisible(e.width>400)}};T.prototype._createInnerListControl=function(){return new l(this.getId()+"-innerP13nList",Object.assign(this._getListControlConfig(),{headerToolbar:new h({content:[this._getSearchField(),new _,this._getMoveTopButton(),this._getMoveUpButton(),this._getMoveDownButton(),this._getMoveBottomButton()]})}))};T.prototype._addHover=function(t){if(t&&t.aDelegates.length<1){t.addEventDelegate({onmouseover:this._hoverHandler.bind(this),onfocusin:this._focusHandler.bind(this),onkeydown:this._keydownHandler.bind(this)})}};T.prototype._keydownHandler=function(t){if(!this.getEnableReorder()){return}if(t.isMarked()){return}if(t.metaKey||t.ctrlKey){let e;if(t.which===f.HOME){e=this._getMoveTopButton()}if(t.which===f.ARROW_UP){e=this._getMoveUpButton()}if(t.which===f.ARROW_DOWN){e=this._getMoveDownButton()}if(t.which===f.END){e=this._getMoveBottomButton()}if(e&&e.getParent()&&e.getVisible()&&e.getEnabled()){t.setMarked();t.preventDefault();t.stopPropagation();e.firePress()}}};T.prototype._focusHandler=function(e){if(!this.getEnableReorder()){return}const o=t.getElementById(e.currentTarget.id);this._handleActivated(o)};T.prototype._hoverHandler=function(e){if(this._oSelectedItem&&!this._oSelectedItem.bIsDestroyed){return}if(!this.getEnableReorder()){return}const o=t.getElementById(e.currentTarget.id);this._handleActivated(o)};T.prototype._handleActivated=function(t){this._oHoveredItem=t};T.prototype._getListControlConfig=function(){return{mode:"MultiSelect",rememberSelections:true,itemPress:[this._onItemPressed,this],selectionChange:[this._onSelectionChange,this],sticky:["HeaderToolbar","ColumnHeaders","InfoToolbar"],dragDropConfig:this._getDragDropConfig()}};T.prototype._getSearchField=function(){if(!this._oSearchField){this._oSearchField=new p(this.getId()+"-searchField",{liveChange:[this._onSearchFieldLiveChange,this],width:"100%",layoutData:new g({shrinkable:true,priority:"High",maxWidth:"16rem"})})}return this._oSearchField};T.prototype.getInitialFocusedControl=function(){return this._oSearchField};T.prototype.setTitle=function(t){this.setProperty("title",t);this._oInvText?.setText(t);return this};T.prototype._setTemplate=function(t){t.setType("Active");const e=this.getAggregation("_template");if(e){e.destroy()}this.setAggregation("_template",t);if(t){if(this.getEnableReorder()){this._addHover(t)}this._oSelectionBindingInfo=t.getBindingInfo("selected");if(this._oSelectionBindingInfo&&this._oSelectionBindingInfo.parts){this._oSelectionBindingInfo={parts:this._oSelectionBindingInfo.parts}}}this._bindListItems();return this};T.prototype._setPanelColumns=function(t){let e;if(t instanceof Array){e=t}else{e=[t]}this._addTableColumns(e)};T.prototype._getP13nModel=function(){return this.getModel(this.P13N_MODEL)};T.prototype._getResourceText=function(t,o){this.oResourceBundle=this.oResourceBundle?this.oResourceBundle:e.getResourceBundleFor("sap.m");return t?this.oResourceBundle.getText(t,o):this.oResourceBundle};T.prototype._addTableColumns=function(t){const e=this._oListControl.removeAllColumns();e.forEach(t=>{t.destroy()});t.forEach(function(t){let e;if(typeof t=="string"){e=new s({header:new r({text:t})})}else{e=t}this._oListControl.addColumn(e)},this)};T.prototype._bindListItems=function(t){const e=this.getAggregation("_template");if(e){this._oListControl.bindItems(Object.assign({path:this.P13N_MODEL+">/items",key:"name",templateShareable:false,template:this.getAggregation("_template").clone()},t))}};T.prototype._onSelectionChange=function(t){const e=t.getParameter("listItems");const o=this._checkSpecialChangeReason(t.getParameter("selectAll"),t.getParameter("listItems"));e.forEach(function(t){this._selectTableItem(t,!!o)},this);if(o){const t=[];e.forEach(function(e){t.push(this._getModelEntry(e))},this);this.fireChange({reason:o,item:t})}if(o===this.CHANGE_REASON_DESELECTALL){this._getMoveTopButton().setEnabled(false);this._getMoveUpButton().setEnabled(false);this._getMoveDownButton().setEnabled(false);this._getMoveBottomButton().setEnabled(false)}};T.prototype._checkSpecialChangeReason=function(t,e){let o;if(t){o=this.CHANGE_REASON_SELECTALL}else if(!t&&e.length>1&&!e[0].getSelected()){o=this.CHANGE_REASON_DESELECTALL}else if(e.length>1&&e.length<this._oListControl.getItems().length){o=this.CHANGE_REASON_RANGESELECT}return o};T.prototype._onItemPressed=function(t){const e=t.getParameter("listItem");this._oSelectedItem=e;const o=e.getBindingContext(this.P13N_MODEL);if(this.getEnableReorder()&&o&&o.getProperty(this.PRESENCE_ATTRIBUTE)){this._handleActivated(e);this._updateEnableOfMoveButtons(e,true)}};T.prototype._onSearchFieldLiveChange=function(t){this._oListControl.getBinding("items").filter(new a("label","Contains",t.getSource().getValue()))};T.prototype._onPressButtonMoveToTop=function(){this._moveSelectedItem(0)};T.prototype._onPressButtonMoveUp=function(){this._moveSelectedItem("Up")};T.prototype._onPressButtonMoveDown=function(){this._moveSelectedItem("Down")};T.prototype._onPressButtonMoveToBottom=function(){const t=this._oListControl.getItems().length-1;this._moveSelectedItem(t)};T.prototype._setMoveButtonVisibility=function(t){this._getMoveTopButton().setVisible(t);this._getMoveUpButton().setVisible(t);this._getMoveDownButton().setVisible(t);this._getMoveBottomButton().setVisible(t)};T.prototype._filterBySelected=function(t,e){e.getBinding("items").filter(t?new a(this.PRESENCE_ATTRIBUTE,"EQ",true):[])};T.prototype._selectTableItem=function(t,e){this._updateEnableOfMoveButtons(t,e?false:true);this._oSelectedItem=t;if(!e){const t=this._getP13nModel().getProperty(this._oSelectedItem.getBindingContext(this.P13N_MODEL).sPath);this.fireChange({reason:t[this.PRESENCE_ATTRIBUTE]?this.CHANGE_REASON_ADD:this.CHANGE_REASON_REMOVE,item:t})}};T.prototype._moveSelectedItem=function(t){const e=this._oSelectedItem;const o=this._oListControl.indexOfItem(e);if(o<0){return}const i=typeof t=="number"?t:o+(t=="Up"?-1:1);this._moveTableItem(e,i)};T.prototype._getModelEntry=function(t){return t.getBindingContext(this.P13N_MODEL).getObject()};T.prototype._moveTableItem=function(t,e){const o=this._oListControl.getItems();const i=this._getP13nModel().getProperty("/items");const n=i.indexOf(this._getModelEntry(t));let s=e<=0?0:Math.min(e,o.length-1);s=i.indexOf(this._getModelEntry(o[e]));if(s==n){return}i.splice(s,0,i.splice(n,1)[0]);this._getP13nModel().setProperty("/items",i);this._oSelectedItem=this._oListControl.getItems()[e];this._updateEnableOfMoveButtons(this._oSelectedItem,this._bFocusOnRearrange);this._handleActivated(this._oSelectedItem);this.fireChange({reason:this.CHANGE_REASON_MOVE,item:this._getModelEntry(t)})};T.prototype._onRearrange=function(t){const e=t.getParameter("draggedControl");if(!e?.getMultiSelectControl()?.getEnabled()){return}const o=t.getParameter("droppedControl");const i=t.getParameter("dropPosition");const n=this._oListControl.indexOfItem(e);const s=this._oListControl.indexOfItem(o);const r=s+(i=="Before"?0:1)+(n<s?-1:0);this._moveTableItem(e,r)};T.prototype._updateEnableOfMoveButtons=function(t,e){const o=this._oListControl.getItems().indexOf(t);let i=true,n=true;if(o==0){i=false}if(o==this._oListControl.getItems().length-1){n=false}this._getMoveTopButton().setEnabled(i);this._getMoveUpButton().setEnabled(i);this._getMoveDownButton().setEnabled(n);this._getMoveBottomButton().setEnabled(n);if(e){t.focus()}};T.prototype.exit=function(){n.prototype.exit.apply(this,arguments);this._oResizeObserver=null;this._bFocusOnRearrange=null;this._oHoveredItem=null;this._oSelectionBindingInfo=null;this._oSelectedItem=null;this._oListControl=null;this._oMoveTopButton=null;this._oMoveUpButton=null;this._oMoveDownButton=null;this._oMoveBottomButton=null;this._oSearchField=null};return T});
//# sourceMappingURL=BasePanel.js.map