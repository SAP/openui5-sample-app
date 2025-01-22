/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/AvatarSize","./library"],function(t,e){"use strict";var r={apiVersion:2};r.render=function(r,o){var a="sapFAvatarGroup",i=o.getGroupType(),s=o.getAvatarDisplaySize(),n=o.getAvatarCustomDisplaySize(),p=o.getAvatarCustomFontSize(),u=a+i,l=o.getItems(),v=o._shouldShowMoreButton(),f=o.getProperty("_interactive"),h=o.getTooltip_AsString();r.openStart("div",o).class(a).class(u).class(a+s);if(v){r.class("sapFAvatarGroupShowMore")}if(!f){r.class("sapFAvatarGroupNonInteractive")}if(o._bAutoWidth){r.style("width","auto")}if(i===e.AvatarGroupType.Group){r.attr("role","button")}if(s===t.Custom){r.style("height",n);r.style("min-width",n);r.style("font-size",p);r.style("line-height",n)}if(h&&i===e.AvatarGroupType.Group){r.attr("title",h)}r.openEnd();for(var y=0;y<o._iAvatarsToShow;y++){r.renderControl(l[y])}if(v){r.renderControl(o._oShowMoreButton)}r.close("div")};return r},true);
//# sourceMappingURL=AvatarGroupRenderer.js.map