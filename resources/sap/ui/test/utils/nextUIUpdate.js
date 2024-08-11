/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Rendering"],function(e,n){"use strict";function r(e){return new Promise(function(r,i){function t(e){n.detachUIUpdated(t);const a=e.getParameter("failed");if(a){e.preventDefault();i(a)}else{r()}}if(n.isPending()){n.attachUIUpdated(t);e?.tick?.()}else{r()}})}r.runSync=function(){e.warning("Synchronous rendering forced: Please migrate to asynchronous rendering");n.renderPendingUIUpdates("forced sync rendering...")};return r});
//# sourceMappingURL=nextUIUpdate.js.map