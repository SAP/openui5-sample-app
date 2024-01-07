/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element"],function(t){"use strict";var e=t.extend("sap.m.table.columnmenu.Entry",{metadata:{abstract:true,library:"sap.m",properties:{visible:{type:"boolean",defaultValue:true}}}});e.prototype.getMenu=function(){var t=this.getParent();while(t){if(t.isA("sap.m.table.columnmenu.Menu")){return t}t=t.getMenu()}return undefined};e.prototype.getLabel=function(){if(this.getMetadata().hasProperty("label")){return this.getProperty("label")}throw new Error(this+" does not implement #getLabel")};e.prototype.getContent=function(){if(this.getMetadata().hasAggregation("content")){return this.getAggregation("content")}throw new Error(this+" does not implement #getContent")};return e});
//# sourceMappingURL=Entry.js.map