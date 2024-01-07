/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Model"],function(t){"use strict";var n=t.extend("sap.ui.model.MetaModel",{constructor:function(){t.apply(this,arguments)}});n.prototype.createBindingContext=function(t,n,e,i){if(typeof n=="function"){i=n;n=null}if(typeof e=="function"){i=e;e=null}var o=this.resolve(t,n),u=o==undefined?undefined:this.getContext(o?o:"/");if(!u){u=null}if(i){i(u)}return u};n.prototype.destroyBindingContext=function(){};return n});
//# sourceMappingURL=MetaModel.js.map