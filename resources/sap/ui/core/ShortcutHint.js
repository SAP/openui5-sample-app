/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/CommandExecution","sap/ui/core/Lib"],function(t,o,e){"use strict";var n=function(t,o){this.oControl=t;this.oConfig=o};n.prototype._getShortcutText=function(){var t;if(this.oConfig.commandName){t=this._getShortcutHintFromCommandExecution(this.oControl,this.oConfig.commandName)}else if(this.oConfig.message){t=this.oConfig.message}else if(this.oConfig.messageBundleKey){t=this._getShortcutHintFromMessageBundle(this.oControl,this.oConfig.messageBundleKey)}return t};n.prototype._getShortcutHintFromCommandExecution=function(e,n){try{return o.find(e,n)._getCommandInfo().shortcut}catch(o){t.error("Error on retrieving command shortcut. Command "+n+" was not found!")}};n.prototype._getShortcutHintFromMessageBundle=function(t,o){var n=e.getResourceBundleFor(t.getMetadata().getLibraryName());return n.getText(o)};return n});
//# sourceMappingURL=ShortcutHint.js.map