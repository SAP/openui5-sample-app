/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./PlaceholderBaseRenderer"],function(e,a){"use strict";var r=e.extend(a);r.apiVersion=2;r.CSS_CLASS_PLACEHOLDER="sapFCardContentTablePlaceholder";r.renderContent=function(e,a){var r=e.getMinItems(),t=e.getColumns();for(var s=0;s<r+1;s++){a.openStart("div").class("sapFCardTablePlaceholderItem").style("height",e.getItemHeight()).openEnd();a.openStart("div").class("sapFCardTablePlaceholderRows").openEnd();if(t>1){for(var n=0;n<t;n++){a.openStart("div").class("sapFCardTablePlaceholderColumns").class("sapFCardLoadingShimmer").openEnd();a.close("div")}}a.close("div");a.close("div")}};r.addOuterAttributes=function(e,t){a.addOuterAttributes.apply(this,arguments);t.class(r.CSS_CLASS_PLACEHOLDER)};return r},true);
//# sourceMappingURL=TablePlaceholderRenderer.js.map