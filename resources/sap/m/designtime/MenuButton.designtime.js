/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{palette:{group:"ACTION",icons:{svg:"sap/m/designtime/MenuButton.icon.svg"}},aggregations:{menu:{ignore:true}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},split:{changeType:"splitMenuButton",changeOnRelevantContainer:true,getControlsCount:function(e){return e.getMenu().getItems().length}},rename:{changeType:"rename",domRef:function(e){return e.$().find(".sapMBtn > .sapMBtnInner > .sapMBtnContent")[0]}}},templates:{create:"sap/m/designtime/MenuButton.create.fragment.xml"}}});
//# sourceMappingURL=MenuButton.designtime.js.map