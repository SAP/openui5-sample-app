/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/routing/Targets","./TargetHandler","./Target","./async/Targets"],function(t,e,r,n){"use strict";var a=t.extend("sap.f.routing.Targets",{constructor:function(r){r.config._async=true;if(r.targetHandler){this._oTargetHandler=r.targetHandler}else{this._oTargetHandler=new e;this._bHasOwnTargetHandler=true}t.prototype.constructor.apply(this,arguments);var a=n;this._super={};for(var s in a){this._super[s]=this[s];this[s]=a[s]}},destroy:function(){t.prototype.destroy.apply(this,arguments);if(this._bHasOwnTargetHandler){this._oTargetHandler.destroy()}this._oTargetHandler=null},getTargetHandler:function(){return this._oTargetHandler},_constructTarget:function(t,e){return new r(t,this.getViews(),e,this._oTargetHandler)},_getLevel:function(t){var e;do{e=t._oOptions.hasOwnProperty("level")?t._oOptions.level:t._oOptions.viewLevel;if(e!==undefined){return e}t=t._oParent}while(t);return e}});return a});
//# sourceMappingURL=Targets.js.map