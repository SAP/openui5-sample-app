/*!

* OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.

*/
sap.ui.define(["sap/ui/core/library","sap/ui/core/InvisibleText"],function(e,t){"use strict";var r=e.TextDirection;var a={apiVersion:2};a.render=function(e,r){var i=r._getTooltip(r,r.getEditable()&&r.getProperty("editableParent"));var n=r.getAggregation("deleteIcon");var s=[];var o={role:"option"};var d=r.getProperty("posinset");var l=r.getProperty("setsize");e.openStart("div",r).class("sapMToken");this._setAttributes(e,r);if(r.getSelected()){e.class("sapMTokenSelected")}if(d!==undefined){e.attr("aria-posinset",r.getProperty("posinset"))}if(l!==undefined){e.attr("aria-setsize",r.getProperty("setsize"))}if(!r.getEditable()){e.class("sapMTokenReadOnly");o.readonly=null}if(r.getTruncated()){e.class("sapMTokenTruncated")}if(i){e.attr("title",i)}s.push(t.getStaticId("sap.m","TOKEN_ARIA_LABEL"));if(r.getEditable()&&r.getProperty("editableParent")){s.push(t.getStaticId("sap.m","TOKEN_ARIA_DELETABLE"))}e.attr("aria-selected",r.getSelected());o.describedby={value:s.join(" "),append:true};e.accessibilityState(r,o);e.openEnd();a._renderInnerControl(e,r);if(r.getEditable()&&n){e.renderControl(n)}e.close("div")};a._renderInnerControl=function(e,t){var a=t.getTextDirection();e.openStart("span").class("sapMTokenText");if(a!==r.Inherit){e.attr("dir",a.toLowerCase())}e.openEnd();var i=t.getText();if(i){e.text(i)}e.close("span")};a._setAttributes=function(e,t){e.attr("tabindex","-1")};return a},true);
//# sourceMappingURL=TokenRenderer.js.map