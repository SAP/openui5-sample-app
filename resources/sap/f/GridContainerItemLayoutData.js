/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/LayoutData"],function(t){"use strict";var e=t.extend("sap.f.GridContainerItemLayoutData",{metadata:{library:"sap.f",properties:{columns:{type:"int",group:"Misc",defaultValue:1},minRows:{type:"int",group:"Misc"},rows:{type:"int",group:"Misc"}}}});e.prototype.hasAutoHeight=function(){return!this.getRows()};e.prototype.getActualRows=function(){return Math.max(this.getRows()||1,this.getMinRows()||1)};return e});
//# sourceMappingURL=GridContainerItemLayoutData.js.map