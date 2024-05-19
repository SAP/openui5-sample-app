/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/BaseAddViaDelegate"],function(e){"use strict";var n=e.createAddViaDelegateChangeHandler({addProperty:function(e){var n=e.innerControls;var r=e.modifier;var t=e.view;var a=e.appComponent;var o=e.change;var i=o.getContent();var l=i.newFieldIndex;var u=i.newFieldSelector;var d;var g;return Promise.resolve().then(function(){if(!n.layoutControl){return Promise.resolve().then(r.createControl.bind(r,"sap.ui.layout.form.FormElement",a,t,u)).then(function(e){d=e;return Promise.all([r.insertAggregation(d,"label",n.label,0,t),r.insertAggregation(d,"fields",n.control,0,t)])})}d=n.control;return undefined}).then(function(){g=o.getDependentControl("parentFormContainer",e);return r.insertAggregation(g,"formElements",d,l,t)}).then(function(){if(n.valueHelp){return r.insertAggregation(g,"dependents",n.valueHelp,0,t)}return undefined})},aggregationName:"formElements",parentAlias:"parentFormContainer",fieldSuffix:"-field"});return n},true);
//# sourceMappingURL=AddFormField.js.map