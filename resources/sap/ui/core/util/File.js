/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";var e={save:function(e,o,n,r,a,t){var i=o+"."+n;if(typeof t==="undefined"&&a==="utf-8"&&n==="csv"){t=true}if(t===true&&a==="utf-8"){e="\ufeff"+e}if(window.Blob){var d="data:"+r;if(a){d+=";charset="+a}var w=new window.Blob([e],{type:d});if(window.navigator.msSaveOrOpenBlob){window.navigator.msSaveOrOpenBlob(w,i)}else{var u=window.URL||window.webkitURL;var f=u.createObjectURL(w);var l=window.document.createElement("a");if("download"in l){var v=jQuery(document.body);var p=jQuery(l).attr({download:i,href:f,style:"display:none"});v.append(p);p.get(0).click();p.remove()}else{e=encodeURI(e);var c=window.open(d+","+e);c.opener=null;if(!c){throw new Error("Could not download the file, please deactivate your pop-up blocker.")}}}}}};return e},true);
//# sourceMappingURL=File.js.map