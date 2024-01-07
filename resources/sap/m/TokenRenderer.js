/*!

* OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.

*/
sap.ui.define(["sap/ui/core/library","sap/ui/core/InvisibleText"],function(e,t){"use strict";var r=e.TextDirection;var i={apiVersion:2};i.render=function(e,r){var a=r._getTooltip(r,r.getEditable()&&r.getProperty("editableParent"));var n=r.getAggregation("deleteIcon");var s=[];var o={role:"option"};var d=r.getProperty("posinset");var p=r.getProperty("setsize");e.openStart("div",r).class("sapMToken");this._setAttributes(e,r);if(r.getSelected()){e.class("sapMTokenSelected")}if(d!==undefined){e.attr("aria-posinset",r.getProperty("posinset"))}if(p!==undefined){e.attr("aria-setsize",r.getProperty("setsize"))}if(!r.getEditable()){e.class("sapMTokenReadOnly")}if(r.getTruncated()){e.class("sapMTokenTruncated")}if(a){e.attr("title",a)}s.push(t.getStaticId("sap.m","TOKEN_ARIA_LABEL"));if(r.getEditable()&&r.getProperty("editableParent")){s.push(t.getStaticId("sap.m","TOKEN_ARIA_DELETABLE"))}e.attr("aria-selected",r.getSelected());o.describedby={value:s.join(" "),append:true};e.accessibilityState(r,o);e.openEnd();i._renderInnerControl(e,r);if(r.getEditable()&&n){e.renderControl(n)}e.close("div")};i._renderInnerControl=function(e,t){var i=t.getTextDirection();e.openStart("span").class("sapMTokenText");if(i!==r.Inherit){e.attr("dir",i.toLowerCase())}e.openEnd();var a=t.getText();if(a){e.text(a)}e.close("span")};i._setAttributes=function(e,t){e.attr("tabindex","-1")};return i},true);
//# sourceMappingURL=TokenRenderer.js.map