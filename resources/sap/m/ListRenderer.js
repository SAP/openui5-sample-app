/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./ListBaseRenderer"],function(e,t){"use strict";var i=e.extend(t);i.apiVersion=2;i.getNoDataAriaRole=function(e){return e.getAriaRole()==="listbox"?"option":"listitem"};return i},true);
//# sourceMappingURL=ListRenderer.js.map