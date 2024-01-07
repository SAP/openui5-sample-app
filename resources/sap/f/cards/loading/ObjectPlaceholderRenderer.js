/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./PlaceholderBaseRenderer"],function(e,r){"use strict";var n=e.extend(r);n.apiVersion=2;n.CSS_CLASS_PLACEHOLDER="sapFCardContentObjectPlaceholder";n.renderColumn=function(e,r){e.openStart("div").class("sapFCardObjectPlaceholderColumn").openEnd();for(var n=0;n<r;n++){this.renderRow(e,"First",false);this.renderRow(e,"Second",n===r)}e.close("div")};n.renderRow=function(e,r,n){e.openStart("div").class("sapFCardLoadingShimmer").class("sapFCardObjectPlaceholderGroup"+r+"Row");if(n){e.class("sapFCardObjectPlaceholderGroupLastRow")}e.openEnd().close("div")};n.renderContent=function(e,r){for(var n=0;n<e._iColsCnt;n++){this.renderColumn(r,e._iRowsCnt)}};n.addOuterAttributes=function(e,t){r.addOuterAttributes.apply(this,arguments);t.class(n.CSS_CLASS_PLACEHOLDER)};return n},true);
//# sourceMappingURL=ObjectPlaceholderRenderer.js.map