/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./FormLayoutRenderer"],function(e,r){"use strict";var n=e.extend(r);n.apiVersion=2;n.getMainClass=function(){return"sapUiFormResGrid"};n.renderContainers=function(e,r,n){var i=n.getVisibleFormContainers();var t=i.length;if(t>0){if(t>1||!r.getSingleContainerFullSize()){e.renderControl(r._mainGrid)}else if(r.mContainers[i[0].getId()][0]){e.renderControl(r.mContainers[i[0].getId()][0])}else{e.renderControl(r.mContainers[i[0].getId()][1])}}};return n},true);
//# sourceMappingURL=ResponsiveGridLayoutRenderer.js.map