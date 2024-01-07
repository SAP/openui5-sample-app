/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/base/Log"],function(t,e){"use strict";var r=t.extend("sap.m.MaskInputRule",{metadata:{library:"sap.m",properties:{maskFormatSymbol:{type:"string",group:"Misc",defaultValue:"*"},regex:{type:"string",group:"Misc",defaultValue:"[a-zA-Z0-9]"}}}});r.prototype.setMaskFormatSymbol=function(t){var e=s.call(this,t);if(e){this.setProperty("maskFormatSymbol",t)}return this};r.prototype.setRegex=function(t){var e=a.call(this,t);if(e){this.setProperty("regex",t)}return this};r.prototype.toString=function(){return this.getMaskFormatSymbol()+":"+this.getRegex()};function s(t){if(/^.$/i.test(t)){return true}e.error("The mask format symbol '"+t+"' is not valid");return false}function a(t){if(/.+/i.test(t)){return true}e.error("The regex value '"+t+"' is not valid");return false}return r});
//# sourceMappingURL=MaskInputRule.js.map