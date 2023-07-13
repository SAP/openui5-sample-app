/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/Text"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,n){var r=n._getControlsForBreadcrumbTrail(),s=n._getSelect(),a=n._sSeparatorSymbol,o=n._getInvisibleText().getId(),l=n.getAriaLabelledBy().slice();t.openStart("nav",n);t.class("sapMBreadcrumbs");l.push(o);t.accessibilityState(null,{labelledby:{value:l.join(" "),append:true}});t.openEnd();t.openStart("ol");t.openEnd();if(s.getVisible()){this._renderControlInListItem(t,s,a,false,"sapMBreadcrumbsSelectItem")}r.forEach(function(n,s){this._renderControlInListItem(t,n,a,n instanceof e,undefined,s,r.length)},this);t.close("ol");t.close("nav")};t._renderControlInListItem=function(e,t,n,r,s,a,o){e.openStart("li");e.class("sapMBreadcrumbsItem");e.class(s);e.openEnd();e.renderControl(t);if(!r){e.openStart("span").class("sapMBreadcrumbsSeparator").openEnd().text(n).close("span")}e.close("li")};return t},true);
//# sourceMappingURL=BreadcrumbsRenderer.js.map