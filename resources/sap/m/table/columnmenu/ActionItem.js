/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/ItemBase"],function(e){"use strict";var t=e.extend("sap.m.table.columnmenu.ActionItem",{metadata:{library:"sap.m",properties:{label:{type:"string"},icon:{type:"sap.ui.core.URI"}},events:{press:{allowPreventDefault:true}}}});t.prototype.onPress=function(e){e.preventDefault();if(this.firePress()){this.getMenu().close()}};t.prototype.getContent=function(){return null};return t});
//# sourceMappingURL=ActionItem.js.map