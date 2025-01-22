/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Formatting","sap/ui/core/Lib","sap/ui/core/Locale","sap/ui/model/type/Date","sap/ui/model/odata/type/ODataType","sap/ui/model/odata/type/DateTimeBase","./InputBase","./ValueStateHeader","sap/ui/core/LocaleData","sap/ui/core/library","sap/ui/core/format/DateFormat","./DateTimeFieldRenderer","sap/base/util/deepEqual","sap/base/Log","sap/ui/thirdparty/jquery","sap/ui/core/date/UI5Date","sap/ui/unified/calendar/CalendarUtils","sap/ui/dom/jquery/cursorPos"],function(t,e,a,r,i,s,o,n,u,l,p,h,g,c,jQuery,f,y){"use strict";var d=l.CalendarType;var _=l.ValueState;var m=o.extend("sap.m.DateTimeField",{metadata:{abstract:true,library:"sap.m",properties:{displayFormat:{type:"string",group:"Appearance",defaultValue:null},valueFormat:{type:"string",group:"Data",defaultValue:null},dateValue:{type:"object",group:"Data",defaultValue:null},initialFocusedDateValue:{type:"object",group:"Data",defaultValue:null}},events:{liveChange:{parameters:{value:{type:"string"},previousValue:{type:"string"}}}}},renderer:h});m.prototype.setValue=function(t){t=this.validateProperty("value",t);var e=this.getValue();if(t===e){return this}else{this.setLastValue(t)}var a=this._parseAndValidateValue(t);this.setProperty("dateValue",a,this._bPreferUserInteraction);this._formatValueAndUpdateOutput(a,t);this.setProperty("value",t,this._bPreferUserInteraction);return this};m.prototype._parseAndValidateValue=function(t){this._bValid=true;var e;if(t){try{e=this._parseValue(t)}catch(t){}if(Array.isArray(e)){e=e[0]}if(!e||!e.getTime||e.getTime()<this._oMinDate.getTime()||e.getTime()>this._oMaxDate.getTime()){this._bValid=false;c.warning("Value can not be converted to a valid date",this)}}return e};m.prototype._formatValueAndUpdateOutput=function(t,e){if(!this.getDomRef()){return}var a=t?this._formatValue(t):e;if(this._bPreferUserInteraction){this.handleInputValueConcurrency(a)}else if(this._$input.val()!==a){this._$input.val(a);this._curpos=this._$input.cursorPos()}};m.prototype._inPreferredUserInteraction=function(){if(this._bPreferUserInteraction&&this.getDomRef()){var t=this.getFocusDomRef(),e=t&&this._getInputValue(),a=this.getProperty("value"),r=document.activeElement===t;return r&&e&&a!==e}return false};m.prototype.setDateValue=function(t){if(!this._isValidDate(t)){throw new Error("Date must be a JavaScript or UI5Date date object; "+this)}if(g(this.getDateValue(),t)){return this}t=this._dateValidation(t);var e=this._formatValue(t,true);if(e!==this.getValue()){this.setLastValue(e)}this.setProperty("value",e);if(this.getDomRef()){var a=this._formatValue(t);if(this._$input.val()!==a){this._$input.val(a);this._curpos=this._$input.cursorPos()}}return this};m.prototype.setValueFormat=function(t){this.setProperty("valueFormat",t,true);var e=this.getValue();if(e){this._handleDateValidation(this._parseValue(e))}return this};m.prototype.setDisplayFormat=function(t){this.setProperty("displayFormat",t,true);this.updateDomValue(this._formatValue(this.getDateValue()));this.setPlaceholder(this._getPlaceholder());return this};m.prototype.getDisplayFormatType=function(){return null};m.prototype.onfocusin=function(t){if(!jQuery(t.target).hasClass("sapUiIcon")){this.addStyleClass("sapMFocus")}if(!jQuery(t.target).hasClass("sapMInputBaseIconContainer")&&!(this._oPopup&&this._oPopup.isOpen())){this.openValueStateMessage()}else if(this._oValueStateHeader){this._oValueStateHeader.setValueState(this.getValueState()).setText(this._getTextForPickerValueStateContent()).setVisible(this.getValueState()!==_.None)}this._sPreviousValue=this.getDOMValue()};m.prototype.oninput=function(t){o.prototype.oninput.call(this,t);if(t.isMarked("invalid")){return}var e=this.getDOMValue();if(e!==this._sPreviousValue){this.fireLiveChange({value:e,previousValue:this._sPreviousValue});this._sPreviousValue=e}};m.prototype.getDOMValue=function(){return this._$input.val()};m.prototype._getValueStateHeader=function(){var t;if(!this._oValueStateHeader){t=this.getValueState();this._oValueStateHeader=new n({text:this._getTextForPickerValueStateContent(),valueState:t,visible:t!==_.None})}return this._oValueStateHeader};m.prototype._dateValidation=function(t){this._bValid=true;this.setProperty("dateValue",t);return t};m.prototype._handleDateValidation=function(t){this._bValid=true;this.setProperty("dateValue",t)};m.prototype._getPlaceholder=function(){var t=this.getPlaceholder(),e=this.getBinding("value"),a=e&&e.getType&&e.getType(),s;if(!t){if(a instanceof r){return a.getPlaceholderText()}if(a instanceof i&&a.oFormat){return a.oFormat.getPlaceholderText()}s=!!this._getDisplayFormatPattern();t=this._getFormatter(s).getPlaceholderText()}return t};m.prototype._getLocaleBasedPattern=function(e){return u.getInstance(new a(t.getLanguageTag())).getDatePattern(e)};m.prototype._parseValue=function(t,e){var a=this.getBinding("value"),r=a&&a.getType&&a.getType(),i=this._getFormatter(e),o,n,u;if(this._isSupportedBindingType(r)){try{u=r.parseValue(t,"string");if(typeof u==="string"&&r instanceof s){u=s.prototype.parseValue.call(r,t,"string")}o=r.oFormatOptions;if(o&&o.source&&o.source.pattern=="timestamp"){u=f.getInstance(u)}else if(o&&o.source&&typeof o.source.pattern==="string"){u=r.oInputFormat.parse(t)}}catch(t){}if(u&&(r.oFormatOptions&&this._isFormatOptionsUTC(r.oFormatOptions)||r.oConstraints&&r.oConstraints.isDateOnly)){n=f.getInstance(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds());n.setFullYear(u.getUTCFullYear());u=n}return u}return i.parse(t)};m.prototype._formatValue=function(t,e){if(!t){return""}var a=this.getBinding("value"),r=a&&a.getType&&a.getType(),i,s;if(this._isSupportedBindingType(r)){if(r.oFormatOptions&&r.oFormatOptions.UTC||r.oConstraints&&r.oConstraints.isDateOnly){s=y._createUTCDate(t,true);s.setUTCFullYear(t.getFullYear());t=s}i=r.oFormatOptions;if(i&&i.source&&i.source.pattern=="timestamp"){t=t.getTime()}else if(r.oOutputFormat){return r.oOutputFormat.format(t)}return r.formatValue(t,"string")}return this._getFormatter(!e).format(t)};m.prototype._isSupportedBindingType=function(t){return!!t&&t.isA(["sap.ui.model.type.Date","sap.ui.model.odata.type.DateTime","sap.ui.model.odata.type.DateTimeOffset"])};m.prototype._isFormatOptionsUTC=function(t){return t.UTC||t.source&&t.source.UTC};m.prototype._getDefaultDisplayStyle=function(){return"medium"};m.prototype._getDefaultValueStyle=function(){return"short"};m.prototype._getFormatter=function(e){var a=this._getBoundValueTypePattern(),r=false,i,s=this.getBinding("value"),o;if(s&&s.oType&&s.oType.oOutputFormat){r=!!s.oType.oOutputFormat.oFormatOptions.relative;o=s.oType.oOutputFormat.oFormatOptions.calendarType}if(!a){if(e){a=this.getDisplayFormat()||this._getDefaultDisplayStyle();o=this.getDisplayFormatType()}else{a=this.getValueFormat()||this._getDefaultValueStyle();o=d.Gregorian}}if(!o){o=t.getCalendarType()}if(e){if(a===this._sUsedDisplayPattern&&o===this._sUsedDisplayCalendarType){i=this._oDisplayFormat}}else{if(a===this._sUsedValuePattern&&o===this._sUsedValueCalendarType){i=this._oValueFormat}}if(i){return i}return this._getFormatterInstance(i,a,r,o,e)};m.prototype._getFormatterInstance=function(t,e,a,r,i){if(this._checkStyle(e)){t=this._getFormatInstance({style:e,strictParsing:true,relative:a,calendarType:r},i)}else{t=this._getFormatInstance({pattern:e,strictParsing:true,relative:a,calendarType:r},i)}if(i){this._sUsedDisplayPattern=e;this._sUsedDisplayCalendarType=r;this._oDisplayFormat=t}else{this._sUsedValuePattern=e;this._sUsedValueCalendarType=r;this._oValueFormat=t}return t};m.prototype._getFormatInstance=function(t,e){return p.getInstance(t)};m.prototype._checkStyle=function(t){return t==="short"||t==="medium"||t==="long"||t==="full"};m.prototype._getDisplayFormatPattern=function(){var t=this._getBoundValueTypePattern();if(t){return t}t=this.getDisplayFormat();if(this._checkStyle(t)){t=this._getLocaleBasedPattern(t)}return t};m.prototype._getBoundValueTypePattern=function(){var t=this.getBinding("value"),e=t&&t.getType&&t.getType();if(e instanceof r){return e.getOutputPattern()}if(e instanceof i&&e.getFormat){return e.getFormat().oFormatOptions.pattern}return undefined};m.prototype._isValidDate=function(t){return!t||Object.prototype.toString.call(t)==="[object Date]"};m.prototype._getTextForPickerValueStateContent=function(){return this.getValueStateText()||this._getDefaultTextForPickerValueStateContent()};m.prototype._getDefaultTextForPickerValueStateContent=function(){var t=this.getValueState(),a,r;if(t===_.None){r=""}else{a=e.getResourceBundleFor("sap.ui.core");r=a.getText("VALUE_STATE_"+t.toUpperCase())}return r};m.prototype.getFormFormattedValue=function(){var t=this.getDateValue();return this._formatValue(t)};return m});
//# sourceMappingURL=DateTimeField.js.map