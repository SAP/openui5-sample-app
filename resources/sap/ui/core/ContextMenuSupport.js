/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Control"],function(t){"use strict";var e=function(){var e;if(!(this instanceof t)){return}function n(t){t.stopPropagation();if(t.srcControl!==this){return}t.preventDefault();this._oContextMenu.openAsContextMenu(t,this)}e={oncontextmenu:n};this.setContextMenu=function(t){if(t==null&&this.getContextMenu()){this._oContextMenu=null;this.removeEventDelegate(e,this);return}else if(!t||!t.getMetadata||!t.getMetadata().isInstanceOf("sap.ui.core.IContextMenu")){return}if(!this._oContextMenu){this.addEventDelegate(e,this)}this._oContextMenu=t};this.getContextMenu=function(){return this._oContextMenu}};return e},true);
//# sourceMappingURL=ContextMenuSupport.js.map