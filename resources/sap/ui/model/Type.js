/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object"],function(t){"use strict";var e=t.extend("sap.ui.model.Type",{constructor:function(){t.apply(this,arguments);this.sName="Type"},metadata:{abstract:true}});e.prototype.getInterface=function(){return this};e.prototype.getName=function(){return this.sName};e.prototype.toString=function(){return"Type "+this.getMetadata().getName()};return e});
//# sourceMappingURL=Type.js.map