/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./InputBaseRenderer"],function(e,t){"use strict";var n=e.extend(t);n.apiVersion=2;n.getAccessibilityState=function(e){var n=sap.ui.getCore().getLibraryResourceBundle("sap.m"),r=n.getText("MASKINPUT_ROLE_DESCRIPTION"),i=t.getAccessibilityState.apply(this,arguments);i["roledescription"]=r;return i};n.getLabelledByAnnouncement=function(e){var n=e.getMask();if(n&&n.length){return e.getPlaceholder()||""}return t.getLabelledByAnnouncement.apply(this,arguments)};return n},true);
//# sourceMappingURL=MaskInputRenderer.js.map