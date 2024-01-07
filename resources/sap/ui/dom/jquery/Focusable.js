/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/isHidden","./hasTabIndex"],function(jQuery,i){"use strict";function n(e,r){var t=r?e.firstChild:e.lastChild,u;while(t){if(t.nodeType==1&&!i(t)){if(jQuery(t).hasTabIndex()){return t}u=n(t,r);if(u){return u}}t=r?t.nextSibling:t.previousSibling}return null}jQuery.fn.firstFocusableDomRef=function(){var e=this.get(0);if(!e||i(e)){return null}return n(e,true)};jQuery.fn.lastFocusableDomRef=function(){var e=this.get(0);if(!e||i(e)){return null}return n(e,false)};return jQuery});
//# sourceMappingURL=Focusable.js.map