/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],()=>{"use strict";let e;const n={_getChangeContent:function(e,n){const r={};if(e.index>=0){r.index=e.index}n.forEach(n=>{if(e.hasOwnProperty(n)){r[n]=e[n]}});return r},_hasProperty:function(e,n){return e.some(e=>{let r=e.name===n||n=="$search";r=r?r:e.path===n;return r})},createConditionChange:function(e,n,r,t){delete t.filtered;const i={selectorElement:n,changeSpecificData:{changeType:e,content:{name:r,condition:t}}};return i},_requireWriteAPI:function(){if(!e){e=new Promise((e,n)=>{sap.ui.require(["sap/ui/fl/write/api/ControlPersonalizationWriteAPI"],n=>{e(n)})})}return e},handleChanges:function(e,r,t){if(t){e.forEach(e=>{e.transient=true})}return n._requireWriteAPI().then(n=>n.add({changes:e,ignoreVariantManagement:r}))},saveChanges:function(e,r){return n._requireWriteAPI().then(n=>n.save({selector:e,changes:r}))},restore:function(e){return n._requireWriteAPI().then(n=>n.restore(e))},reset:function(e){return n._requireWriteAPI().then(n=>n.reset(e))}};return n});
//# sourceMappingURL=FlexUtil.js.map