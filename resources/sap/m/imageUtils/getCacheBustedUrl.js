/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";var r=function(r){var a=r.sUrl,t=r.sParamName,s=r.sParamValue;if(!a||!t){return a}try{var n=document.createElement("a");n.href=a;var i=new URL(n.href);i.searchParams.set(t,s);n=null;return i.toString()}catch(r){e.error("The URL '"+a+"' is invalid.",r,"sap.m.imageUtils.getCacheBustedUrl");e.info("The URL '"+a+"' will not be cache-busted.",null,"sap.m.imageUtils.getCacheBustedUrl");return a}};return r});
//# sourceMappingURL=getCacheBustedUrl.js.map