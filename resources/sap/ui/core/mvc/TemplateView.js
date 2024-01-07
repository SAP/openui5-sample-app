/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./View","./TemplateViewRenderer","./ViewType","sap/base/Log"],function(e,t,i,r){"use strict";var n=e.extend("sap.ui.core.mvc.TemplateView",{metadata:{library:"sap.ui.core"},renderer:t});(function(){sap.ui.templateview=function(e,t){r.warning("sap.ui.core.mvc.TemplateView is deprecated. Use XMLView or JSView instead.");return sap.ui.view(e,t,i.Template)};n._sType=i.Template;n.prototype.getControllerName=function(){return this._sControllerName};n._getViewUrl=function(e){return sap.ui.require.toUrl(e.replace(/\./g,"/"))+".view.tmpl"};n.prototype.initViewSettings=function(e){if(!e){throw new Error("mSettings must be given")}if(!e.viewName){throw new Error("No view name is given.")}this._oTemplate=sap.ui.template({id:this.getId(),src:n._getViewUrl(e.viewName)});this._sControllerName=this._oTemplate._sControllerName;this._oTemplate=this._oTemplate.createControl(undefined,undefined,this);this.addContent(this._oTemplate)}})();return n});
//# sourceMappingURL=TemplateView.js.map