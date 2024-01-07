/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){t.openStart("div",e).style("width",e.getWidth()).style("height",e.getHeight());if(e.getVertical()){if(!e.getHorizontal()){t.class("sapMScrollContV")}else{t.class("sapMScrollContVH")}}else{t.class("sapMScrollContH")}t.class("sapMScrollCont");var l=e.getTooltip_AsString();if(l){t.attr("title",l)}if(e.getFocusable()){t.attr("tabindex","0")}t.openEnd();t.openStart("div",e.getId()+"-scroll").class("sapMScrollContScroll").openEnd();var o=e.getContent(),r=o.length;for(var s=0;s<r;s++){t.renderControl(o[s])}t.close("div");t.close("div")};return t},true);
//# sourceMappingURL=ScrollContainerRenderer.js.map