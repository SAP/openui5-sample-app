/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/base/assert","sap/ui/dom/jquery/rect"],function(jQuery,t){"use strict";var e=function e(r,s){t(!isNaN(r),"iPosX must be a number");t(!isNaN(s),"iPosY must be a number");var i=this.rect();if(i){return r>=i.left&&r<=i.left+i.width&&s>=i.top&&s<=i.top+i.height}return false};jQuery.fn.rectContains=e;return jQuery});
//# sourceMappingURL=rectContains.js.map