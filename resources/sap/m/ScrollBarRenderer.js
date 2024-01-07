/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/dom/getScrollbarSize"],function(e,n){"use strict";var s={apiVersion:2};s.render=function(n,s){var t="sapMScrollBarTouch",a=s.getContentSize(),o=s.getId(),r=e.support.touch;n.openStart("div",s);n.class("sapMScrollBarOuterDiv");if(r){n.class(t)}n.openEnd();n.openStart("div",o+"-sb");n.class("sapMScrollBarInnerDiv");n.openEnd();n.openStart("div",o+"-sbcnt");n.style("width","0.75rem");n.style("height",a);n.openEnd();n.close("div");n.close("div");n.openStart("div");n.openEnd();n.openStart("span",o+"-ffsize");n.class("sapMScrollBarDistantSpan");n.openEnd();n.close("span");n.close("div");n.close("div")};return s},true);
//# sourceMappingURL=ScrollBarRenderer.js.map