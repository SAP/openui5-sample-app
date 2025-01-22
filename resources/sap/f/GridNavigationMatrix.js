/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization"],function(t){"use strict";return{EMPTY_CELL:false,create:function(t,o){const n=window.getComputedStyle(t);const e={columns:n.gridTemplateColumns.split(/\s+/),rows:n.gridTemplateRows.split(/\s+/),rowGap:parseFloat(n.rowGap),columnGap:parseFloat(n.columnGap),paddingTop:parseFloat(n.paddingTop),paddingLeft:parseFloat(n.paddingLeft),paddingRight:parseFloat(n.paddingRight)};const r=Array.from(new Array(e.rows.length),function(){return new Array(e.columns.length).fill(this.EMPTY_CELL)}.bind(this));o.forEach(function(o){const n=this._getPosition(t,o,e);this._addToMatrix(r,n,o)}.bind(this));return r},_getPosition:function(t,o,n){const e=t.getBoundingClientRect();const r=o.getBoundingClientRect();const i=this._getGridRow(e,r,n);const a=this._getGridCol(e,r,n);return{xFrom:i.start,xTo:i.end,yFrom:a.start,yTo:a.end}},_getGridRow:function(t,o,n){let e=-1,r=0,i=0;const a=o.top-t.top-n.paddingTop;const s=a+o.height;for(let t=0;t<n.rows.length;t++){i+=parseFloat(n.rows[t]);if(e===-1&&a<i){e=t}i+=n.rowGap;if(Math.round(s)<=Math.round(i)){r=t+1;break}}return{start:e,end:r}},_getGridCol:function(o,n,e){let r,i,a=0,s,l;if(t.getRTL()){i=-1;r=e.columns.length-1;l=o.right-e.paddingRight-n.right;s=l+n.width;for(let t=e.columns.length;t>0;t--){a+=parseFloat(e.columns[t-1]);if(i===-1&&l<a){i=t}a+=e.columnGap;if(Math.round(s)<=Math.round(a)){r=t-1;break}}}else{r=-1;i=0;s=n.left-o.left-e.paddingLeft;l=s+n.width;for(let t=0;t<e.columns.length;t++){a+=parseFloat(e.columns[t]);if(r===-1&&s<a){r=t}a+=e.columnGap;if(Math.round(l)<=Math.round(a)){i=t+1;break}}}return{start:r,end:i}},_addToMatrix:function(t,o,n){for(let e=o.xFrom;e<o.xTo;e++){for(let r=o.yFrom;r<o.yTo;r++){t[e][r]=n}}}}});
//# sourceMappingURL=GridNavigationMatrix.js.map