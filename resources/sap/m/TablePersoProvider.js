/*
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject","sap/base/Log"],function(e,t){"use strict";var r=e.extend("sap.m.TablePersoProvider",{constructor:function(t,r){e.apply(this,arguments)},metadata:{deprecated:true,abstract:true,library:"sap.m"}});r.prototype.init=function(){t.warning("This is the abstract base class for a TablePersoProvider. Do not create instances of this class, but use a concrete sub class instead.");t.debug("TablePersoProvider init")};r.prototype.getPersData=function(){t.debug("TablePersoProvider getPersData")};r.prototype.setPersData=function(e){t.debug("TablePersoProvider setPersData")};r.prototype.delPersData=function(){t.debug("TablePersoProvider delPersData")};r.prototype.getCaption=function(e){return null};r.prototype.getGroup=function(e){return null};r.prototype.resetPersData=function(){t.debug("TablePersoProvider resetPersData")};r.prototype.getResetPersData=function(){t.debug("TablePersoProvider getPersData")};return r});
//# sourceMappingURL=TablePersoProvider.js.map