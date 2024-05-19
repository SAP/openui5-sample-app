/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=function(e){var a=!!(e&&e._hasTablePersoController&&e._hasTablePersoController());var n=sap.ui.require("sap/m/p13n/Engine");var r=n&&n.getInstance().isRegistered(e);return a||r};return{name:{singular:"TABLE_NAME",plural:"TABLE_NAME_PLURAL"},palette:{group:"LIST",icons:{svg:"sap/m/designtime/Table.icon.svg"}},aggregations:{columns:{propagateMetadata:function(a){if(a.isA("sap.m.Column")&&e(a.getParent())){return{actions:null}}},childNames:{singular:"COLUMN_NAME",plural:"COLUMN_NAME_PLURAL"},domRef:":sap-domref .sapMListTblHeader",actions:{move:function(a){return e(a.getParent())?null:"moveTableColumns"},add:{delegate:function(a){if(!e(a)){return{changeType:"addTableColumn"}}}}}},items:{domRef:":sap-domref .sapMListItems"},contextMenu:{ignore:true}}}});
//# sourceMappingURL=Table.designtime.js.map