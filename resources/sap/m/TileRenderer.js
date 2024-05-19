/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,i){var n=e.getResourceBundleFor("sap.m"),s,o;t.openStart("div",i);t.attr("tabindex","0");t.class("sapMTile");t.class("sapMPointer");if(i._invisible){t.style("visibility","hidden")}var r=i.getTooltip_AsString();if(r){t.attr("title",r)}if(i.getParent()&&i.getParent().isA("sap.m.TileContainer")){s=i.getParent();o=s._getVisibleTiles();t.accessibilityState(i,{role:"option",roledescription:n.getText("GENERIC_TILE_ROLE_DESCRIPTION"),posinset:s._indexOfVisibleTile(i,o)+1,setsize:o.length})}t.openEnd();t.openStart("div",i.getId()+"-remove");t.class(i.getRemovable()?"sapMTCRemove":"sapMTCNoRemove");t.attr("title",n.getText("GENERICTILE_REMOVEBUTTON_TEXT"));t.openEnd().close("div");t.openStart("div").class("sapMTileContent").openEnd();this._renderContent(t,i);t.close("div").close("div")};t._renderContent=function(e,t){};return t},true);
//# sourceMappingURL=TileRenderer.js.map