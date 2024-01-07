/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{palette:{group:"INPUT",icons:{svg:"sap/m/designtime/ObjectHeader.icon.svg"}},aggregations:{headerContainer:{propagateMetadata:function(e,t){if(e.isA("sap.m.IconTabBar")){return{domRef:function(){return t.getDomRef().querySelector(".sapMITH")},aggregations:{items:{domRef:function(){return t.getDomRef().querySelector(".sapMITH")},actions:{move:"moveControls"}}}}}return null},propagateRelevantContainer:true}},templates:{create:"sap/m/designtime/ObjectHeader.create.fragment.xml"}}});
//# sourceMappingURL=ObjectHeader.designtime.js.map