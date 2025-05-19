/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Renderer","./ListItemBaseRenderer"],function(e,t,n){"use strict";var r=e.TextDirection;var a=t.extend(n);a.apiVersion=2;a.renderLIAttributes=function(e,t){e.class("sapMILI")};a.renderLIContent=function(e,t){e.openStart("div",t.getId()+"-contentWrapper").class("sapMILIContentWrapper");e.class("sapMILIContentWrapper"+t.getContentSize());e.openEnd();this.renderLabel(e,t);this.renderInput(e,t);e.close("div")};a.renderLabel=function(e,t){var n=t.getLabel();if(n){e.openStart("span",t.getId()+"-label");e.class("sapMILILabel");var a=t.getLabelTextDirection();if(a!==r.Inherit){e.attr("dir",a.toLowerCase())}e.openEnd();e.text(n);e.close("span")}};a.renderInput=function(e,t){e.openStart("div").class("sapMILIDiv").class("sapMILI-CTX").openEnd();t.getContent().forEach(function(n){if(n.addAriaLabelledBy){const e=t.getId()+"-label";if(n.getAriaLabelledBy().indexOf(e)===-1){n.addAriaLabelledBy(e)}}e.renderControl(n)});e.close("div")};return a},true);
//# sourceMappingURL=InputListItemRenderer.js.map