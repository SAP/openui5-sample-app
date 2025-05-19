/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/dom/getScrollbarSize"],function(e,t){"use strict";var n={apiVersion:2};n.render=function(t,n){var s="sapMScrollBarTouch",a=n.getContentSize(),r=n.getId(),i=e.support.touch;t.openStart("div",n);t.class("sapMScrollBarOuterDiv");if(i){t.class(s)}t.openEnd();t.openStart("div",r+"-sb");t.class("sapMScrollBarInnerDiv");t.attr("tabindex","-1");t.openEnd();t.openStart("div",r+"-sbcnt");t.style("width","0.75rem");t.style("height",a);t.openEnd();t.close("div");t.close("div");t.openStart("div");t.openEnd();t.openStart("span",r+"-ffsize");t.class("sapMScrollBarDistantSpan");t.openEnd();t.close("span");t.close("div");t.close("div")};return n},true);
//# sourceMappingURL=ScrollBarRenderer.js.map