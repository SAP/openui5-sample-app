/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","./library","sap/ui/core/ControlBehavior","sap/ui/core/Element","sap/ui/core/LabelEnablement","sap/ui/core/InvisibleText","sap/ui/core/Lib","sap/ui/core/library","sap/ui/core/StaticArea","sap/ui/Device","./FileUploaderRenderer","sap/ui/dom/containsOrEquals","sap/ui/events/KeyCodes","sap/base/Log","sap/base/security/encodeXML","sap/ui/thirdparty/jquery","./FileUploaderHelper","sap/ui/dom/jquery/Aria"],function(e,t,i,s,o,r,a,l,n,p,h,u,f,d,g,jQuery,c){var y=l.ValueState;var m=t.FileUploaderHttpRequestMethod;var F=e.extend("sap.ui.unified.FileUploader",{metadata:{interfaces:["sap.ui.core.IFormContent","sap.ui.unified.IProcessableBlobs"],library:"sap.ui.unified",designtime:"sap/ui/unified/designtime/FileUploader.designtime",properties:{value:{type:"string",group:"Data",defaultValue:""},enabled:{type:"boolean",group:"Behavior",defaultValue:true},uploadUrl:{type:"sap.ui.core.URI",group:"Data",defaultValue:""},name:{type:"string",group:"Data",defaultValue:null},width:{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:""},uploadOnChange:{type:"boolean",group:"Behavior",defaultValue:false},additionalData:{type:"string",group:"Data",defaultValue:null},sameFilenameAllowed:{type:"boolean",group:"Behavior",defaultValue:false},buttonText:{type:"string",group:"Misc",defaultValue:null},fileType:{type:"string[]",group:"Data",defaultValue:null},multiple:{type:"boolean",group:"Behavior",defaultValue:false},maximumFileSize:{type:"float",group:"Data",defaultValue:null},mimeType:{type:"string[]",group:"Data",defaultValue:null},sendXHR:{type:"boolean",group:"Behavior",defaultValue:false},httpRequestMethod:{type:"sap.ui.unified.FileUploaderHttpRequestMethod",group:"Behavior",defaultValue:m.Post},placeholder:{type:"string",group:"Appearance",defaultValue:null},style:{type:"string",group:"Appearance",defaultValue:null},buttonOnly:{type:"boolean",group:"Appearance",defaultValue:false},useMultipart:{type:"boolean",group:"Behavior",defaultValue:true},maximumFilenameLength:{type:"int",group:"Data",defaultValue:null},valueState:{type:"sap.ui.core.ValueState",group:"Data",defaultValue:y.None},valueStateText:{type:"string",group:"Misc",defaultValue:null},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""},iconHovered:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""},iconSelected:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""},iconFirst:{type:"boolean",group:"Appearance",defaultValue:true},iconOnly:{type:"boolean",group:"Appearance",defaultValue:false},directory:{type:"boolean",group:"Behavior",defaultValue:false}},aggregations:{parameters:{type:"sap.ui.unified.FileUploaderParameter",multiple:true,singularName:"parameter"},headerParameters:{type:"sap.ui.unified.FileUploaderParameter",multiple:true,singularName:"headerParameter"},xhrSettings:{type:"sap.ui.unified.FileUploaderXHRSettings",multiple:false}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{change:{parameters:{newValue:{type:"string"},files:{type:"object[]"}}},uploadComplete:{parameters:{fileName:{type:"string"},response:{type:"string"},readyStateXHR:{type:"string"},status:{type:"int"},responseRaw:{type:"string"},headers:{type:"object"},requestHeaders:{type:"object[]"}}},typeMissmatch:{parameters:{fileName:{type:"string"},fileType:{type:"string"},mimeType:{type:"string"}}},fileSizeExceed:{parameters:{fileName:{type:"string"},fileSize:{type:"string"}}},fileEmpty:{parameters:{fileName:{type:"string"}}},fileAllowed:{},uploadProgress:{parameters:{lengthComputable:{type:"boolean"},loaded:{type:"float"},total:{type:"float"},fileName:{type:"string"},requestHeaders:{type:"object[]"}}},uploadAborted:{parameters:{fileName:{type:"string"},requestHeaders:{type:"object[]"}}},filenameLengthExceed:{parameters:{fileName:{type:"string"}}},uploadStart:{parameters:{fileName:{type:"string"},requestHeaders:{type:"object[]"}}},beforeDialogOpen:{},afterDialogClose:{}}},renderer:h});F.prototype.init=function(){var e=this;this.oFileUploaderHelper=c.getHelper();this.oFilePath=this.oFileUploaderHelper.createTextField(this.getId()+"-fu_input").addEventDelegate({onAfterRendering:function(){if(e.getWidth()){e._resizeDomElements()}}});this.oBrowse=this.oFileUploaderHelper.createButton(this.getId()+"-fu_button");this.oFilePath.setParent(this);this.oBrowse.setParent(this);this.oFileUpload=null;this.bMobileLib=this.oBrowse.getMetadata().getName()=="sap.m.Button";if(i.isAccessibilityEnabled()){if(!F.prototype._sAccText){var t=a.getResourceBundleFor("sap.ui.unified");F.prototype._sAccText=t.getText("FILEUPLOAD_ACC")}if(this.oBrowse.addAriaDescribedBy){this.oBrowse.addAriaDescribedBy(this.getId()+"-AccDescr")}if(this.oFilePath){this.oFilePath.addAriaLabelledBy(r.getStaticId("sap.ui.unified","FILEUPLOAD_FILENAME"))}}this._submitAfterRendering=false};F.prototype.setIcon=function(e){this.oBrowse.setIcon(e);this.setProperty("icon",e,false);return this};F.prototype.setIconHovered=function(e){this.setProperty("iconHovered",e,false);if(this.oBrowse.setIconHovered){this.oBrowse.setIconHovered(e)}return this};F.prototype.setIconSelected=function(e){this.setProperty("iconSelected",e,false);if(this.oBrowse.setIconSelected){this.oBrowse.setIconSelected(e)}else{this.oBrowse.setActiveIcon(e)}return this};F.prototype.setIconFirst=function(e){this.oBrowse.setIconFirst(e);this.setProperty("iconFirst",e,false);return this};F.prototype._ensureBackwardsReference=function(){var e=this.oBrowse,t=e.getAriaLabelledBy(),i=o.getReferencingLabels(this);if(t){i.forEach(function(i){if(t.indexOf(i)===-1){e.addAriaLabelledBy(i)}})}return this};F.prototype.setName=function(e){this.setProperty("name",e,false);this._rerenderInputField();return this};F.prototype.setFileType=function(e){var t=this._convertTypesToArray(e);this.setProperty("fileType",t,false);this._rerenderInputField();return this};F.prototype.setMimeType=function(e){var t=this._convertTypesToArray(e);this.setProperty("mimeType",t,false);this._rerenderInputField();return this};F.prototype.setMultiple=function(e){this.setProperty("multiple",e,false);this._rerenderInputField();return this};F.prototype.setDirectory=function(e){this.setProperty("directory",e,false);this._rerenderInputField();return this};F.prototype._rerenderInputField=function(){if(this.oFileUpload){var e=this.oFileUpload.files;this._clearInputField();this._prepareFileUpload();jQuery(this.oFileUpload).on("change",this.handlechange.bind(this));this.oFileUpload.files=e;this._cacheDOMEls()}};F.prototype.setTooltip=function(t){var i;e.prototype.setTooltip.call(this,t);if(this.oFileUpload){i=this.getTooltip_AsString();if(i){this.oFileUpload.setAttribute("title",i)}else{this.oFileUpload.setAttribute("title",this.getValue()?this.getValue():this._getNoFileChosenText())}}return this};F.prototype.addAriaLabelledBy=function(e){this.addAssociation("ariaLabelledBy",e);this.oBrowse.addAriaLabelledBy(e);return this};F.prototype.removeAriaLabelledBy=function(e){var t=this.removeAssociation("ariaLabelledBy",e);if(!t){return}this.oBrowse.removeAriaLabelledBy(t);return t};F.prototype.removeAllAriaLabelledBy=function(){var e=this.removeAllAssociation("ariaLabelledBy"),t=this.oBrowse.getAriaLabelledBy();e.forEach(function(e){if(t.indexOf(e)>=0){this.oBrowse.removeAriaLabelledBy(e)}}.bind(this));return e};F.prototype.addAriaDescribedBy=function(e){this.addAssociation("ariaDescribedBy",e);this.oBrowse.addAriaDescribedBy(e);return this};F.prototype.removeAriaDescribedBy=function(e){var t=this.removeAssociation("ariaDescribedBy",e);if(!t){return}this.oBrowse.removeAriaDescribedBy(t);return t};F.prototype.removeAllAriaDescribedBy=function(){var e=this.removeAllAssociation("ariaDescribedBy"),t=this.oBrowse.getAriaDescribedBy();e.forEach(function(e){if(t.indexOf(e)>=0){this.oBrowse.removeAriaDescribedBy(e)}}.bind(this));return e};F.prototype._generateAccDescriptionText=function(){var e=this.getTooltip_AsString(),t=this.getPlaceholder(),i=this.getValue(),s=o.isRequired(this),r="";if(s){r+=a.getResourceBundleFor("sap.ui.unified").getText("FILEUPLOAD_REQUIRED")+" "}if(e){r+=e+" "}if(i){r+=i+" "}else if(t){r+=t+" "}r+=this._sAccText;return r};F.prototype._convertTypesToArray=function(e){if(typeof e==="string"){if(e===""){return[]}else{return e.split(",").map(function(e){return e.trim()})}}return e};F.prototype.exit=function(){this.oFilePath.destroy();this.oBrowse.destroy();if(this.oIFrameRef){jQuery(this.oIFrameRef).off();n.getDomRef().removeChild(this.oIFrameRef);this.oIFrameRef=null}if(this.oFileUpload){this._clearInputField()}if(this.FUEl){this.FUEl=null}if(this.FUDataEl){this.FUDataEl=null}};F.prototype._clearInputField=function(){jQuery(this.oFileUpload).off();this.oFileUpload.parentElement.removeChild(this.oFileUpload);this.oFileUpload=null};F.prototype.onBeforeRendering=function(){var e=n.getDomRef();jQuery(this.oFileUpload).appendTo(e);if(!this.getName()){d.warning("Name property is not set. Id would be used instead to identify the control on the server.",this)}jQuery(this.oFileUpload).off();if(this.getIconOnly()&&this.getButtonOnly()){this.oBrowse.setText("");this.oBrowse.setTooltip(this.getTooltip_AsString()||this.getBrowseText())}else if(this.getIconOnly()){this.oBrowse.setText("");this.oBrowse.setTooltip(this.getBrowseText())}else{this.oBrowse.setText(this.getButtonText()||this.getBrowseText());this.oBrowse.setTooltip("")}this.oFilePath.setPlaceholder(this.getPlaceholder())};F.prototype.onAfterRendering=function(){this.prepareFileUploadAndIFrame();this._cacheDOMEls();this._addLabelFeaturesToBrowse();jQuery(this.oFileUpload).on("change",this.handlechange.bind(this));if(!this.bMobileLib){this.oFilePath.$().attr("tabindex","-1")}else{this.oFilePath.$().find("input").attr("tabindex","-1")}setTimeout(this._recalculateWidth.bind(this),0);this.oFilePath.$().find("input").removeAttr("role").attr("aria-live","polite");if(this._submitAfterRendering){this._submitAndResetValue();this._submitAfterRendering=false}};F.prototype._cacheDOMEls=function(){this.FUEl=this.getDomRef("fu");this.FUDataEl=this.getDomRef("fu_data")};F.prototype.onfocusin=function(e){if(!this.oFilePath.shouldValueStateMessageBeOpened||this.oFilePath.shouldValueStateMessageBeOpened()){this.openValueStateMessage()}};F.prototype.onsapfocusleave=function(e){if(!e.relatedControlId||!u(this.getDomRef(),s.getElementById(e.relatedControlId).getFocusDomRef())){this.closeValueStateMessage()}};F.prototype._recalculateWidth=function(){if(this.getWidth()){if(this.getButtonOnly()&&this.oBrowse.getDomRef()){this.oBrowse.getDomRef().style.width=this.getWidth()}this._resizeDomElements()}};F.prototype.getFocusDomRef=function(){return this.oBrowse.getDomRef()};F.prototype._resizeDomElements=function(){var e=this.getId();this._oBrowseDomRef=this.oBrowse.getDomRef();var t=jQuery(this._oBrowseDomRef);var i=t.parent().outerWidth(true);this._oFilePathDomRef=this.oFilePath.getDomRef();var s=this._oFilePathDomRef;var o=this.getWidth();if(o.substr(-1)=="%"&&s){while(s.id!=e){s.style.width="100%";s=s.parentNode}s.style.width=o}else{if(s){s.style.width=o;var r=jQuery(this._oFilePathDomRef);var a=r.outerWidth()-i;if(a<0){this.oFilePath.getDomRef().style.width="0px";if(this.oFileUpload){this.oFileUpload.style.width=t.outerWidth(true)}}else{this.oFilePath.getDomRef().style.width=a+"px"}}}};F.prototype.onresize=function(){this._recalculateWidth()};F.prototype.onThemeChanged=function(){this._recalculateWidth()};F.prototype.setEnabled=function(e){var t=jQuery(this.oFileUpload);this.setProperty("enabled",e,false);this.oFilePath.setEnabled(e);this.oBrowse.setEnabled(e);if(this.getEnabled()){t.removeAttr("disabled")}else{t.attr("disabled","disabled")}return this};F.prototype.setValueState=function(e){this.setProperty("valueState",e,false);if(this.oFilePath.setValueState){this.oFilePath.setValueState(e)}else{d.warning("Setting the valueState property with the combination of libraries used is not supported.",this)}var t=u(this.getDomRef(),document.activeElement);switch(e){case y.Error:case y.Warning:case y.Success:this.oBrowse.addAssociation("ariaDescribedBy",this.oFilePath.getId()+"-message-sr");if(t){this.openValueStateMessage()}break;default:this.oBrowse.removeAssociation("ariaDescribedBy",this.oFilePath.getId()+"-message-sr");if(t){this.closeValueStateMessage()}}return this};F.prototype.setValueStateText=function(e){if(this.oFilePath.setValueStateText){this.oFilePath.setValueStateText(e)}else{d.warning("Setting the valueStateText property with the combination of libraries used is not supported.",this)}return this.setProperty("valueStateText",e,false)};F.prototype.setStyle=function(e){this.setProperty("style",e,true);if(e){if(e=="Transparent"){if(this.oBrowse.setLite){this.oBrowse.setLite(true)}else{this.oBrowse.setType("Transparent")}}else{if(this.oBrowse.setType){this.oBrowse.setType(e)}else{if(e=="Emphasized"){e="Emph"}this.oBrowse.setStyle(e)}}}return this};F.prototype.setValue=function(e,t,i){var s=this.getValue();var o;if(s!=e||this.getSameFilenameAllowed()){var r=this.getUploadOnChange()&&e;this.setProperty("value",e,r);if(this.oFileUpload&&!this.getTooltip_AsString()){this.oFileUpload.setAttribute("title",e?e:this._getNoFileChosenText())}if(this.oFilePath){this.oFilePath.setValue(e);if(this.oBrowse.getDomRef()&&!i&&u(this.getDomRef(),document.activeElement)){this.oBrowse.focus()}}var a=this.getDomRef("fu_form"),l=this.getDomRef("fu_input-inner");if(this.oFileUpload&&a&&!e){a.reset();this.getDomRef("fu_input").value="";if(l){l.value=""}jQuery(this.FUDataEl).val(this.getAdditionalData())}if(t){if(window.File){o=this.FUEl.files}if(!this.getSameFilenameAllowed()||e&&s!=e){this.fireChange({id:this.getId(),newValue:e,files:o})}}if(r){this.upload()}}return this};F.prototype.clear=function(){var e=this.getDomRef("fu_form");if(e){e.reset()}return this.setValue("",false,true)};F.prototype.openFilePicker=function(){if(this.oFileUpload){this.oFileUpload.click()}return this};F.prototype.getInputReference=function(){return this.oFileUpload};F.prototype.onmousedown=function(e){if(!this.bMobileLib){this.oBrowse.onmousedown(e)}};F.prototype.onmouseup=function(e){if(!this.bMobileLib){this.oBrowse.onmouseup(e)}};F.prototype.onmouseover=function(e){if(!this.bMobileLib){jQuery(this.oBrowse.getDomRef()).addClass("sapUiBtnStdHover");this.oBrowse.onmouseover(e)}};F.prototype.onmouseout=function(e){if(!this.bMobileLib){jQuery(this.oBrowse.getDomRef()).removeClass("sapUiBtnStdHover");this.oBrowse.onmouseout(e)}};F.prototype.setAdditionalData=function(e){this.setProperty("additionalData",e,true);var t=this.FUDataEl;if(t){e=this.getAdditionalData()||"";t.value=e}return this};F.prototype.sendFiles=function(e,t){var i=this;var s=true;for(var o=0;o<e.length;o++){if(!e[o].bPosted){s=false;break}}if(s){if(this.getSameFilenameAllowed()&&this.getUploadOnChange()){i.setValue("",true)}return}var r=e[t];var a=r.file.name?r.file.name:"MultipartFile";var l=r.requestHeaders;var n=function(e){var t={lengthComputable:!!e.lengthComputable,loaded:e.loaded,total:e.total};i.fireUploadProgress({lengthComputable:t.lengthComputable,loaded:t.loaded,total:t.total,fileName:a,requestHeaders:l})};r.xhr.upload.addEventListener("progress",n);r.xhr.onreadystatechange=function(){var e;var t;var s={};var o;var n;var p;var h;h=r.xhr.readyState;var u=r.xhr.status;if(r.xhr.readyState==4){if(r.xhr.responseXML){e=r.xhr.responseXML.documentElement.textContent}t=r.xhr.response;o=r.xhr.getAllResponseHeaders();if(o){n=o.split("\r\n");for(var f=0;f<n.length;f++){if(n[f]){p=n[f].indexOf(": ");s[n[f].substring(0,p)]=n[f].substring(p+2)}}}i.fireUploadComplete({fileName:a,headers:s,response:e,responseRaw:t,readyStateXHR:h,status:u,requestHeaders:l})}i._bUploading=false};if(r.xhr.readyState===0||r.bPosted){t++;i.sendFiles(e,t)}else{r.xhr.send(r.file);r.bPosted=true;t++;i.sendFiles(e,t)}};F.prototype.upload=function(e){var t,i;if(!this.getEnabled()){return}t=this.getDomRef("fu_form");try{this._bUploading=true;if(this.getSendXHR()&&window.File){var s=this.FUEl.files;if(e){this._sendProcessedFilesWithXHR(s)}else{this._sendFilesWithXHR(s)}}else if(t){i=t.getAttribute("action");if(i!==this.getUploadUrl()){this._submitAfterRendering=true}else{this._submitAndResetValue()}}}catch(e){d.error("File upload failed:\n"+e.message)}};F.prototype._submitAndResetValue=function(){var e=this.getDomRef("fu_form");e.submit();this.fireUploadStart();this._resetValueAfterUploadStart()};F.prototype.abort=function(e,t){if(!this.getUseMultipart()){var i=this._aXhr.length-1;for(var s=i;s>-1;s--){if(e&&t){for(var o=0;o<this._aXhr[s].requestHeaders.length;o++){var r=this._aXhr[s].requestHeaders[o].name;var a=this._aXhr[s].requestHeaders[o].value;if(r==e&&a==t){this._aXhr[s].xhr.abort();this.fireUploadAborted({fileName:this._aXhr[s].fileName,requestHeaders:this._aXhr[s].requestHeaders});this._aXhr.splice(s,1);d.info("File upload aborted.");break}}}else{this._aXhr[s].xhr.abort();this.fireUploadAborted({fileName:this._aXhr[s].fileName,requestHeaders:this._aXhr[s].requestHeaders});this._aXhr.splice(s,1);d.info("File upload aborted.")}}}else if(this._uploadXHR&&this._uploadXHR.abort){this._uploadXHR.abort();this.fireUploadAborted({fileName:null,requestHeaders:null});d.info("File upload aborted.")}};F.prototype.onclick=function(e){if(this.getSameFilenameAllowed()&&this.getEnabled()){this.setValue("",true)}if(this.oBrowse.getDomRef()&&(p.browser.safari||u(this.getDomRef(),document.activeElement))){this.oBrowse.focus()}if(e.target.getAttribute("type")==="file"){this.fireBeforeDialogOpen();document.body.onfocus=function(){this.fireAfterDialogClose();document.body.onfocus=null}.bind(this)}};F.prototype.onkeydown=function(e){if(!this.getEnabled()){return}if(this.getSameFilenameAllowed()&&this.getUploadOnChange()){this.setValue("",true)}var t=e.keyCode;if(t===f.ENTER){if(this.oFileUpload){this.oFileUpload.click();e.preventDefault();e.stopPropagation()}}this.oBrowse._bPressedSpace=false};F.prototype.onkeyup=function(e){if(!this.getEnabled()){return}if(this.getSameFilenameAllowed()&&this.getUploadOnChange()){this.setValue("",true)}var t=e.keyCode,i=f;if(t===i.DELETE||t===i.BACKSPACE){if(this.oFileUpload){this.setValue("",true)}}else if(t===i.SPACE){this.oFileUpload.click();e.preventDefault();e.stopPropagation()}else if(t!==i.TAB&&t!==i.SHIFT&&t!==i.F6&&t!==i.PAGE_UP&&t!==i.PAGE_DOWN&&t!==i.ESCAPE&&t!==i.END&&t!==i.HOME&&t!==i.ARROW_LEFT&&t!==i.ARROW_UP&&t!==i.ARROW_RIGHT&&t!==i.ARROW_DOWN){e.preventDefault();e.stopPropagation()}this.oBrowse._bPressedSpace=false};F.prototype._isFilenameTooLong=function(e){var t=this.getMaximumFilenameLength();if(t!==0&&e.length>t){d.info("The filename of "+e+" ("+e.length+" characters)  is longer than the maximum of "+t+" characters.");return true}return false};F.prototype.handlechange=function(e){if(this.oFileUpload&&this.getEnabled()){var t=this.getFileType();var i="";var s,o,r,a;var l=this.getDomRef("fu_form");if(window.File){var n=e.target.files;if(this._areFilesAllowed(n)){this.fireFileAllowed();i=this._generateInputValue(n)}else{l.reset();this.setValue("",true,true);return}}else if(t&&t.length>0){s=true;o=this.oFileUpload.value||"";r=o.lastIndexOf(".");a=r===-1?"":o.substring(r+1);for(var h=0;h<t.length;h++){if(a==t[h]){s=false}}if(s){d.info("File: "+o+" is of type "+a+". Allowed types are: "+t+".");this.fireTypeMissmatch({fileName:o,fileType:a});l.reset();this.setValue("",true,true);return}if(this._isFilenameTooLong(o)){this.fireFilenameLengthExceed({fileName:o});l.reset();this.setValue("",true,true);return}if(o){this.fireFileAllowed()}}var u=this.oFileUpload.value||"";var f=u.lastIndexOf("\\");if(f>=0){u=u.substring(f+1)}if(this.getMultiple()||this.getDirectory()){u=i}if(u||p.browser.chrome){this.setValue(u,true)}}};F.prototype._sendFilesWithXHR=function(e){var t,i,s,o,r=this.getXhrSettings();if(e.length>0){if(this.getUseMultipart()){t=1}else{t=e.length}this._aXhr=this._aXhr||[];for(var a=0;a<t;a++){this._uploadXHR=new window.XMLHttpRequest;o={xhr:this._uploadXHR,requestHeaders:[]};this._aXhr.push(o);o.xhr.open(this.getHttpRequestMethod(),this.getUploadUrl(),true);if(r){o.xhr.withCredentials=r.getWithCredentials()}if(this.getHeaderParameters()){var l=this.getHeaderParameters();for(var n=0;n<l.length;n++){i=l[n].getName();s=l[n].getValue();o.requestHeaders.push({name:i,value:s})}}var p=e[a].name;var h=o.requestHeaders;o.fileName=p;o.file=e[a];this.fireUploadStart({fileName:p,requestHeaders:h});for(var u=0;u<h.length;u++){if(o.xhr.readyState===0){break}i=h[u].name;s=h[u].value;o.xhr.setRequestHeader(i,s)}}if(this.getUseMultipart()){var f=new window.FormData;var d=this.FUEl.name;for(var g=0;g<e.length;g++){this._appendFileToFormData(f,d,e[g])}f.append("_charset_","UTF-8");var c=this.FUDataEl.name;if(this.getAdditionalData()){var y=this.getAdditionalData();f.append(c,y)}else{f.append(c,"")}if(this.getParameters()){var m=this.getParameters();for(var F=0;F<m.length;F++){var b=m[F].getName();s=m[F].getValue();f.append(b,s)}}o.file=f;this.sendFiles(this._aXhr,0)}else{this.sendFiles(this._aXhr,0)}this._bUploading=false;this._resetValueAfterUploadStart()}return this};F.prototype._appendFileToFormData=function(e,t,i){if(i instanceof window.Blob&&i.name){e.append(t,i,i.name)}else{e.append(t,i)}};F.prototype._sendProcessedFilesWithXHR=function(e){this.getProcessedBlobsFromArray(e).then(function(e){this._sendFilesWithXHR(e)}.bind(this)).catch(function(e){d.error("File upload failed: "+e&&e.message?e.message:"no details available")});return this};F.prototype._areFilesAllowed=function(e){var t,i,s,o,r,a=this.getMaximumFileSize(),l=this.getMimeType(),n=this.getFileType();for(var p=0;p<e.length;p++){t=e[p].name;r=e[p].type||"unknown";var h=e[p].size/1024/1024;if(a&&h>a){d.info("File: "+t+" is of size "+h+" MB which exceeds the file size limit of "+a+" MB.");this.fireFileSizeExceed({fileName:t,fileSize:h});return false}if(h===0){d.info("File: "+t+" is empty!");this.fireFileEmpty({fileName:t})}if(this._isFilenameTooLong(t)){this.fireFilenameLengthExceed({fileName:t});return false}if(l&&l.length>0){var u=true;for(var f=0;f<l.length;f++){if(r==l[f]||l[f]=="*/*"||r.match(l[f])){u=false}}if(u&&r!=="unknown"){d.info("File: "+t+" is of type "+r+". Allowed types are: "+l+".");this.fireTypeMissmatch({fileName:t,mimeType:r});return false}}if(n&&n.length>0){i=true;s=t.lastIndexOf(".");o=s===-1?"":t.substring(s+1);for(var g=0;g<n.length;g++){if(o.toLowerCase()==n[g].toLowerCase()){i=false}}if(i){d.info("File: "+t+" is of type "+o+". Allowed types are: "+n+".");this.fireTypeMissmatch({fileName:t,fileType:o});return false}}}return true};F.prototype._sendFilesFromDragAndDrop=function(e){if(this._areFilesAllowed(e)){this._sendFilesWithXHR(e)}return this};F.prototype._generateInputValue=function(e){var t="";for(var i=0;i<e.length;i++){t=t+'"'+e[i].name+'" '}return t};F.prototype.getBrowseText=function(){if(!F.prototype._sBrowseText){var e=a.getResourceBundleFor("sap.ui.unified");F.prototype._sBrowseText=e.getText("FILEUPLOAD_BROWSE")}return F.prototype._sBrowseText?F.prototype._sBrowseText:"Browse..."};F.prototype._getNoFileChosenText=function(){if(!F.prototype._sNoFileChosenText){var e=a.getResourceBundleFor("sap.ui.unified");F.prototype._sNoFileChosenText=e.getText("FILEUPLOAD_NO_FILE_CHOSEN")}return F.prototype._sNoFileChosenText?F.prototype._sNoFileChosenText:"No file chosen"};F.prototype.getShortenValue=function(){return this.getValue()};F.prototype.prepareFileUploadAndIFrame=function(){this._prepareFileUpload();if(!this.oIFrameRef){var e=document.createElement("iframe");e.style.display="none";e.id=this.getId()+"-frame";n.getDomRef().appendChild(e);e.contentWindow.name=this.getId()+"-frame";this._bUploading=false;jQuery(e).on("load",function(e){if(this._bUploading){d.info("File uploaded to "+this.getUploadUrl());var t;try{t=this.oIFrameRef.contentWindow.document.body.innerHTML}catch(e){}this.fireUploadComplete({response:t});this._bUploading=false}}.bind(this));this.oIFrameRef=e}};F.prototype._prepareFileUpload=function(){if(!this.oFileUpload){var e=[];e.push("<input ");e.push('type="file" ');e.push('aria-hidden="true" ');if(this.getName()){if(this.getMultiple()||this.getDirectory()){e.push('name="'+g(this.getName())+'[]" ')}else{e.push('name="'+g(this.getName())+'" ')}}else{if(this.getMultiple()||this.getDirectory()){e.push('name="'+this.getId()+'[]" ')}else{e.push('name="'+this.getId()+'" ')}}e.push('id="'+this.getId()+'-fu" ');e.push('tabindex="-1" ');e.push('size="1" ');if(this.getTooltip_AsString()){e.push('title="'+g(this.getTooltip_AsString())+'" ')}else{e.push('title="'+g(this.getValue()?this.getValue():this._getNoFileChosenText())+'" ')}if(!this.getEnabled()){e.push('disabled="disabled" ')}if(this.getDirectory()){e.push("webkitdirectory ")}if(this.getMultiple()){e.push("multiple ")}if((this.getMimeType()||this.getFileType())&&window.File){var t=this._getAcceptedTypes();e.push('accept="'+g(t)+'" ')}e.push(">");this.oFileUpload=jQuery(e.join("")).prependTo(this.$().find(".sapUiFupInputMask")).get(0)}else{jQuery(this.oFileUpload).prependTo(this.$().find(".sapUiFupInputMask"))}};F.prototype.openValueStateMessage=function(){if(this.oFilePath.openValueStateMessage){this.oFilePath.openValueStateMessage()}};F.prototype.closeValueStateMessage=function(){if(this.oFilePath.closeValueStateMessage){this.oFilePath.closeValueStateMessage()}};F.prototype._getAcceptedTypes=function(){var e=this.getMimeType()||[],t=this.getFileType()||[];t=t.map(function(e){return e.indexOf(".")===0?e:"."+e});return t.concat(e).join(",")};F.prototype._resetValueAfterUploadStart=function(){d.info("File uploading to "+this.getUploadUrl());if(this.getSameFilenameAllowed()&&this.getUploadOnChange()&&this.getUseMultipart()){this.setValue("",true)}};F.prototype._addLabelFeaturesToBrowse=function(){let e;const t=e=>{e.preventDefault();e.stopPropagation();this.FUEl.click()};if(this.oBrowse&&this.oBrowse.$().length){e=this.oBrowse.$();if(this.oBrowse.getAriaLabelledBy()){o.getReferencingLabels(this).forEach(function(e){const i=s.getElementById(e).$();i.off("click").on("click",t)},this)}e.off("click").on("click",t);e.off("dragover").on("dragover",e=>{e.preventDefault();e.stopPropagation()});e.off("dragenter").on("dragenter",e=>{e.preventDefault();e.stopPropagation()});e.off("drop").on("drop",e=>{e.preventDefault();e.stopPropagation();var t=e.originalEvent.dataTransfer.files;if(!this.getMultiple()&&t.length>1||this.getDirectory()){return}this.oFileUpload.files=t;var i={target:{files:t}};this.handlechange(i)})}};F.prototype.getProcessedBlobsFromArray=function(e){return new Promise(function(t){t(e)})};F.prototype.checkFileReadable=function(){return new Promise(function(e,t){var i;if(window.File&&this.FUEl&&this.FUEl.files.length){var i=new FileReader;i.readAsArrayBuffer(this.FUEl.files[0].slice(0,1));i.onload=function(){e()};i.onerror=function(){t(i.error)}}else{e()}}.bind(this))};return F});
//# sourceMappingURL=FileUploader.js.map