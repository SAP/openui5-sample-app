/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/base/util/ObjectPath","sap/ui/core/UIArea","sap/ui/dom/jquery/control"],function(jQuery,t,e){"use strict";function i(t){return t.getUIArea().getInterface()}function r(){return e.registry.get(this.id)!=null}function n(){return e.registry.get(this.id).getInterface()}jQuery.fn.root=function(t){if(t){sap.ui.getCore().setRoot(this.get(0),t);return this}var r=this.control();if(r.length>0){return r.map(i)}var n=this.uiarea();if(n.length>0){return n}this.each(function(){e.create(this)});return this};jQuery.fn.uiarea=function(t){var e=this.slice("[id]").filter(r).map(n).get();return typeof t==="number"?e[t]:e};jQuery.fn.sapui=function(e,i,r){return this.each(function(){var n=null;if(this){if(e.indexOf(".")==-1){e="sap.ui.commons."+e}var s=t.get(e);if(s){if(typeof r=="object"&&typeof r.press=="function"){r.press=jQuery.proxy(r.press,this)}n=new s(i,r);n.placeAt(this)}}})};return jQuery});
//# sourceMappingURL=jquery.sap.ui.js.map