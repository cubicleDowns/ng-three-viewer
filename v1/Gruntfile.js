module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngAnnotate: {
        options: {
            singleQuotes: true
        },
        app: {
            files: {
                'build/ng-annotate.js': [
                    'src/js/ng/app.js',
                    'src/js/ng/app-controller.js',
                    'src/js/ng/directives.js',
                    'src/js/ng/file-loader-controller.js',
                    'src/js/ng/filters.js',
                    'src/js/ng/message-bus.js',
                    'src/js/ng/storage-service.js',
                    'src/js/ng/viewer-factory.js'
                ]
            }
        }
    },
    concat: {
        ng3: {
            src: [
                    'src/js/three/scene.js',
                    'src/js/three/setup.js',
                    'src/js/three/util.js',
                    'src/js/three/camera.js',
                    'src/js/three/wrangler.js',
                    'src/js/config.js',
                    'build/ng-annotate.js'
                ],
            dest: 'build/ng-three.concat.js',
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */\n' +
                            'var Viewer = {};\n',
                process: function (src, filepath) {
                    return '// Source: ' + filepath + '\n' + 
                    src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            }
        },
        lib: {
            src: [  'src/lib/min/jquery-2.1.1.min.js',
                    'src/lib/min/angular.min.js',
                    'src/lib/min/angular-route.min.js',
                    'src/lib/min/angular-local-storage.min.js',
                    'src/lib/min/three.69.min.js',
                    'src/lib/OrbitControls.js',
                    'src/lib/min/hammer.min.js',
                    'src/lib/jquery.hammer.js',
                    'src/lib/ngHammer.js',
                    'src/lib/three/*.js'
              ],
            dest: 'dist/libs.js',
            options: {
                process: function (src, filepath) {
                    return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            }
        }
    },
    uglify: {
        ng3: {
            options: {
                compress: {
                    drop_console: true
                },
                sourceMap: true,
                mangle: true,
                sourceMapName: 'dist/app.min.map',
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            files: {
                'dist/app.min.js': ['<%= concat.ng3.dest %>']
            }
        }
    },
    cssmin: {
      ng3: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css'],
          dest: 'dist/css'
        }]
      }
    },
    manifest: {
      generate: {
        options: {
          basePath: "dist/",
          cache: ["app.min.js", "libs.js"],
          network: ["http://*", "https://*"],
          preferOnline: true,
          verbose: true,
          timestamp: true
        },
        src: [
          "dist/app.min.js",
          "dist/libs.js",
          "dist/css/*.css"
        ],
        dest: "dist/manifest.appcache"
      }
    },
    copy: {
        maps: {
            files: [{
                expand: false, src: ['src/lib/maps']
            }]
        }
    },
    clean: {
        build: ['build'],
        release: ['dist/*.js', 'dist/*.map', 'dist/css/']
    },
    jshint: {
        options: {
            jshintrc: true,
            reporter: require('jshint-stylish')
        },
        working: ['src/js/**/*.js'],
        all: ['<%= concat.ng3.dest %>']
    },
    watch: {
        files: ['src/ng/*.js', 'src/three/*.js'],
        tasks: ['jshint:working']
    }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-manifest');
grunt.loadNpmTasks('grunt-ng-annotate');
grunt.loadNpmTasks('grunt-contrib-copy');
//grunt.loadNpmTasks('grunt-closure-tools');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');

//////////////
// TASKS    //
//////////////
grunt.registerTask('man', ['manifest']);
/**
* Build task:
*    1) add annotations to angular 'build/ng-annotate.js'
*    2) concat all of the angular stuff onto all of the three files 'build/ng-three.concat.js'
*    3) concat libraries files into 'dist/lib.js'
*    3) uglify the three and angular files.  it is safe to do this now to the
*            angular files as the files are annotated.  'dist/app.min.js'
*    4) css minification.    'dist/css/demo.css'  TODO:  rename output file.
*
*  All files are output into 'dist'. */
grunt.registerTask('build', [
    'ngAnnotate',
    'concat:ng3',
    'concat:lib',
    'uglify:ng3',
    'cssmin:ng3'
]);
// Cleaning!  only run if you're sure your file paths are correct.
// This will kill both distribution and build directories.
grunt.registerTask('cl', ['clean:build', 'clean:release']);
grunt.registerTask('ah', ['ngAnnotate', 'concat:ng3', 'jshint:all'])
grunt.registerTask('hint', ['jshint:working'])
};