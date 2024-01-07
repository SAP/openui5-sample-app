/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/util/Mobile","sap/ui/Device"],function(jQuery,e,s){"use strict";function t(e,s){var t=Object.getOwnPropertyDescriptor(e,s);return t&&t.value}(function(){jQuery.os=jQuery.extend({os:s.os.name,version:s.os.versionStr,fVersion:s.os.version},t(jQuery,"os"));jQuery.os[s.os.name]=true;jQuery.device=jQuery.extend({},t(jQuery,"device"));jQuery.device.is=jQuery.extend({standalone:window.navigator.standalone,landscape:s.orientation.landscape,portrait:s.orientation.portrait,iphone:s.os.ios&&s.system.phone,ipad:s.os.ios&&s.system.tablet,android_phone:s.system.phone&&s.os.android,android_tablet:s.system.tablet&&s.os.android,tablet:s.system.tablet,phone:s.system.phone,desktop:s.system.desktop},jQuery.device.is)})();jQuery.sap.initMobile=e.init;jQuery.sap.setIcons=e.setIcons;jQuery.sap.setMobileWebAppCapable=e.setWebAppCapable;return jQuery});
//# sourceMappingURL=jquery.sap.mobile.js.map