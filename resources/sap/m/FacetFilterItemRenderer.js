/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer"],function(e,t){"use strict";var r=t.extend(e);r.apiVersion=2;r.renderLIContent=function(e,t){e.openStart("div",t);if(t.getParent()&&t.getParent().getWordWrap()){e.class("sapMFFLITitleWrap")}else{e.class("sapMFFLITitle")}e.openEnd();e.text(t.getText());e.close("div")};return r},true);
//# sourceMappingURL=FacetFilterItemRenderer.js.map