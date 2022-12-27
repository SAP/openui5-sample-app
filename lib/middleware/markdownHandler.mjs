import MarkdownIt from "markdown-it";

/**
 * Custom UI5 Server middleware API
 *
 * @param {object} parameters Parameters
 * @param {@ui5/logger/StandardLogger} parameters.log
 *      Logger instance for use in the custom middleware.
 *      This parameter is only provided to custom middleware
 *      extensions defining Specification Version 3.0 and later.
 * @param {@ui5/server.middleware.MiddlewareUtil} parameters.middlewareUtil
 *      Specification version-dependent interface to a
 *      MiddlewareUtil instance. See the corresponding API reference for details:
 *      https://sap.github.io/ui5-tooling/v3/api/@ui5_server_middleware_MiddlewareUtil.html
 * @param {object} parameters.resources Readers for accessing resources
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.all
 *      Reader to access resources of the root project and its dependencies
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.rootProject
 *      Reader to access resources of the root project
 * @param {module:@ui5/fs.AbstractReader} parameters.resources.dependencies
 *      Reader to access resources of the project's dependencies
 * @param {object} parameters.options Options
 * @param {string} parameters.options.configuration
 *      Custom middleware configuration, as defined in the project's ui5.yaml
 * @param {string} parameters.options.middlewareName
 *      Name of the custom middleware.
 *      This parameter is only provided to custom middleware extensions
 *      defining Specification Version 3.0 and later.
 * @returns {function} Middleware function to use
 */
export default async function({log, middlewareUtil, resources, options}) {
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

			// Using the log and MiddlwareUtil module
			log.info("Markdown transformed to: " + middlewareUtil.getPathname(req));
		}).catch((err) => {
			next(err);
		});
	}
};
