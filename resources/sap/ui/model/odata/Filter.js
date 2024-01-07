/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/model/Filter"],function(e,t){"use strict";var a=e.extend("sap.ui.model.odata.Filter",{constructor:function(e,t,a){if(typeof e==="object"){var s=e;e=s.path;t=s.values;a=s.and}this.sPath=e;this.aValues=t;this.bAND=a==undefined?true:a},convert:function(){var e=[];for(var a=0,s=this.aValues&&this.aValues.length||0;a<s;a++){e.push(new t({path:this.sPath,operator:this.aValues[a].operator,value1:this.aValues[a].value1,value2:this.aValues[a].value2}))}if(e.length>1){var u=new t({filters:e,and:this.bAND});return u}else{return e[0]}}});return a});
//# sourceMappingURL=Filter.js.map