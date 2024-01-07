/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"DIALOG_NAME",plural:"DIALOG_NAME_PLURAL"},palette:{group:"DIALOG"},actions:{rename:function(e){if(e.getCustomHeader()){return}return{changeType:"rename",domRef:function(e){return e.getDomRef("title")}}}},aggregations:{content:{domRef:"> .sapMDialogSection",actions:{move:"moveControls"}},customHeader:{domRef:function(e){if(e._getAnyHeader()){return e._getAnyHeader().getDomRef()}}},subHeader:{domRef:function(e){return e.getAggregation("subHeader").getDomRef()}},beginButton:{domRef:function(e){return e.getBeginButton().getDomRef()},ignore:function(e){return!e.getBeginButton()||!!e.getButtons().length}},endButton:{domRef:function(e){return e.getEndButton().getDomRef()},ignore:function(e){return!e.getEndButton()||!!e.getButtons().length}},buttons:{domRef:function(e){if(e.getButtons().length){return e._oToolbar.getDomRef()}}}}}});
//# sourceMappingURL=Dialog.designtime.js.map