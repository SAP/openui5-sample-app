/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control"],function(e){"use strict";const t=e.extend("sap.m.upload.ActionsPlaceholder",{metadata:{library:"sap.m",properties:{placeholderFor:{type:"sap.m.UploadSetwithTableActionPlaceHolder"}},aggregations:{_actionButton:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}}},renderer:{apiVersion:2,render:function(e,t){if(t?.getPlaceholderFor()){const o=t.getAggregation("_actionButton");const a=t?.aCustomStyleClasses;a?.forEach(e=>{o?.addStyleClass(e)});e.renderControl(o)}}}});return t});
//# sourceMappingURL=ActionsPlaceholder.js.map