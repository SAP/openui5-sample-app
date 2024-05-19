/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","sap/ui/core/library"],function(t,e){"use strict";var i=e.TextDirection;var r={apiVersion:2};r.render=function(e,r){if(!r.aRBs){return}var a=r.aRBs.filter(function(t){return t.getVisible()});var n=r.getColumns();var s=r.getTextDirection();var o=t.getRTL();e.openStart("div",r).class("sapMRbG");if(n>1){if(n==a.length){e.class("sapMRbG1Row")}else{e.class("sapMRbGTab")}}if(r.getWidth()){e.style("width",r.getWidth())}if(r.getTooltip_AsString()){e.attr("title",r.getTooltip_AsString())}if(!o&&s!=i.Inherit){e.attr("dir",s.toLowerCase())}e.accessibilityState(r,{role:"radiogroup"});e.openEnd();for(var l=0;l<n;l++){if(n>1&&n!=a.length){e.openStart("div").class("sapMRbGCol").openEnd()}for(var c=l;c<a.length;c=c+n){e.renderControl(a[c])}if(n>1&&n!=a.length){e.close("div")}}e.close("div")};return r},true);
//# sourceMappingURL=RadioButtonGroupRenderer.js.map