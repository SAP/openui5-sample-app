/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/wordStartsWithValue","sap/base/security/encodeXML"],function(n,t){"use strict";var e=function(e,s,r){var i,u,a,g,f,o=e?e.textContent:"",h="";if(!n(o,s)){return t(o)}s=s.toLowerCase();a=s.length;while(n(o,s)){i=o.toLowerCase();u=i.indexOf(s);u=u>0?i.indexOf(" "+s)+1:u;f=o.substring(0,u);o=o.substring(u);h+=t(f);f=o.substring(0,a);o=o.substring(a);h+='<span class="sapMInputHighlight">'+t(f)+"</span>";g=o.indexOf(" ");g=g===-1?o.length:g;f=o.substring(0,g);o=o.substring(g);h+=t(f);if(!r){break}}if(o){h+=t(o)}return h};var s=function(n,t,s,r){var i,u;r=r||200;if(!t||!n&&!n.length||n.length>r){return}u=[];for(i=0;i<n.length;i++){u.push(e(n[i],t,s))}for(i=0;i<n.length;i++){n[i].innerHTML=u[i]}};return s});
//# sourceMappingURL=highlightDOMElements.js.map