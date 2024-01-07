/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./autowaiter/_utils"],function(t){"use strict";var e,n;t.onElementAvailable("body",function(t){t.addEventListener("focus",function(t){e=t.target},true);t.addEventListener("blur",function(t){n=t.target},true)});return{getLastFocusedElement:function(){return e},getLastBlurredElement:function(){return n}}},true);
//# sourceMappingURL=_FocusListener.js.map