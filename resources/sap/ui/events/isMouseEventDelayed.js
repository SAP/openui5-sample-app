/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(r){"use strict";var e=function(e){e=e||navigator;return!!(r.browser.mobile&&!(r.os.ios&&r.os.version>=8&&r.browser.safari&&!r.browser.webview||r.browser.chrome&&!/SAMSUNG/.test(e.userAgent)&&r.browser.version>=32))};return e});
//# sourceMappingURL=isMouseEventDelayed.js.map