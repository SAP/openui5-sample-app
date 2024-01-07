/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item","sap/ui/thirdparty/jquery"],function(e,t,jQuery){"use strict";var i=t.extend("sap.m.VisibleItem",{metadata:{library:"sap.m",properties:{visible:{type:"boolean",group:"Behavior",defaultValue:true}}}});i.prototype._getRefs=function(){var e=this.getParent(),t,i=this;if(e&&e.$("content")){t=e.$("content").find("li").filter(function(){return jQuery(this).html()===i.getText()})}return t};i.prototype.setVisible=function(e){if(this.getVisible()===e){return this}var t=this._getRefs();if(t){if(e){t.removeClass("TPSliderItemHidden")}else{t.addClass("TPSliderItemHidden")}}return this.setProperty("visible",e,true)};return i});
//# sourceMappingURL=VisibleItem.js.map