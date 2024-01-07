/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TileRenderer","sap/ui/core/Renderer"],function(e,t){"use strict";var i=t.extend(e);i.apiVersion=2;i.render=function(e,t){var i,n;e.openStart("div",t).attr("tabindex","0");e.class("sapMCustomTile");if(t._invisible){e.style("visibility","hidden")}if(t.getParent()&&t.getParent().isA("sap.m.TileContainer")){i=t.getParent();n=i._getVisibleTiles();e.accessibilityState(t,{role:"option",posinset:i._indexOfVisibleTile(t,n)+1,setsize:n.length})}e.openEnd();e.openStart("div",t.getId()+"-remove").class("sapMTCRemove").openEnd().close("div");e.openStart("div").class("sapMCustomTileContent").openEnd();this._renderContent(e,t);e.close("div").close("div")};i._renderContent=function(e,t){e.renderControl(t.getContent())};return i},true);
//# sourceMappingURL=CustomTileRenderer.js.map