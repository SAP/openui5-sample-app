/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/LayoutData"],function(t,e){"use strict";var a=e.extend("sap.m.ToolbarLayoutData",{metadata:{library:"sap.m",properties:{shrinkable:{type:"boolean",group:"Behavior",defaultValue:false},minWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},maxWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}}}});a.prototype.getParentStyle=function(){var t=this.getParent();if(!t||!t.getDomRef){return{}}var e=t.getDomRef();return e?e.style:{}};a.prototype.applyProperties=function(){var t=this.getParentStyle();t.minWidth=this.getMinWidth();t.maxWidth=this.getMaxWidth();return this};return a});
//# sourceMappingURL=ToolbarLayoutData.js.map