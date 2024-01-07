/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/autowaiter/_utils","./WaiterBase"],function(e,t){"use strict";var n=[];var r=t.extend("sap.ui.test.autowaiter._fetchWaiter",{hasPending:function(){var e=n.length>0;if(e){u()}return e}});var i=new r;var o=window.fetch;window.fetch=function(e,t){var r=typeof e==="object",u={url:r?e.url:e,method:r?e.method:t&&t.method||"GET"},c=a(u);n.push(u);i._oLogger.trace("New pending: "+c);var h=o(e,t);h.then(function(e){i._oLogger.trace("Finished: "+c);n.splice(n.indexOf(u),1)}).catch(function(e){i._oLogger.trace("Finished with error: "+c);n.splice(n.indexOf(u),1)});return h};function a(e){var t="\nFetch: ";t+="URL: '"+e.url+"' Method: '"+e.method;return t}function u(){var e="There are "+n.length+" open fetch requests";n.forEach(function(t){e+=a(t)});i._oHasPendingLogger.debug(e)}return i},true);
//# sourceMappingURL=_fetchWaiter.js.map