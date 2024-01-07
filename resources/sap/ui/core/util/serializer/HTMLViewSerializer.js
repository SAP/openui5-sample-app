/*
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/EventProvider","./Serializer","./delegate/HTML","sap/ui/thirdparty/vkbeautify"],function(e,t,i,r){"use strict";var n=e.extend("sap.ui.core.util.serializer.HTMLViewSerializer",{constructor:function(t,i,r,n){e.apply(this);this._oView=t;this._oWindow=i;this._fnGetControlId=r;this._fnGetEventHandlerName=n}});n.prototype.serialize=function(){var e=this;var n=function(t){return t?.isA?.("sap.ui.core.mvc.View")&&t!==e._oView};var o=new t(this._oView,new i(this._fnGetControlId,this._fnGetEventHandlerName),true,this._oWindow,n);var a=o.serialize();var s=[];s.push("<template");if(this._oView.getControllerName&&this._oView.getControllerName()){s.push(' data-controller-name="'+this._oView.getControllerName()+'"')}s.push(" >");s.push(a);s.push("</template>");return r.xml(s.join(""))};return n});
//# sourceMappingURL=HTMLViewSerializer.js.map