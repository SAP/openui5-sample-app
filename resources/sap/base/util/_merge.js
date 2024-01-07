/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./isPlainObject"],function(e){"use strict";var r=Object.create(null);var i=function(){
/*
		 * The code in this function is taken from jQuery 3.6.0 "jQuery.extend" and got modified.
		 *
		 * jQuery JavaScript Library v3.6.0
		 * https://jquery.com/
		 *
		 * Copyright OpenJS Foundation and other contributors
		 * Released under the MIT license
		 * https://jquery.org/license
		 */
var n,f,t,a,o,u,l=arguments[2]||{},s=3,c=arguments.length,y=arguments[0]||false,p=arguments[1]?undefined:r;if(typeof l!=="object"&&typeof l!=="function"){l={}}for(;s<c;s++){if((o=arguments[s])!=null){for(a in o){n=l[a];t=o[a];if(a==="__proto__"||l===t){continue}if(y&&t&&(e(t)||(f=Array.isArray(t)))){if(f){f=false;u=n&&Array.isArray(n)?n:[]}else{u=n&&e(n)?n:{}}l[a]=i(y,arguments[1],u,t)}else if(t!==p){l[a]=t}}}}return l};return i});
//# sourceMappingURL=_merge.js.map