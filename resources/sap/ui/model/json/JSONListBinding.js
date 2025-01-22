/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/deepEqual","sap/base/util/deepExtend","sap/base/util/each","sap/base/util/extend","sap/ui/model/ChangeReason","sap/ui/model/ClientListBinding"],function(t,e,s,i,a,h,n){"use strict";var o=n.extend("sap.ui.model.json.JSONListBinding");o.prototype.updateIndices=function(){var t;this.aIndices=[];if(Array.isArray(this.oList)){for(t=0;t<this.oList.length;t++){this.aIndices.push(t)}}else{for(t in this.oList){this.aIndices.push(t)}}};o.prototype.update=function(){var t=this.oModel._getObject(this.sPath,this.oContext);if(t){if(Array.isArray(t)){if(this.bUseExtendedChangeDetection){this.oList=s([],t)}else{this.oList=t.slice(0)}}else{this.oList=this.bUseExtendedChangeDetection?s({},t):a({},t)}this.updateIndices();this.applyFilter();this.applySort();this.iLength=this._getLength()}else{this.oList=[];this.aIndices=[];this.iLength=0}};o.prototype.checkUpdate=function(t){var s;if(this.bSuspended&&!this.bIgnoreSuspend&&!t){return}if(!this.bUseExtendedChangeDetection){s=this.oModel._getObject(this.sPath,this.oContext)||[];if(!e(this.oList,s)||t){this.update();this._fireChange({reason:h.Change})}}else{var a=false;var n=this;s=this.oModel._getObject(this.sPath,this.oContext)||[];if(this.oList.length!=s.length){a=true}if(!e(this.oList,s)){this.update()}var o=this._getContexts(this.iLastStartIndex,this.iLastLength);if(this.aLastContexts){if(this.aLastContexts.length!=o.length){a=true}else{i(this.aLastContextData,function(t,e){var s=n.getContextData(o[t]);if(s!==e){a=true;return false}return true})}}else{a=true}if(a||t){this._fireChange({reason:h.Change})}}};return o});
//# sourceMappingURL=JSONListBinding.js.map