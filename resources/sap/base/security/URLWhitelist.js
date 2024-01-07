/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/security/URLListValidator"],function(e){"use strict";return{add:e.add,delete:e._delete,clear:e.clear,entries:e.entries,validate:e.validate,_createEntry:function(e,t,a,r){return{protocol:e&&e.toUpperCase(),host:t&&t.toUpperCase(),port:a,path:r}}}});
//# sourceMappingURL=URLWhitelist.js.map