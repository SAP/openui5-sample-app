/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/config","sap/base/util/LoaderExtensions"],function(t,o){"use strict";function e(t,o){var e=Object.assign({},t);delete o.boot;e.preBoot=e.preBoot?e.preBoot:[];e.preBoot=e.preBoot.concat(o.preBoot||[]);o.postBoot=o.postBoot?o.postBoot:[];e.postBoot=o.postBoot.concat(e.postBoot||[]);return e}function n(t){var r=o.loadResource(t,{async:true}).then(function(t){if(t.extends){return n(t.extends).then(function(o){return e(o,t)})}return t});return r}function r(){var o=t.get({name:"sapUiBootManifest",type:t.Type.String});return n(o)}return r});
//# sourceMappingURL=loadManifest.js.map