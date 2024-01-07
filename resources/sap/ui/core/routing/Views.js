/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TargetCache","sap/base/Log"],function(e,t){"use strict";var i=e.extend("sap.ui.core.routing.Views",{metadata:{publicMethods:["getView","setView"]},constructor:function(i){if(!i){i={}}function n(){if(new URLSearchParams(window.location.search).get("sap-ui-xx-asyncRouting")==="true"){t.warning("Activation of async view loading in routing via url parameter is only temporarily supported and may be removed soon","TargetCache");return true}return false}if(i.async===undefined){i.async=n()}e.apply(this,[i])},getView:function(e){return this.get(e,"View")},setView:function(e,t){return this.set(e,"View",t)},fireCreated:function(e){if(e){e.view=e.object;e.viewOptions=e.options}return this.fireEvent("created",e)}});return i});
//# sourceMappingURL=Views.js.map