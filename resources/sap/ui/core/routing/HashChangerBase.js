/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/EventProvider"],function(e){"use strict";var a=e.extend("sap.ui.core.routing.HashChangerBase",{metadata:{abstract:true,publicMethods:["getHash","setHash","replaceHash"]},constructor:function(){e.apply(this)}});a.M_EVENTS={HashChanged:"hashChanged",HashSet:"hashSet",HashReplaced:"hashReplaced"};a.prototype.setHash=function(e){this.fireEvent("hashSet",{sHash:e,hash:e})};a.prototype.replaceHash=function(e,a){this.fireEvent("hashReplaced",{sHash:e,hash:e,direction:a})};return a});
//# sourceMappingURL=HashChangerBase.js.map