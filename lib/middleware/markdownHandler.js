/**
 * Custom UI5 Server middleware example
 *
 * @param {Object} parameters Parameters
 * @param {Object} parameters.resources Resource collections
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.all Reader or Collection to read resources of the
 *                                        root project and its dependencies
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.rootProject Reader or Collection to read resources of
 *                                        the project the server is started in
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.dependencies Reader or Collection to read resources of
 *                                        the projects dependencies
 * @param {Object} parameters.options Options
 * @param {string} [parameters.options.configuration] Custom server middleware configuration if given in ui5.yaml
 * @returns {function} Middleware function to use
 */
module.exports = function({resources, options}) {
	const MarkdownIt = require('markdown-it');
	const md = new MarkdownIt();
	return function (req, res, next) {
		if (!req.path || !req.path.endsWith(".html")) {
			next();
			return;
		}
		resources.rootProject.byPath(req.path.replace(".html", ".md")).then(async (resource) => {
			if (!resource) {
				next();
				return;
			}
			const markdown = await resource.getBuffer();
			const html = md.render(markdown.toString());
			res.type('.html');
			res.end(html);
		}).catch((err) => {
			next(err);
		});
	}
};
