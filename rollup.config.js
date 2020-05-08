var ui5 = require("rollup-plugin-ui5");

module.exports = {
	input: "ui5:Component-preload",
	plugins: [ui5()],
	output: [
		{
			file: "dist/Component-preload.js",
			format: "amd"
		}
	]
};
