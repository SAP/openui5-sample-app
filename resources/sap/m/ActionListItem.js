/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBase","./library","./ActionListItemRenderer"],function(t,e,n){"use strict";var r=e.ListMode;var i=e.ListType;var o=t.extend("sap.m.ActionListItem",{metadata:{library:"sap.m",properties:{text:{type:"string",group:"Misc",defaultValue:null}}},renderer:n});o.prototype.init=function(){this.setType(i.Active);t.prototype.init.apply(this,arguments)};o.prototype.getMode=function(){return r.None};o.prototype.onsapspace=o.prototype.onsapenter;o.prototype.getContentAnnouncement=function(){return this.getText()};return o});
//# sourceMappingURL=ActionListItem.js.map