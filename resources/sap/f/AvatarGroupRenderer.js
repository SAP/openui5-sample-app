/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/AvatarSize"],function(t){"use strict";var e={apiVersion:2};e.render=function(e,r){var o="sapFAvatarGroup",a=r.getGroupType(),i=r.getAvatarDisplaySize(),s=r.getAvatarCustomDisplaySize(),n=r.getAvatarCustomFontSize(),u=o+a,l=r.getItems(),p=r._shouldShowMoreButton(),v=r.getProperty("_interactive");e.openStart("div",r).class(o).class(u).class(o+i);if(p){e.class("sapFAvatarGroupShowMore")}if(!v){e.class("sapFAvatarGroupNonInteractive")}if(r._bAutoWidth){e.style("width","auto")}if(a==="Group"){e.attr("role","button")}if(i===t.Custom){e.style("height",s);e.style("min-width",s);e.style("font-size",n);e.style("line-height",s)}e.openEnd();for(var h=0;h<r._iAvatarsToShow;h++){e.renderControl(l[h])}if(p){e.renderControl(r._oShowMoreButton)}e.close("div")};return e},true);
//# sourceMappingURL=AvatarGroupRenderer.js.map