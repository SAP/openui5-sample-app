/*!
* OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["./library","sap/m/TileContent","sap/m/ActionTileContentRenderer"],function(t,e,r){"use strict";var i=t.Priority;var n=e.extend("sap.m.ActionTileContent",{metadata:{library:"sap.m",aggregations:{attributes:{type:"sap.m.CustomAttribute",multiple:true,singularName:"attribute"}}},renderer:{apiVersion:2,render:function(t,e){r.render(t,e)}}});n.prototype.getAltText=function(){var t="";var e=this.getPriorityText();var r=this.getAggregation("attributes");if(this.getPriority()!==i.None&&e){t+=e+"\n"}for(var n=0;n<r.length&&n<4;n++){t+=r[n].getLabel()+"\n"+r[n].getValue()+"\n"}return t.trim()};return n});
//# sourceMappingURL=ActionTileContent.js.map