/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item","sap/ui/core/IconPool"],function(t,e){"use strict";var i=e.extend("sap.m.ViewSettingsCustomTab",{metadata:{library:"sap.m",properties:{icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:"sap-icon://competitor"},title:{type:"string",defaultValue:""}},aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});i.prototype.init=function(){this._aTabContents=[]};i.prototype.exit=function(){this._aTabContents.forEach(function(t,e){t.destroy();delete this._aTabContents[e]},this)};return i});
//# sourceMappingURL=ViewSettingsCustomTab.js.map