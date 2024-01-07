/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Element","sap/ui/thirdparty/jquery","./library"],function(t,jQuery){"use strict";var a=t.extend("sap.ui.core.LayoutData",{metadata:{abstract:true,library:"sap.ui.core"}});a.prototype.invalidate=function(){var t=this.getParent();if(t&&t.getMetadata().getName()=="sap.ui.core.VariantLayoutData"){t=t.getParent()}if(t){var a=t.getParent();if(a){var e=jQuery.Event("LayoutDataChange");e.srcControl=t;a._handleEvent(e)}}};a.prototype.setLayoutData=function(t){return this};return a});
//# sourceMappingURL=LayoutData.js.map