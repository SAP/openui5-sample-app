/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item"],function(e,t){"use strict";var r=t.extend("sap.m.ViewSettingsItem",{metadata:{library:"sap.m",properties:{selected:{type:"boolean",group:"Behavior",defaultValue:false},wrapping:{type:"boolean",group:"Behavior",defaultValue:false}},events:{itemPropertyChanged:{parameters:{changedItem:{type:"sap.m.ViewSettingsItem"},propertyKey:{type:"string"},propertyValue:{type:"any"}}}}}});r.prototype.setSelected=function(e){this.setProperty("selected",e,true);return this};r.prototype.setProperty=function(e,r,p,a){t.prototype.setProperty.apply(this,arguments);a=a===undefined?true:a;if(a){this.fireItemPropertyChanged({changedItem:this,propertyKey:e,propertyValue:r})}};return r});
//# sourceMappingURL=ViewSettingsItem.js.map