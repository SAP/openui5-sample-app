/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Core"],function(t,e){"use strict";var i=t.TextDirection;var r={apiVersion:2};r.render=function(t,r){if(!r.aRBs){return}var a=r.aRBs.filter(function(t){return t.getVisible()});var n=r.getColumns();var o=r.getTextDirection();var s=e.getConfiguration().getRTL();t.openStart("div",r).class("sapMRbG");if(n>1){if(n==a.length){t.class("sapMRbG1Row")}else{t.class("sapMRbGTab")}}if(r.getWidth()){t.style("width",r.getWidth())}if(r.getTooltip_AsString()){t.attr("title",r.getTooltip_AsString())}if(!s&&o!=i.Inherit){t.attr("dir",o.toLowerCase())}t.accessibilityState(r,{role:"radiogroup"});t.openEnd();for(var l=0;l<n;l++){if(n>1&&n!=a.length){t.openStart("div").class("sapMRbGCol").openEnd()}for(var c=l;c<a.length;c=c+n){t.renderControl(a[c])}if(n>1&&n!=a.length){t.close("div")}}if(n>1&&n!=a.length){t.openStart("div").class("sapMRbGDummy").openEnd().close("div")}t.close("div")};return r},true);
//# sourceMappingURL=RadioButtonGroupRenderer.js.map