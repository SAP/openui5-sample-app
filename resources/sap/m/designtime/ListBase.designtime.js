/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";function e(e){var n=e;while(n){if(n.isA("sap.m.ListBase")){var t=n.getBinding("items");if(t){return true}return false}n=n.getParent()}return false}return{name:{singular:"LIST_BASE_NAME",plural:"LIST_BASE_NAME_PLURAL"},palette:{group:"LIST",icons:{svg:"sap/m/designtime/ListBase.icon.svg"}},aggregations:{items:{propagateMetadata:function(n){if(e(n)){return{actions:{remove:null,rename:null}}}},domRef:":sap-domref > .sapMListUl:not(.sapMGrowingList)",actions:{move:"moveControls"}},swipeContent:{domRef:":sap-domref > .sapMListSwp",ignore:true},headerToolbar:{domRef:":sap-domref > .sapMListHdrTBar"},infoToolbar:{domRef:":sap-domref .sapMListInfoTBar"},contextMenu:{ignore:true},noData:{ignore:true}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
//# sourceMappingURL=ListBase.designtime.js.map