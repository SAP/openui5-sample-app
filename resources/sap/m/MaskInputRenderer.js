/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/ui/core/Renderer","./InputBaseRenderer"],function(e,t,n){"use strict";var r=t.extend(n);r.apiVersion=2;r.getAccessibilityState=function(t){var r=e.getResourceBundleFor("sap.m"),i=r.getText("MASKINPUT_ROLE_DESCRIPTION"),a=n.getAccessibilityState.apply(this,arguments);a["roledescription"]=i;return a};r.getLabelledByAnnouncement=function(e){var t=e.getMask();if(t&&t.length){return e.getPlaceholder()||""}return n.getLabelledByAnnouncement.apply(this,arguments)};return r},true);
//# sourceMappingURL=MaskInputRenderer.js.map