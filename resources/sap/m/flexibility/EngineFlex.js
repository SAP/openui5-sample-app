/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/HideControl","sap/ui/fl/changeHandler/UnhideControl","sap/m/p13n/handler/xConfigHandler"],function(e,r,t){"use strict";return{hideControl:"default",unhideControl:"default",createItem:{layers:{USER:true},changeHandler:r},addItem:t.createHandler({aggregationBased:true,property:"visible"}),removeItem:t.createHandler({aggregationBased:true,property:"visible"}),moveItem:t.createHandler({aggregationBased:true,property:"position"}),addSort:t.createHandler({property:"sortConditions"}),removeSort:t.createHandler({property:"sortConditions"}),addGroup:t.createHandler({property:"groupConditions"}),removeGroup:t.createHandler({property:"groupConditions"})}},true);
//# sourceMappingURL=EngineFlex.js.map