/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/getOwnerWindow"],function(jQuery,t){"use strict";var e=function e(){var i=this.get(0);if(i){if(i.getBoundingClientRect){var r=i.getBoundingClientRect();var n={top:r.top,left:r.left,width:r.right-r.left,height:r.bottom-r.top};var o=t(i);n.left+=jQuery(o).scrollLeft();n.top+=jQuery(o).scrollTop();return n}else{return{top:10,left:10,width:i.offsetWidth,height:i.offsetHeight}}}return null};jQuery.fn.rect=e;return jQuery});
//# sourceMappingURL=rect.js.map