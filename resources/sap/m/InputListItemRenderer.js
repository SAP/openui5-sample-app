/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Renderer","./ListItemBaseRenderer"],function(e,a,r){"use strict";var t=e.TextDirection;var n=a.extend(r);n.apiVersion=2;n.renderLIAttributes=function(e,a){e.class("sapMILI")};n.renderLIContent=function(e,a){var r=a.getLabel();var n=a.getId()+"-label";if(r){e.openStart("span",n);e.class("sapMILILabel");var i=a.getLabelTextDirection();if(i!==t.Inherit){e.attr("dir",i.toLowerCase())}e.openEnd();e.text(r);e.close("span")}e.openStart("div").class("sapMILIDiv").class("sapMILI-CTX").openEnd();a.getContent().forEach(function(a){if(a.addAriaLabelledBy&&a.getAriaLabelledBy().indexOf(n)===-1){a.addAriaLabelledBy(n)}e.renderControl(a)});e.close("div")};return n},true);
//# sourceMappingURL=InputListItemRenderer.js.map