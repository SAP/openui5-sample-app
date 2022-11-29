const path = require("path");

module.exports = async function({workspace, dependencies, log, taskUtil, options}) {
	const {createReaderCollection, createResource} = taskUtil.resourceFactory;

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
}
