/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Formatting","sap/base/i18n/date/CalendarType","sap/base/i18n/date/CalendarWeekNumbering","sap/ui/core/Control","sap/ui/Device","sap/ui/core/Element","sap/ui/core/Lib","sap/ui/core/LocaleData","sap/ui/core/delegate/ItemNavigation","sap/ui/unified/calendar/CalendarUtils","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/DateRange","sap/ui/unified/DateTypeRange","sap/ui/unified/library","sap/ui/core/format/DateFormat","sap/ui/core/library","sap/ui/core/Locale","./MonthRenderer","sap/ui/dom/containsOrEquals","sap/ui/events/KeyCodes","sap/ui/thirdparty/jquery","sap/ui/core/InvisibleMessage","sap/ui/core/date/CalendarUtils","sap/ui/core/date/UI5Date","sap/base/Log"],function(e,t,a,i,s,r,o,n,l,h,g,d,u,c,p,y,f,D,_,m,jQuery,v,S,C,b){"use strict";var M=y.InvisibleMessageMode;var T=c.CalendarDayType;var k=i.extend("sap.ui.unified.calendar.Month",{metadata:{library:"sap.ui.unified",properties:{date:{type:"object",group:"Data"},intervalSelection:{type:"boolean",group:"Behavior",defaultValue:false},singleSelection:{type:"boolean",group:"Behavior",defaultValue:true},showHeader:{type:"boolean",group:"Appearance",defaultValue:false},firstDayOfWeek:{type:"int",group:"Appearance",defaultValue:-1},nonWorkingDays:{type:"int[]",group:"Appearance",defaultValue:null},primaryCalendarType:{type:"sap.base.i18n.date.CalendarType",group:"Appearance"},secondaryCalendarType:{type:"sap.base.i18n.date.CalendarType",group:"Appearance"},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},showWeekNumbers:{type:"boolean",group:"Appearance",defaultValue:true},_focusedDate:{type:"object",group:"Data",visibility:"hidden",defaultValue:null},_renderMonthWeeksOnly:{type:"boolean",group:"Data",visibility:"hidden",defaultValue:false},calendarWeekNumbering:{type:"sap.base.i18n.date.CalendarWeekNumbering",group:"Appearance",defaultValue:null}},aggregations:{selectedDates:{type:"sap.ui.unified.DateRange",multiple:true,singularName:"selectedDate"},specialDates:{type:"sap.ui.unified.DateTypeRange",multiple:true,singularName:"specialDate"},disabledDates:{type:"sap.ui.unified.DateRange",multiple:true,singularName:"disabledDate"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"},legend:{type:"sap.ui.unified.CalendarLegend",multiple:false}},events:{select:{},focus:{parameters:{date:{type:"object"},otherMonth:{type:"boolean"},restoreOldDate:{type:"boolean"}}},weekNumberSelect:{allowPreventDefault:true,parameters:{weekNumber:{type:"int"},weekDays:{type:"sap.ui.unified.DateRange"}}}}},renderer:D});k.prototype.init=function(){this._mouseMoveProxy=this._handleMouseMove.bind(this);this._iColumns=7;this._oMinDate=h._minDate(this._getPrimaryCalendarType());this._oMaxDate=h._maxDate(this._getPrimaryCalendarType());this._aVisibleDays=[];this._bAlwaysShowSpecialDates=false;this._oUnifiedRB=o.getResourceBundleFor("sap.ui.unified")};k.prototype._getAriaRole=function(){return"gridcell"};k.prototype._getDayDescription=function(){return""};k.prototype.exit=function(){if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation}if(this._sInvalidateMonth){clearTimeout(this._sInvalidateMonth)}this._aVisibleDays=null;this._bAlwaysShowSpecialDates=null};k.prototype.getFocusDomRef=function(){return this.getDomRef()&&this._oItemNavigation.getItemDomRefs()[this._oItemNavigation.getFocusedIndex()]};k.prototype.onBeforeRendering=function(){this._oFormatYyyymmdd=p.getInstance({pattern:"yyyyMMdd",calendarType:t.Gregorian});this._oFormatLong=p.getInstance({style:"long",calendarType:this._getPrimaryCalendarType()});if(this.getFirstDayOfWeek()!==-1&&this.getCalendarWeekNumbering()!==a.Default){b.warning("Both properties firstDayOfWeek and calendarWeekNumbering should not be used at the same time!")}};k.prototype.onAfterRendering=function(){this.bSpaceButtonPressed=false;L.call(this);N.call(this);this._oInvisibleMessage=v.getInstance()};k.prototype.onmouseover=function(e){var t=jQuery(e.target),a=this.getSelectedDates()[0],i,s;if(!this._isMarkingUnfinishedRangeAllowed()){return}if(!t.hasClass("sapUiCalItemText")&&!t.hasClass("sapUiCalItem")){return}if(t.hasClass("sapUiCalItemText")){t=t.parent()}i=parseInt(this._oFormatYyyymmdd.format(a.getStartDate()));s=t.data("sapDay");if(this.hasListeners("datehovered")){this.fireEvent("datehovered",{date1:i,date2:s})}else{this._markDatesBetweenStartAndHoveredDate(i,s)}};k.prototype._markDatesBetweenStartAndHoveredDate=function(e,t){var a,i,s,r;a=this.$().find(".sapUiCalItem");if(e>t){e=e+t;t=e-t;e=e-t}for(r=0;r<a.length;r++){i=jQuery(a[r]);s=i.data("sapDay");if(s>e&&s<t&&this._isInAllowedRange(s)){i.addClass("sapUiCalItemSelBetween")}else{i.removeClass("sapUiCalItemSelBetween");if(s!=e&&s!=t){i.removeClass("sapUiCalItemSel")}}}};k.prototype._isInAllowedRange=function(e){return this._oFormatYyyymmdd.parse(e).getTime()>this._oMinDate.toLocalJSDate().getTime()&&this._oFormatYyyymmdd.parse(e).getTime()<this._oMaxDate.toLocalJSDate().getTime()};k.prototype.onsapfocusleave=function(e){if(!e.relatedControlId||!_(this.getDomRef(),r.getElementById(e.relatedControlId).getFocusDomRef())){if(this._bMouseMove){this._unbindMousemove(true);var t=this._selectDay(this._getDate());if(!t&&this._oMoveSelectedDate){this._selectDay(this._oMoveSelectedDate)}this._bMoveChange=false;this._bMousedownChange=false;this._oMoveSelectedDate=undefined;A.call(this)}if(this._bMousedownChange){this._bMousedownChange=false;A.call(this)}}};k.prototype.removeAllSelectedDates=function(){this._bDateRangeChanged=true;var e=this.removeAllAggregation("selectedDates");return e};k.prototype.destroySelectedDates=function(){this._bDateRangeChanged=true;var e=this.destroyAggregation("selectedDates");return e};k.prototype.removeAllSpecialDates=function(){this._bDateRangeChanged=true;var e=this.removeAllAggregation("specialDates");return e};k.prototype.destroySpecialDates=function(){this._bDateRangeChanged=true;var e=this.destroyAggregation("specialDates");return e};k.prototype.removeAllDisabledDates=function(){this._bDateRangeChanged=true;var e=this.removeAllAggregation("disabledDates");return e};k.prototype.destroyDisabledDates=function(){this._bDateRangeChanged=true;var e=this.destroyAggregation("disabledDates");return e};k.prototype.setDate=function(e){if(e){var t=g.fromLocalJSDate(e,this._getPrimaryCalendarType());P.call(this,t)}return this.setProperty("date",e)};k.prototype._getDate=function(){if(!this._oDate){this._oDate=g.fromLocalJSDate(C.getInstance(),this._getPrimaryCalendarType())}return this._oDate};k.prototype.displayDate=function(e){var t=g.fromLocalJSDate(e,this._getPrimaryCalendarType());P.call(this,t);return this};k.prototype.setPrimaryCalendarType=function(e){this.setProperty("primaryCalendarType",e);this._oFormatLong=p.getInstance({style:"long",calendarType:e});if(this._oDate){this._oDate=new g(this._oDate,e)}return this};k.prototype.setSecondaryCalendarType=function(e){this.setProperty("secondaryCalendarType",e);this._oFormatSecondaryLong=p.getInstance({style:"long",calendarType:e});return this};k.prototype._getSecondaryCalendarType=function(){var e=this.getSecondaryCalendarType();if(e===this._getPrimaryCalendarType()){return undefined}return e};k.prototype._getLocale=function(){var t=this.getParent();if(t&&t.getLocale){return t.getLocale()}else if(!this._sLocale){this._sLocale=new f(e.getLanguageTag()).toString()}return this._sLocale};k.prototype._getLocaleData=function(){var e=this.getParent();if(e&&e._getLocaleData){return e._getLocaleData()}else if(!this._oLocaleData){var t=this._getLocale();var a=new f(t);this._oLocaleData=n.getInstance(a)}return this._oLocaleData};k.prototype._getFormatLong=function(){var e=this._getLocale();if(this._oFormatLong.oLocale.toString()!==e){var t=new f(e);this._oFormatLong=p.getInstance({style:"long",calendarType:this._getPrimaryCalendarType()},t);if(this._oFormatSecondaryLong){this._oFormatSecondaryLong=p.getInstance({style:"long",calendarType:this._getSecondaryCalendarType()},t)}}return this._oFormatLong};k.prototype.getIntervalSelection=function(){var e=this.getParent();if(e&&e.getIntervalSelection){return e.getIntervalSelection()}else{return this.getProperty("intervalSelection")}};k.prototype.getSingleSelection=function(){var e=this.getParent();if(e&&e.getSingleSelection){return e.getSingleSelection()}else{return this.getProperty("singleSelection")}};k.prototype.getSelectedDates=function(){var e=this.getParent();if(e&&e.getSelectedDates){return e.getSelectedDates()}else{return this.getAggregation("selectedDates",[])}};k.prototype.getSpecialDates=function(){var e=this.getParent();if(e&&e.getSpecialDates){return e.getSpecialDates()}else{return this.getAggregation("specialDates",[])}};k.prototype.getDisabledDates=function(){var e=this.getParent();if(e&&e.getDisabledDates){return e.getDisabledDates()}else{return this.getAggregation("disabledDates",[])}};k.prototype.getPrimaryCalendarType=function(){var e=this.getParent();if(e&&e.getPrimaryCalendarType){return e.getPrimaryCalendarType()}return this.getProperty("primaryCalendarType")};k.prototype._getPrimaryCalendarType=function(){var t=this.getParent();if(t&&t._getPrimaryCalendarType){return t._getPrimaryCalendarType()}return this.getProperty("primaryCalendarType")||e.getCalendarType()};k.prototype._getShowHeader=function(){var e=this.getParent();if(e&&e._getShowMonthHeader){return e._getShowMonthHeader()}else{return this.getProperty("showHeader")}};k.prototype.getAriaLabelledBy=function(){var e=this.getParent();if(e&&e.getAriaLabelledBy){return e.getAriaLabelledBy()}else{return this.getAssociation("ariaLabelledBy",[])}};k.prototype.getLegend=function(){var e=this.getParent();if(e&&e.getLegend){return e.getLegend()}else{return this.getAssociation("legend")}};k.prototype._getFirstDayOfWeek=function(){var e=this.getParent();var t=0;if(e&&e.getFirstDayOfWeek){t=e.getFirstDayOfWeek()}else{t=this.getProperty("firstDayOfWeek")}if(t<0||t>6){var a=S.getWeekConfigurationValues(this.getCalendarWeekNumbering(),new f(this._getLocale()));if(a){t=a.firstDayOfWeek}else{var i=this._getLocaleData();t=i.getFirstDayOfWeek()}}return t};k.prototype._getNonWorkingDays=function(){var e=this.getParent();var t;if(e&&e.getNonWorkingDays){t=e.getNonWorkingDays()}else{t=this.getProperty("nonWorkingDays")}if(t&&!Array.isArray(t)){t=[]}return t};k.prototype._isSpecialDateMarkerEnabled=function(e){var t;if(this.getStartDate){t=this.getStartDate()}else if(this.getDate()){t=this.getDate()}else{t=C.getInstance()}return this._bAlwaysShowSpecialDates||h._isSameMonthAndYear(e,g.fromLocalJSDate(t))};k.prototype._checkDateSelected=function(e){h._checkCalendarDate(e);var t=0,a=this.getSelectedDates(),i=this._getPrimaryCalendarType(),s=0,r=this.getProperty("_focusedDate"),o=false,n=this.getParent(),l=this._bCalendar&&n.getMonths(),d,u;for(s=0;s<a.length;s++){var c=a[s],p=c.getStartDate()?g.fromLocalJSDate(c.getStartDate(),i):undefined,y=c.getEndDate()?g.fromLocalJSDate(c.getEndDate(),i):undefined;if(p&&y){u=this._arrangeStartAndEndDates(p,y);p=u.startDate;y=u.endDate}d=r&&p&&l===1&&r.getMonth()!==p.getMonth();o=this._isMarkingUnfinishedRangeAllowed()&&r&&!d&&(h._isBetween(e,p,r,true)||h._isBetween(e,r,p,true));if(p&&!y&&e.isSame(p)){t=1;break}else if(y&&e.isSame(p)){t=2;if(e.isSame(y)){t=5}break}else if(y&&e.isSame(y)){t=3;break}else if(y&&e.isAfter(p)&&e.isBefore(y)||o){t=4;break}if(this.getSingleSelection()){break}}return t};k.prototype._getDateTypes=function(e){h._checkCalendarDate(e);var t,a,i,s=[];var r=this._getSpecialDates();var o=e.toUTCJSDate().getTime();var n=C.getInstance(Date.UTC(0,0,1));for(var l=0;l<r.length;l++){var g=r[l];var d=g.getStartDate();var u=h.MAX_MILLISECONDS;if(d){n.setUTCFullYear(d.getFullYear(),d.getMonth(),d.getDate());u=n.getTime()}var c=g.getEndDate();var p=-h.MAX_MILLISECONDS;if(c){n.setUTCFullYear(c.getFullYear(),c.getMonth(),c.getDate());p=n.getTime()}i=g.getType()===T.NonWorking;if(o===u&&!c||o>=u&&o<=p){if(!i&&!t){t={type:g.getType(),secondaryType:g.getSecondaryType(),tooltip:g.getTooltip_AsString(),color:g.getColor()};s.push(t)}else if(i&&!a){a={type:g.getType(),secondaryType:g.getSecondaryType(),tooltip:g.getTooltip_AsString()};s.push(a)}if(t&&a){break}}}return s};k.prototype._checkDateEnabled=function(e){h._checkCalendarDate(e);var t=true;var a=this.getDisabledDates();var i=e.toUTCJSDate().getTime();var s=this._getPrimaryCalendarType();if(this._oMinDate&&i<this._oMinDate||this._oMaxDate&&i>this._oMaxDate){return false}for(var r=0;r<a.length;r++){var o=a[r];var n=o.getStartDate();var l=0;if(n){n=g.fromLocalJSDate(n,s);l=n.toUTCJSDate().getTime()}var d=o.getEndDate();var u=0;if(d){d=g.fromLocalJSDate(d,s);u=d.toUTCJSDate().getTime()}if(d){if(i>l&&i<u){t=false;break}}else if(i===l){t=false;break}}return t};k.prototype._handleMouseMove=function(e){if(!this.$().is(":visible")){this._unbindMousemove(true)}var t=jQuery(e.target);if(t.hasClass("sapUiCalItemText")){t=t.parent()}if(this._sLastTargetId&&this._sLastTargetId===t.attr("id")){return}this._sLastTargetId=t.attr("id");if(t.hasClass("sapUiCalItem")){var a=this._getDate();if(_(this.getDomRef(),e.target)){var i=g.fromLocalJSDate(this._oFormatYyyymmdd.parse(t.attr("data-sap-day")),this._getPrimaryCalendarType());if(!i.isSame(a)){this._oDate=i;var s=this._selectDay(i,true);if(s){this._oMoveSelectedDate=new g(i,this._getPrimaryCalendarType())}this._bMoveChange=true}}}};k.prototype.onmousedown=function(e){this._oMousedownPosition={clientX:e.clientX,clientY:e.clientY};if(e.button||s.support.touch||!this._isWeekSelectionAllowed()||!e.target.classList.contains("sapUiCalWeekNum")){return}var t=e.target,a=t.nextElementSibling,i=a.getAttribute("data-sap-day"),r=!a.classList.contains("sapUiCalItemOtherMonth"),o=this._oFormatYyyymmdd.parse(i),n=g.fromLocalJSDate(o,this._getPrimaryCalendarType());this._handleWeekSelection(n,r)};k.prototype.onmouseup=function(e){var t=e.button!==2;if(this._bMouseMove){this._unbindMousemove(true);var a=this._getDate();var i=this._oItemNavigation.getItemDomRefs();for(var r=0;r<i.length;r++){var o=jQuery(i[r]);if(!o.hasClass("sapUiCalItemOtherMonth")){if(o.attr("data-sap-day")===this._oFormatYyyymmdd.format(a.toUTCJSDate(),true)){o.trigger("focus");break}}}if(this._bMoveChange){var n=this._selectDay(a);if(!n&&this._oMoveSelectedDate){this._selectDay(this._oMoveSelectedDate)}this._bMoveChange=false;this._bMousedownChange=false;this._oMoveSelectedDate=undefined;A.call(this)}}if(this._bMousedownChange){this._bMousedownChange=false;A.call(this)}else if(s.support.touch&&t&&this._areMouseEventCoordinatesInThreshold(e.clientX,e.clientY,10)){var l=e.target.classList,h=l.contains("sapUiCalItemText")||l.contains("sapUiCalDayName"),g=l.contains("sapUiCalWeekNum"),d=this._getSelectedDateFromEvent(e);if(g&&this._isWeekSelectionAllowed()){this._handleWeekSelection(d,true)}else if(h&&e.shiftKey&&this._isConsecutiveDaysSelectionAllowed()){this._handleConsecutiveDaysSelection(d)}else if(h){this._selectDay(d,false,false);A.call(this)}}};k.prototype.onsapselect=function(e){var t=this.getParent();if(this.bSpaceButtonPressed){return}if(t&&t._isMultiDatesSelectionHeaderAllowed&&!t._isMultiDatesSelectionHeaderAllowed()){return}var a=this._selectDay(this._getSelectedDateFromEvent(e));if(a){A.call(this)}e.stopPropagation();e.preventDefault()};k.prototype.onkeydown=function(e){if(e.which===m.SPACE){this.bSpaceButtonPressed=true}};k.prototype.onkeyup=function(e){if(e.which===m.SPACE){this.bSpaceButtonPressed=false}};k.prototype.onsapselectmodifiers=function(e){var t=this._getSelectedDateFromEvent(e),a,i=this.getParent();if(this._isWeekSelectionAllowed()&&e.shiftKey&&e.keyCode===m.SPACE){if(i&&i._isMultiDatesSelectionHeaderAllowed&&!i._isMultiDatesSelectionHeaderAllowed()){return}a=h._getFirstDateOfWeek(t);this._handleWeekSelection(a,false)}else if(this._isConsecutiveDaysSelectionAllowed()&&e.shiftKey&&e.keyCode===m.ENTER){this._handleConsecutiveDaysSelection(t)}e.preventDefault()};k.prototype.onsappageupmodifiers=function(e){var t=new g(this._getDate(),this._getPrimaryCalendarType());var a=t.getYear();if(e.metaKey||e.ctrlKey){t.setYear(a-10)}else{t.setYear(a-1)}this.fireFocus({date:t.toLocalJSDate(),otherMonth:true});e.preventDefault()};k.prototype.onsappagedownmodifiers=function(e){var t=new g(this._getDate(),this._getPrimaryCalendarType());var a=t.getYear();if(e.metaKey||e.ctrlKey){t.setYear(a+10)}else{t.setYear(a+1)}this.fireFocus({date:t.toLocalJSDate(),otherMonth:true});e.preventDefault()};k.prototype._isValueInThreshold=function(e,t,a){var i=e-a,s=e+a;return t>=i&&t<=s};k.prototype._areMouseEventCoordinatesInThreshold=function(e,t,a){return this._oMousedownPosition&&this._isValueInThreshold(this._oMousedownPosition.clientX,e,a)&&this._isValueInThreshold(this._oMousedownPosition.clientY,t,a)?true:false};k.prototype._bindMousemove=function(e){jQuery(window.document).on("mousemove",this._mouseMoveProxy);this._bMouseMove=true;if(e){this.fireEvent("_bindMousemove")}};k.prototype._unbindMousemove=function(e){jQuery(window.document).off("mousemove",this._mouseMoveProxy);this._bMouseMove=undefined;this._sLastTargetId=undefined;if(e){this.fireEvent("_unbindMousemove")}};k.prototype.onThemeChanged=function(){if(this._bNoThemeChange||!this.getDomRef()){return}var e=this.getDomRef().querySelectorAll(".sapUiCalWH:not(.sapUiCalDummy)"),t=this._getLocaleData(),a=this._getFirstWeekDay(),i=t.getDaysStandAlone("abbreviated",this._getPrimaryCalendarType()),s,r;this._bNamesLengthChecked=undefined;this._bLongWeekDays=undefined;for(r=0;r<e.length;r++){s=e[r];s.textContent=i[(r+a)%7]}N.call(this)};k.prototype._handleBorderReached=function(e){var t=e.getParameter("event");var a=0;var i=this._getDate();var s=new g(i,this._getPrimaryCalendarType());if(t.type){switch(t.type){case"sapnext":case"sapnextmodifiers":if(t.keyCode===m.ARROW_DOWN){s.setDate(s.getDate()+7)}else{s.setDate(s.getDate()+1)}break;case"sapprevious":case"sappreviousmodifiers":if(t.keyCode===m.ARROW_UP){s.setDate(s.getDate()-7)}else{s.setDate(s.getDate()-1)}break;case"sappagedown":a=s.getMonth()+1;s.setMonth(a);if(a%12!==s.getMonth()){while(a!==s.getMonth()){s.setDate(s.getDate()-1)}}break;case"sappageup":a=s.getMonth()-1;s.setMonth(a);if(a<0){a=11}if(a!==s.getMonth()){while(a!==s.getMonth()){s.setDate(s.getDate()-1)}}break;default:break}this.fireFocus({date:s.toLocalJSDate(),otherMonth:true})}};k.prototype.checkDateFocusable=function(e){h._checkJSDateObject(e);var t=this._getDate();var a=g.fromLocalJSDate(e,this._getPrimaryCalendarType());return h._isSameMonthAndYear(a,t)};k.prototype.applyFocusInfo=function(e){return this};k.prototype._getFirstWeekDay=function(){return this._getFirstDayOfWeek()};k.prototype._isMonthNameLong=function(e){var t;var a;for(t=0;t<e.length;t++){a=e[t];if(Math.abs(a.clientWidth-a.scrollWidth)>1){return true}}return false};k.prototype._getVisibleDays=function(e,t){var a=42,i=this.getProperty("_renderMonthWeeksOnly"),s,r,o,n,l,h,d,u;if(!e){return this._aVisibleDays}this._aVisibleDays=[];d=this._getFirstDayOfWeek();h=new g(e,this._getPrimaryCalendarType());h.setDate(1);l=h.getDay()-d;if(l<0){l=7+l}if(l>0){h.setDate(1-l)}o=new g(h);r=(e.getMonth()+1)%12;for(let e=0;e<a;e++){u=o.getYear();n=new g(o,this._getPrimaryCalendarType());if(t&&u<1){n._bBeforeFirstYear=true;this._aVisibleDays.push(n)}else if(u>0&&u<1e4){this._aVisibleDays.push(n)}o.setDate(o.getDate()+1);s=o.getMonth()===r&&o.getDay()===d;if(i&&s){break}}return this._aVisibleDays};k.prototype._handleMousedown=function(e,t){var a=e.target.classList.contains("sapUiCalWeekNum"),i=!e.button,r=this._getSelectedDateFromEvent(e);if(!i||s.support.touch){return this}if(a){this._isWeekSelectionAllowed()&&this._handleWeekSelection(r,true);return this}else if(e.shiftKey&&this._isConsecutiveDaysSelectionAllowed()){this._handleConsecutiveDaysSelection(r);return this}var o=this._selectDay(t);if(o){this._bMousedownChange=true}if(this._bMouseMove){this._unbindMousemove(true);this._bMoveChange=false;this._oMoveSelectedDate=undefined}else if(o&&this.getIntervalSelection()&&this.$().is(":visible")){this._bindMousemove(true);this._oMoveSelectedDate=new g(t,this._getPrimaryCalendarType())}e.preventDefault();e.setMark("cancelAutoClose")};k.prototype._getSelectedDateFromEvent=function(e){var t=e.target,a,i;if(t.classList.contains("sapUiCalWeekNum")){a=t.nextSibling.getAttribute("data-sap-day")}else{a=t.getAttribute("data-sap-day")||t.parentNode.getAttribute("data-sap-day")}i=this._oFormatYyyymmdd.parse(a);return i?g.fromLocalJSDate(i,this._getPrimaryCalendarType()):null};k.prototype._handleWeekSelection=function(e,t){var a=this._calculateWeekNumber(e),i=this._getLastWeekDate(e),s=this.getSingleSelection(),r=this.getIntervalSelection(),o=this._checkDateEnabled(e)?e:null,n=this._checkDateEnabled(i)?i:null;if(e.isAfter(this._oMaxDate)||i.isBefore(this._oMinDate)){return this}if(!o){o=new g(this._oMinDate)}if(!n){n=new g(this._oMaxDate)}if(!s&&!r){this._handleWeekSelectionByMultipleDays(a,o,n)}else if(s&&r){this._handleWeekSelectionBySingleInterval(a,o,n)}t&&this._focusDate(o);return this};k.prototype._handleConsecutiveDaysSelection=function(e){var t=this.getSelectedDates(),a=t.length&&t[t.length-1].getStartDate(),i=a?g.fromLocalJSDate(a):e,s;s=this._areAllDaysBetweenSelected(i,e);this._toggleDaysBetween(i,e,!s);return this};k.prototype._calculateWeekNumber=function(e){var t=new f(this._getLocale());var a=this._getLastWeekDate(e);var i=this._getLocaleData();var s;var r;s=p.getInstance({pattern:"w",calendarType:this._getPrimaryCalendarType(),calendarWeekNumbering:this.getCalendarWeekNumbering()},t);const o=i.firstDayStartsFirstWeek();const n=this._getDate().getMonth()===0;const l=a.getMonth()===0;const h=a.getMonth()===1;if(n&&o&&(l||h)){r=s.format(a.toLocalJSDate())}else{r=s.format(e.toLocalJSDate())}return r};k.prototype._isWeekSelectionAllowed=function(){var e=this.getSingleSelection(),a=this.getIntervalSelection(),i=this._getPrimaryCalendarType(),s=this.getFirstDayOfWeek()!==-1,r=!e&&!a,o=e&&a,n=o||r;return i===t.Gregorian&&!s&&n};k.prototype._isConsecutiveDaysSelectionAllowed=function(){var e=this.getSingleSelection(),t=this.getIntervalSelection();return!e&&!t};k.prototype._isMarkingUnfinishedRangeAllowed=function(){var e=this.getSelectedDates()[0],t=!!(e&&e.getStartDate()&&!e.getEndDate());return this.getIntervalSelection()&&t};k.prototype._handleWeekSelectionByMultipleDays=function(e,t,a){var i,s,r;i=this._areAllDaysBetweenSelected(t,a)?new d({startDate:t.toLocalJSDate()}):new d({startDate:t.toLocalJSDate(),endDate:a.toLocalJSDate()});s=this.fireWeekNumberSelect({weekNumber:e,weekDays:i});r=i.getEndDate()?true:false;if(s){this._toggleDaysBetween(t,a,r)}return this};k.prototype._handleWeekSelectionBySingleInterval=function(e,t,a){var i=new d({startDate:t.toLocalJSDate(),endDate:a.toLocalJSDate()}),s=this.getParent(),r=this,o;if(s&&s.getSelectedDates){r=s}if(this._isIntervalSelected(i)){i=null}o=this.fireWeekNumberSelect({weekNumber:e,weekDays:i});if(o){r.removeAllSelectedDates();r.addSelectedDate(i)}return this};k.prototype._isIntervalSelected=function(e){var t=this.getSelectedDates(),a=t.length&&t[0],i=a&&a.getEndDate();return a&&a.getStartDate()&&a.getStartDate().getTime()===e.getStartDate().getTime()&&i&&a.getEndDate()&&a.getEndDate().getTime()===e.getEndDate().getTime()};k.prototype._getLastWeekDate=function(e){return new g(e).setDate(e.getDate()+6)};k.prototype._toggleDaysBetween=function(e,t,a){var i=this._arrangeStartAndEndDates(e,t),s=new g(i.startDate),r;do{r=this._checkDateSelected(s);if(!r&&a||r&&!a){this._selectDay(s);A.call(this)}s.setDate(s.getDate()+1)}while(s.isSameOrBefore(i.endDate));return this};k.prototype._areAllDaysBetweenSelected=function(e,t){var a=this._arrangeStartAndEndDates(e,t),i=new g(a.startDate),s=true;do{if(!this._checkDateSelected(i)){s=false;break}i.setDate(i.getDate()+1)}while(i.isSameOrBefore(a.endDate));return s};k.prototype._arrangeStartAndEndDates=function(e,t){var a=e.isSameOrBefore(t);return{startDate:a?e:t,endDate:a?t:e}};k.prototype._selectDay=function(e,t){if(!this._checkDateEnabled(e)){return false}var a=this.getSelectedDates();var i;var s=this._oItemNavigation.getItemDomRefs();var r;var o;var n=0;var l=this.getParent();var h=this;var u;var c=this._getPrimaryCalendarType();if(l&&l.isA("sap.ui.unified.Calendar")){h=l}if(this.getSingleSelection()){if(a.length>0){i=a[0];u=i.getStartDate();if(u){u=g.fromLocalJSDate(u,c)}}else{i=new d;h.addAggregation("selectedDates",i,true)}if(this.getIntervalSelection()&&(!i.getEndDate()||t)&&u){var p;if(e.isBefore(u)){p=u;u=e;if(!t){i.setProperty("startDate",u.toLocalJSDate());i.setProperty("endDate",p.toLocalJSDate())}}else if(e.isSameOrAfter(u)){p=e;if(!t){i.setProperty("endDate",p.toLocalJSDate())}}}else{i.setProperty("startDate",e.toLocalJSDate());i.setProperty("endDate",undefined)}this._oInvisibleMessage.announce(this._oUnifiedRB.getText("APPOINTMENT_SELECTED"),M.Assertive)}else{if(this.getIntervalSelection()){throw new Error("Calender don't support multiple interval selection")}else{var y=this._checkDateSelected(e);if(y>0){for(n=0;n<a.length;n++){u=a[n].getStartDate();if(u&&e.isSame(g.fromLocalJSDate(u,c))){h.removeAggregation("selectedDates",n);break}}}else{this._oInvisibleMessage.announce(this._oUnifiedRB.getText("APPOINTMENT_SELECTED"),M.Assertive);i=new d({startDate:e.toLocalJSDate()});h.addAggregation("selectedDates",i)}o=this._oFormatYyyymmdd.format(e.toUTCJSDate(),true);for(n=0;n<s.length;n++){r=jQuery(s[n]);if(r.attr("data-sap-day")===o){if(y>0){r.removeClass("sapUiCalItemSel");r.attr("aria-selected","false")}else{r.addClass("sapUiCalItemSel");r.attr("aria-selected","true")}}}}}return true};k.prototype._getSpecialDates=function(){var e=this.getParent();if(e&&e._getSpecialDates){return e._getSpecialDates()}else{var t=this.getSpecialDates();for(var a=0;a<t.length;a++){var i=t[a].getSecondaryType()===c.CalendarDayType.NonWorking&&t[a].getType()!==c.CalendarDayType.NonWorking;if(i){var s=new u;s.setType(c.CalendarDayType.NonWorking);s.setStartDate(t[a].getStartDate());if(t[a].getEndDate()){s.setEndDate(t[a].getEndDate())}t.push(s)}}return t}};function L(){var e=this._oFormatYyyymmdd.format(this._getDate().toUTCJSDate(),true),t=0,a=this.getDomRef(),i=a.querySelectorAll(".sapUiCalItem");for(var s=0;s<i.length;s++){if(i[s].getAttribute("data-sap-day")===e){t=s;break}}if(!this._oItemNavigation){this._oItemNavigation=new l;this._oItemNavigation.attachEvent(l.Events.AfterFocus,I,this);this._oItemNavigation.attachEvent(l.Events.FocusAgain,w,this);this._oItemNavigation.attachEvent(l.Events.BorderReached,this._handleBorderReached,this);this.addDelegate(this._oItemNavigation);if(this._iColumns>1){this._oItemNavigation.setHomeEndColumnMode(true,true)}this._oItemNavigation.setDisabledModifiers({sapnext:["alt"],sapprevious:["alt"],saphome:["alt"],sapend:["alt"]});this._oItemNavigation.setCycling(false);this._oItemNavigation.setColumns(this._iColumns,true)}this._oItemNavigation.setRootDomRef(a);this._oItemNavigation.setItemDomRefs(i);this._oItemNavigation.setFocusedIndex(t);this._oItemNavigation.setPageSize(i.length)}function I(e){var t=e.getParameter("index"),a=e.getParameter("event"),i=this._getDate(),s=new g(i,this._getPrimaryCalendarType()),r=false,o=true,n=this._oItemNavigation.getItemDomRefs(),l=n[t],h=l.getAttribute("data-sap-day"),d;if(!a){return}if(l.classList.contains("sapUiCalItemOtherMonth")||l.classList.contains("sapUiCalItemDsbl")){if(a.type==="saphomemodifiers"&&(a.metaKey||a.ctrlKey)){for(var u=0;u<n.length;++u){d=n[u];if(!(d.classList.contains("sapUiCalItemOtherMonth")||d.classList.contains("sapUiCalItemDsbl"))){s=g.fromLocalJSDate(this._oFormatYyyymmdd.parse(d.getAttribute("data-sap-day")),this._getPrimaryCalendarType());break}}this._focusDate(s)}else if(a.type==="sapendmodifiers"&&(a.metaKey||a.ctrlKey)){for(var u=n.length-1;u>0;--u){d=n[u];if(!(d.classList.contains("sapUiCalItemOtherMonth")||d.classList.contains("sapUiCalItemDsbl"))){s=g.fromLocalJSDate(this._oFormatYyyymmdd.parse(d.getAttribute("data-sap-day")),this._getPrimaryCalendarType());break}}this._focusDate(s)}else{r=true;s=g.fromLocalJSDate(this._oFormatYyyymmdd.parse(h),this._getPrimaryCalendarType());if(!s){s=new g(i)}this._focusDate(i);if(a.type==="mousedown"||this._sTouchstartYyyyMMdd&&a.type==="focusin"&&this._sTouchstartYyyyMMdd===h||l.classList.contains("sapUiCalItemDsbl")){o=false;this.fireFocus({date:i.toLocalJSDate(),otherMonth:false,restoreOldDate:true})}this._sTouchstartYyyyMMdd=a.originalEvent&&a.originalEvent.type==="touchstart"?h:undefined}}else{if(a.target.classList.contains("sapUiCalWeekNum")){this._focusDate(s)}else{s=g.fromLocalJSDate(this._oFormatYyyymmdd.parse(h),this._getPrimaryCalendarType());this._oDate=s}this._sTouchstartYyyyMMdd=undefined}if(a.type==="mousedown"&&this.getIntervalSelection()){this._sLastTargetId=l.id}if(o){this.fireFocus({date:s.toLocalJSDate(),otherMonth:r})}if(a.type==="mousedown"){this._handleMousedown(a,s,t)}}function w(e){var t=e.getParameter("index");var a=e.getParameter("event");if(!a){return}if(a.type==="mousedown"){var i=this._getDate();if(this.getIntervalSelection()){var s=this._oItemNavigation.getItemDomRefs();this._sLastTargetId=s[t].id}this._handleMousedown(a,i,t)}}function P(e){h._checkCalendarDate(e);var t=e.getYear();h._checkYearInValidRange(t);if(!this.getDate()||!e.isSame(g.fromLocalJSDate(this.getDate(),e.getCalendarType()))){var a=new g(e);this.setProperty("date",e.toLocalJSDate());this._oDate=a}else{this.invalidate()}}k.prototype._focusDate=function(e,t,a){if(!t){this.setDate(e.toLocalJSDate())}var i=this._oFormatYyyymmdd.format(e.toUTCJSDate(),true),r=this._oItemNavigation.getItemDomRefs(),o;for(var n=0;n<r.length;n++){o=r[n];if(o.getAttribute("data-sap-day")===i){if(document.activeElement!==r[n]){if(a||s.system.phone){this._oItemNavigation.setFocusedIndex(n)}else{this._oItemNavigation.focusItem(n)}}break}}};function A(){if(this._bMouseMove){this._unbindMousemove(true)}this.fireSelect()}function N(){if(!this._bNamesLengthChecked){var e,t=this.getDomRef().querySelectorAll(".sapUiCalWH:not(.sapUiCalDummy)"),a=this._isMonthNameLong(t),i,s,r,o;if(a){this._bLongWeekDays=false;i=this._getLocaleData();s=this._getFirstWeekDay();r=i.getDaysStandAlone("narrow",this._getPrimaryCalendarType());for(o=0;o<t.length;o++){e=t[o];e.textContent=r[(o+s)%7]}}else{this._bLongWeekDays=true}this._bNamesLengthChecked=true}}return k});
//# sourceMappingURL=Month.js.map