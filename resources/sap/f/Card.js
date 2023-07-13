/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/f/library","./CardBase","sap/f/CardRenderer"],function(e,r,t){"use strict";var a=e.cards.HeaderPosition;var n=r.extend("sap.f.Card",{metadata:{library:"sap.f",properties:{headerPosition:{type:"sap.f.cards.HeaderPosition",group:"Appearance",defaultValue:a.Top}},aggregations:{header:{type:"sap.f.cards.IHeader",multiple:false},content:{type:"sap.ui.core.Control",multiple:false}}},renderer:t});n.prototype.getCardHeader=function(){return this.getHeader()};n.prototype.getCardHeaderPosition=function(){return this.getHeaderPosition()};n.prototype.getCardContent=function(){return this.getContent()};return n});
//# sourceMappingURL=Card.js.map