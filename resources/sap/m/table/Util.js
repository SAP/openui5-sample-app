/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","sap/m/library","sap/ui/core/Lib","sap/ui/core/Locale","sap/ui/core/LocaleData","sap/ui/core/syncStyleClass","sap/ui/core/Theming","sap/ui/core/theming/Parameters","sap/m/IllustratedMessage","sap/m/Button","sap/m/CustomListItem","sap/m/HBox","sap/m/ResponsivePopover","sap/m/Text","sap/ui/core/InvisibleMessage"],function(e,t,a,n,r,i,o,s,l,u,c,p,m,d,T){"use strict";var g={};var f="";var v=parseFloat(t.BaseFontSize);var h=null;var M=null;g.measureText=function(){var e=.05;var t=document.createElement("canvas").getContext("2d");var a=function(){f=[parseFloat(s.get({name:"sapMFontMediumSize"})||"0.875rem")*v+"px",s.get({name:"sapUiFontFamily"})||"Arial"].join(" ");return f};o.attachApplied(a);return function(n,r){t.font=r||f||a();return t.measureText(n||"").width/v+e}}();g.calcTypeWidth=function(){let t;var i=0;var s=[2023,9,26,22,47,58,999];var l=new Date(Date.UTC.apply(0,s));var u=new(Function.prototype.bind.apply(Date,[null].concat(s)));var c={Byte:3,SByte:3,Int16:5,Int32:9,Int64:12,Single:6,Float:12,Double:13,Decimal:15,Integer:9};o.attachApplied(function(){i=0});const p=function(){if(!t){const a=r.getInstance(new n(e.getLanguageTag())).getTimezoneTranslations();[t]=Object.entries(a).reduce(([e,t],[a,n])=>typeof n==="string"&&n.length>t?[a,n.length]:[e,t],["",0])}return t};return function(e,t){var n=e.getMetadata().getName().split(".").pop();var r=t&&t.maxWidth||19;var o=t&&t.gap||0;var s=function(e){return Math.min(e+o,r)};if(n=="Boolean"){if(!i){var m=a.getResourceBundleFor("sap.ui.core");var d=g.measureText(m.getText("YES"));var T=g.measureText(m.getText("NO"));i=Math.max(d,T)}return s(i)}if(n=="String"||e.isA("sap.ui.model.odata.type.String")){var f=parseInt(e.getConstraints().maxLength)||0;if(!f||f*.25>r){return r}var v=g.measureText("A".repeat(f));if(f<r||r<10){return s(v)}var h=Math.log(v-r*.16)/Math.log(r/3)*(r/2)*Math.pow(r/19,1/v);return s(Math.min(h,v))}if(n.startsWith("Date")||n.startsWith("Time")){var M=e.getFormatOptions();var x=M.UTC?l:u;var E=x.toLocaleDateString();if(n=="TimeOfDay"){E=new Intl.DateTimeFormat("de",{hour:"numeric",minute:"numeric",second:"numeric"}).format(x);E=e.formatValue(E,"string")}else if(e.isA("sap.ui.model.odata.type.Time")){E=e.formatValue({__edmType:"Edm.Time",ms:l.valueOf()},"string")}else if(e.isA("sap.ui.model.odata.type.DateTimeWithTimezone")){E=e.formatValue([x,p()],"string")}else{E=e.formatValue(M.interval?[x,new Date(x*1.009)]:x,"string");(e.oFormat&&e.oFormat.oFormatOptions&&e.oFormat.oFormatOptions.pattern||"").replace(/[MELVec]{3,4}/,function(e){E+=e.length==4?"---":"-"})}return s(g.measureText(E))}if(c[n]){var L=parseInt(e.getConstraints().scale)||0;var A=parseInt(e.getConstraints().precision)||20;A=Math.min(A,c[n]);var y=2*Math.pow(10,A-L-1);y=e.formatValue(y,"string");return s(g.measureText(y))}return t&&t.defaultWidth||8}}();g.calcHeaderWidth=function(){var e="";var t="";var a=function(){if(!e){e=[s.get({name:"sapUiColumnHeaderFontWeight"})||"normal",f].join(" ")}return e};var n=function(){if(!t){t=[s.get({name:"sapMFontLargeSize"})||"normal",f].join(" ")}return t};o.attachApplied(function(){e="";t=""});return function(e,t,r,i,o){var s=e.length;var l=0;r=r||19;i=i||2;if(t>r){return r}if(i>s){return i}if(o){l=.125+g.measureText("*",n())}if(!t){var u=g.measureText(e,a());return u+l}var c=g.measureText(e,a());c=Math.min(c,r*.7);t=Math.max(t,i);var p=Math.max(1,1-Math.log(Math.max(t-1.7,.2))/Math.log(r*.5)+1);var m=p*t;var d=Math.max(0,c-m);var u=d<.15?c:m+d*(1-1/t)/Math.E;return u+l}}();g.calcColumnWidth=function(e,t,a){if(!Array.isArray(e)){e=[e]}a=Object.assign({minWidth:2,maxWidth:19,defaultWidth:8,truncateLabel:true,padding:1.0625,gap:0},a);var n=0;var r=Math.max(1,a.minWidth);var i=Math.max(r,a.maxWidth);var o=a.treeColumn?3:0;var s=a.gap+o+e.reduce(function(e,t){var n=t,r={defaultWidth:a.defaultWidth,maxWidth:a.maxWidth};if(Array.isArray(t)){n=t[0];r=t[1]||r}var i=g.calcTypeWidth(n,r);return a.verticalArrangement?Math.max(e,i):e+i+(e&&.5)},0);if(t){n=g.calcHeaderWidth(t,a.truncateLabel?s:0,i,r,a.required);n+=a.headerGap?(8+14)/v:0}s=Math.max(r,s,n);s=Math.min(s,i);s=Math.ceil(s*100)/100;return s+a.padding+"rem"};g.getNoColumnsIllustratedMessage=function(e){var n=a.getResourceBundleFor("sap.m");var r=new l({illustrationType:t.IllustratedMessageType.AddColumn,title:n.getText("TABLE_NO_COLUMNS_TITLE"),description:n.getText("TABLE_NO_COLUMNS_DESCRIPTION")});if(e){var i=new u({icon:"sap-icon://action-settings",press:e});r.addAdditionalContent(i)}return r};g.getSelectAllPopover=function(){if(M){return M}M=new Promise(function(e){sap.ui.require(["sap/m/Popover","sap/m/Bar","sap/m/HBox","sap/m/Title","sap/ui/core/Icon","sap/ui/core/library","sap/m/Text"],function(t,a,n,r,i,o,s){e({Popover:t,Bar:a,HBox:n,Title:r,Icon:i,coreLib:o,Text:s})})}).then(function(e){var t=a.getResourceBundleFor("sap.m");var n=e.coreLib.IconColor.Critical,r=e.coreLib.TitleLevel.H2;h=new e.Popover({customHeader:new e.Bar({contentMiddle:[new e.HBox({items:[new e.Icon({src:"sap-icon://message-warning",color:n}).addStyleClass("sapUiTinyMarginEnd"),new e.Title({text:t.getText("TABLE_SELECT_LIMIT_TITLE"),level:r})],renderType:"Bare",justifyContent:"Center",alignItems:"Center"})]}),content:[new e.Text]}).addStyleClass("sapUiContentPadding");return{oSelectAllNotificationPopover:h,oResourceBundle:t}});return M};g.showSelectionLimitPopover=function(e,t){g.getSelectAllPopover().then(function(a){var n=a.oSelectAllNotificationPopover;var r=a.oResourceBundle;var i=r.getText("TABLE_SELECT_LIMIT",[e]);n.getContent()[0].setText(i);if(t){n.openBy(t)}})};g.hideSelectionLimitPopover=function(){if(h&&h.isOpen()){h.close()}};g.announceTableUpdate=function(e,t){var n=T.getInstance();if(n){var r=a.getResourceBundleFor("sap.m");if(t==undefined){n.announce(r.getText("table.ANNOUNCEMENT_TABLE_UPDATED",[e]))}else if(t>1){n.announce(r.getText("table.ANNOUNCEMENT_TABLE_UPDATED_MULT",[e,t]))}else if(t===1){n.announce(r.getText("table.ANNOUNCEMENT_TABLE_UPDATED_SING",[e,t]))}else{n.announce(r.getText("table.ANNOUNCEMENT_TABLE_UPDATED_NOITEMS",[e]))}}};g.announceEmptyColumnMenu=function(){var e=T.getInstance();var t=a.getResourceBundleFor("sap.m");e.announce(t.getText("table.ANNOUNCEMENT_EMPTY_COLUMN_MENU"))};g.isEmpty=function(e){if(!e){return true}var t=e.getLength();if(t===1&&e.isA("sap.ui.model.analytics.AnalyticalBinding")){var a=e?e.providesGrandTotal()&&e.hasTotaledMeasures():false;if(a){t=0}}return t<=0};g.isExportable=function(e){return!g.isEmpty(e)&&(!e?.getDownloadUrl||e.isResolved()&&e.getDownloadUrl()!==null)};g.isThemeApplied=function(){var e=false;var t=function(){e=true};o.attachApplied(t);o.detachApplied(t);return e};g.createOrUpdateMultiUnitPopover=async function(e,t){const n=a.getResourceBundleFor("sap.m.table");let r;if(typeof e==="object"){r=e}if(!r){r=await x(e)}const o=r.getContent()[0];const s=o.getBindingInfo("items")?.template||E();const l=s.getContent()[0].getItems();l[0].bindText(t.amountBindingInfo);l[1].bindText(t.unitBindingInfo);o.bindItems({...t.itemsBindingInfo,templateShareable:true,template:s});i("sapUiSizeCompact",t.control,r);if(t.grandTotal){r.setTitle(n.getText("TABLE_MULTI_TOTAL_TITLE"));r.setPlacement("VerticalPreferredTop")}else{r.setTitle(n.getText("TABLE_MULTI_GROUP_TITLE"));r.setPlacement("VerticalPreferredBottom")}return r};async function x(e){const t=await new Promise(e=>{sap.ui.require(["sap/m/List"],e)});return new m(e,{content:new t(e+"-detailsList",{showSeparators:"None",ariaLabelledBy:e+"-title"}).addStyleClass("sapUiContentPadding")}).addStyleClass("sapMMultiUnitPopover")}function E(){var e=new d({textDirection:"LTR",wrapping:false,textAlign:"End"}).addStyleClass("sapMMultiUnitPopoverAmount");var t=new d({textDirection:"LTR",wrapping:false,textAlign:"End",width:"3em"}).addStyleClass("sapMMultiUnitPopoverUnit");return new c({content:[new p({renderType:"Bare",justifyContent:"End",items:[e,t]})]})}return g});
//# sourceMappingURL=Util.js.map