/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";function e(e,t){var r=Object.getOwnPropertyDescriptor(e,t);return r&&r.value}
/*!
	 * The following functions are taken from jQuery UI 1.8.17 but modified
	 *
	 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * http://docs.jquery.com/UI
	 */function t(e){var t=jQuery(e).offsetParent();var r=false;var a=jQuery(e).parents().filter(function(){if(this===t){r=true}return r});return!jQuery(e).add(a).filter(function(){return jQuery.css(this,"visibility")==="hidden"||jQuery.expr.pseudos.hidden(this)}).length}function r(e,r){var a=e.nodeName.toLowerCase();if(a==="area"){var s=e.parentNode,n=s.name,i;if(!e.href||!n||s.nodeName.toLowerCase()!=="map"){return false}i=jQuery("img[usemap='#"+n+"']")[0];return!!i&&t(i)}return(/input|select|textarea|button|object/.test(a)?!e.disabled:a=="a"?e.href||r:r)&&t(e)}if(!e(jQuery.expr.pseudos,"focusable")){
/*!
		 * The following function is taken from jQuery UI 1.8.17
		 *
		 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
		 * Dual licensed under the MIT or GPL Version 2 licenses.
		 * http://jquery.org/license
		 *
		 * http://docs.jquery.com/UI
		 *
		 * But since visible is modified, focusable is different from the jQuery UI version too.
		 */
jQuery.expr.pseudos.focusable=function(e){return r(e,!isNaN(jQuery.attr(e,"tabindex")))}}if(!e(jQuery.expr.pseudos,"sapTabbable")){
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
		 */
jQuery.expr.pseudos.sapTabbable=function(e){var t=jQuery.attr(e,"tabindex"),a=isNaN(t);return(a||t>=0)&&r(e,!a)}}if(!e(jQuery.expr.pseudos,"sapFocusable")){jQuery.expr.pseudos.sapFocusable=function(e){return r(e,!isNaN(jQuery.attr(e,"tabindex")))}}return jQuery});
//# sourceMappingURL=Selectors.js.map