/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"CHECKBOX_NAME",plural:"CHECKBOX_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/CheckBox.icon.svg"}},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.$().find(".sapMCbLabel")[0]}},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/CheckBox.create.fragment.xml"}}});
//# sourceMappingURL=CheckBox.designtime.js.map