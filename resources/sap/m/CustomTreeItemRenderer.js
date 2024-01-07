/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TreeItemBaseRenderer","sap/ui/core/Renderer"],function(e,r){"use strict";var n=r.extend(e);n.apiVersion=2;n.renderLIAttributes=function(r,n){r.class("sapMCTI");e.renderLIAttributes.apply(this,arguments)};n.renderLIContent=function(e,r){r.getContent().forEach(function(r){e.renderControl(r)})};return n},true);
//# sourceMappingURL=CustomTreeItemRenderer.js.map