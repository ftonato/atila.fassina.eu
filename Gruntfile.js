module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'assets/styles/css/main.css': 'assets/styles/_scss/main.scss'
          }
        }
      },

    jshint: {
        files: ['assets/js/*.js'],
        options: {
            ignores: ['js/lib/*.js']
        }
    },

    cmq: {
        options: {
          log: false
        },
        files: {
          files: {
            'assets/styles/css': ['assets/styles/css/*.css']
          }
        }
      },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/image/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/image/'
        }]
      }
    },

    svgmin: {
      options: {
        plugins: [{
            removeViewBox: false
        }]
      },

      dist: {
        files: [{
          expand: true,
          //cwd: '',
          src: ['assets/image/**/*.svg'],
          ext: '.svg'
        }]
      }
    },


    cssmin: {
      add_banner: {
        options: {
          banner: '/* if you want to see the styles: http://github.com/atilafassina/atilafassina.github.io */'
        },
        files: {
          'assets/styles/css/main.css': ['assets/styles/css/*.css']
        }
      }
    },

     autoprefixer: {
      options: {
        browsers: ['last 2 versions'],
        diff: true,
      },
      files: {
        src: 'assets/styles/css/main.css',
        dest: 'assets/styles/css/main.css'
      }
    },


    jekyll: {
      options: {
        bundleExec: true,
        src : '.'
      },
      dist: {
        options: {
          dest: '_site',
          config: '_config.yml'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8822,
          base: '_site'
        }
      }
    },

    watch: {
      scripts: {
        files: [
          'assets/**',
          '_layouts/**',
          '_includes/**',
          '_posts/**',
          'blog/**'
          ],
        tasks: ['build'],
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('opt', ['imagemin', 'svgmin']);
  grunt.registerTask('build', ['jshint', 'sass', 'cmq', 'cssmin', 'jekyll']);
  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('default', ['build']);

};
