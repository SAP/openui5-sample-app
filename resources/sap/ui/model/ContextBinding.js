/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Binding"],function(t){"use strict";var n=t.extend("sap.ui.model.ContextBinding",{constructor:function(n,e,o,i,u){t.call(this,n,e,o,i,u);this.oElementContext=null;this.bInitial=true},metadata:{publicMethods:["getBoundContext"]}});n.prototype.checkUpdate=function(t){};n.prototype.getBoundContext=function(){return this.oElementContext};return n});
//# sourceMappingURL=ContextBinding.js.map