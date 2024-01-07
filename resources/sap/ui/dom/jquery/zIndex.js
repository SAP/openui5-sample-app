/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";function e(e,n){var t=Object.getOwnPropertyDescriptor(e,n);return t&&t.value}if(!e(jQuery.fn,"zIndex")){var n=function(e){if(e!==undefined){return this.css("zIndex",e)}if(this.length){var n=jQuery(this[0]),t,i;while(n.length&&n[0]!==document){t=n.css("position");if(t==="absolute"||t==="relative"||t==="fixed"){i=parseInt(n.css("zIndex"));if(!isNaN(i)&&i!==0){return i}}n=n.parent()}}return 0};
/*!
		 * The following function is taken from
		 * jQuery UI Core 1.11.1
		 * http://jqueryui.com
		 *
		 * Copyright 2014 jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 *
		 * http://api.jqueryui.com/category/ui-core/
		 */jQuery.fn.zIndex=n}return jQuery});
//# sourceMappingURL=zIndex.js.map