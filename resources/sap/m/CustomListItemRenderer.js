/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer"],function(e,n){"use strict";var r=n.extend(e);r.apiVersion=2;r.renderLIAttributes=function(e,n){e.class("sapMCLI")};r.renderLIContent=function(e,n){n.getContent().forEach(e.renderControl,e)};return r},true);
//# sourceMappingURL=CustomListItemRenderer.js.map