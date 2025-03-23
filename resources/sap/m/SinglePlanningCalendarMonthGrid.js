/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Formatting","sap/base/i18n/date/CalendarType","sap/base/i18n/date/CalendarWeekNumbering","sap/ui/core/Control","sap/ui/core/format/DateFormat","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils","sap/ui/unified/DateTypeRange","sap/ui/unified/library","sap/ui/core/LocaleData","sap/ui/core/Locale","sap/ui/core/delegate/ItemNavigation","sap/ui/core/dnd/DragDropInfo","sap/ui/core/CustomData","sap/ui/events/KeyCodes","sap/base/Log","sap/ui/core/Core","./Link","./library","./PlanningCalendarLegend","./SinglePlanningCalendarMonthGridRenderer","sap/ui/thirdparty/jquery","sap/ui/core/InvisibleMessage","sap/ui/core/library","sap/ui/core/date/CalendarUtils","sap/ui/core/date/UI5Date","sap/ui/unified/DateRange"],function(e,t,a,n,i,r,s,o,l,g,p,c,u,f,d,h,D,m,_,y,S,jQuery,A,C,v,L,b){"use strict";var M=1.5625;var R=1.5;var k=2.125;var P=1.75;var I=C.InvisibleMessageMode;var T=_.SinglePlanningCalendarSelectionMode;var E=_.LinkAccessibleRole;var N=n.extend("sap.m.SinglePlanningCalendarMonthGrid",{metadata:{library:"sap.m",properties:{startDate:{type:"object",group:"Data"},enableAppointmentsDragAndDrop:{type:"boolean",group:"Misc",defaultValue:false},firstDayOfWeek:{type:"int",group:"Appearance",defaultValue:-1},calendarWeekNumbering:{type:"sap.base.i18n.date.CalendarWeekNumbering",group:"Appearance",defaultValue:null},dateSelectionMode:{type:"sap.m.SinglePlanningCalendarSelectionMode",group:"Behavior",defaultValue:T.SingleSelect}},aggregations:{appointments:{type:"sap.ui.unified.CalendarAppointment",multiple:true,singularName:"appointment",dnd:{draggable:true}},specialDates:{type:"sap.ui.unified.DateTypeRange",multiple:true,singularName:"specialDate"},_appsPlaceholders:{type:"sap.m.SinglePlanningCalendarMonthGrid._internal.IntervalPlaceholder",multiple:true,visibility:"hidden",dnd:{droppable:true}},selectedDates:{type:"sap.ui.unified.DateRange",multiple:true,singularName:"selectedDate"}},dnd:true,associations:{legend:{type:"sap.m.PlanningCalendarLegend",multiple:false}},events:{cellPress:{parameters:{startDate:{type:"object"},endDate:{type:"object"}}},weekNumberPress:{parameters:{weekNumber:{type:"int"}}},selectedDatesChange:{allowPreventDefault:true,parameters:{selectedDates:{type:"sap.ui.unified.DateRange[]"}}},moreLinkPress:{parameters:{date:{type:"object"},sourceLink:{type:"sap.m.Link"}}},appointmentDrop:{parameters:{appointment:{type:"sap.ui.unified.CalendarAppointment"},startDate:{type:"object"},endDate:{type:"object"},copy:{type:"boolean"}}},appointmentSelect:{parameters:{appointment:{type:"sap.ui.unified.CalendarAppointment"},appointments:{type:"sap.ui.unified.CalendarAppointment[]"}}}}},renderer:S});N.prototype.init=function(){const e=42;this._aLinks=[];this._handleMorePress=this._handleMorePress.bind(this);this._oDateFormat=i.getDateTimeInstance({pattern:"YYYYMMdd"});this._oFormatAriaApp=i.getDateTimeInstance({pattern:"EEEE, MMMM d, yyyy 'at' "+this._getCoreLocaleData().getTimePattern("medium")});this._oFormatAriaFullDayCell=i.getDateTimeInstance({pattern:"EEEE, MMMM d, yyyy"});this.setStartDate(L.getInstance());this._configureAppointmentsDragAndDrop();this._oUnifiedRB=sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified");this._aMoreCountPerDay=[];this._aMoreCountPerDay.length=e;this._aMoreCountPerDay.fill(0);this._oSelectionStartDate=null;this._bReversiveSelection=false};N.prototype._getDateColumn=function(e,t,a){let n=0;for(let i=0;i<e.length;i++){if(e[i]&&t.isSame(e[i])){break}n++;if(n===a){n=0}}return n};N.prototype._getDateRow=function(e,t,a){let n=0;for(let i=0;i<e.length;i++){if(e[i]&&t.isSame(e[i])){n=Math.floor(i/a);break}n+=1;if(n===a-1){n=0}}return n};N.prototype._getRowEndIndex=function(e,t,a){let n=0;for(let i=1;i<e.length;i++){if(t<=i*a-1){n=i*a-1;break}}return n};N.prototype.exit=function(){if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation}for(var e=0;e<this._aLinks.length;e++){if(this._aLinks[e]){this._aLinks[e].removeDelegate(this.oAfterLinkRenderDelegate);this._aLinks[e].destroy()}}delete this._aLinks};N.prototype.onBeforeRendering=function(){const e=this.getStartDate(),t=this._getCells();this._iStartDayOffset=t.indexOf(t.find(e=>e.getDate()===1));this._oAppointmentsToRender=this._calculateAppointmentsNodes(e);this._createAppointmentsDndPlaceholders(e);this._oInvisibleMessage=A.getInstance();if(this.getFirstDayOfWeek()!==-1&&this.getCalendarWeekNumbering()){h.warning("Both properties firstDayOfWeek and calendarWeekNumbering should not be used at the same time!")}};N.prototype._checkDateSelected=function(e){var t=this.getAggregation("selectedDates");var a;var n;var i;if(!t){return false}for(var s=0;s<t.length;s++){a=t[s];n=a.getStartDate()&&r.fromLocalJSDate(a.getStartDate());i=a.getEndDate()&&r.fromLocalJSDate(a.getEndDate());if(n&&e.isSame(n)||n&&i&&e.isSameOrAfter(n)&&e.isSameOrBefore(i)){return true}}return false};N.prototype._doesContainAppointments=function(e){return this.getAppointments().some(t=>{if(t.getStartDate()&&t.getEndDate()){const a=r.fromLocalJSDate(t.getStartDate());const n=r.fromLocalJSDate(t.getEndDate());return e.isSameOrAfter(a)&&e.isSameOrBefore(n)}return false})};N.prototype._getCellDescription=function(){return D.getLibraryResourceBundle("sap.m").getText("SPC_CELL_DESCRIPTION")};N.prototype.onAfterRendering=function(){this._initItemNavigation();this._aMoreCountPerDay.fill(0)};N.prototype._getColumns=function(){return 7};N.prototype._getRows=function(){return 6};N.prototype._getDateFormatter=function(){return this._oDateFormat};N.prototype._getAppointmetsForADay=function(e){return this._oAppointmentsToRender.filter(function(t){return t.start.valueOf()===e.valueOf()})};N.prototype._getPreviousAppointmetsForADay=function(e){return this._oAppointmentsToRender.filter(function(t){return t.start.valueOf()<e.valueOf()&&t.end.valueOf()>=e.valueOf()}).map(function(t){var a={data:t.data,start:t.start,end:t.end,len:t.len,level:t.level,width:t.width,_nextDay:t._nextDay};a.width-=s._daysBetween(e,t.start);a.hasPrevious=true;return a},this)};N.prototype.onmouseup=function(e){if(e.target.classList.contains("sapMSPCMonthWeekNumber")){const t=Number(e.target.textContent);this.fireWeekNumberPress({weekNumber:t});if(T.SingleSelect===this.getDateSelectionMode()){return}this._bCurrentWeekSelection=true}this._fireSelectionEvent(e)};N.prototype.onmousedown=function(e){if(!e.target.classList.contains("sapMSPCMonthWeekNumber")){return}const t=e.target.nextSibling.querySelectorAll(".sapMSPCMonthDay")[0];const a=this._aGridCells.indexOf(t);this._oItemNavigation.focusItem(a)};N.prototype._addSelectedDate=function(e){var t=this.getAggregation("selectedDates");var a=t&&t.some(function(t){return r.fromLocalJSDate(t.getStartDate()).isSame(r.fromLocalJSDate(e))});if(!a){this.addAggregation("selectedDates",new b({startDate:L.getInstance(e)}))}};N.prototype._rangeSelection=function(e,t){var a=L.getInstance(e),n=0,i=0,s=true,o=false,l,g,p;while(a.getTime()<t.getTime()){n++;if(this._checkDateSelected(r.fromLocalJSDate(a))){i++}a.setDate(a.getDate()+1)}if(i===n){s=false}if(!this._bCurrentWeekSelection&&!s&&e.getTime()<t.getTime()){if(this._bReversiveSelection){e.setDate(e.getDate()+1)}else{t.setDate(t.getDate()-1)}}a=L.getInstance(e);while(a.getTime()<t.getTime()){p=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate());g=document.querySelector('[sap-ui-date="'+p+'"]');if(g){o=g.classList.contains("sapMSPCMonthDaySelected");l=s&&!o||!s&&o;if(l){this._toggleMarkCell(g,a)}}else if(s){this._addSelectedDate(a)}a.setDate(a.getDate()+1)}this._bCurrentWeekSelection=false};N.prototype.onkeydown=function(e){const t=e.which===d.ARROW_UP||e.which===d.ARROW_DOWN||e.which===d.ARROW_LEFT||e.which===d.ARROW_RIGHT;const a=T.MultiSelect===this.getDateSelectionMode();if(t&&!e.shiftKey&&!a){return}if(e.which===d.SPACE||e.which===d.ENTER||t){if((e.which===d.SPACE||e.which===d.ENTER)&&!e.shiftKey){this._fireSelectionEvent(e)}else if((e.which===d.SPACE||e.which===d.ENTER)&&e.shiftKey&&a){this._bCurrentWeekSelection=true;this._fireSelectionEvent(e)}else if(t&&e.shiftKey&&a){this._bMultiDateSelectWithArrow=true;this._fireSelectionEvent(e)}var n=this._findSrcControl(e);if(n&&n.isA("sap.ui.unified.CalendarAppointment")&&!n.getSelected()){this._oInvisibleMessage.announce(this._oUnifiedRB.getText("APPOINTMENT_UNSELECTED"),I.Polite)}e.preventDefault()}if(e.which!==d.TAB){return}if(e.target.classList.contains("sapMSPCMonthDay")){const t=e.target.parentElement;const a=t.querySelectorAll(".sapUiCalendarRowApps");if(a.length){e.preventDefault();a[0].focus()}}else if(e.shiftKey&&e.target.classList.contains("sapMLnk")){const t=e.target.parentElement.parentElement.parentElement;const a=t.querySelectorAll(".sapMSPCMonthLnkMore");const n=a[0].querySelector(".sapMLnk");if(n.id===e.target.id){const a=t.querySelectorAll(".sapUiCalendarRowApps");if(a.length){const t=a[a.length-1];e.preventDefault();t.focus()}}}else if(!e.shiftKey&&e.target.classList.contains("sapUiCalendarRowApps")){const t=e.target.parentElement;const a=t.children;if(a.length){const n=a[a.length-1];if(n.id===e.target.id){const a=t.parentElement.parentElement;const n=a.querySelector(".sapMSPCMonthLnkMore > .sapMLnk");if(n){e.preventDefault();n.focus()}}}}};N.prototype._hasSelectedAppointments=function(){return this.getAppointments().some(e=>e.getSelected())};N.prototype._isSelectAppointment=function(e){return e.target.classList.contains("sapUiCalendarRowApps")||e.target.parentElement&&e.target.parentElement.classList.contains("sapUiCalendarRowApps")};N.prototype._findSelectedAppointment=function(e){var t=e.parentElement,a;if(t.classList.contains("sapUiCalendarRowApps")){a=t.getAttribute("data-sap-ui-related")||t.id}else{a=e.getAttribute("data-sap-ui-related")||e.id}return this.getAppointments().find(function(e){return e.sId===a})};N.prototype._findSelectedRow=function(e){var t=this._findSelectCell(e.target),a=t.parentElement;if(!a||a.classList.contains("sapMSPCMonthDays")){return e.srcControl}};N.prototype._findSelectCell=function(e){if(e.classList.contains("sapMSPCMonthDayNumber")||e.classList.contains("specialDateIndicator")){return e.parentElement}return e};N.prototype._findSrcControl=function(e){var t=e.target;if(this._isSelectAppointment(e)){return this._findSelectedAppointment(t)}return this._findSelectedRow(e)};N.prototype._handleMultiDateSelection=function(t,a,n,i,s){const o=this.getAggregation("selectedDates");const l=T.MultiSelect===this.getDateSelectionMode()&&!s;const g=!this._bMultiDateSelectWithArrow&&!this._bCurrentWeekSelection&&!s;const c=s&&!!this._oSelectionStartDate;const u=this._bCurrentWeekSelection&&l;this._bReversiveSelection=false;if(a.getTime()>n.getTime()){[a,n]=[n,a];this._oSelectionStartDate=L.getInstance(a);this._bReversiveSelection=true}else{this._oSelectionStartDate=L.getInstance(n)}n.setDate(n.getDate()+1);if((i.which===d.SPACE||i.which===d.ENTER)&&!i.shiftKey||!l&&!(i.metaKey||i.ctrlKey||c)){this.removeAllAggregation("selectedDates")}if(g&&!s){this._toggleMarkCell(t,a)}else if(this._bMultiDateSelectWithArrow){this._bMultiDateSelectWithArrow=false;var f=L.getInstance(r.fromLocalJSDate(a));switch(i.which){case d.ARROW_UP:f.setDate(f.getDate()-7);break;case d.ARROW_DOWN:f.setDate(f.getDate()+7);break;case d.ARROW_LEFT:f.setDate(f.getDate()-1);break;case d.ARROW_RIGHT:f.setDate(f.getDate()+1);break;default:break}t=document.querySelector('[sap-ui-date="'+f.getTime()+'"]');a=L.getInstance(f.getTime());a=L.getInstance(f.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate());this._oSelectionStartDate=L.getInstance(a);this._toggleMarkCell(t,a)}else if(u){this._oSelectionStartDate=null;var h=a.getDate(),D=v.getWeekConfigurationValues(this.getCalendarWeekNumbering(),new p(new p(e.getLanguageTag()).toString())),m=this.getFirstDayOfWeek(),_,y;if(m<0||m>6){if(D){_=D.firstDayOfWeek}else{var S=this._getCoreLocaleData();_=S.getFirstDayOfWeek()}}else{_=m}y=h-a.getDay()+_;if(y>h){y-=7}a.setDate(y);n=L.getInstance(a);n.setDate(a.getDate()+7);this._rangeSelection(a,n)}else if(s){this._rangeSelection(a,n)}this._fireSelectionChange(o)};N.prototype._fireSelectionChange=function(e){const t=this.fireSelectedDatesChange({selectedDates:this.getAggregation("selectedDates")});if(!t){this.removeAllAggregation("selectedDates");e.forEach(e=>this.addAggregation("selectedDates",e))}};N.prototype._fireSelectionEvent=function(e){const t=this._findSrcControl(e),a=e.target,n=this._findSelectCell(e.target),i=a&&!!n,r=a&&a.classList.contains("sapMLnk"),s=a&&a.classList.contains("sapMSPCMonthWeekNumber");if(t&&t.isA("sap.m.SinglePlanningCalendarMonthGrid")&&i&&!r||s){this._lastPressedAppointment=undefined;this._fireGridCellSelectionEvent(e,s);if(this._hasSelectedAppointments()){this.fireAppointmentSelect({appointment:undefined,appointments:this._toggleAppointmentSelection(undefined,true)})}}else if(t&&t.isA("sap.ui.unified.CalendarAppointment")){this._lastPressedAppointment=t;const n=e.ctrlKey||e.metaKey;this._fireAppointmentSelection(a,t,n)}};N.prototype._fireAppointmentSelection=function(e,t,a){if(e.parentElement&&e.parentElement.getAttribute("id")){var n=e.parentElement.getAttribute("id");var i=e.parentElement.getAttribute("data-sap-ui-related");var r=n.replace(i+"-","");t._setAppointmentPartSuffix(r)}this.fireAppointmentSelect({appointment:t,appointments:this._toggleAppointmentSelection(t,!a)})};N.prototype._fireGridCellSelectionEvent=function(e,t){const a=t?e.target.nextSibling.querySelectorAll(".sapMSPCMonthDay")[0]:this._findSelectCell(e.target);const n=parseInt(a.getAttribute("sap-ui-date"));let i=L.getInstance(n);i=L.getInstance(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate());let r=L.getInstance(i);let s=false;if(e.ctrlKey||e.metaKey||t||this.getDateSelectionMode()===T.MultiSelect){if(this._oSelectionStartDate&&e.type!=="keydown"&&e.shiftKey&&!t){r=L.getInstance(i);i=L.getInstance(this._oSelectionStartDate);s=true}else{this._oSelectionStartDate=L.getInstance(i)}}else if(!e.shiftKey||!this._oSelectionStartDate){this._oSelectionStartDate=L.getInstance(i)}else{r=L.getInstance(i);i=L.getInstance(this._oSelectionStartDate);s=true}this._handleMultiDateSelection(a,i,r,e,s);!t&&this.fireEvent("cellPress",{startDate:i,endDate:r})};N.prototype._toggleMarkCell=function(e,t){if(e&&!e.classList.contains("sapMSPCMonthDaySelected")){this._addSelectedDate(t)}else{var a=this.getAggregation("selectedDates");if(!a){return}for(var n=0;n<a.length;n++){var i=a[n].getStartDate();if(r.fromLocalJSDate(i).isSame(r.fromLocalJSDate(t))){this.removeAggregation("selectedDates",n);break}}}};N.prototype._toggleAppointmentSelection=function(e,t){var a=[],n,i,r;if(t){n=this.getAppointments();for(r=0,i=n.length;r<i;r++){if((!e||n[r].getId()!==e.getId())&&n[r].getSelected()){n[r].setProperty("selected",false);a.push(n[r])}}}if(e){e.setProperty("selected",!e.getSelected());a.push(e)}return a};N.prototype._getMoreLink=function(e,t,a,n){var i=D.getLibraryResourceBundle("sap.m").getText("SPC_MORE_LINK",[e.toString()]),r=new m({accessibleRole:E.Button,ariaLabelledBy:[n],text:i,press:this._handleMorePress}).addCustomData(new f({key:"date",value:t.valueOf().toString(),writeToDom:true}));this.oAfterLinkRenderDelegate=this._getMoreLinkOnAfterRenderingDelegate(r);if(this._aLinks[a]){this._aLinks[a].removeDelegate(this.oAfterLinkRenderDelegate);this._aLinks[a].destroy()}r.addDelegate(this.oAfterLinkRenderDelegate);this._aLinks[a]=r;return r};N.prototype._getMoreLinkOnAfterRenderingDelegate=function(e){return{onAfterRendering:function(){const t=e.getDomRef();const a=t.getAttribute("aria-labelledby").split(" ")[0];t.setAttribute("aria-labelledby",a)}}};N.prototype._getMoreLinkDescription=function(e,t){const a=this._oFormatAriaFullDayCell.format(t);const n=D.getLibraryResourceBundle("sap.m");return e===1?n.getText("SPC_MORE_LINK_ONE_APPOINTMENT",[a]):n.getText("SPC_MORE_LINK_MULTIPLE_APPOINTMENTS",[e.toString(),a])};N.prototype._handleMorePress=function(e){var t=parseInt(e.getSource().getCustomData()[0].getValue()),a=L.getInstance(t);a=L.getInstance(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate());this.fireEvent("moreLinkPress",{date:a,sourceLink:e.getSource()})};N.prototype._getCoreLocaleData=function(){var e=D.getConfiguration().getFormatSettings().getFormatLocale().toString(),t=new p(e);return g.getInstance(t)};N.prototype._getCells=function(){return this._getVisibleDays(this.getStartDate())};N.prototype._getVerticalLabels=function(){var a=this._getVisibleDays(this.getStartDate()),n=this._getColumns(),s=[],o=new p(e.getLanguageTag()).toString(),l=new r(this.getStartDate().getFullYear(),this.getStartDate().getMonth(),this.getStartDate().getDate()).toUTCJSDate(),g;for(var c=0;c<this._getRows();c++){var u=i.getInstance({pattern:"w",calendarType:t.Gregorian,calendarWeekNumbering:this.getCalendarWeekNumbering()},new p(o));var f=a[c*n].toUTCJSDate();if(f<l){f=l}g=Number(u.format(f,true));s.push(g)}return s};N.prototype._getVisibleDays=function(e){var t,a,n,i,s,o,l=[];if(!e){return l}o=this._getFirstDayOfWeek();t=r.fromLocalJSDate(e);s=new r(t);s.setDate(1);i=s.getDay()-o;if(i<0){i=7+i}if(i>0){s.setDate(1-i)}a=new r(s);for(var g=0;g<this._getColumns()*this._getRows();g++){n=new r(a);l.push(n);a.setDate(a.getDate()+1)}return l};N.prototype._getFirstDayOfWeek=function(){var t,a;if(this.getFirstDayOfWeek()<0||this.getFirstDayOfWeek()>6){t=v.getWeekConfigurationValues(this.getCalendarWeekNumbering(),new p(new p(e.getLanguageTag()).toString()));if(t){return t.firstDayOfWeek}else{a=this._getCoreLocaleData();return a.getFirstDayOfWeek()}}else{return this.getFirstDayOfWeek()}};N.prototype._getAppointmentsToRender=function(){return this._oAppointmentsToRender};N.prototype._getFirstAndLastVisibleDates=function(){const e=this._getVisibleDays(this.getStartDate());return{oStartDate:e[0].toLocalJSDate(),oEndDate:e[e.length-1].toLocalJSDate()}};N.prototype._calculateAppointmentsNodes=function(e){var t=this._getVisibleDays(e),a=t[0],n=t[t.length-1],i=this.getAppointments().filter(function(e){var t=e.getStartDate()&&e.getEndDate();if(!t){h.warning("Appointment "+e.getId()+" has no start or no end date. It is ignored.")}return t}).map(function(e){var t=r.fromLocalJSDate(e.getStartDate()),a=r.fromLocalJSDate(e.getEndDate());return{data:e,start:t,end:a,len:s._daysBetween(a,t)}}).filter(function(e){return s._isBetween(e.start,a,n,true)||s._isBetween(e.end,a,n,true)||s._isBetween(a,e.start,n,true)&&s._isBetween(n,a,e.end,true)}).sort(function e(t,a){return t.data.getStartDate().getTime()-a.data.getStartDate().getTime()}),o=[],l=this._getVisibleDays(e),g=this._getMaxAppointments(),p,c,u,f,d,D,m,_,y,S;for(let e=0;e<t.length;e++){o.push([])}for(let e=0;e<i.length;e++){D=i[e];m=s._daysBetween(D.start,t[0]);y=m+D.len;_=this._findStartDateIndex(l,D,this._iStartDayOffset);m=m>0?m:0;y=y<t.length?y:t.length-1;D.width=D.len+1;S=o[m].indexOf(true);if(S===-1){S=o[m].length}u=this._findNextFreeDayAndLevel(D,o,m,S);p=u.freeDayIndex;c=u.freeLevelIndex;D.level=c;D._nextDay=p;if(D.len&&p>_){D._overflows=true}else{D._overflows=false;if(D._nextDay>-1){D._nextDay=m}}if(D._nextDay>-1){d=true}if(d&&D._overflows&&D.len&&D.level<g){D._nextDayLevel=c;D._nextDay=p;if(d){for(let e=0;e<=D.width;e++){f=p+e<=y;if(f){o[p+e][c]=true}}}for(let e=this._findStartDateIndex(l,D,this._iStartDayOffset);e<p;e++){if(e>-1){this._aMoreCountPerDay[e]+=1}}}else{u=this._findNextFreeDayAndLevel(D,o,m,S);S=u.freeLevelIndex;D.level=S;for(let e=m;e<=y;e++){o[e][S]=true;if(!D._nextDay&&D._nextDay!==0||S>=g-1){this._aMoreCountPerDay[e]+=1}}}}this._aAppsLevelsPerDay=o;return i};N.prototype._findStartDateIndex=function(e,t){const a=e.find(e=>e.isSame(t.start));return e.indexOf(a)};N.prototype._findNextFreeDayAndLevel=function(e,t,a,n){const i=this._isCompact()?3:2;let r=n,s,o,l,g,p;for(let n=0;n<e.width;n++){o=t[a+n];if(!o){break}l=o&&!o[0]||!o[1];g=o&&!o[2]&&this._isCompact();if(l||g){s=a+n;for(let e=0;e<i;e++){p=!o[e];if(p){s=a+n;r=e;break}}break}else{r=o.length}}return{freeDayIndex:s,freeLevelIndex:r}};N.prototype._getMoreCountPerCell=function(e){var t=this._aAppsLevelsPerDay[e];var a=this._getMaxAppointments();var n=0;if(t.length<a){return 0}for(var i=a-1;i<t.length;i++){if(!t[i]){n++}}return n};N.prototype._configureAppointmentsDragAndDrop=function(){this.addDragDropConfig(new u({sourceAggregation:"appointments",targetAggregation:"_appsPlaceholders",dragStart:function(e){if(!this.getEnableAppointmentsDragAndDrop()){e.preventDefault();return false}var t=function(){var e=jQuery(".sapMSinglePCOverlay");setTimeout(function(){e.addClass("sapMSinglePCOverlayDragging")});jQuery(document).one("dragend",function(){e.removeClass("sapMSinglePCOverlayDragging")})};t()}.bind(this),dragEnter:function(e){var t=e.getParameter("dragSession"),a=function(){var e=jQuery(t.getIndicator());e.css("min-height",t.getDropControl().$().outerHeight());e.css("min-width",t.getDropControl().$().outerWidth())};if(!t.getIndicator()){setTimeout(a,0)}else{a()}},drop:function(e){var t=e.getParameter("dragSession"),a=t.getDragControl(),n=t.getDropControl(),i=n.getDate(),o=r.fromLocalJSDate(a.getStartDate()),l=r.fromLocalJSDate(a.getEndDate()),g=s._daysBetween(i,o),p=new r(o),c=new r(l),u=e.getParameter("browserEvent"),f=u.metaKey||u.ctrlKey;p.setDate(p.getDate()+g);c.setDate(c.getDate()+g);this.$().find(".sapMSinglePCOverlay").removeClass("sapMSinglePCOverlayDragging");if(o.valueOf()===i.valueOf()){return}this.fireAppointmentDrop({appointment:a,startDate:p.toLocalJSDate(),endDate:c.toLocalJSDate(),copy:f})}.bind(this)}))};N.prototype._initItemNavigation=function(){var e=this.getDomRef();this._aGridCells=this.$().find(".sapMSPCMonthDay").toArray();if(!this._oItemNavigation){this._oItemNavigation=new c;this.addDelegate(this._oItemNavigation);this._oItemNavigation.attachEvent(c.Events.BorderReached,this._itemNavigationBorderReached,this)}this._oItemNavigation.setRootDomRef(e);this._oItemNavigation.setItemDomRefs(this._aGridCells);this._oItemNavigation.setCycling(false);this._oItemNavigation.setDisabledModifiers({sapnext:["alt","meta"],sapprevious:["alt","meta"],saphome:["alt","meta"],sapend:["meta"]});this._oItemNavigation.setTableMode(false).setColumns(this._getColumns(),true);this._oItemNavigation.setPageSize(this._aGridCells.length)};N.prototype._itemNavigationBorderReached=function(e){var t,a,n=e.getParameter("event"),i;if(n.target.classList.contains("sapMSPCMonthDay")){t=n.target;a=parseInt(t.getAttribute("sap-ui-date"));switch(n.keyCode){case d.ARROW_LEFT:i=-1;break;case d.ARROW_UP:i=-this._getColumns();break;case d.ARROW_RIGHT:i=1;break;case d.ARROW_DOWN:i=this._getColumns();break;default:break}this.fireEvent("borderReached",{startDate:a,offset:i})}};N.prototype._createAppointmentsDndPlaceholders=function(e){var t=this._getVisibleDays(e);this.destroyAggregation("_appsPlaceholders");for(var a=0;a<t.length;a++){var n=new w({date:t[a]});this.addAggregation("_appsPlaceholders",n,true)}};var w=n.extend("sap.m.SinglePlanningCalendarMonthGrid._internal.IntervalPlaceholder",{metadata:{library:"sap.m",properties:{date:{type:"object",group:"Data"}}},renderer:{apiVersion:2,render:function(e,t){e.openStart("div",t).class("sapMSinglePCPlaceholder").openEnd().close("div")}}});N.prototype._getCellStartInfo=function(e){var t=D.getLibraryResourceBundle("sap.ui.unified").getText("CALENDAR_START_TIME"),a=this._oFormatAriaFullDayCell.format(e.toLocalJSDate()),n=D.getLibraryResourceBundle("sap.ui.unified").getText("LEGEND_TODAY"),i=e.isSame(r.fromLocalJSDate(L.getInstance()))?`${n}, ${a}`:a;return`${t}: ${i}`};N.prototype._getAppointmentAnnouncementInfo=function(e){var t=e.getStartDate(),a=e.getEndDate(),n=this._isAllDayAppointment(t,a),i=this._isSingleDayAppointment(t,a),r=y.findLegendItemForItem(D.byId(this._sLegendId),e),s;if(n&&i){s=this._oUnifiedRB.getText("CALENDAR_ALL_DAY_INFO",[this._oFormatAriaFullDayCell.format(t)])}else if(n){s=this._oUnifiedRB.getText("CALENDAR_APPOINTMENT_INFO",[this._oFormatAriaFullDayCell.format(t),this._oFormatAriaFullDayCell.format(a)])}else{s=this._oUnifiedRB.getText("CALENDAR_APPOINTMENT_INFO",[this._oFormatAriaApp.format(t),this._oFormatAriaApp.format(a)])}return s+", "+r};N.prototype._isAllDayAppointment=function(e,t){return s._isMidnight(e)&&s._isMidnight(t)};N.prototype._isSingleDayAppointment=function(e,t){return!t||e.getDate()===t.getDate()};N.prototype._getMaxAppointments=function(){return this._isCompact()?4:3};N.prototype._getDensitySizes=function(){return this._isCompact()?{appHeight:M,cellHeaderHeight:R}:{appHeight:k,cellHeaderHeight:P}};N.prototype._isCompact=function(){var e=this.getDomRef()||(this.getParent()&&this.getParent().getDomRef&&this.getParent().getDomRef()||this.getParent()&&this.getParent().getRootNode&&this.getParent().getRootNode()||document.body);while(e&&e.classList){if(e.classList.contains("sapUiSizeCompact")){return true}e=e.parentNode}return false};N.prototype._getSpecialDates=function(){var e=this.getSpecialDates();for(var t=0;t<e.length;t++){var a=e[t].getSecondaryType()===l.CalendarDayType.NonWorking&&e[t].getType()!==l.CalendarDayType.NonWorking;if(a){var n=new o;n.setType(l.CalendarDayType.NonWorking);n.setStartDate(e[t].getStartDate());if(e[t].getEndDate()){n.setEndDate(e[t].getEndDate())}e.push(n)}}return e};N.prototype._isNonWorkingDay=function(e){const t=this._getSpecialDates().filter(t=>t.getStartDate()&&r.fromLocalJSDate(t.getStartDate()).isSame(e));const a=t.length>0&&t[0].getType();const n=t.length>0&&t[0].getSecondaryType();const i=s._isWeekend(e,this._getCoreLocaleData())&&a!==l.CalendarDayType.Working&&n!==l.CalendarDayType.Working;return a===l.CalendarDayType.NonWorking||n===l.CalendarDayType.NonWorking||i};N.prototype.getFocusDomRef=function(){return this._lastPressedAppointment?this._lastPressedAppointment.getDomRef():this._oItemNavigation.getFocusedDomRef()};return N});
//# sourceMappingURL=SinglePlanningCalendarMonthGrid.js.map