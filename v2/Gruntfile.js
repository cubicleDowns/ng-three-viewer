'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    // get packge info
    pkg: grunt.file.readJSON('package.json'),

    app: 'src/js/app.js',

    // get all angular code
    ng: grunt.file.expand(
      'src/js/ng/*.js'
    ).join(' '),

    // get all three code
    three: grunt.file.expand(
      'src/js/three/scene.js',
      'src/js/three/camera.js',
      'src/js/three/setup.js',
      'src/js/three/util.js',
      'src/js/three/wrangler.js'
    ).join(' '),


    // start local server
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'ThreeViewerApp',
          keepalive: true
        }
      }
    },

    // run shell scripts
    shell: {

      // create app.min.js
      min: {
        command: 'java -jar closure/compiler.jar ' +
          '--compilation_level SIMPLE_OPTIMIZATIONS ' +
          '--formatting PRETTY_PRINT ' +
          '--language_in ECMASCRIPT5_STRICT ' +
          '--angular_pass ' +                              // inject dependencies automatically
          '--externs closure/externs/angular-1.3.js ' +    // angular.d -> angular.module
          '--externs closure/externs/three.js ' +
          '--generate_exports ' +                          // keep @export notated code
          '--manage_closure_dependencies ' +
          '--js closure/library/base.js ' +                // don't add 'goog.' stuff to script
          '--js <%= ng %> ' +
          '--js <%= three %> ' +
          '--js <%= app %> ' +
          '--js_output_file dist/app.min.js'
      },

      // karma
      karma: {
        command: './node_modules/karma/bin/karma start test/unit/karma.conf.js'
      },

      // protractor
      protractor: {
        command: './node_modules/protractor/bin/protractor test/e2e/protractor.conf.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['shell:min']);
  grunt.registerTask('protractor', ['shell:protractor']);
  grunt.registerTask('karma', ['shell:karma']);

};
