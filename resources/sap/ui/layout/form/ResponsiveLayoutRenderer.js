/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./FormLayoutRenderer"],function(e,r){"use strict";var n=e.extend(r);n.apiVersion=2;n.getMainClass=function(){return"sapUiFormResLayout"};n.renderContainers=function(e,r,n){var t=n.getVisibleFormContainers();var i=t.length;if(i>0){if(i>1){e.renderControl(r._mainRFLayout)}else if(r.mContainers[t[0].getId()][0]){e.renderControl(r.mContainers[t[0].getId()][0])}else{e.renderControl(r.mContainers[t[0].getId()][1])}}};return n},true);
//# sourceMappingURL=ResponsiveLayoutRenderer.js.map