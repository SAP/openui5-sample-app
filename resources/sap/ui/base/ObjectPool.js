/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Object"],function(t){"use strict";var e=t.extend("sap.ui.base.ObjectPool",{constructor:function(e){t.call(this);this.oObjectClass=e;this.aFreeObjects=[]}});e.prototype.borrowObject=function(){var t=this.aFreeObjects.length==0?new this.oObjectClass:this.aFreeObjects.pop();t.init.apply(t,arguments);return t};e.prototype.returnObject=function(t){t.reset();this.aFreeObjects.push(t)};return e});
//# sourceMappingURL=ObjectPool.js.map