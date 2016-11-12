module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                  loadPath: ['node_modules/foundation-sites/scss']
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true, // inline sourcemaps

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
                    }), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },

        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'postcss'],
                options: {
                    livereload: true,
                },
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');


    grunt.registerTask('default', ['watch']);

}
