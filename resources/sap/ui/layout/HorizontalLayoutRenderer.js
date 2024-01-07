/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r={apiVersion:2};r.render=function(r,a){var e=r;var n=!a.getAllowWrapping();e.openStart("div",a);e.class("sapUiHLayout");if(n){e.class("sapUiHLayoutNoWrap")}e.openEnd();var i=a.getContent();for(var t=0;t<i.length;t++){if(n){e.openStart("div");e.class("sapUiHLayoutChildWrapper");e.openEnd()}e.renderControl(i[t]);if(n){e.close("div")}}e.close("div")};return r},true);
//# sourceMappingURL=HorizontalLayoutRenderer.js.map