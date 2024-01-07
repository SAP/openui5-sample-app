/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"TITLE_NAME",plural:"TITLE_NAME_PLURAL"},palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/Title.icon.svg"}},aggregations:{content:{ignore:true}},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){var n=e.$().find("span .sapMLnk");return n.length?n[0]:e.$().find("span")[0]}},reveal:{changeType:"unhideControl"}},templates:{create:"sap/m/designtime/Title.create.fragment.xml"}}});
//# sourceMappingURL=Title.designtime.js.map