/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/ClientTreeBinding","sap/base/util/each"],function(e,t){"use strict";var i=e.extend("sap.ui.model.xml.XMLTreeBinding");i.prototype.getNodeContexts=function(e,i,n){if(!i){i=0}if(!n){n=this.oModel.iSizeLimit}var o=e.getPath();if(!o.endsWith("/")){o=o+"/"}if(!o.startsWith("/")){o="/"+o}var s=[],d={},a=this,l=this.oModel._getObject(e.getPath()),r,f;t(l[0].childNodes,function(e,t){if(t.nodeType==1){if(d[t.nodeName]==undefined){d[t.nodeName]=0}else{d[t.nodeName]++}r=o+t.nodeName+"/"+d[t.nodeName];f=a.oModel.getContext(r);if(a.oCombinedFilter&&!a.bIsFiltering){if(a.filterInfo.aFilteredContexts&&a.filterInfo.aFilteredContexts.indexOf(f)!=-1){s.push(f)}}else{s.push(f)}}});this._applySorter(s);this._setLengthCache(o,s.length);return s.slice(i,i+n)};return i});
//# sourceMappingURL=XMLTreeBinding.js.map