/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/message/MessageProcessor"],function(s){"use strict";var e=s.extend("sap.ui.core.message.ControlMessageProcessor",{constructor:function(){if(!e._instance){s.apply(this,arguments);e._instance=this}return e._instance},metadata:{}});e._instance=null;e.prototype.setMessages=function(s){this.mOldMessages=this.mMessages===null?{}:this.mMessages;this.mMessages=s||{};this.checkMessages();delete this.mOldMessages};e.prototype.checkMessages=function(){var s,e,t=Object.assign({},this.mMessages);for(e in this.mOldMessages){if(!(e in t)){t[e]=[]}}for(e in t){var a,i,n=e.split("/");if(!n[0]){n.shift()}i=sap.ui.getCore().byId(n[0]);if(!i||i._bIsBeingDestroyed){return}a=i.getBinding(n[1]);s=t[e]?t[e]:[];if(a){var r=a.getDataState();r.setControlMessages(s);a.checkDataState()}else{i.propagateMessages(n[1],s)}}};return e});
//# sourceMappingURL=ControlMessageProcessor.js.map