/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/f/library"],function(e,t){"use strict";var r=t.cards.HeaderPosition;var n=e.extend("sap.f.CardRenderer",{apiVersion:2});n.render=function(e,t){var n=t.getCardHeader(),a=n&&t.getCardHeaderPosition()===r.Top;e.openStart("div",t);this.renderContainerAttributes(e,t);e.openEnd();if(a){e.renderControl(n)}this.renderContentSection(e,t);if(!a){e.renderControl(n)}this.renderFooterSection(e,t);e.renderControl(t._ariaText);e.renderControl(t._ariaContentText);e.close("div")};n.renderContainerAttributes=function(e,t){var n=t.getHeight(),a=t.getCardHeader(),i=t.getCardContent(),o=!!(a&&a.getVisible()),d=!!i,s=o&&t.getCardHeaderPosition()===r.Bottom,l=t.getTooltip_AsString();e.class("sapFCard").style("width",t.getWidth());if(!o){e.class("sapFCardNoHeader")}if(!d){e.class("sapFCardNoContent")}if(o&&a.isInteractive&&a.isInteractive()||d&&i.isInteractive&&i.isInteractive()){e.class("sapFCardSectionInteractive")}if(s){e.class("sapFCardBottomHeader")}if(n&&n!=="auto"){e.style("height",n)}if(l){e.attr("title",l)}e.accessibilityState(t,{role:"region",labelledby:{value:t._getAriaLabelledIds(),append:true}})};n.renderContentSection=function(e,t){var r=t.getCardContent();if(r){e.openStart("div",t.getId()+"-contentSection").class("sapFCardContent").accessibilityState(t,{role:"group",labelledby:{value:t.getId()+"-ariaContentText",append:true}}).openEnd();e.renderControl(r);e.close("div")}};n.renderFooterSection=function(e,t){};return n});
//# sourceMappingURL=CardRenderer.js.map