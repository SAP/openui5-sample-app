/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/ClientTreeBinding"],function(e){"use strict";var t=e.extend("sap.ui.model.json.JSONTreeBinding");t.prototype._saveSubContext=function(e,t,i,n){if(e&&typeof e=="object"){var o=this.oModel.getContext(i+n);if(this.oCombinedFilter&&!this.bIsFiltering){if(this.filterInfo.aFilteredContexts&&this.filterInfo.aFilteredContexts.indexOf(o)!=-1){t.push(o)}}else{t.push(o)}}};return t});
//# sourceMappingURL=JSONTreeBinding.js.map