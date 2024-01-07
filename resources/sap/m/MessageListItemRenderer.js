/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./StandardListItemRenderer","sap/ui/core/Renderer"],function(e,r){"use strict";var t=r.extend(e);t.apiVersion=2;t.renderTitle=function(r,t){if(t.getActiveTitle()){r.renderControl(t.getLink());r.renderControl(t.getLinkAriaDescribedBy())}else{e.renderTitle.apply(this,arguments)}};return t},true);
//# sourceMappingURL=MessageListItemRenderer.js.map