//@ui5-bundle sap/ui/core/designtime/library-preload.designtime.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/core/designtime/ComponentContainer.designtime", [],function(){"use strict";return{associations:{component:{aggregationLike:true}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/core/designtime/CustomData.designtime", [],function(){"use strict";return{aggregations:{customData:{ignored:true}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/core/designtime/Icon.designtime", [],function(){"use strict";return{palette:{group:"DISPLAY",icons:{svg:"sap/ui/core/designtime/Icon.icon.svg"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/core/designtime/UIComponent.designtime", [],function(){"use strict";return{domRef:function(e){if(e.oContainer){return e.oContainer.getDomRef("uiarea")}},aggregations:{rootControl:{ignore:false}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/core/designtime/library.designtime", [],function(){"use strict";return{}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/core/designtime/mvc/ControllerExtensionTemplate", ["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("{{controllerExtensionName}}",{})});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/core/designtime/mvc/View.designtime", [],function(){"use strict";return{controllerExtensionTemplate:"sap/ui/core/designtime/mvc/ControllerExtensionTemplate"}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/core/designtime/mvc/XMLView.designtime", [],function(){"use strict";return{aggregations:{content:{domRef:":sap-domref"}}}});
//# sourceMappingURL=library-preload.designtime.js.map
