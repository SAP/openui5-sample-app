/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/DataType","sap/ui/core/Lib","sap/ui/core/message/MessageType","sap/ui/core/mvc/ViewType","./CalendarType"],function(e,i,o,r,a){"use strict";var t=i.init({name:"sap.ui.core",version:"1.128.0",designtime:"sap/ui/core/designtime/library.designtime",apiVersion:2,types:["any","boolean","float","int","object","string","void","sap.ui.core.AbsoluteCSSSize","sap.ui.core.AccessibleRole","sap.ui.core.AccessibleLandmarkRole","sap.ui.core.aria.HasPopup","sap.ui.core.BarColor","sap.ui.core.BusyIndicatorSize","sap.ui.core.CalendarType","sap.ui.core.CSSColor","sap.ui.core.CSSSize","sap.ui.core.CSSSizeShortHand","sap.ui.core.Collision","sap.ui.core.ComponentLifecycle","sap.ui.core.Design","sap.ui.core.Dock","sap.ui.core.HorizontalAlign","sap.ui.core.ID","sap.ui.core.IconColor","sap.ui.core.ImeMode","sap.ui.core.IndicationColor","sap.ui.core.ItemSelectionMode","sap.ui.core.MessageType","sap.ui.core.OpenState","sap.ui.core.Orientation","sap.ui.core.Percentage","sap.ui.core.Priority","sap.ui.core.ScrollBarAction","sap.ui.core.Scrolling","sap.ui.core.SortOrder","sap.ui.core.TextAlign","sap.ui.core.TextDirection","sap.ui.core.TitleLevel","sap.ui.core.URI","sap.ui.core.ValueState","sap.ui.core.VerticalAlign","sap.ui.core.Wrapping","sap.ui.core.InvisibleMessageMode","sap.ui.core.dnd.DropEffect","sap.ui.core.dnd.DropLayout","sap.ui.core.dnd.DropPosition","sap.ui.core.mvc.ViewType","sap.ui.core.routing.HistoryDirection"],interfaces:["sap.ui.core.IShrinkable","sap.ui.core.Label","sap.ui.core.ILabelable","sap.ui.core.PopupInterface","sap.ui.core.Toolbar","sap.ui.core.IContextMenu","sap.ui.core.IFormContent","sap.ui.core.dnd.IDragInfo","sap.ui.core.dnd.IDropInfo","sap.ui.core.IDScope","sap.ui.core.ITitleContent","sap.ui.core.IAsyncContentCreation","sap.ui.core.IPlaceholderSupport","sap.ui.core.IColumnHeaderMenu"],controls:["sap.ui.core.ComponentContainer","sap.ui.core.Control","sap.ui.core.HTML","sap.ui.core.Icon","sap.ui.core.InvisibleText","sap.ui.core.LocalBusyIndicator","sap.ui.core.ScrollBar","sap.ui.core.TooltipBase","sap.ui.core.XMLComposite","sap.ui.core.mvc.HTMLView","sap.ui.core.mvc.JSONView","sap.ui.core.mvc.JSView","sap.ui.core.mvc.TemplateView","sap.ui.core.mvc.View","sap.ui.core.mvc.XMLView","sap.ui.core.tmpl.DOMElement","sap.ui.core.tmpl.TemplateControl","sap.ui.core.util.Export"],elements:["sap.ui.core.CustomData","sap.ui.core.Element","sap.ui.core.Item","sap.ui.core.LayoutData","sap.ui.core.ListItem","sap.ui.core.Message","sap.ui.core.SeparatorItem","sap.ui.core.Title","sap.ui.core.VariantLayoutData","sap.ui.core.dnd.DragDropBase","sap.ui.core.dnd.DragInfo","sap.ui.core.dnd.DropInfo","sap.ui.core.dnd.DragDropInfo","sap.ui.core.search.OpenSearchProvider","sap.ui.core.search.SearchProvider","sap.ui.core.tmpl.DOMAttribute","sap.ui.core.util.ExportCell","sap.ui.core.InvisibleMessage"],extensions:{"sap.ui.support":{diagnosticPlugins:["sap/ui/core/support/plugins/TechInfo","sap/ui/core/support/plugins/ControlTree","sap/ui/core/support/plugins/Debugging","sap/ui/core/support/plugins/Trace","sap/ui/core/support/plugins/Selector","sap/ui/core/support/plugins/Breakpoint","sap/ui/core/support/plugins/ViewInfo","sap/ui/core/support/plugins/LocalStorage","sap/ui/core/support/plugins/Interaction","sap/ui/core/support/plugins/Performance"],publicRules:true,internalRules:true}}});t.AbsoluteCSSSize=e.createType("sap.ui.core.AbsoluteCSSSize",{isValid:function(e){return/^([-+]?(0*|([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]))|calc\(\s*(\(\s*)*[-+]?(([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC])?)(\s*(\)\s*)*(\s[-+]\s|[*\/])\s*(\(\s*)*([-+]?(([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC])?)))*\s*(\)\s*)*\))$/.test(e)}},e.getType("string"));t.AccessibleRole={Alert:"Alert",AlertDialog:"AlertDialog",Application:"Application",Banner:"Banner",Button:"Button",Checkbox:"Checkbox",ColumnHeader:"ColumnHeader",Combobox:"Combobox",
/**
		 * Information about the content on the page. Examples are footnotes, copyrights, or links to privacy statements.
		 *
		 * @public
		 */
ContentInfo:"ContentInfo",Definition:"Definition",Description:"Description",Dialog:"Dialog",Directory:"Directory",Document:"Document",Grid:"Grid",GridCell:"GridCell",Group:"Group",Heading:"Heading",Img:"Img",Link:"Link",List:"List",Listbox:"Listbox",ListItem:"ListItem",Log:"Log",Main:"Main",Marquee:"Marquee",Menu:"Menu",Menubar:"Menubar",MenuItem:"MenuItem",MenuItemCheckbox:"MenuItemCheckbox",MenuItemRadio:"MenuItemRadio",Navigation:"Navigation",Note:"Note",Option:"Option",Presentation:"Presentation",ProgressBar:"ProgressBar",Radio:"Radio",RadioGroup:"RadioGroup",Region:"Region",Row:"Row",RowHeader:"RowHeader",Search:"Search",Secondary:"Secondary",SeeAlso:"SeeAlso",Separator:"Separator",Slider:"Slider",SpinButton:"SpinButton",Status:"Status",Tab:"Tab",Tablist:"Tablist",Tabpanel:"Tabpanel",Textbox:"Textbox",Timer:"Timer",Toolbar:"Toolbar",Tooltip:"Tooltip",Tree:"Tree",TreeGrid:"TreeGrid",TreeItem:"TreeItem"};e.registerEnum("sap.ui.core.AccessibleRole",t.AccessibleRole);t.AccessibleLandmarkRole={None:"None",Banner:"Banner",Main:"Main",Region:"Region",Navigation:"Navigation",Search:"Search",Complementary:"Complementary",Form:"Form",ContentInfo:"ContentInfo"};e.registerEnum("sap.ui.core.AccessibleLandmarkRole",t.AccessibleLandmarkRole);t.aria=t.aria||{};t.aria.HasPopup={None:"None",Menu:"Menu",ListBox:"ListBox",Tree:"Tree",Grid:"Grid",Dialog:"Dialog"};e.registerEnum("sap.ui.core.aria.HasPopup",t.aria.HasPopup);t.BarColor={NEUTRAL:"NEUTRAL",POSITIVE:"POSITIVE",CRITICAL:"CRITICAL",NEGATIVE:"NEGATIVE"};e.registerEnum("sap.ui.core.BarColor",t.BarColor);t.BusyIndicatorSize={Auto:"Auto",Small:"Small",Medium:"Medium",Large:"Large",Section:"Section"};e.registerEnum("sap.ui.core.BusyIndicatorSize",t.BusyIndicatorSize);t.CalendarType=a;t.CSSColor=e.createType("sap.ui.core.CSSColor",{isValid:function(e){return/^(#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})|rgb\(\s*((1?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))|([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*(,\s*((1?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))|([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*){2}\)|rgba\((\s*((1?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))|([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*,){3}\s*(0(\.[0-9]+)?|1(\.0+)?)\s*\)|hsl\(\s*([0-2]?[0-9]?[0-9]|3([0-5][0-9]|60))\s*(,\s*(([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*){2}\)|hsla\(\s*([0-2]?[0-9]?[0-9]|3([0-5][0-9]|60))\s*,(\s*(([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*,){2}\s*(0(\.[0-9]+)?|1(\.0+)?)\s*\)|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgrey|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|grey|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgrey|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silverskyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|transparent|inherit|)$/.test(e)}},e.getType("string"));t.CSSSize=e.createType("sap.ui.core.CSSSize",{isValid:function(e){return/^(auto|inherit|[-+]?(0*|([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|[vV][wW]|[vV][hH]|[vV][mM][iI][nN]|[vV][mM][aA][xX]|%))|calc\(\s*(\(\s*)*[-+]?(([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|[vV][wW]|[vV][hH]|[vV][mM][iI][nN]|[vV][mM][aA][xX]|%)?)(\s*(\)\s*)*(\s[-+]\s|[*\/])\s*(\(\s*)*([-+]?(([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|[vV][wW]|[vV][hH]|[vV][mM][iI][nN]|[vV][mM][aA][xX]|%)?)))*\s*(\)\s*)*\))$/.test(e)}},e.getType("string"));t.CSSSizeShortHand=e.createType("sap.ui.core.CSSSizeShortHand",{isValid:function(e){return/^(inherit|(auto|[-+]?(0*|(\d+|\d*\.\d+)([eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%))){1}(\s(auto|[-+]?(0*|(\d+|\d*\.\d+)([eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%)))){0,3})$/.test(e)}},e.getType("string"));t.Collision=e.createType("sap.ui.core.Collision",{isValid:function(e){return/^((flip|fit|flipfit|none)( (flip|fit|flipfit|none))?)$/.test(e)}},e.getType("string"));t.Design={Standard:"Standard",Monospace:"Monospace"};e.registerEnum("sap.ui.core.Design",t.Design);t.Dock=e.createType("sap.ui.core.Dock",{isValid:function(e){return/^((begin|left|center|right|end) (top|center|bottom))$/.test(e)}},e.getType("string"));t.HorizontalAlign={Begin:"Begin",End:"End",Left:"Left",Right:"Right",Center:"Center"};e.registerEnum("sap.ui.core.HorizontalAlign",t.HorizontalAlign);t.ID=e.getType("sap.ui.core.ID");t.IconColor={Default:"Default",Positive:"Positive",Negative:"Negative",Critical:"Critical",Neutral:"Neutral",Contrast:"Contrast",NonInteractive:"NonInteractive",Tile:"Tile",Marker:"Marker"};e.registerEnum("sap.ui.core.IconColor",t.IconColor);t.ImeMode={Auto:"Auto",Active:"Active",Inactive:"Inactive",Disabled:"Disabled"};e.registerEnum("sap.ui.core.ImeMode",t.ImeMode);t.IndicationColor={Indication01:"Indication01",Indication02:"Indication02",Indication03:"Indication03",Indication04:"Indication04",Indication05:"Indication05",Indication06:"Indication06",Indication07:"Indication07",Indication08:"Indication08",Indication09:"Indication09",Indication10:"Indication10",Indication11:"Indication11",Indication12:"Indication12",Indication13:"Indication13",Indication14:"Indication14",Indication15:"Indication15",Indication16:"Indication16",Indication17:"Indication17",Indication18:"Indication18",Indication19:"Indication19",Indication20:"Indication20"};e.registerEnum("sap.ui.core.IndicationColor",t.IndicationColor);t.OpenState={OPEN:"OPEN",CLOSED:"CLOSED",OPENING:"OPENING",CLOSING:"CLOSING"};e.registerEnum("sap.ui.core.OpenState",t.OpenState);t.Orientation={Horizontal:"Horizontal",Vertical:"Vertical"};e.registerEnum("sap.ui.core.Orientation",t.Orientation);t.Percentage=e.createType("sap.ui.core.Percentage",{isValid:function(e){return/^([0-9][0-9]*(\.[0-9]+)?%)$/.test(e)}},e.getType("string"));t.Priority={None:"None",Low:"Low",Medium:"Medium",High:"High"};e.registerEnum("sap.ui.core.Priority",t.Priority);t.ScrollBarAction={Step:"Step",Page:"Page",MouseWheel:"MouseWheel",Drag:"Drag"};e.registerEnum("sap.ui.core.ScrollBarAction",t.ScrollBarAction);t.Scrolling={None:"None",Auto:"Auto",Scroll:"Scroll",Hidden:"Hidden"};e.registerEnum("sap.ui.core.Scrolling",t.Scrolling);t.SortOrder={None:"None",Ascending:"Ascending",Descending:"Descending"};e.registerEnum("sap.ui.core.SortOrder",t.SortOrder);t.TextAlign={Begin:"Begin",End:"End",Left:"Left",Right:"Right",Center:"Center",Initial:"Initial"};e.registerEnum("sap.ui.core.TextAlign",t.TextAlign);t.TextDirection={LTR:"LTR",RTL:"RTL",Inherit:"Inherit"};e.registerEnum("sap.ui.core.TextDirection",t.TextDirection);t.TitleLevel={Auto:"Auto",H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6"};e.registerEnum("sap.ui.core.TitleLevel",t.TitleLevel);t.URI=e.createType("sap.ui.core.URI",{isValid:function(e){return/^((([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?)$/.test(e)}},e.getType("string"));t.ValueState={Error:"Error",Warning:"Warning",Success:"Success",Information:"Information",None:"None"};e.registerEnum("sap.ui.core.ValueState",t.ValueState);t.VerticalAlign={Bottom:"Bottom",Middle:"Middle",Top:"Top",Inherit:"Inherit"};e.registerEnum("sap.ui.core.VerticalAlign",t.VerticalAlign);t.Wrapping={None:"None",Soft:"Soft",Hard:"Hard",Off:"Off"};e.registerEnum("sap.ui.core.Wrapping",t.Wrapping);t.dnd=t.dnd||{};t.dnd.DropPosition={On:"On",Between:"Between",OnOrBetween:"OnOrBetween"};e.registerEnum("sap.ui.core.dnd.DropPosition",t.dnd.DropPosition);t.dnd.RelativeDropPosition={On:"On",Before:"Before",After:"After"};e.registerEnum("sap.ui.core.dnd.RelativeDropPosition",t.dnd.RelativeDropPosition);t.dnd.DropLayout={Default:"Default",Vertical:"Vertical",Horizontal:"Horizontal"};e.registerEnum("sap.ui.core.dnd.DropLayout",t.dnd.DropLayout);t.dnd.DropEffect={Copy:"Copy",Move:"Move",Link:"Link",None:"None"};e.registerEnum("sap.ui.core.dnd.DropEffect",t.dnd.DropEffect);t.mvc=t.mvc||{};t.ItemSelectionMode={None:"None",SingleSelect:"SingleSelect",MultiSelect:"MultiSelect"};e.registerEnum("sap.ui.core.ItemSelectionMode",t.ItemSelectionMode);t.MessageType=o;e.registerEnum("sap.ui.core.MessageType",t.MessageType);t.mvc.ViewType=r;t.routing=t.routing||{};t.routing.HistoryDirection={Forwards:"Forwards",Backwards:"Backwards",NewEntry:"NewEntry",Unknown:"Unknown"};t.ComponentLifecycle={Legacy:"Legacy",Application:"Application",Container:"Container"};e.registerEnum("sap.ui.core.ComponentLifecycle",t.ComponentLifecycle);t.InvisibleMessageMode={Polite:"Polite",Assertive:"Assertive"};e.registerEnum("sap.ui.core.InvisibleMessageMode",t.InvisibleMessageMode);(function(){var e=sap.ui.lazyRequire;function i(i,o,r){for(var a=0;a<o.length;a++){if(r){e(r,o[a].toLowerCase(),i+o[a])}else{e(i+o[a],"new extend getMetadata")}}}e("sap.ui.core.message.MessageManager");e("sap.ui.core.BusyIndicator","show hide attachOpen detachOpen attachClose detachClose");e("sap.ui.core.tmpl.Template","registerType unregisterType");e("sap.ui.core.Fragment","registerType byId createId");e("sap.ui.core.IconPool","createControlByURI addIcon getIconURI getIconInfo isIconURI getIconCollectionNames getIconNames getIconForMimeType");e("sap.ui.core.service.ServiceFactoryRegistry","register unregister get");e("sap.ui.model.odata.AnnotationHelper","createPropertySetting format getNavigationPath"+" gotoEntitySet gotoEntityType gotoFunctionImport isMultiple resolvePath simplePath");var o=sap.ui.model&&sap.ui.model.odata&&sap.ui.model.odata.AnnotationHelper;if(o){o.format.requiresIContext=true;o.getNavigationPath.requiresIContext=true;o.isMultiple.requiresIContext=true;o.simplePath.requiresIContext=true}e("sap.ui","xmlfragment","sap.ui.core.Fragment");e("sap.ui","jsfragment","sap.ui.core.Fragment");e("sap.ui","htmlfragment","sap.ui.core.Fragment");i("sap.ui.model.",["Filter","Sorter","json.JSONModel","resource.ResourceModel","odata.ODataModel","odata.v2.ODataModel","odata.v4.ODataModel","xml.XMLModel"]);i("sap.ui.model.type.",["Boolean","Integer","Float","String","Date","Time","DateTime","FileSize","Currency","Unit","DateInterval","DateTimeInterval","TimeInterval"]);i("sap.ui.model.odata.type.",["Boolean","Byte","Currency","Date","DateTime","DateTimeOffset","DateTimeWithTimezone","Decimal","Double","Guid","Int16","Int32","Int64","Raw","SByte","Single","Stream","String","Time","TimeOfDay","Unit"]);i("sap.ui.core.",["Locale","LocaleData","mvc.Controller","UIComponent"]);i("sap.ui.core.mvc.",["Controller","View","JSView","JSONView","XMLView","HTMLView","TemplateView"],"sap.ui");i("sap.ui.core.",["Component"],"sap.ui");i("sap.ui.core.tmpl.",["Template"],"sap.ui");i("sap.ui.core.routing.",["HashChanger","History","Route","Router","Target","Targets","Views"]);i("sap.ui.core.service.",["ServiceFactory","Service"])})();return t});
//# sourceMappingURL=library.js.map