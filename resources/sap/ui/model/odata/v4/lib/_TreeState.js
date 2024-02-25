/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_Helper"],function(e){"use strict";class s{oExpandLevels=new Map;constructor(e){this.sNodeProperty=e}collapse(s){if(!this.sNodeProperty){return}const t=e.drillDown(s,this.sNodeProperty);const o=this.oExpandLevels.get(t);if(o&&o.Levels){this.oExpandLevels.delete(t)}else{this.oExpandLevels.set(t,{NodeID:t,Levels:0})}}delete(s){if(!this.sNodeProperty){return}const t=e.drillDown(s,this.sNodeProperty);this.oExpandLevels.delete(t)}expand(s){if(!this.sNodeProperty){return}const t=e.drillDown(s,this.sNodeProperty);const o=this.oExpandLevels.get(t);if(o&&!o.Levels){this.oExpandLevels.delete(t)}else{this.oExpandLevels.set(t,{NodeID:t,Levels:1})}}getExpandLevels(){const e=[...this.oExpandLevels.values()];return e.length?JSON.stringify(e):undefined}reset(){this.oExpandLevels.clear()}}return s});
//# sourceMappingURL=_TreeState.js.map