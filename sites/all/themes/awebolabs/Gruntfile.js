module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        require: 'sass-globbing'
      }
    }, 
    watch: {
      src: {
        files: ['**/*.scss', '**/*.php'],
        tasks: ['compass:dev']
      },
     options: {
        livereload: true, 
        sourceMap: true, 
      },
    },
    compass: {
      dev: {
        options: {
          sassDir: 'custom-sass',
          cssDir: 'css',
          imagesPath: 'assets/img',
          noLineComments: false,
          outputStyle: 'compressed'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-sass-import');
};