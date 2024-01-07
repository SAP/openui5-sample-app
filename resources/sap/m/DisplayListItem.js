/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","./library","./ListItemBase","./DisplayListItemRenderer"],function(e,t,r,a){"use strict";var i=e.TextDirection;var n=r.extend("sap.m.DisplayListItem",{metadata:{library:"sap.m",properties:{label:{type:"string",group:"Misc",defaultValue:null},value:{type:"string",group:"Data",defaultValue:null},valueTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:i.Inherit}}},renderer:a});n.prototype.getContentAnnouncement=function(){return this.getLabel()+" "+this.getValue()};return n});
//# sourceMappingURL=DisplayListItem.js.map