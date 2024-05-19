/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control"],function(e){"use strict";const t=e.extend("sap.m.upload.ActionsPlaceholder",{metadata:{library:"sap.m",properties:{placeholderFor:{type:"sap.m.UploadSetwithTableActionPlaceHolder"}},aggregations:{_actionButton:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}}},renderer:{apiVersion:2,render:function(e,t){if(t?.getPlaceholderFor()){e.renderControl(t.getAggregation("_actionButton"))}}}});return t});
//# sourceMappingURL=ActionsPlaceholder.js.map