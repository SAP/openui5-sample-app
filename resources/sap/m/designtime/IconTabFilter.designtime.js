/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{palette:{group:"CONTAINER",icons:{svg:"sap/m/designtime/IconTabFilter.icon.svg"}},actions:{rename:function(){return{changeType:"rename",domRef:function(e){return e.$().find(".sapMITBText")[0]}}}},aggregations:{content:{propagateMetadata:function(e){if(e.getParent()?.isA("sap.m.IconTabFilter")){return{actions:{remove:null,reveal:null}}}return undefined}}}}});
//# sourceMappingURL=IconTabFilter.designtime.js.map