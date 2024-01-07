/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var i=t._getProductSwitch(),n={role:"menuitemradio"},s=t.getTooltip_AsString();if(i){n.setsize=i._getItemsCount();n.posinset=i._getItemPosition(t);n.checked=t.getId()===i.getSelectedItem()?"true":undefined}e.openStart("div",t);e.class("sapFPSItemContainer");if(s){e.attr("title",s)}e.accessibilityState(t,n);e.openEnd();e.openStart("span");e.class("sapFPSItemIconPlaceholder");e.class("sapUiTinyMarginBottom");e.openEnd();if(t.getSrc()){e.renderControl(t._getIcon())}e.close("span");e.openStart("div");e.class("sapFPSItemTextSection");e.openEnd();if(t.getTitle()){e.renderControl(t._getTitle())}if(t.getSubTitle()){e.openStart("div");e.class("sapFPSItemSubTitle");e.class("sapFPSItemTitle");e.openEnd();e.text(t.getSubTitle());e.close("div")}e.close("div");e.close("div")};return e},true);
//# sourceMappingURL=ProductSwitchItemRenderer.js.map