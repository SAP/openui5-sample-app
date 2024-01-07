/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/Page.icon.svg"}},actions:{rename:function(e){if(e.getCustomHeader()){return}return{changeType:"rename",domRef:function(e){return e.$("title-inner")[0]}}}},aggregations:{headerContent:{domRef:":sap-domref > .sapMPageHeader .sapMBarRight",actions:{move:"moveControls"}},subHeader:{domRef:":sap-domref > .sapMPageSubHeader"},customHeader:{domRef:":sap-domref > .sapMPageHeader"},content:{domRef:":sap-domref > section",actions:{move:"moveControls"}},footer:{domRef:":sap-domref > .sapMPageFooter"},landmarkInfo:{ignore:true}},name:{singular:"PAGE_NAME",plural:"PAGE_NAME_PLURAL"},templates:{create:"sap/m/designtime/Page.create.fragment.xml"}}});
//# sourceMappingURL=Page.designtime.js.map