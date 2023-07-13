/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var i,n;e.openStart("div",t);e.attr("tabindex","0");e.class("sapMTile");e.class("sapMPointer");if(t._invisible){e.style("visibility","hidden")}var s=t.getTooltip_AsString();if(s){e.attr("title",s)}if(t.getParent()&&t.getParent().isA("sap.m.TileContainer")){i=t.getParent();n=i._getVisibleTiles();e.accessibilityState(t,{role:"option",posinset:i._indexOfVisibleTile(t,n)+1,setsize:n.length})}e.openEnd();e.openStart("div",t.getId()+"-remove");e.class(t.getRemovable()?"sapMTCRemove":"sapMTCNoRemove");e.openEnd().close("div");e.openStart("div").class("sapMTileContent").openEnd();this._renderContent(e,t);e.close("div").close("div")};e._renderContent=function(e,t){};return e},true);
//# sourceMappingURL=TileRenderer.js.map