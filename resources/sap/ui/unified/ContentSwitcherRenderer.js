/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/unified/library","sap/base/security/encodeXML","sap/ui/core/Configuration"],function(t,e,i){"use strict";var n=t.ContentSwitcherAnimation;var r={};r.render=function(t,r){var o=r.getId();var a=r.getAnimation();if(i.getAnimationMode()===i.AnimationMode.none){a=n.None}var s=r.getActiveContent();t.write("<div");t.writeControlData(r);t.addClass("sapUiUfdCSwitcher");t.addClass("sapUiUfdCSwitcherAnimation"+e(a));t.writeClasses();t.write(">");t.write('<section id="'+o+'-content1" class="sapUiUfdCSwitcherContent sapUiUfdCSwitcherContent1'+(s==1?" sapUiUfdCSwitcherVisible":"")+'">');this.renderContent(t,r.getContent1());t.write("</section>");t.write('<section id="'+o+'-content2" class="sapUiUfdCSwitcherContent sapUiUfdCSwitcherContent2'+(s==2?" sapUiUfdCSwitcherVisible":"")+'">');this.renderContent(t,r.getContent2());t.write("</section>");t.write("</div>")};r.renderContent=function(t,e){for(var i=0;i<e.length;++i){t.renderControl(e[i])}};return r},true);
//# sourceMappingURL=ContentSwitcherRenderer.js.map