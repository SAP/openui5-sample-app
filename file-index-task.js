const path = require("path");

module.exports = async function({workspace, dependencies, log, taskUtil, options}) {
	const {resourceFactory, getProject, getDependencies} = taskUtil;
	const {createReaderCollection, createResource} = resourceFactory;

	const reader = createReaderCollection({
		readers: [workspace, dependencies]
	});

	// Map contains a list of file extensions and the corresponding number of occurrences
	const summaryMap = new Map();
	const fileExtensionsMap = new Map();

	const resources = await reader.byGlob("**/**");
	log.info(`Found ${resources.length} resources`);
	resources.forEach((res) => {
		// Get file extension from resource path
		const extension = path.posix.extname(res.getPath());

		//  Bump counter for this file extension in index summary
		let counter = summaryMap.get(extension) || 0;
		summaryMap.set(extension, ++counter);

		// Add resource path to index
		if (fileExtensionsMap.has(extension)) {
			fileExtensionsMap.get(extension).push(res.getPath());
		} else {
			// Extension not yet in map. Define it
			fileExtensionsMap.set(extension, [res.getPath()]);
		}
	});

	// For index summary, sort extensions by count
	const sortedSummary = new Map([...summaryMap.entries()].sort((a, b) => b[1].length - a[1].length))

	const indexSummaryResource = createResource({
		path: "/file-index-summary.json",
		string: JSON.stringify(Object.fromEntries(sortedSummary), null, "\t")
	});
	await workspace.write(indexSummaryResource);

	const indexResource = createResource({
		path: "/file-index.json",
		string: JSON.stringify(Object.fromEntries(fileExtensionsMap), null, "\t")
	});
	await workspace.write(indexResource);

	/*
		Collect the versions of all dependencies
	*/
	const dependencyVersionMap = new Map();
	function collectDependencyVersions(projectName) {
		if (dependencyVersionMap.has(projectName)) {
			return;
		}
		const project = getProject(projectName);
		dependencyVersionMap.set(projectName, project.getVersion());
		getDependencies(projectName).forEach((depName) => {
			collectDependencyVersions(depName);
		});
	}
	collectDependencyVersions(options.projectName);

	const depVersionsResource = createResource({
		path: "/dependency-versions.json",
		string: JSON.stringify(Object.fromEntries(dependencyVersionMap), null, "\t")
	});
	await workspace.write(depVersionsResource);
}

module.exports.determineRequiredDependencies = async function({availableDependencies, getProject, getDependencies, options}) {

	// Only require sap.ui.core
	availableDependencies.forEach((depName) => {
		if (depName !== "sap.ui.core") {
			availableDependencies.delete(depName)
		}
	});

	// Only require direct dependencies
	// const directDependencies = getDependencies();
	// availableDependencies.forEach((depName) => {
	// 	if (!directDependencies.includes(depName)) {
	// 		availableDependencies.delete(depName)
	// 	}
	// });

	// Alternative: Ignore all framework libraries:
	// availableDependencies.forEach((depName) => {
	// 	if (getProject(depName).isFrameworkProject()) {
	// 		availableDependencies.delete(depName)
	// 	}
	// });

	return availableDependencies;
};
