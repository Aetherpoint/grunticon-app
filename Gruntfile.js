
module.exports = function(grunt) {
	'use strict';

<<<<<<< HEAD
  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    requirejs: {
      build: {
        options: {
          baseUrl: "public/js",
          mainConfigFile: "public/js/grunticon-ui.js",
          out: "public/js/grunticon-ui.min.js",
          name: "grunticon-ui"
        }
      }
    },
    jst: {
      compile: {
        options: {
          amd: true
        },
        files: {
          "public/js/templates.js": "templates/**/*.html"
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-watch');
=======
	// Project configuration.
	grunt.initConfig({
		nodeunit: {
			files: ['test/**/*_test.js']
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			lib: {
				src: ['lib/**/*.js']
			},
			test: {
				src: ['test/**/*.js']
			}
		},
		requirejs: {
			build: {
				options: {
					baseUrl: "public/js",
					mainConfigFile: "public/js/grunticon-ui.js",
					out: "public/js/grunticon-ui.min.js",
					name: "grunticon-ui"
				}
			}
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			lib: {
				files: '<%= jshint.lib.src %>',
				tasks: ['jshint:lib', 'nodeunit']
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'nodeunit']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
>>>>>>> 35065171b4ddfb373ab1052849472a34f4ce388f

	// Default task.
	grunt.registerTask('default', ['jshint', 'nodeunit', 'requirejs:build']);

};
