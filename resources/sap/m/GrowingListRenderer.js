/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListRenderer","sap/ui/core/Renderer","sap/base/Log"],function(e,i,r){"use strict";var n=i.extend(e);n.apiVersion=2;n.render=function(i,n){if(n._isIncompatible()){r.warning("Does not render sap.m.GrowingList#"+n.getId()+" when compatibility version is 1.16 or higher. Instead use sap.m.List/Table control with growing feature!")}else{e.render.call(this,i,n)}};return n},true);
//# sourceMappingURL=GrowingListRenderer.js.map