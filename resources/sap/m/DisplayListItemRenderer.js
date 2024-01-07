/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Renderer","./ListItemBaseRenderer"],function(e,t,r){"use strict";var a=e.TextDirection;var n=t.extend(r);n.apiVersion=2;n.renderLIAttributes=function(e,t){e.class("sapMDLI")};n.renderLIContent=function(e,t){var r=t.getLabel();if(r){e.openStart("label");e.attr("for",t.getId()+"-value");e.class("sapMDLILabel");e.openEnd();e.text(r);e.close("label")}var n=t.getValue();if(n){e.openStart("div",t.getId()+"-value");e.class("sapMDLIValue");var i=t.getValueTextDirection();if(i!=a.Inherit){e.attr("dir",i.toLowerCase())}e.openEnd();e.text(n);e.close("div")}};return n},true);
//# sourceMappingURL=DisplayListItemRenderer.js.map