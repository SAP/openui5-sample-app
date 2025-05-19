/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./StandardListItemRenderer","sap/ui/core/Renderer"],function(e,i){"use strict";var t=i.extend(e);t.apiVersion=2;t.renderTitle=function(i,t){if(t.getActiveTitle()){i.renderControl(t.getLink());i.renderControl(t.getLinkAriaDescribedBy())}else{e.renderTitle.apply(this,arguments)}};t.renderTitleWrapper=function(e,i){var t=i.getTitle(),r=i.getDescription(),n=i.getInfo(),s=i.getWrapping(),l=i.getActiveTitle(),d=!t&&n;e.openStart("div");if(!d&&r){e.class("sapMSLITitle")}else{e.class("sapMSLITitleOnly")}e.openEnd();if(s&&!l){this.renderWrapping(e,i,"title");if(n&&!r){this.renderInfo(e,i)}}else{this.renderTitle(e,i)}e.close("div");if(n&&!r&&!s&&!d){this.renderInfo(e,i)}};return t},true);
//# sourceMappingURL=MessageListItemRenderer.js.map