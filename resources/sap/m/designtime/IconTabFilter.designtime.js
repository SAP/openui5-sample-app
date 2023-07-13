/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/IconTabFilter.icon.svg"}},actions:{rename:function(e){return{changeType:"rename",domRef:function(e){return e.$().find(".sapMITBText")[0]}}}},aggregations:{content:{domRef:function(e){var n=e.getParent(),t=n&&n.getParent(),o=e.getContent()||[];if(n.oSelectedItem===e&&o.length>0&&t){return t.getDomRef("content")}},actions:{move:"moveControls"}}}}});
//# sourceMappingURL=IconTabFilter.designtime.js.map