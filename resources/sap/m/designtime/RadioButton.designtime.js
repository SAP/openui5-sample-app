/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"RADIOBUTTON_NAME",plural:"RADIOBUTTON_NAME_PLURAL"},palette:{group:"INPUT",icons:{svg:"sap/m/designtime/RadioButton.icon.svg"}},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.$().find(".sapMRbBLabel")[0]}},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/RadioButton.create.fragment.xml"}}});
//# sourceMappingURL=RadioButton.designtime.js.map