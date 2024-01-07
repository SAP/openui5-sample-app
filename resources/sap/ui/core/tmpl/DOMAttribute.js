/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/core/library"],function(t){"use strict";var e=t.extend("sap.ui.core.tmpl.DOMAttribute",{metadata:{library:"sap.ui.core",properties:{name:{type:"string",group:"Data",defaultValue:null},value:{type:"string",group:"Data",defaultValue:null}}}});e.prototype.setValue=function(t){this.setProperty("value",t,true);var e=this.getParent(),r=e&&e.$();if(r&&r.length>0){r.attr(this.getName(),this.getProperty("value"))}return this};return e});
//# sourceMappingURL=DOMAttribute.js.map