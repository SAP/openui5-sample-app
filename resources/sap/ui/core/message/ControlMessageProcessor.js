/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/core/message/MessageProcessor"],function(s,e){"use strict";var t=e.extend("sap.ui.core.message.ControlMessageProcessor",{constructor:function(){if(!t._instance){e.apply(this,arguments);t._instance=this}return t._instance},metadata:{}});t._instance=null;t.prototype.setMessages=function(s){this.mOldMessages=this.mMessages===null?{}:this.mMessages;this.mMessages=s||{};this.checkMessages();delete this.mOldMessages};t.prototype.checkMessages=function(){var e,t,a=Object.assign({},this.mMessages);for(t in this.mOldMessages){if(!(t in a)){a[t]=[]}}for(t in a){var i,n,r=t.split("/");if(!r[0]){r.shift()}n=s.getElementById(r[0]);if(!n||n._bIsBeingDestroyed){return}i=n.getBinding(r[1]);e=a[t]?a[t]:[];if(i){var o=i.getDataState();o.setControlMessages(e);i.checkDataState()}else{n.propagateMessages(r[1],e)}}};return t});
//# sourceMappingURL=ControlMessageProcessor.js.map