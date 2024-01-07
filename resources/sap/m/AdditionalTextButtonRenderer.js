/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ButtonRenderer","sap/ui/core/Renderer","sap/ui/core/library","sap/ui/core/AccessKeysEnablement"],function(t,e,n,i){"use strict";var o=n.TextDirection;var r=e.extend(t);r.apiVersion=2;r.writeButtonText=function(t,e,n,r){t.openStart("span",e.getId()+"-content");t.class("sapMBtnContent");if(n!==o.Inherit){t.attr("dir",n.toLowerCase())}if(e.getProperty("highlightAccKeysRef")){t.class(i.CSS_CLASS)}t.openEnd();if(r){t.openStart("bdi",e.getId()+"-BDI-content");t.openEnd()}t.text(e.getText());if(r){t.close("bdi")}if(e.getAdditionalText()){var a=r?"bdi":"span";t.openStart(a,e.getId()+"-additionalText-BDI-content");t.class("sapMBtnContentAddText");t.openEnd();t.text(e.getAdditionalText());t.close(a)}t.close("span")};r.renderButtonAttributes=function(t){t.class("sapMBtnAdditionalTextContent")};return r},true);
//# sourceMappingURL=AdditionalTextButtonRenderer.js.map