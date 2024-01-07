/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Rendering"],function(n,e){"use strict";function r(){return new Promise(function(n){function r(){e.detachUIUpdated(r);n()}if(e.isPending()){e.attachUIUpdated(r)}else{n()}})}r.runSync=function(){n.warning("Synchronous rendering forced: Please migrate to asynchronous rendering");e.renderPendingUIUpdates("forced sync rendering...")};return r});
//# sourceMappingURL=nextUIUpdate.js.map