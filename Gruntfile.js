module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({

		dir: {
			webapp: "webapp",
			dist: "dist",
			bower_components: "bower_components"
		},

		connect: {
			options: {
				port: 8080,
				hostname: "localhost",
				livereload: 35729
			},
			src: {},
			dist: {}
		},

		openui5_connect: {
			options: {
				resources: [
					"<%= dir.bower_components %>/openui5-sap.ui.core/resources",
					"<%= dir.bower_components %>/openui5-sap.m/resources",
					"<%= dir.bower_components %>/openui5-themelib_sap_bluecrystal/resources"
				]
			},
			src: {
				options: {
					appresources: "<%= dir.webapp %>"
				}
			},
			dist: {
				options: {
					appresources: "<%= dir.dist %>"
				}
			}
		},

		openui5_preload: {
			component: {
				options: {
					resources: {
						cwd: "<%= dir.webapp %>",
						prefix: "todo"
					},
					dest: "<%= dir.dist %>"
				},
				components: true
			}
		},

		clean: {
			dist: "<%= dir.dist %>/"
		},

		copy: {
			dist: {
				files: [ {
					expand: true,
					cwd: "<%= dir.webapp %>",
					src: [
						"**",
						"!test/**"
					],
					dest: "<%= dir.dist %>"
				} ]
			}
		},

		eslint: {
			webapp: ["<%= dir.webapp %>"]
		},

		open: {
			root: {
				path: "http://<%= connect.options.hostname %>:<%= connect.options.port %>",
				options: {
					delay: 500
				}
			}
		},

		watch: {
			webapp: {
				files: "<%= dir.webapp %>/**",
				tasks: ["eslint"]
			},
			livereload: {
				options: {
					livereload: "<%= connect.options.livereload %>"
				},
				files: [
					"<%= dir.webapp %>/**"
				]
			}
		}

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-openui5");
	grunt.loadNpmTasks("grunt-eslint");
	grunt.loadNpmTasks("grunt-open");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// Server task
	grunt.registerTask("serve", function(target) {
		//grunt.task.run('openui5_connect:' + (target || 'src') + ':keepalive');
		grunt.task.run("openui5_connect:" + (target || "src:livereload"));
	});

	// Linting task
	grunt.registerTask("lint", ["eslint"]);

	// Build task
	grunt.registerTask("build", ["openui5_preload", "copy"]);

	// Develop task (live-reloading)
	grunt.registerTask("develop", [
		"serve",
		"open",
		"watch"
	]);

	// Default task
	grunt.registerTask("default", [
		"lint",
		"clean",
		"build",
		"serve:dist",
		"open",
		"watch"
	]);
};
