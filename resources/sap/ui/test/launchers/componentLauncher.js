/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/uid","sap/ui/core/Component","sap/ui/core/ComponentContainer"],function(e,t,n){"use strict";var o=false,a=null,r=null;return{start:function(s){if(o){throw new Error("sap.ui.test.launchers.componentLauncher: Start was called twice without teardown. Only one component can be started at a time.")}var c=t.create(s);o=true;return c.then(function(t){var o=e();r=document.createElement("div");r.id=o;r.className="sapUiOpaComponent";document.body.appendChild(r);document.body.classList.add("sapUiOpaBodyComponent");a=new n({component:t,height:"100%",width:"100%"});a.placeAt(o)})},hasLaunched:function(){return o},teardown:function(){if(!o){throw new Error("sap.ui.test.launchers.componentLauncher: Teardown was called before start. No component was started.")}a.destroy();r.remove();o=false;document.body.classList.remove("sapUiOpaBodyComponent")}}},true);
//# sourceMappingURL=componentLauncher.js.map