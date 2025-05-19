/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{actions:{rename:function(e){if(e.getCustomHeader()){return}return{changeType:"rename",domRef:function(e){return e.getDomRef("title")}}}},aggregations:{content:{domRef:":sap-domref > .sapMPopoverWrapper > .sapMPopoverCont",actions:{move:"moveControls"}},customHeader:{domRef:":sap-domref > .sapMPopoverWrapper > .sapMPopoverHeader"},subHeader:{domRef:":sap-domref > .sapMPopoverWrapper > .sapMPopoverSubHeader"},footer:{domRef:":sap-domref > .sapMPopoverWrapper > .sapMPopoverFooter"},beginButton:{domRef:":sap-domref > .sapMPopoverWrapper > header.sapMPopoverHeader .sapMBarLeft"},endButton:{domRef:":sap-domref > .sapMPopoverWrapper > header.sapMPopoverHeader .sapMBarRight"}}}});
//# sourceMappingURL=Popover.designtime.js.map