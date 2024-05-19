//@ui5-bundle sap/m/designtime/library-preload.designtime.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ActionSheet.designtime", [],function(){"use strict";return{aggregations:{buttons:{domRef:":sap-domref",actions:{move:"moveControls"}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Avatar.designtime", [],function(){"use strict";return{templates:{create:"sap/m/designtime/Avatar.create.fragment.xml"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Bar.designtime", [],function(){"use strict";return{aggregations:{contentLeft:{domRef:":sap-domref > .sapMBarLeft",actions:{move:"moveControls"}},contentMiddle:{domRef:":sap-domref > .sapMBarMiddle > .sapMBarPH",actions:{move:"moveControls"}},contentRight:{domRef:":sap-domref > .sapMBarRight",actions:{move:"moveControls"}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Breadcrumbs.designtime", [],function(){"use strict";return{palette:{group:"ACTION",icons:{svg:"sap/m/designtime/Breadcrumbs.icon.svg"}},templates:{create:"sap/m/designtime/Breadcrumbs.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/BusyDialog.designtime", [],function(){"use strict";return{name:{singular:"BUSY_DIALOG_NAME",plural:"BUSY_DIALOG_NAME_PLURAL"},palette:{group:"DIALOG"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Button.designtime", [],function(){"use strict";return{palette:{group:"ACTION",icons:{svg:"sap/m/designtime/Button.icon.svg"}},actions:{combine:{changeType:"combineButtons",changeOnRelevantContainer:true,isEnabled:true},remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.$().find(".sapMBtnContent, .sapMSegBBtnInner")[0]}},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/Button.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Carousel.designtime", [],function(){"use strict";return{name:{singular:"CAROUSEL_NAME",plural:"CAROUSEL_NAME_PLURAL"},palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/Carousel.icon.svg"}},templates:{create:"sap/m/designtime/Carousel.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/CheckBox.designtime", [],function(){"use strict";return{name:{singular:"CHECKBOX_NAME",plural:"CHECKBOX_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/CheckBox.icon.svg"}},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.$().find(".sapMCbLabel")[0]}},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/CheckBox.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Column.designtime", ["sap/ui/dt/ElementUtil"],function(e){"use strict";return{isVisible:function(e){return e.getVisible()},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl",getLabel:function(t){return e.getLabelForElement(t.getHeader())}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ComboBox.designtime", [],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/ComboBox.icon.svg"}},templates:{create:"sap/m/designtime/ComboBox.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/CustomListItem.designtime", [],function(){"use strict";return{aggregations:{content:{domRef:":sap-domref > .sapMLIBContent",actions:{move:"moveControls"}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/CustomTile.designtime", [],function(){"use strict";return{palette:{group:"TILE",icons:{svg:"sap/m/designtime/CustomTile.icon.svg"}},aggregations:{content:{domRef:":sap-domref"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/DatePicker.designtime", [],function(){"use strict";return{name:{singular:"DATEPICKER_NAME",plural:"DATEPICKER_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/DatePicker.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/DatePicker.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/DateRangeSelection.designtime", [],function(){"use strict";return{name:{singular:"DATERANGESELECTION_NAME",plural:"DATERANGESELECTION_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/DateRangeSelection.icon.svg"}},templates:{create:"sap/m/designtime/DateRangeSelection.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/DateTimeInput.designtime", [],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/DateTimeInput.icon.svg"}},templates:{create:"sap/m/designtime/DateTimeInput.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/DateTimePicker.designtime", [],function(){"use strict";return{name:{singular:"DATETIMEPICKER_NAME",plural:"DATETIMEPICKER_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/DateTimePicker.icon.svg"}},templates:{create:"sap/m/designtime/DateTimePicker.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Dialog.designtime", [],function(){"use strict";return{name:{singular:"DIALOG_NAME",plural:"DIALOG_NAME_PLURAL"},palette:{group:"DIALOG"},actions:{rename:function(e){if(e.getCustomHeader()){return}return{changeType:"rename",domRef:function(e){return e.getDomRef("title")}}}},aggregations:{content:{domRef:"> .sapMDialogSection",actions:{move:"moveControls"}},customHeader:{domRef:function(e){if(e._getAnyHeader()){return e._getAnyHeader().getDomRef()}}},subHeader:{domRef:function(e){return e.getAggregation("subHeader").getDomRef()}},beginButton:{domRef:function(e){return e.getBeginButton().getDomRef()},ignore:function(e){return!e.getBeginButton()||!!e.getButtons().length}},endButton:{domRef:function(e){return e.getEndButton().getDomRef()},ignore:function(e){return!e.getEndButton()||!!e.getButtons().length}},buttons:{domRef:function(e){if(e.getButtons().length){return e._oToolbar.getDomRef()}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/DraftIndicator.designtime", [],function(){"use strict";return{palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/DraftIndicator.icon.svg"}},templates:{create:"sap/m/designtime/DraftIndicator.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ExpandableText.designtime", [],function(){"use strict";return{name:{singular:"EXPANDABLE_TEXT_NAME",plural:"EXPANDABLE_TEXT_NAME_PLURAL"},palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/ExpandableText.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/ExpandableText.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/FeedInput.designtime", [],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/FeedInput.icon.svg"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/FeedListItem.designtime", [],function(){"use strict";return{palette:{group:"LIST",icons:{svg:"sap/m/designtime/FeedListItem.icon.svg"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/FlexBox.designtime", [],function(){"use strict";return{actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},aggregations:{items:{domRef:":sap-domref",actions:{move:"moveControls"}}},name:{singular:"FLEX_BOX_NAME",plural:"FLEX_BOX_NAME_PLURAL"},templates:{create:"sap/m/designtime/FlexBox.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/HBox.designtime", [],function(){"use strict";return{actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},aggregations:{items:{domRef:":sap-domref",actions:{move:"moveControls"}}},name:{singular:"HBOX_NAME",plural:"HBOX_NAME_PLURAL"},palette:{group:"LAYOUT",icons:{svg:"sap/m/designtime/HBox.icon.svg"}},templates:{create:"sap/m/designtime/HBox.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/IconTabBar.designtime", ["sap/ui/core/Element","sap/ui/model/json/JSONModel","sap/ui/core/Fragment","sap/ui/core/Lib"],function(e,t,n,a){"use strict";var o=a.getResourceBundleFor("sap.m.designtime");var r=function(a,r){return new Promise(function(s){var c=[];var i=a.getItems();i.forEach(function(e){if(!e.isA("sap.m.IconTabSeparator")){c.push({text:e.getText()||e.getKey(),key:e.getKey()})}});var l={selectedKey:a.getSelectedKey(),titleText:o.getText("ICON_TAB_BAR_SELECT_TAB"),cancelBtn:o.getText("ICON_TAB_BAR_CANCEL_BTN"),okBtn:o.getText("ICON_TAB_BAR_SELECT_BTN"),items:c};var g=new t;g.setData(l);n.load({name:"sap.m.designtime.IconTabBarSelectTab",controller:this}).then(function(t){t.setModel(g);t.getBeginButton().attachPress(function(n){var a=e.getElementById("targetCombo").getSelectedKey();s(a);t.close()});t.getEndButton().attachPress(function(e){t.close()});t.attachEventOnce("afterClose",function(e){t.destroy()});t.addStyleClass(r.styleClass);t.open()})}).then(function(e){return[{selectorControl:a,changeSpecificData:{changeType:"selectIconTabBarFilter",content:{selectedKey:e,previousSelectedKey:a.getSelectedKey(),fireEvent:true}}}]})};return{name:{singular:"ICON_TAB_BAR_NAME",plural:"ICON_TAB_BAR_NAME_PLURAL"},palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/IconTabBar.icon.svg"}},aggregations:{items:{domRef:":sap-domref > .sapMITH",actions:{move:"moveControls"},propagateMetadata:function(e){if(e.isA("sap.m.IconTabFilter")){return{aggregations:{content:{domRef:function(){return":sap-domref > .sapMITBContainerContent"},actions:{move:"moveControls"}}}}}return null}},content:{domRef:function(e){var t=e._getIconTabHeader().oSelectedItem;if(t&&t.getContent().length){return null}return e.getDomRef("content")},actions:{move:"moveControls"}}},actions:{settings:function(){return{selectIconTabBarFilter:{name:o.getText("ICON_TAB_BAR_SELECT_TAB"),isEnabled:function(e){return!!e._getIconTabHeader().oSelectedItem},handler:r}}}},templates:{create:"sap/m/designtime/IconTabBar.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/IconTabFilter.designtime", [],function(){"use strict";return{palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/IconTabFilter.icon.svg"}},actions:{rename:function(){return{changeType:"rename",domRef:function(e){return e.$().find(".sapMITBText")[0]}}}},aggregations:{content:{propagateMetadata:function(e){if(e.getParent()?.isA("sap.m.IconTabFilter")){return{actions:{remove:null,reveal:null}}}return undefined}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/IconTabSeparator.designtime", [],function(){"use strict";return{palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/IconTabSeparator.icon.svg"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Image.designtime", [],function(){"use strict";return{name:{singular:"IMAGE_NAME",plural:"IMAGE_NAME_PLURAL"},palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/Image.icon.svg"}},aggregations:{detailBox:{ignore:true}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/Image.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Input.designtime", [],function(){"use strict";return{name:{singular:"INPUT_NAME",plural:"INPUT_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/Input.icon.svg"}},templates:{create:"sap/m/designtime/Input.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/InputBase.designtime", [],function(){"use strict";return{name:{singular:"INPUT_BASE_NAME",plural:"INPUT_BASE_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/InputBase.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/Input.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/InputListItem.designtime", [],function(){"use strict";return{aggregations:{content:{domRef:":sap-domref > .sapMLIBContent",actions:{move:"moveControls"}}},actions:{rename:{changeType:"rename",domRef:function(n){return n.$().find(".sapMLIBContent > .sapMILILabel")[0]}}},name:{singular:"LIST_ITEM_BASE_NAME",plural:"LIST_ITEM_BASE_NAME_PLURAL"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Label.designtime", [],function(){"use strict";return{name:{singular:"LABEL_NAME",plural:"LABEL_NAME_PLURAL"},palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/Label.icon.svg"}},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.$()[0]}},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/Label.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/LightBox.designtime", [],function(){"use strict";return{name:{singular:"LIGHT_BOX_NAME",plural:"LIGHT_BOX_NAME_PLURAL"},palette:{group:"CONTAINER"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Link.designtime", ["sap/base/util/Deferred","sap/ui/core/Element","sap/ui/core/Lib","sap/ui/core/Fragment","sap/ui/model/json/JSONModel"],function(e,t,n,a,r){"use strict";var i=function(i,o){var s=n.getResourceBundleFor("sap.m.designtime");return a.load({name:"sap.m.designtime.LinkTargetSelectDialog"}).then(function(n){var a=new r({selectedKey:i.getTarget(),titleText:s.getText("LINK_DIALOG_TITLE_CHANGE_TARGET"),cancelBtn:s.getText("LINK_DIALOG_CANCEL_BTN"),okBtn:s.getText("LINK_DIALOG_OK_BTN")});n.setModel(a);var c=new e;n.getBeginButton().attachPress(function(e){var a=t.getElementById("targetCombo").getValue();c.resolve(a);n.close()});n.getEndButton().attachPress(function(e){c.resolve(undefined);n.close()});n.attachEventOnce("afterClose",function(e){n.destroy()});n.addStyleClass(o.styleClass);n.open();return c.promise}).then(function(e){if(e===undefined){return[]}return[{selectorControl:i,changeSpecificData:{changeType:"changeLinkTarget",content:e}}]})};return{name:{singular:"LINK_NAME",plural:"LINK_NAME_PLURAL"},palette:{group:"ACTION",icons:{svg:"sap/m/designtime/Link.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},rename:{changeType:"rename",domRef:function(e){return e.$()[0]}},settings:function(){return{changeLinkTarget:{name:"LINK_CHANGE_TARGET",isEnabled:function(e){return!!e.getHref()},handler:i}}}},templates:{create:"sap/m/designtime/Link.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ListBase.designtime", [],function(){"use strict";function e(e){var n=e;while(n){if(n.isA("sap.m.ListBase")){var t=n.getBinding("items");if(t){return true}return false}n=n.getParent()}return false}return{name:{singular:"LIST_BASE_NAME",plural:"LIST_BASE_NAME_PLURAL"},palette:{group:"LIST",icons:{svg:"sap/m/designtime/ListBase.icon.svg"}},aggregations:{items:{propagateMetadata:function(n){if(e(n)){return{actions:{remove:null,rename:null}}}},domRef:":sap-domref > .sapMListUl:not(.sapMGrowingList)",actions:{move:"moveControls"}},swipeContent:{domRef:":sap-domref > .sapMListSwp",ignore:true},headerToolbar:{domRef:":sap-domref > .sapMListHdrTBar"},infoToolbar:{domRef:":sap-domref .sapMListInfoTBar"},contextMenu:{ignore:true},noData:{ignore:true}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ListItemBase.designtime", [],function(){"use strict";return{name:{singular:"LIST_ITEM_BASE_NAME",plural:"LIST_ITEM_BASE_NAME_PLURAL"},palette:{group:"LIST",icons:{svg:"sap/m/designtime/ListItemBase.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/MenuButton.designtime", [],function(){"use strict";return{palette:{group:"ACTION",icons:{svg:"sap/m/designtime/MenuButton.icon.svg"}},aggregations:{menu:{ignore:true}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},split:{changeType:"splitMenuButton",changeOnRelevantContainer:true,getControlsCount:function(e){return e.getMenu().getItems().length}},rename:{changeType:"rename",domRef:function(e){return e.$().find(".sapMBtn > .sapMBtnInner > .sapMBtnContent")[0]}}},templates:{create:"sap/m/designtime/MenuButton.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/MessagePage.designtime", [],function(){"use strict";return{templates:{create:"sap/m/designtime/MessagePage.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/MessageStrip.designtime", [],function(){"use strict";return{palette:{group:"TILE",icons:{svg:"sap/m/designtime/MessageStrip.icon.svg"}},templates:{create:"sap/m/designtime/MessageStrip.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/MultiComboBox.designtime", [],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/MultiComboBox.icon.svg"}},templates:{create:"sap/m/designtime/MultiComboBox.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/MultiInput.designtime", [],function(){"use strict";return{palette:{group:"INPUT"},templates:{create:"sap/m/designtime/MultiInput.create.fragment.xml"},name:{singular:"MULTIINPUT_NAME",plural:"MULTIINPUT_NAME_PLURAL"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/NewsContent.designtime", [],function(){"use strict";return{palette:{group:"TILE",icons:{svg:"sap/m/designtime/NewsContent.icon.svg"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ObjectAttribute.designtime", [],function(){"use strict";return{palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/ObjectAttribute.icon.svg"}},templates:{create:"sap/m/designtime/ObjectAttribute.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ObjectHeader.designtime", [],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/ObjectHeader.icon.svg"}},aggregations:{headerContainer:{propagateMetadata:function(e,t){if(e.isA("sap.m.IconTabBar")){return{domRef:function(){return t.getDomRef().querySelector(".sapMITH")},aggregations:{items:{domRef:function(){return t.getDomRef().querySelector(".sapMITH")},actions:{move:"moveControls"}}}}}return null},propagateRelevantContainer:true}},templates:{create:"sap/m/designtime/ObjectHeader.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ObjectIdentifier.designtime", ["sap/m/library","sap/base/Log"],function(e,t){"use strict";var n;return{palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/ObjectIdentifier.icon.svg"}},registerSettingsHandler:function(e){n=e},getStableElements:function(e){return n?n.getStableElements(e):null},actions:{settings:function(e){if(e.getModel("$sapuicompcontrolprovider_distinctSO")){if(!n){return}return{handler:function(e,t){return n.execute(e,t)}}}return null}},templates:{create:"sap/m/designtime/ObjectIdentifier.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ObjectListItem.designtime", [],function(){"use strict";return{aggregations:{firstStatus:{domRef:":sap-domref .sapMObjLStatus1DivEmpty"},secondStatus:{domRef:":sap-domref .sapMObjLStatus2DivEmpty"},attributes:{domRef:":sap-domref .sapMObjLAttrDivEmpty"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ObjectMarker.designtime", [],function(){"use strict";return{palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/ObjectMarker.icon.svg"}},templates:{create:"sap/m/designtime/ObjectMarker.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ObjectNumber.designtime", [],function(){"use strict";return{palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/ObjectNumber.icon.svg"}},templates:{create:"sap/m/designtime/ObjectNumber.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ObjectStatus.designtime", [],function(){"use strict";return{palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/ObjectStatus.icon.svg"}},templates:{create:"sap/m/designtime/ObjectStatus.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/OverflowToolbar.designtime", [],function(){"use strict";return{templates:{create:"sap/m/designtime/OverflowToolbar.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/OverflowToolbarButton.designtime", [],function(){"use strict";return{actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/OverflowToolbarButton.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Page.designtime", [],function(){"use strict";return{palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/Page.icon.svg"}},actions:{rename:function(e){if(e.getCustomHeader()){return}return{changeType:"rename",domRef:function(e){return e.$("title-inner")[0]}}}},aggregations:{headerContent:{domRef:":sap-domref > .sapMPageHeader .sapMBarRight",actions:{move:"moveControls"}},subHeader:{domRef:":sap-domref > .sapMPageSubHeader"},customHeader:{domRef:":sap-domref > .sapMPageHeader"},content:{domRef:":sap-domref > section",actions:{move:"moveControls"}},footer:{domRef:":sap-domref > .sapMPageFooter"},landmarkInfo:{ignore:true}},name:{singular:"PAGE_NAME",plural:"PAGE_NAME_PLURAL"},templates:{create:"sap/m/designtime/Page.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Panel.designtime", [],function(){"use strict";return{name:{singular:"PANEL_NAME",plural:"PANEL_NAME_PLURAL"},palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/Panel.icon.svg"}},actions:{remove:{changeType:"hideControl"},rename:function(e){if(e.getHeaderToolbar()){return}return{changeType:"rename",domRef:".sapMPanelHdr"}},reveal:{changeType:"unhideControl",getLabel:function(e){var a,n=e.getHeaderToolbar();if(n&&n.getTitleControl()){a=n.getTitleControl().getText()}else{a=e.getHeaderText()}return a||e.getId()}}},aggregations:{headerToolbar:{domRef:":sap-domref > .sapMPanelHeadingDiv .sapMPanelHeaderTB, :sap-domref > .sapMPanelHeadingDiv .sapMPanelWrappingDivTb .sapMPanelHeaderTB, :sap-domref > .sapUiDtEmptyHeader"},infoToolbar:{domRef:":sap-domref > .sapMPanelInfoTB, :sap-domref > .sapUiDtEmptyInfoToolbar"},content:{domRef:":sap-domref > .sapMPanelContent",show:function(){this.setExpanded(true)},actions:{move:"moveControls"}}},templates:{create:"sap/m/designtime/Panel.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/PersistenceProvider.designtime", [],function(){"use strict";return{name:"{name}",description:"{description}",properties:{mode:{ignore:true}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/PlanningCalendar.designtime", [],function(){"use strict";return{name:{singular:"PLANNINGCALENDAR_NAME",plural:"PLANNINGCALENDAR_NAME_PLURAL"},palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/PlanningCalendar.icon.svg"}},templates:{create:"sap/m/designtime/PlanningCalendar.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/PlanningCalendarLegend.designtime", [],function(){"use strict";return{name:{singular:"PLANNINGCALENDARLEGEND_NAME",plural:"PLANNINGCALENDARLEGEND_NAME_PLURAL"},palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/PlanningCalendarLegend.icon.svg"}},templates:{create:"sap/m/designtime/PlanningCalendarLegend.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Popover.designtime", [],function(){"use strict";return{actions:{rename:function(e){if(e.getCustomHeader()){return}return{changeType:"rename",domRef:function(e){return e.getDomRef("title")}}}},aggregations:{content:{domRef:":sap-domref > .sapMPopoverCont",actions:{move:"moveControls"}},customHeader:{domRef:":sap-domref > .sapMPopoverHeader"},subHeader:{domRef:":sap-domref > .sapMPopoverSubHeader"},footer:{domRef:":sap-domref > .sapMPopoverFooter"},beginButton:{domRef:":sap-domref > header.sapMPopoverHeader .sapMBarLeft"},endButton:{domRef:":sap-domref > header.sapMPopoverHeader .sapMBarRight"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ProgressIndicator.designtime", [],function(){"use strict";return{palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/ProgressIndicator.icon.svg"}},templates:{create:"sap/m/designtime/ProgressIndicator.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/QuickView.designtime", [],function(){"use strict";return{name:{singular:"QUICK_VIEW_NAME",plural:"QUICK_VIEW_NAME_PLURAL"},palette:{group:"DISPLAY"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/QuickViewCard.designtime", [],function(){"use strict";return{name:{singular:"QUICK_VIEW_CARD_NAME",plural:"QUICK_VIEW_CARD_NAME_PLURAL"},palette:{group:"DISPLAY"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/RadioButton.designtime", [],function(){"use strict";return{name:{singular:"RADIOBUTTON_NAME",plural:"RADIOBUTTON_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/RadioButton.icon.svg"}},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.$().find(".sapMRbBLabel")[0]}},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/RadioButton.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/RadioButtonGroup.designtime", [],function(){"use strict";return{name:{singular:"RADIO_BUTTON_GROUP_NAME",plural:"RADIO_BUTTON_GROUP_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/RadioButtonGroup.icon.svg"}},templates:{create:"sap/m/designtime/RadioButtonGroup.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/RangeSlider.designtime", [],function(){"use strict";return{palette:{group:"INPUT"},templates:{create:"sap/m/designtime/RangeSlider.create.fragment.xml"},name:{singular:"RANGESLIDER_NAME",plural:"RANGESLIDER_NAME_PLURAL"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/RatingIndicator.designtime", [],function(){"use strict";return{name:{singular:"RATINGINDICATOR_NAME",plural:"RATINGINDICATOR_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/RatingIndicator.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/RatingIndicator.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ScrollContainer.designtime", [],function(){"use strict";return{palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/ScrollContainer.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},aggregations:{content:{domRef:":sap-domref",actions:{move:"moveControls"}}},name:{singular:"SCROLL_CONTAINER_CONTROL_NAME",plural:"SCROLL_CONTAINER_CONTROL_NAME_PLURAL"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/SearchField.designtime", [],function(){"use strict";return{name:{singular:"SEARCH_FIELD_NAME",plural:"SEARCH_FIELD_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/SearchField.icon.svg"}},templates:{create:"sap/m/designtime/SearchField.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/SegmentedButton.designtime", [],function(){"use strict";return{palette:{group:"ACTION",icons:{svg:"sap/m/designtime/SegmentedButton.icon.svg"}},templates:{create:"sap/m/designtime/SegmentedButton.create.fragment.xml"},aggregations:{items:{ignore:true}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Select.designtime", [],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/Select.icon.svg"}},aggregations:{items:{domRef:":sap-domref",ignore:true},picker:{ignore:true}},templates:{create:"sap/m/designtime/Select.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Slider.designtime", [],function(){"use strict";return{name:{singular:"SLIDER_NAME",plural:"SLIDER_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/Slider.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},aggregations:{scale:{domRef:":sap-domref .sapMSliderTickmarks"},customTooltips:{ignore:true}},templates:{create:"sap/m/designtime/Slider.create.fragment.xml"}}},true);
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/SplitApp.designtime", [],function(){"use strict";return{name:{singular:"SPLIT_APP_NAME",plural:"SPLIT_APP_NAME_PLURAL"},palette:{group:"CONTAINER"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/SplitContainer.designtime", [],function(){"use strict";return{name:{singular:"SPLIT_CONTAINER_NAME",plural:"SPLIT_CONTAINER_NAME_PLURAL"},palette:{group:"CONTAINER"},aggregations:{masterPages:{domRef:":sap-domref > .sapMSplitContainerMaster, :sap-domref > .sapMSplitContainerMobile"},detailPages:{domRef:":sap-domref > .sapMSplitContainerDetail"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/StandardListItem.designtime", [],function(){"use strict";return{actions:{rename:{changeType:"rename",domRef:function(n){return n.$().find(".sapMLIBContent > .sapMSLIDiv > .sapMSLITitleOnly")[0]||n.$().find(".sapMLIBContent > .sapMSLIDiv > .sapMSLITitle")[0]}}},aggregations:{avatar:{ignore:true}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/StepInput.designtime", [],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/StepInput.icon.svg"}},templates:{create:"sap/m/designtime/StepInput.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Switch.designtime", [],function(){"use strict";return{palette:{group:"ACTION",icons:{svg:"sap/m/designtime/Switch.icon.svg"}},templates:{create:"sap/m/designtime/Switch.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/TabContainer.designtime", [],function(){"use strict";return{name:{singular:"TABCONTAINER_NAME",plural:"TABCONTAINER_NAME_PLURAL"},palette:{group:"CONTAINER"},templates:{create:"sap/m/designtime/TabContainer.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Table.designtime", [],function(){"use strict";var e=function(e){var a=!!(e&&e._hasTablePersoController&&e._hasTablePersoController());var n=sap.ui.require("sap/m/p13n/Engine");var r=n&&n.getInstance().isRegistered(e);return a||r};return{name:{singular:"TABLE_NAME",plural:"TABLE_NAME_PLURAL"},palette:{group:"LIST",icons:{svg:"sap/m/designtime/Table.icon.svg"}},aggregations:{columns:{propagateMetadata:function(a){if(a.isA("sap.m.Column")&&e(a.getParent())){return{actions:null}}},childNames:{singular:"COLUMN_NAME",plural:"COLUMN_NAME_PLURAL"},domRef:":sap-domref .sapMListTblHeader",actions:{move:function(a){return e(a.getParent())?null:"moveTableColumns"},add:{delegate:function(a){if(!e(a)){return{changeType:"addTableColumn"}}}}}},items:{domRef:":sap-domref .sapMListItems"},contextMenu:{ignore:true}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Text.designtime", [],function(){"use strict";return{name:{singular:"TEXT_NAME",plural:"TEXT_NAME_PLURAL"},palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/Text.icon.svg"}},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.$()[0]}},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/Text.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/TextArea.designtime", [],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/TextArea.icon.svg"}},templates:{create:"sap/m/designtime/TextArea.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/TimePicker.designtime", [],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/TimePicker.icon.svg"}},templates:{create:"sap/m/designtime/TimePicker.create.fragment.xml"},aggregations:{rules:{ignore:true}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Title.designtime", [],function(){"use strict";return{name:{singular:"TITLE_NAME",plural:"TITLE_NAME_PLURAL"},palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/Title.icon.svg"}},aggregations:{content:{ignore:true}},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){var n=e.$().find("span .sapMLnk");return n.length?n[0]:e.$().find("span")[0]}},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/Title.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/ToggleButton.designtime", [],function(){"use strict";return{palette:{group:"ACTION",icons:{svg:"sap/m/designtime/ToggleButton.icon.svg"}},templates:{create:"sap/m/designtime/ToggleButton.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Toolbar.designtime", [],function(){"use strict";return{aggregations:{content:{domRef:":sap-domref",actions:{move:"moveControls"}}},templates:{create:"sap/m/designtime/Toolbar.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/VBox.designtime", [],function(){"use strict";return{actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}},aggregations:{items:{domRef:":sap-domref",actions:{move:"moveControls"}}},name:{singular:"VBOX_NAME",plural:"VBOX_NAME_PLURAL"},palette:{group:"LAYOUT",icons:{svg:"sap/m/designtime/VBox.icon.svg"}},templates:{create:"sap/m/designtime/VBox.create.fragment.xml"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/VariantManagement.designtime", [],function(){"use strict";return{annotations:{},properties:{supportDefault:{ignore:false},supportFavorites:{ignore:false},supportApplyAutomatically:{ignore:false},supportPublic:{ignore:false},supportContexts:{ignore:false},selectedKey:{ignore:false},defaultKey:{ignore:false},showSaveAs:{ignore:false},creationAllowed:{ignore:false},showFooter:{ignore:false},modified:{ignore:false},popoverTitle:{ignore:false},inErrorState:{ignore:false},level:{ignore:false},titleStyle:{ignore:false},maxWidth:{ignore:false}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/Wizard.designtime", [],function(){"use strict";return{palette:{group:"CONTAINER"},templates:{create:"sap/m/designtime/Wizard.create.fragment.xml"},name:{singular:"WIZARD_NAME",plural:"WIZARD_NAME_PLURAL"}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/library.designtime", [],function(){"use strict";return{}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/semantic/DetailPage.designtime", [],function(){"use strict";return{aggregations:{content:{domRef:":sap-domref > .sapMPage > section"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/semantic/SemanticPage.designtime", [],function(){"use strict";return{aggregations:{content:{domRef:":sap-domref > .sapMPage > section"},landmarkInfo:{ignore:true}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/m/designtime/semantic/ShareMenuPage.designtime", [],function(){"use strict";return{aggregations:{content:{domRef:":sap-domref > .sapMPage > section"}}}});
//# sourceMappingURL=library-preload.designtime.js.map
