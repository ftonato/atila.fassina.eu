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
        your_target: {
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
    // soon
    svgmin: {
      options: {
        plugins: [{
            removeViewBox: false
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/img/src',
          src: ['**/*.svg'],
          dest: 'img/',
          ext: '.min.svg'
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

    watch: {
      scripts: {
        files: 'assets/js/**/*.js',
        tasks: 'jshint'
      },
      css: {
        files: 'assets/styles/_scss/*.scss',
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['svgmin', 'sass', 'cmq', 'cssmin', 'imagemin']);
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('default', ['sass', 'jshint']);

};
