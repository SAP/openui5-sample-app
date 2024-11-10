/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer","sap/m/library","sap/ui/core/library"],function(e,t,i,n){"use strict";var a=n.TextDirection;var s=i.ListType;var r=n.ItemSelectionMode;var o=t.extend(e);o.apiVersion=2;o.renderSeparator=function(e,t){e.openStart("li");e.attr("role","separator");e.class("sapUiMnuDiv");e.openEnd();e.openStart("div");e.class("sapUiMnuDivL");e.openEnd();e.close("div");e.voidStart("hr").voidEnd();e.openStart("div");e.class("sapUiMnuDivR");e.openEnd();e.close("div");e.close("li")};o.renderLIAttributes=function(e,t){e.class("sapMSLI");if(t.getIcon()){e.class("sapMSLIIcon")}if(t.getType()==s.Detail||t.getType()==s.DetailAndActive){e.class("sapMSLIDetail")}if(t._hasSubItems()){e.class("sapMMenuLIHasChildren")}if(!t.getEnabled()){e.class("sapMMLIDisabled")}};o.renderLIContent=function(e,t){var i=t.getTitleTextDirection();if(t.getStartsSection()||t._hasGroupSeparator()){o.renderSeparator(e,t)}e.openStart("div");e.class("sapMMenuLIImgThumbWrapper");e.openEnd();if(t.getIcon()){e.renderControl(t._getImage(t.getId()+"-img","sapMMenuLIImgThumb",t.getIcon(),t.getIconDensityAware()))}e.close("div");e.openStart("div");e.class("sapMSLIDiv");e.class("sapMSLITitleDiv");e.openEnd();if(t._bNoFlex){e.openStart("div");e.class("sapMLIBNoFlex");e.openEnd()}e.openStart("div");e.class("sapMSLITitleOnly");if(i!==a.Inherit){e.attr("dir",i.toLowerCase())}e.openEnd();e.text(t.getTitle());e.close("div");if(t._bNoFlex){e.close("div")}e.close("div");if(t._hasSubItems()){e.renderControl(t._getIconArrowRight())}else if(t._getItemSelectionMode()!==r.None&&t.getProperty("selected")){e.openStart("div",t.getId()+"-sel");e.class("sapMMenuLISel");e.openEnd();e.close("div")}};o.getAccessibilityState=function(t){var i=e.getAccessibilityState(t),n;if(t._getItemSelectionMode()!==r.None&&t.getProperty("selected")){i.checked=true;i.selected=null}switch(t._getItemSelectionMode()){case r.SingleSelect:n="menuitemradio";break;case r.MultiSelect:n="menuitemcheckbox";break;default:n="menuitem"}i.role=n;return i};o.getAriaRole=function(e){};return o},true);
//# sourceMappingURL=MenuListItemRenderer.js.map