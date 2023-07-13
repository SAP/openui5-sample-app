/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer","sap/ui/core/Configuration"],function(e,t,r){"use strict";var i=t.extend(e);i.apiVersion=2;i.renderLIAttributes=function(e,t){e.class("sapMTreeItemBase");if(!t.isTopLevel()){e.class("sapMTreeItemBaseChildren")}if(t.isLeaf()){e.class("sapMTreeItemBaseLeaf")}else{e.attr("aria-expanded",t.getExpanded())}var i=t._getPadding();if(r.getRTL()){e.style("padding-right",i+"rem")}else{e.style("padding-left",i+"rem")}};i.renderContentFormer=function(e,t){this.renderHighlight(e,t);this.renderExpander(e,t);this.renderMode(e,t,-1)};i.renderExpander=function(e,t){var r=t._getExpanderControl();if(r){e.renderControl(r)}};i.getAriaRole=function(e){return"treeitem"};i.getAccessibilityState=function(t){var r=e.getAccessibilityState.call(this,t);r.level=t.getLevel()+1;if(!t.isLeaf()){r.expanded=t.getExpanded()}return r};return i},true);
//# sourceMappingURL=TreeItemBaseRenderer.js.map