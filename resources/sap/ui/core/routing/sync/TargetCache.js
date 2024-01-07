/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/mvc/View"],function(e){"use strict";return{_getObjectWithGlobalId:function(i){function t(){i.viewName=i.name;delete i.name;return e._create(i)}var n,o=i.name,a;this._checkName(o,"View");a=this._oCache.view[o];n=a&&a[i.id];if(n){return n}if(this._oComponent){n=this._oComponent.runAsOwner(t)}else{n=t()}a=this._oCache.view[o];if(!a){a=this._oCache.view[o]={};a[undefined]=n}if(i.id!==undefined){a[i.id]=n}this.fireCreated({object:n,type:"View",options:i});return n},_getViewWithGlobalId:function(e){if(e&&!e.name){e.name=e.viewName}return this._getObjectWithGlobalId(e)}}});
//# sourceMappingURL=TargetCache.js.map