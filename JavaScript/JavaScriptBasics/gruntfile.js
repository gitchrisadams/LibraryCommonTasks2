module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    assets: grunt.file.readJSON('Assets.json'),
    shell: {
        runTests: {
            command: function(platform, browser, version) {
              return 'env BROWSER='+browser+' PLATFORM='+platform+' VERSION='+version+' mocha tests/ui_tests/ --timeout 100000'
            }
        }
    },
    parallel: {
        assets: {
            options: {
                grunt: true
            },
            tasks: ['run_XP_chrome_43']
        }
    },
    jst: {
      compile: {
        files: '<%= assets.main.jst %>'
      }
    },
    uglify: {
      main: {
        options: {
          mangle: true,
          compress: false,
          beautify: false
        },
        files: '<%= assets.main.js %>'
      }
    },
    cssmin: {
      main: {
        files: '<%= assets.main.css %>'
      }
    },
    watch: {
      js: {
        files: ['**/*.js'],
        tasks: ['jst', 'uglify'],
        options: {
        }
      },
      css: {
        files: ['**/css/*.css', '**/css/tools/*.css'],
        tasks: ['cssmin']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // load tasks
  grunt.loadNpmTasks('grunt-parallel');
  grunt.loadNpmTasks('grunt-shell');

  // register tasks
  /*
  grunt.registerTask('default', ['parallel']);

  grunt.registerTask('run_XP_chrome_43', ['shell:runTests:XP:chrome:43']);
  grunt.registerTask('run_Windows10_edge', ['shell:runTests:"Windows 10":MicrosoftEdge:14']);
  grunt.registerTask('run_MAC_Chome', ['shell:runTests:"Mac OS X 10.9":chrome:31']);
  */ 

  grunt.registerTask('default', ['jst', 'cssmin', 'uglify', 'watch']);

};