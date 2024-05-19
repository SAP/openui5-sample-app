/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/changeHandler/MoveTableColumns","sap/m/changeHandler/AddTableColumn","sap/m/flexibility/EngineFlex","sap/ui/fl/apply/api/DelegateMediatorAPI"],function(e,a,l,i){"use strict";i.registerWriteDelegate({controlType:"sap.m.Table",delegate:"sap/ui/comp/smartfield/flexibility/SmartFieldWriteDelegate",requiredLibraries:{"sap.ui.comp":{minVersion:"1.81",lazy:false}}});return Object.assign(l,{hideControl:"default",unhideControl:"default",moveTableColumns:e,addTableColumn:a})},true);
//# sourceMappingURL=Table.flexibility.js.map