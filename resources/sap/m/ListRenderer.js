/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./ListBaseRenderer","sap/ui/core/InvisibleText"],function(e,i,t){"use strict";var r=e.extend(i);r.apiVersion=2;r.getNoDataAriaRole=function(e){return e.getAriaRole()==="listbox"?"option":"listitem"};r.getAriaDescribedBy=function(e){const r=[];if(e.getAriaRole()==="list"&&e._sAriaRoleDescriptionKey){r.push(t.getStaticId("sap.m",e._sAriaRoleDescriptionKey))}const n=i.getAriaDescribedBy(e);if(n){r.push(n)}return r.length?r.join(" "):null};return r},true);
//# sourceMappingURL=ListRenderer.js.map