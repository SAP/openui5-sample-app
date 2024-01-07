/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var s=t.getSubheader();var a=t.getValue();var r=t.getTooltip_AsString();if(typeof r!=="string"){r=""}e.openStart("div",t);e.attr("role","presentation");e.attr("aria-label",r);e.class("sapMFC");if(t.hasListeners("press")){e.attr("tabindex","0");e.class("sapMPointer")}e.openEnd();if(a){e.openStart("div",t.getId()+"-value");e.class("sapMFCValue");e.class(t.getValueColor());e.openEnd();var n=t.getTruncateValueTo();if(a.length>=n&&(a[n-1]==="."||a[n-1]===",")){e.text(a.substring(0,n-1))}else if(a){e.text(a.substring(0,n))}else{e.text("")}e.close("div")}e.openStart("div");e.class("sapMFCCTxt");e.openEnd();e.renderControl(t._oContentText);e.close("div");e.openStart("div",t.getId()+"-subheader");e.class("sapMFCSbh");e.openEnd();e.text(s);e.close("div");e.close("div")};return e},true);
//# sourceMappingURL=FeedContentRenderer.js.map