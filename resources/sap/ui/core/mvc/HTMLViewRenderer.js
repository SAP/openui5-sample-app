/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ViewRenderer"],function(e){"use strict";var r={apiVersion:1};r.render=function(i,t){i.openStart("div",t);i.class("sapUiView");i.class("sapUiHTMLView");e.addDisplayClass(i,t);i.style("width",t.getWidth());i.style("height",t.getHeight());i.openEnd();if(t._oTemplate){var a=t._oTemplate.innerHTML;var n=t.getContent();var s=[];var l=function(e){var t=r._getHTML(i,e,a);if(t){a=t}else{s.push(e)}};if(n){if(Array.isArray(n)){for(var d=0;d<n.length;d++){l(n[d])}}else if(n){l(n)}}i.unsafeHtml(a);for(var v=0;v<s.length;v++){i.renderControl(s[v])}}i.close("div")};r._getHTML=function(e,r,i){var t=r.getId();i=i.replace(/(<div)/gi,"\n$1");var a=new RegExp('<div.*?data-sap-ui-id="'+t+'".*?></div>',"gi");var n=a.exec(i);if(n){i=i.replace(n[0],e.getHTML(r));return i}else{return""}};return r},true);
//# sourceMappingURL=HTMLViewRenderer.js.map