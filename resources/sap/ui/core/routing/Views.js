/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TargetCache","sap/base/util/UriParameters","sap/base/Log"],function(e,t,i){"use strict";var n=e.extend("sap.ui.core.routing.Views",{metadata:{publicMethods:["getView","setView"]},constructor:function(n){if(!n){n={}}function r(){if(t.fromQuery(window.location.search).get("sap-ui-xx-asyncRouting")==="true"){i.warning("Activation of async view loading in routing via url parameter is only temporarily supported and may be removed soon","TargetCache");return true}return false}if(n.async===undefined){n.async=r()}e.apply(this,[n])},getView:function(e){return this.get(e,"View")},setView:function(e,t){return this.set(e,"View",t)},fireCreated:function(e){if(e){e.view=e.object;e.viewOptions=e.options}return this.fireEvent("created",e)}});return n});
//# sourceMappingURL=Views.js.map