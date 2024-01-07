/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/strings/capitalize","sap/base/assert","sap/m/Image","sap/ui/core/Icon","sap/ui/core/IconPool"],function(e,r,t,a,n,s){"use strict";var i={};function o(e,t,a){if(a!==undefined){var n=e["set"+r(t)];if(typeof n==="function"){n.call(e,a);return true}}return false}i.getImageControl=function(e,r,i,c,f,l){t(c.src,"sap.m.ImageHelper.getImageControl: mProperties do not contain 'src'");if(r&&r.getSrc()!=c.src){r.destroy();r=undefined}if(r&&(r instanceof a||r instanceof n)){for(var u in c){o(r,u,c[u])}}else{var p=Object.assign({},c,{id:e});r=s.createControlByURI(p,a);r.setParent(i,null,true)}if(l){for(var g=0,d=l.length;g!==d;g++){r.removeStyleClass(l[g])}}if(f){for(var m=0,I=f.length;m!==I;m++){r.addStyleClass(f[m])}}return r};e.ImageHelper=i;return i});
//# sourceMappingURL=ImageHelper.js.map