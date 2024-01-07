/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer"],function(e,t){"use strict";var n=t.extend(e);n.apiVersion=2;n.renderLIAttributes=function(e,t){e.class("sapMALI")};n.renderLIContent=function(e,t){var n=t.getText();if(n){e.openStart("div").class("sapMALIText").openEnd();e.text(n);e.close("div")}};return n},true);
//# sourceMappingURL=ActionListItemRenderer.js.map