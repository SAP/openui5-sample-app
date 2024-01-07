/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./SplitContainerRenderer","sap/ui/core/Renderer","sap/m/library"],function(e,r,n){"use strict";var a=n.BackgroundHelper;var t=r.extend(e);t.apiVersion=2;t.renderAttributes=function(e,r){a.addBackgroundColorStyles(e,r.getBackgroundColor(),r.getBackgroundImage())};t.renderBeforeContent=function(e,r){a.renderBackgroundImageTag(e,r,"sapMSplitContainerBG",r.getBackgroundImage(),r.getBackgroundRepeat(),r.getBackgroundOpacity())};return t},true);
//# sourceMappingURL=SplitAppRenderer.js.map