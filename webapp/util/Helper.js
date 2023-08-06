sap.ui.define(["require"], (require) => {
	"use strict";
	return {
		resolvePath(sPath) {
			// Relative to application root
			return require.toUrl("../") + sPath;
		}
	};
});
