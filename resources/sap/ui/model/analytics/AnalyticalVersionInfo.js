/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(a){"use strict";var e={NONE:null,V1:1,V2:2,getVersion:function(e){var t;var i;if(e&&e.getMetadata){i=e.getMetadata().getName()}switch(i){case"sap.ui.model.odata.ODataModel":t=this.V1;break;case"sap.ui.model.odata.v2.ODataModel":t=this.V2;break;default:t=this.NONE;a.info("AnalyticalVersionInfo.getVersion(...) - The given object is no"+" instance of ODataModel V1 or V2!");break}return t}};return e},true);
//# sourceMappingURL=AnalyticalVersionInfo.js.map