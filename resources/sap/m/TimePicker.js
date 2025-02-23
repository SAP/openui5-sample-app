/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./InputBase","./DateTimeField","./MaskInputRule","./Toolbar","./ToolbarSpacer","./Popover","./ResponsivePopover","sap/base/i18n/Formatting","sap/ui/core/EnabledPropagator","sap/ui/core/IconPool","./TimePickerInternals","./TimePickerClocks","./TimePickerInputs","./MaskEnabler","sap/ui/Device","sap/ui/core/Lib","sap/ui/core/format/DateFormat","sap/ui/core/Locale","sap/m/library","sap/ui/core/LocaleData","./TimePickerRenderer","sap/ui/events/KeyCodes","sap/base/Log","sap/ui/core/InvisibleText","./Button","sap/ui/thirdparty/jquery","sap/ui/core/date/UI5Date"],function(e,t,i,s,r,a,n,o,u,l,h,p,c,m,g,f,d,_,y,P,V,k,C,I,v,jQuery,S){"use strict";var b=y.PlacementType,M=y.TimePickerMaskMode,T=y.ButtonType,A=1;var x=t.extend("sap.m.TimePicker",{metadata:{library:"sap.m",designtime:"sap/m/designtime/TimePicker.designtime",properties:{localeId:{type:"string",group:"Data"},title:{type:"string",group:"Misc",defaultValue:null},minutesStep:{type:"int",group:"Misc",defaultValue:A},secondsStep:{type:"int",group:"Misc",defaultValue:A},placeholderSymbol:{type:"string",group:"Misc",defaultValue:"_"},mask:{type:"string",group:"Misc",defaultValue:null},maskMode:{type:"sap.m.TimePickerMaskMode",group:"Misc",defaultValue:M.On},support2400:{type:"boolean",group:"Misc",defaultValue:false},hideInput:{type:"boolean",group:"Misc",defaultValue:false},showCurrentTimeButton:{type:"boolean",group:"Behavior",defaultValue:false}},aggregations:{rules:{type:"sap.m.MaskInputRule",multiple:true,singularName:"rule"},_picker:{type:"sap.m.ResponsivePopover",multiple:false,visibility:"hidden"},_numPicker:{type:"sap.m.Popover",multiple:false,visibility:"hidden"}},events:{afterValueHelpOpen:{},afterValueHelpClose:{},liveChange:{parameters:{value:{type:"string"},previousValue:{type:"string"}}}},dnd:{draggable:false,droppable:true}},renderer:V});l.insertFontFaceStyle();u.call(x.prototype,true);m.call(x.prototype);var H={Short:"short",Medium:"medium",Long:"long"},D={Hour:"hour",Minute:"minute",Second:"second"},O="-";x.prototype.init=function(){t.prototype.init.apply(this,arguments);m.init.apply(this,arguments);this.setDisplayFormat(F());this._oResourceBundle=f.getResourceBundleFor("sap.m");this._bValid=false;this._sUsedDisplayPattern=null;this._sUsedValuePattern=null;this._oDisplayFormat=null;this._sValueFormat=null;this._oPopoverKeydownEventDelegate=null;this._rPlaceholderRegEx=new RegExp(O,"g");this._sLastChangeValue=null;var e=this.addEndIcon({id:this.getId()+"-icon",src:this.getIconSrc(),noTabStop:true,decorative:!g.support.touch||g.system.desktop?true:false,useIconTooltip:false,alt:this._oResourceBundle.getText("OPEN_PICKER_TEXT")});this._bShouldClosePicker=false;this._bShouldCloseNumericPicker=false;e.addEventDelegate({onmousedown:function(e){this._bShouldClosePicker=this.isOpen()}},this);e.attachPress(function(){this.toggleOpen(this._bShouldClosePicker)},this);this._sMinutes="00";this._sSeconds="00"};x.prototype.onBeforeRendering=function(){t.prototype.onBeforeRendering.apply(this,arguments);var e=this._getValueHelpIcon();if(e){e.setProperty("visible",this.getEditable())}};x.prototype.exit=function(){if(this._oTimeSemanticMaskHelper){this._oTimeSemanticMaskHelper.destroy()}m.exit.apply(this,arguments);this._removePickerEvents();this._oResourceBundle=null;this._bValid=false;this._sUsedDisplayPattern=null;this._oDisplayFormat=null;this._oPopoverKeydownEventDelegate=null;this._sUsedValuePattern=null;this._sValueFormat=null;this._sLastChangeValue=null};x.prototype.getIconSrc=function(){return l.getIconURI("time-entry-request")};x.prototype.isOpen=function(){return this._getPicker()&&this._getPicker().isOpen()};x.prototype.toggleOpen=function(e){if(this.getEditable()&&this.getEnabled()){this[e?"_closePicker":"_openPicker"]()}};x.prototype.isNumericOpen=function(){return this._getNumericPicker()&&this._getNumericPicker().isOpen()};x.prototype.toggleNumericOpen=function(e){if(this.getEditable()&&this.getEnabled()){this[e?"_closeNumericPicker":"_openNumericPicker"]();this._openByFocusIn=false;this._openByClick=false}};x.prototype.onfocusin=function(e){var i=this._getPicker(),s=this._isIconClicked(e),r=this._getNumericPicker(),a=r&&r.isOpen();if(!this._isMobileDevice()){t.prototype.onfocusin.apply(this,arguments);m.onfocusin.apply(this,arguments)}if(i&&i.isOpen()&&!s){this._closePicker();return}if(this._openByClick){this._openByClick=false;return}if(!this._isMobileDevice()){return}if(!s){this.toggleNumericOpen(a)}this._openByFocusIn=true};x.prototype.onclick=function(e){var t=this._isIconClicked(e),i=this._getNumericPicker(),s=i&&i.isOpen();if(this._openByFocusIn){this._openByFocusIn=false;return}if(!this._isMobileDevice()){return}if(!t){this.toggleNumericOpen(s)}this._openByClick=true};x.prototype.onmouseup=function(){if(this._isMaskEnabled()&&this._isValueEmpty()){this._positionCaret()}};x.prototype._isIconClicked=function(e){return jQuery(e.target).hasClass("sapUiIcon")||jQuery(e.target).hasClass("sapMInputBaseIconContainer")||jQuery(e.target).hasClass("sapUiIconTitle")};x.prototype.onBeforeOpen=function(){var t=this._getClocks(),i=this.getDateValue(),s=this._getFormatter(true).oFormatOptions.pattern,r=s.indexOf("HH"),a=s.indexOf("H"),n=h._isHoursValue24(this._$input.val(),r,a)?h._replace24HoursWithZero(this._$input.val(),r,a):this._$input.val();var o=this._getFormatter(true).parse(n)||i;if(o){var u=this._getFormatter(true).format(o);t.setValue(u)}if(this._shouldSetInitialFocusedDateValue()){i=this.getInitialFocusedDateValue()||i}t._setTimeValues(i,h._isHoursValue24(this._$input.val(),r,a));this.$().addClass(e.ICON_PRESSED_CSS_CLASS)};x.prototype.onAfterOpen=function(){var e=this._getClocks();if(e){e.showFirstClock();e._focusActiveButton()}this.fireAfterValueHelpOpen()};x.prototype.onAfterClose=function(){this.$().removeClass(e.ICON_PRESSED_CSS_CLASS);this._getClocks().showFirstClock();this.fireAfterValueHelpClose()};x.prototype._isMobileDevice=function(){return!g.system.desktop&&(g.system.phone||g.system.tablet)};x.prototype.onBeforeNumericOpen=function(){var e=this._getInputs(),t=this.getDateValue(),i=this._$input.val(),s=this._getFormatter(true).oFormatOptions.pattern,r=s.indexOf("HH"),a=s.indexOf("H");var n=this._getFormatter(true).parse(i)||t;var o=this._getFormatter(true).format(n);e.setValue(o);if(this._shouldSetInitialFocusedDateValue()){t=this.getInitialFocusedDateValue()}e._setTimeValues(t,h._isHoursValue24(o,r,a))};x.prototype._getValueHelpIcon=function(){var e=this.getAggregation("_endIcon");return e&&e[0]};x.prototype._format2400Value=function(e,t,i){if(e.substring(t,2)==="24"){return}var s=2,r=" ",a=i,n=e.charAt(t)===r,o=n?1:0,u=/[1-9]/g;if(t===-1){return e}if(i===-1){s=1;a=t}e=e.replace(u,"0");return e.substring(0,a)+"24"+e.substring(a+o+s)};x.prototype._handleInputChange=function(e){var t,i,s,r,a=this.getDisplayFormat()||this.getValueFormat()||this._sValueFormat&&this._sValueFormat.oFormatOptions.pattern,n,o,u;a=a?a:"";n=a.indexOf("HH");o=a.indexOf("H");e=e?.trim()||this._$input.val()?.trim();i=e;s=h._isHoursValue24(i,n,o);u=e.substr(o,2)==="24";r=this._getSupport2400()&&s&&u;this._bValid=true;if(e!==""){t=this._parseValue(s?h._replace24HoursWithZero(e,n,o):e,true);if(r){t.setMinutes(0,0)}if(!t){this._bValid=false}else{e=this._formatValue(t,false,true);if(this.getMaskMode()&&this.getMask()){this._setupMaskVariables()}}}i=r?this._format2400Value(e,o,n):e;this.updateDomValue(i);if(t){i=e=this._formatValue(t,true,true);if(r&&t&&t.getHours()===0){i=e=h._replaceZeroHoursWith24(e,n,o)}}this.setProperty("value",i,true);this.setLastValue(e);if(this._bValid){this.setProperty("dateValue",t,true)}this.fireChangeEvent(i,{valid:this._bValid});return true};x.prototype.onChange=function(e){var t=e?e.value:null;if(this.getEditable()&&this.getEnabled()){return this._handleInputChange(t)}return false};x.prototype.setMinutesStep=function(e){var t=this._getClocks(),i=this._getInputs();e=Math.max(A,e||A);if(t){t.setMinutesStep(e)}if(i){i.setMinutesStep(e)}return this.setProperty("minutesStep",e,true)};x.prototype.setSecondsStep=function(e){var t=this._getClocks(),i=this._getInputs();e=Math.max(A,e||A);if(t){t.setSecondsStep(e)}if(i){i.setSecondsStep(e)}return this.setProperty("secondsStep",e,true)};x.prototype.setTitle=function(e){var t=this._getClocks();if(t){t.setLabelText(e)}this.setProperty("title",e,true);return this};x.prototype.getWidth=function(){return this.getProperty("width")||"100%"};x.prototype._handleDateValidation=function(e){if(!e){this._bValid=false;C.warning("Value can not be converted to a valid date",this)}else{this._bValid=true;this.setProperty("dateValue",e,true);var t=this._formatValue(e);if(this.isActive()){this.updateDomValue(t)}else{this.setProperty("value",t,true);this.setLastValue(t);this._sLastChangeValue=t}}};x.prototype.setSupport2400=function(e){var t=this._getClocks(),i=this._getInputs();this.setProperty("support2400",e,true);if(t){t.setSupport2400(e)}if(i){i.setSupport2400(e)}this._initMask();return this};x.prototype._getSupport2400=function(){if(this.getDisplayFormat().indexOf("H")===-1){return false}return this.getSupport2400()};x.prototype.setDisplayFormat=function(e){var t=this._getClocks(),i=this._getInputs();this.setProperty("displayFormat",e,true);this._initMask();if(t){t.setValueFormat(e);t.setDisplayFormat(e)}if(i){i.setValueFormat(e);i.setDisplayFormat(e)}var s=this.getDateValue();if(!s){return this}var r=this._formatValue(s);this.updateDomValue(r);this.setLastValue(r);return this};x.prototype.setValue=function(e){if(e){this._getFormatter()}var t,i,s=this.getValueFormat()||this._sValueFormat&&this._sValueFormat.oFormatOptions.pattern,r=this._getClocks(),a=this._getInputs(),n,o,u=false;s=s?s:"";n=s.indexOf("HH");o=s.indexOf("H");e=this.validateProperty("value",e);this._initMask();if(this.getValue()!==e){this._sLastChangeValue=e}if(this.getDomRef()&&!this._getInputValue()){u=true}m.setValue.call(this,e);if(this.getDomRef()&&this._bPreferUserInteraction&&u){this.getFocusDomRef().value=""}if(this.getMask()){this._setupMaskVariables()}this._bValid=true;if(e){t=this._parseValue(h._isHoursValue24(e,n,o)?h._replace24HoursWithZero(e,n,o):e);if(!t){this._bValid=false;C.warning("Value can not be converted to a valid date",this)}}if(this._bValid){this.setProperty("dateValue",t,true)}if(t&&!this._getSupport2400()){i=this._formatValue(t)}else{i=e}if(r){r.setValue(this._formatValue(t))}if(a){a.setValue(this._formatValue(t))}this.updateDomValue(i);this.setLastValue(i);return this};x.prototype.setDateValue=function(e){this._initMask();return t.prototype.setDateValue.apply(this,arguments)};x.prototype.setLocaleId=function(e){var t=this.getValue(),i=this._getClocks(),s=this._getInputs();this.setProperty("localeId",e,true);this._initMask();this._oDisplayFormat=null;this._sValueFormat=null;if(t){this.setValue(t)}if(i){i.setLocaleId(e)}if(s){s.setLocaleId(e)}return this};x.prototype.setShowCurrentTimeButton=function(e){var t=this._getClocks(),i=this._getNumericPicker();t&&t.setShowCurrentTimeButton(e);i&&i.getContent()[0].setShowCurrentTimeButton(e);return this.setProperty("showCurrentTimeButton",e)};x.prototype._getDefaultDisplayStyle=function(){return H.Medium};x.prototype._getDefaultValueStyle=function(){return H.Medium};x.prototype._getLocale=function(){var e=this.getLocaleId();return e?new _(e):new _(o.getLanguageTag())};x.prototype._getFormatterInstance=function(e,t,i,s,r){var a=this._getLocale();if(t===H.Short||t===H.Medium||t===H.Long){e=d.getTimeInstance({style:t,strictParsing:true,relative:i},a)}else{e=d.getTimeInstance({pattern:t,strictParsing:true,relative:i},a)}if(r){this._sUsedDisplayPattern=t;this._oDisplayFormat=e}else{this._sUsedValuePattern=t;this._sValueFormat=e}return e};x.prototype._getFormat=function(){var e=this._getDisplayFormatPattern();if(!e){e=H.Medium}if(Object.keys(H).indexOf(e)!==-1){e=F()}return e};x.prototype.onsappageup=function(e){this._increaseTime(1,D.Hour);e.preventDefault()};x.prototype.onsappageupmodifiers=function(e){if(!(e.ctrlKey||e.metaKey||e.altKey)&&e.shiftKey){this._increaseTime(1,D.Minute)}if(!e.altKey&&e.shiftKey&&(e.ctrlKey||e.metaKey)){this._increaseTime(1,D.Second)}e.preventDefault()};x.prototype.onsappagedown=function(e){this._increaseTime(-1,D.Hour);e.preventDefault()};x.prototype.onsapescape=function(e){var t=this._parseValue(this.getLastValue(),true),i=this._parseValue(this._getInputValue(),true),s=this._formatValue(t,false),r=this._formatValue(i,false),a=this.getMaskMode()==="Off"?this._getInputValue():r;if(a!==s){e.setMarked();e.preventDefault();this.updateDomValue(s);this.onValueRevertedByEscape(s,r)}this._bCheckForLiveChange=true};x.prototype.onsappagedownmodifiers=function(e){if(!(e.ctrlKey||e.metaKey||e.altKey)&&e.shiftKey){this._increaseTime(-1,D.Minute)}if(!e.altKey&&e.shiftKey&&(e.ctrlKey||e.metaKey)){this._increaseTime(-1,D.Second)}e.preventDefault()};x.prototype.onkeydown=function(e){var t=k,i=e.which||e.keyCode,s=e.altKey,r;if(i===t.F4||s&&(i===t.ARROW_UP||i===t.ARROW_DOWN)){r=this._getPicker()&&this._getPicker().isOpen();if(!r){this._openPicker()}else{this._closePicker()}e.preventDefault()}else if(!this._isMobileDevice()){if(i!==t.ESCAPE){m.onkeydown.call(this,e)}}else{if(i===k.ENTER||i===k.SPACE){this._openNumericPicker()}}};x.prototype._getPicker=function(){return this.getAggregation("_picker")};x.prototype._getNumericPicker=function(){return this.getAggregation("_numPicker")};x.prototype._removePickerEvents=function(){var e,t=this._getPicker();if(t){e=t.getAggregation("_popup");if(typeof this._oPopoverKeydownEventDelegate==="function"){e.removeEventDelegate(this._oPopoverKeydownEventDelegate)}}};x.prototype.openBy=function(e){this._openPicker(e)};x.prototype._openPicker=function(e){var t=this._getPicker();if(!t){t=this._createPicker(this._getDisplayFormatPattern())}if(!e){e=this.getDomRef()}t.openBy(e);t.getContent()[0]._sMinutes=this._sMinutes;t.getContent()[0]._sSeconds=this._sSeconds;return t};x.prototype._closePicker=function(){var e=this._getPicker();if(e){this._sMinutes=e.getContent()[0]._sMinutes;this._sSeconds=e.getContent()[0]._sSeconds;e.close()}else{C.warning("There is no picker to close.")}return e};x.prototype._openNumericPicker=function(){var e=this._getNumericPicker();if(!e){e=this._createNumericPicker(this._getDisplayFormatPattern())}e.open();e.getContent()[0]._sMinutes=this._sMinutes;e.getContent()[0]._sSeconds=this._sSeconds;return e};x.prototype._closeNumericPicker=function(){var e=this._getNumericPicker();if(e){this._sMinutes=e.getContent()[0]._sMinutes;this._sSeconds=e.getContent()[0]._sSeconds;e.close();this.getDomRef("inner").select()}else{C.warning("There is no picker to close.")}return e};x.prototype._createPicker=function(e){var t=this,i,s,r,a,o,u,l,h=this.getAggregation("_endIcon")[0],c=this._getLocale().getLanguage(),m,d,_;a=f.getResourceBundleFor("sap.m");o=a.getText("TIMEPICKER_SET");u=a.getText("TIMEPICKER_CANCEL");l=this._oResourceBundle.getText("TIMEPICKER_SET_TIME");r=new p(this.getId()+"-clocks",{support2400:this._getSupport2400(),displayFormat:e,valueFormat:e,localeId:c,minutesStep:this.getMinutesStep(),secondsStep:this.getSecondsStep(),showCurrentTimeButton:this.getShowCurrentTimeButton()});r._setAcceptCallback(this._handleOkPress.bind(this));var y=this._getValueStateHeader();s=new n(t.getId()+"-RP",{showCloseButton:false,showHeader:false,horizontalScrolling:false,verticalScrolling:true,title:l,placement:b.VerticalPreferredBottom,contentWidth:"20rem",beginButton:new v(this.getId()+"-OK",{text:o,type:T.Emphasized,press:this._handleOkPress.bind(this)}),endButton:new v(this.getId()+"-Cancel",{text:u,press:this._handleCancelPress.bind(this)}),content:[y,r],ariaLabelledBy:I.getStaticId("sap.m","TIMEPICKER_SET_TIME"),beforeOpen:this.onBeforeOpen.bind(this),afterOpen:this.onAfterOpen.bind(this),afterClose:this.onAfterClose.bind(this)});y.setPopup(s._oControl);i=s.getAggregation("_popup");if(i.setShowArrow){i.setShowArrow(false)}i.oPopup.setExtraContent([h]);if(g.system.phone){m=this.$("inner").attr("aria-labelledby");d=m&&m.split(" ")[0];_=d?document.getElementById(d).textContent:"";if(_){s.setTitle(_)}s.setShowHeader(true)}else{this._oPopoverKeydownEventDelegate={onkeydown:function(e){var t=k,i=e.which||e.keyCode,s=e.altKey;if(s&&(i===t.ARROW_UP||i===t.ARROW_DOWN)||i===t.F4){this._handleOkPress(e);this.focus();e.preventDefault()}}};i.addEventDelegate(this._oPopoverKeydownEventDelegate,this)}s.addStyleClass(this.getRenderer().CSS_CLASS+"DropDown");s.open=function(){return this.openBy(t)};this.setAggregation("_picker",s,true);return s};x.prototype._createNumericPicker=function(e){var t=this,i,n,o,u,l=this._getLocale().getLanguage(),h=this._getValueStateHeader();n=f.getResourceBundleFor("sap.m");o=n.getText("TIMEPICKER_SET");u=n.getText("TIMEPICKER_CANCEL");i=new a(t.getId()+"-NP",{showArrow:false,showHeader:false,horizontalScrolling:false,verticalScrolling:false,placement:b.VerticalPreferredBottom,customHeader:[h],content:[new c(this.getId()+"-inputs",{support2400:this._getSupport2400(),displayFormat:e,valueFormat:e,localeId:l,minutesStep:this.getMinutesStep(),secondsStep:this.getSecondsStep(),showCurrentTimeButton:this.getShowCurrentTimeButton()})],footer:[new s({content:[new r,new v(this.getId()+"-NumericOK",{text:o,type:T.Emphasized,press:this._handleNumericOkPress.bind(this)}),new v(this.getId()+"-NumericCancel",{text:u,press:this._handleNumericCancelPress.bind(this)})]})],ariaLabelledBy:I.getStaticId("sap.m","TIMEPICKER_SET_TIME"),beforeOpen:this.onBeforeNumericOpen.bind(this),afterOpen:function(){this.fireAfterValueHelpOpen()}.bind(this),afterClose:function(){this.fireAfterValueHelpClose()}.bind(this)});i.open=function(){return this.openBy(t)};this.setAggregation("_numPicker",i,true);return i};x.prototype._getClocks=function(){var e=this._getPicker();if(!e){return null}return e.getContent()[1]};x.prototype._getInputs=function(){var e=this._getNumericPicker();if(!e){return null}return e.getContent()[0]};x.prototype._handleOkPress=function(e){var t=this._getClocks().getTimeValues(),i;this._isClockPicker=true;this._isNumericPicker=false;i=this._formatValue(t,false,true);this.updateDomValue(i);this._handleInputChange();this._closePicker()};x.prototype._handleCancelPress=function(e){this._closePicker()};x.prototype._handleNumericOkPress=function(e){var t=this._getInputs().getTimeValues(),i;this._isClockPicker=false;this._isNumericPicker=true;i=this._formatValue(t);this.updateDomValue(i);this._handleInputChange();this.getDomRef("inner").select();this._closeNumericPicker()};x.prototype._handleNumericCancelPress=function(e){this._closeNumericPicker()};x.prototype._getLocaleBasedPattern=function(e){return P.getInstance(new _(o.getLanguageTag())).getTimePattern(e)};x.prototype._parseValue=function(e,i){if(i){e=this._oTimeSemanticMaskHelper.stripValueOfLeadingSpaces(e);e=e.replace(this._rPlaceholderRegEx,"")}return t.prototype._parseValue.call(this,e,i)};x.prototype._formatValue=function(e,i,s){var r=t.prototype._formatValue.apply(this,arguments)?.trim(),a=i?this.getValueFormat()||this._sValueFormat&&this._sValueFormat.oFormatOptions.pattern:this.getDisplayFormat(),n,o,u;a=a?a:"";n=a.indexOf("HH");o=a.indexOf("H");if(e){if(!i&&this._oTimeSemanticMaskHelper){r=this._oTimeSemanticMaskHelper.formatValueWithLeadingTrailingSpaces(r)}}if(this._isNumericPicker&&this.isNumericOpen()&&this._getInputs()&&this._getInputs()._getHoursInput()&&this._getInputs()._getHoursInput().getValue()==="24"||this._isClockPicker&&this.isOpen()&&this._getClocks()&&this._getClocks()._getHoursClock()&&this._getClocks()._getHoursClock().getSelectedValue()===24||this._sLastChangeValue&&this._sLastChangeValue.indexOf("24")>-1&&!s){u=true}if(e&&e.getHours()===0&&this._getSupport2400()&&u){r=h._replaceZeroHoursWith24(r,n,o)}return r};x.prototype._increaseTime=function(e,t){var i=this.getDateValue(),s,r;if(i&&this.getEditable()&&this.getEnabled()){s=S.getInstance(i.getTime());switch(t){case D.Hour:s.setHours(s.getHours()+e);r=60*60*1e3;break;case D.Minute:s.setMinutes(s.getMinutes()+e);r=60*1e3;break;case D.Second:r=1e3;s.setSeconds(s.getSeconds()+e)}if(e<0&&s.getTime()-i.getTime()!==e*r){s=S.getInstance(i.getTime()+e*r)}this.setDateValue(s);this.fireChangeEvent(this.getValue(),{valid:true})}};x.prototype._initMask=function(){if(this._oTimeSemanticMaskHelper){this._oTimeSemanticMaskHelper.destroy()}this._oTimeSemanticMaskHelper=new E(this)};x.prototype._isMaskEnabled=function(){if(this._isMobileDevice()||this.getMaskMode()===M.Off){return false}if(this.getMaskMode()===M.Enforce){return true}const e=this._getDisplayFormatPattern().replace(/hh|mm|ss/gi,"").replace(/a/i,"");return!/h|m|s|a|b/gi.test(e)};x.prototype._shouldSetInitialFocusedDateValue=function(){if(!this._isValidValue()){return true}return!this.getValue()&&!!this.getInitialFocusedDateValue()};x.prototype._isValidValue=function(){return this._bValid};x.prototype.fireChangeEvent=function(e,i){if(e){e=e.trim()}if(e!==this._sLastChangeValue){this._sLastChangeValue=e;t.prototype.fireChangeEvent.call(this,e,i)}};var E=function(e){var t=e._getDisplayFormatPattern(),s,r,a=e._getLocale(),n;if(e._checkStyle(t)){s=P.getInstance(a).getTimePattern(t)}else{s=t.replace(/hh/gi,"h").replace(/h(?!')/gi,"h9").replace(/'h(?=')/gi,"'^h")}this._oTimePicker=e;this.aOriginalAmPmValues=P.getInstance(a).getDayPeriods("abbreviated");this.aAmPmValues=this.aOriginalAmPmValues.slice(0);this.iAmPmValueMaxLength=Math.max(this.aAmPmValues[0].length,this.aAmPmValues[1].length);for(n=0;n<this.aAmPmValues.length;n++){while(this.aAmPmValues[n].length<this.iAmPmValueMaxLength){this.aAmPmValues[n]+=" "}}this.b24H=t.indexOf("H")!==-1;this.bLeadingZero=t.indexOf("HH")!==-1||t.indexOf("hh")!==-1;this.sLeadingChar=this.bLeadingZero?"0":" ";this.sAlternativeLeadingChar=this.bLeadingZero?" ":"0";this.sLeadingRegexChar=this.bLeadingZero?"0":"\\s";e.setPlaceholderSymbol(O);if(this.b24H){r="["+this.sLeadingRegexChar+"012]"}else{r="["+this.sLeadingRegexChar+"1]"}this._maskRuleHours=new i({maskFormatSymbol:"h",regex:r});e.addRule(this._maskRuleHours);this.iHourNumber1Index=s.indexOf("h9");this.iHourNumber2Index=this.iHourNumber1Index!==-1?this.iHourNumber1Index+1:-1;this.iMinuteNumber1Index=s.indexOf("mm");this.iSecondNumber1Index=s.indexOf("ss");s=s.replace(/'mm(?=')/g,"'^mm").replace(/mm(?!')/g,"59").replace(/'ss(?=')/g,"'^ss").replace(/ss(?!')/g,"59").replace(/'/g,"");this._maskRuleMinSec=new i({maskFormatSymbol:"5",regex:"[0-5]"});e.addRule(this._maskRuleMinSec);this.aAllowedHours=m.call(this,this.b24H,this.sLeadingChar);this.aAllowedMinutesAndSeconds=g.call(this);this.iAmPmChar1Index=s.indexOf("a");this.iAfterAmPmValueIndex=-1;if(this.iAmPmChar1Index!==-1){this.iAfterAmPmValueIndex=this.iAmPmChar1Index+this.iAmPmValueMaxLength;var o=this.iAmPmValueMaxLength-"a".length;this.shiftIndexes(o);var u=65;var l="";var h="";var p="";for(n=0;n<this.iAmPmValueMaxLength;n++){h="[";if(this.aAmPmValues[0][n]){h+=this.aAmPmValues[0][n]}else{h+="\\s"}if(this.aAmPmValues[1][n]!==this.aAmPmValues[0][n]){if(this.aAmPmValues[1][n]){h+=this.aAmPmValues[1][n]}else{h+="\\s"}}h+="]";p=String.fromCharCode(u++);l+=p;this._maskRuleChars=new i({maskFormatSymbol:p,regex:h});e.addRule(this._maskRuleChars)}s=s.replace(/a/g,l)}e.setMask(s);function c(e,t,i){var s=[],r,a;for(a=e;a<=t;a++){r=a.toString();if(a<10){r=i+r}s.push(r)}return s}function m(e,t){var i=e?0:1,s=this._oTimePicker.getSupport2400()?24:23,r=e?s:12;return c(i,r,t)}function g(){return c(0,59,"0")}};E.prototype.replaceChar=function(e,t,i){var s=t-this.iAmPmChar1Index,r,a,n,o,u,l,h;if(t===this.iHourNumber1Index&&this.sAlternativeLeadingChar===e){if(this.aAllowedHours.indexOf(this.sLeadingChar+e)!==-1){return this.sLeadingChar+e}else{return this.sLeadingChar}}else if(t===this.iHourNumber1Index&&!this._oTimePicker._isCharAllowed(e,t)&&this.aAllowedHours.indexOf(this.sLeadingChar+e)!==-1){return this.sLeadingChar+e}else if(t===this.iHourNumber2Index&&i[this.iHourNumber1Index]===O){this._oTimePicker._oTempValue.setCharAt(this.sLeadingChar,this.iHourNumber1Index);return e}else if(t===this.iHourNumber2Index&&this.aAllowedHours.indexOf(i[this.iHourNumber1Index]+e)===-1){return""}else if((t===this.iMinuteNumber1Index||t===this.iSecondNumber1Index)&&!this._oTimePicker._isCharAllowed(e,t)&&this.aAllowedMinutesAndSeconds.indexOf("0"+e)!==-1){return"0"+e}else if(s>=0&&t<this.iAfterAmPmValueIndex){r=i.slice(this.iAmPmChar1Index,t);a=this.aAmPmValues[0].slice(0,s);n=this.aAmPmValues[1].slice(0,s);u=this.aAmPmValues[0].slice(s,this.iAfterAmPmValueIndex);l=this.aAmPmValues[1].slice(s,this.iAfterAmPmValueIndex);o=a===n;var p="";for(h=s;h<this.iAmPmValueMaxLength;h++){if(this.aAmPmValues[0][h]===this.aAmPmValues[1][h]){p+=this.aAmPmValues[0][h]}else{break}}if(h===this.iAmPmValueMaxLength||h!==s){return p}else{if(!o){if(r===a){return u}else if(r===n){return l}else{return e}}else{if(this.aAmPmValues[0][s].toLowerCase()===e.toLowerCase()&&this.aAmPmValues[0]===r+u){return u}else if(this.aAmPmValues[1][s].toLowerCase()===e.toLowerCase()&&this.aAmPmValues[1]===r+l){return l}else{return e}}}}else{return e}};E.prototype.formatValueWithLeadingTrailingSpaces=function(e){var t=this._oTimePicker.getMask().length;if(this.aOriginalAmPmValues[0]!==this.aAmPmValues[0]){e=e.replace(this.aOriginalAmPmValues[0],this.aAmPmValues[0])}if(this.aOriginalAmPmValues[1]!==this.aAmPmValues[1]){e=e.replace(this.aOriginalAmPmValues[1],this.aAmPmValues[1])}while(t>e.length){e=[e.slice(0,this.iHourNumber1Index)," ",e.slice(this.iHourNumber1Index)].join("")}return e};E.prototype.stripValueOfLeadingSpaces=function(e){if(e[this.iHourNumber1Index]===" "&&this._oTimePicker.getDisplayFormat().indexOf("B")===-1){e=[e.slice(0,this.iHourNumber1Index),e.slice(this.iHourNumber1Index+1)].join("")}return e};E.prototype.shiftIndexes=function(e){if(this.iAmPmChar1Index<this.iHourNumber1Index){this.iHourNumber1Index+=e;this.iHourNumber2Index+=e}if(this.iAmPmChar1Index<this.iMinuteNumber1Index){this.iMinuteNumber1Index+=e}if(this.iAmPmChar1Index<this.iSecondNumber1Index){this.iSecondNumber1Index+=e}};E.prototype.destroy=function(){if(this._maskRuleHours){this._maskRuleHours.destroy();this._maskRuleHours=null}if(this._maskRuleMinSec){this._maskRuleMinSec.destroy();this._maskRuleMinSec=null}if(this._maskRuleChars){this._maskRuleChars.destroy();this._maskRuleChars=null}};x.prototype._feedReplaceChar=function(e,t,i){return this._oTimeSemanticMaskHelper.replaceChar(e,t,i)};x.prototype._getAlteredUserInputValue=function(e){return e?this._formatValue(this._parseValue(e,true),true):e};x.prototype.getAccessibilityInfo=function(){var e=this.getRenderer();var i=t.prototype.getAccessibilityInfo.apply(this,arguments);var s=this.getValue()||"";var r=this.getRequired()?f.getResourceBundleFor("sap.m").getText("ELEMENT_REQUIRED"):"";if(this._bValid){var a=this.getDateValue();if(a){s=this._formatValue(a)}}i.role=e.getAriaRole(this);i.type=f.getResourceBundleFor("sap.m").getText("ACC_CTR_TYPE_TIMEINPUT");i.description=[s||this._getPlaceholder(),e.getDescribedByAnnouncement(this),r].join(" ").trim();i.autocomplete="none";i.haspopup=true;return i};function F(){var e=new _(o.getLanguageTag()),t=P.getInstance(e);return t.getTimePattern(H.Medium)}x.prototype._revertKey=function(e,t){t=t||this._getTextSelection();var i=t.iFrom,s=t.iTo,r=i,a,n;if(!t.bHasSelection){if(e.bBackspace){r=i=this._oRules.previousTo(i)}else if(e.bDelete){a=this.getPlaceholderSymbol();n=this._oTempValue._aContent.length;while((this._oTempValue._aContent[i]===a||this._oTempValue._aInitial[i]!==a)&&i<n){i++}s=i}}if(e.bBackspace||e.bDelete&&t.bHasSelection){s=s-1}this._resetTempValue(i,s);this._bCheckForLiveChange=true;this.updateDomValue(this._oTempValue.toString());this._setCursorPosition(Math.max(this._iUserInputStartPosition,r))};x._PICKER_CONTENT_HEIGHT="25rem";return x});
//# sourceMappingURL=TimePicker.js.map