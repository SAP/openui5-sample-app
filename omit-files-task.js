/* eslint-disable strict */
module.exports = async function({workspace, dependencies, taskUtil}) {
	const {OmitFromBuildResult} = taskUtil.STANDARD_TAGS;
	const workspaceResources = await workspace.byGlob([
		"/**/*.js",
		"/**/*.xml",
		"/**/test/**",
		"!/**/*-preload.js"
	]);
	workspaceResources.forEach((resource) => {
		console.log("workspace OmitFromBuildResult: " + resource.getPath());
		taskUtil.setTag(resource, OmitFromBuildResult, true);
	});
}
