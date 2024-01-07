/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/BaseRename","sap/m/changeHandler/CombineButtons","sap/m/changeHandler/SplitMenuButton"],function(e,n,a){"use strict";return{moveControls:"default",rename:e.createRenameChangeHandler({propertyName:"title",translationTextType:"XTIT"}),combineButtons:{changeHandler:n,layers:{CUSTOMER:false}},splitMenuButton:{changeHandler:a,layers:{CUSTOMER:false}}}});
//# sourceMappingURL=Page.flexibility.js.map