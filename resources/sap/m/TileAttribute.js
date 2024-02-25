/*!
* OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/ui/core/Control","sap/m/TileAttributeRenderer"],function(e,t){"use strict";var n=e.extend("sap.m.TileAttribute",{metadata:{library:"sap.m",properties:{key:{type:"int",group:"Misc",defaultValue:0},label:{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"contentConfig",aggregations:{contentConfig:{type:"sap.m.ContentConfig",multiple:false,bindable:"bindable"}}},renderer:{apiVersion:2,render:function(e,n){t.render(e,n)}}});return n});
//# sourceMappingURL=TileAttribute.js.map