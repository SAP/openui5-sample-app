/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/base/Log","sap/ui/core/library"],function(e,r){"use strict";var a=e.extend("sap.ui.core.search.SearchProvider",{metadata:{abstract:true,library:"sap.ui.core",properties:{icon:{type:"string",group:"Misc",defaultValue:null}}}});a.prototype.suggest=function(e,a){r.warning("sap.ui.core.search.SearchProvider is the abstract base class for all SearchProviders. Do not create instances of this class, but use a concrete sub class instead.")};return a});
//# sourceMappingURL=SearchProvider.js.map