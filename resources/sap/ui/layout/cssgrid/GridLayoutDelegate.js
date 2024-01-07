/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/core/ResizeHandler"],function(e,i){"use strict";var r=e.extend("sap.ui.layout.cssgrid.GridLayoutDelegate");r.prototype.onBeforeRendering=function(){r.deregisterResizeListener(this)};r.prototype.onAfterRendering=function(){var e=this.getGridLayoutConfiguration();if(!e){return}e.onGridAfterRendering(this);if(e.isResponsive()){e.applyGridLayout(this.getGridDomRefs());r.registerResizeListener(this)}};r.prototype.exit=function(){r.deregisterResizeListener(this)};r.registerResizeListener=function(e){e.__grid__sResizeListenerId=i.register(e,r.onResize.bind(e))};r.deregisterResizeListener=function(e){if(e.__grid__sResizeListenerId){i.deregister(e.__grid__sResizeListenerId);e.__grid__sResizeListenerId=null}};r.onResize=function(e){var i=this.getGridLayoutConfiguration();if(!i){return}i.onGridResize(e);i.applyGridLayout(this.getGridDomRefs())};return r});
//# sourceMappingURL=GridLayoutDelegate.js.map