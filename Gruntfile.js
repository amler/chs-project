module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			build: {
				options: {
					stye: 'compressed'
				},
				files: {
					'assets/css/screen.css':'assets/scss/screen.scss'
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			files: ['Gruntfile.js', 'assets/js/main.js']
		},
		watch: {
			options: {
				livereload: true
			},
			html: {
				files: 'index.html'
			},
			js: {
				files: 'assets/js/main.js',
				tasks: 'jshint'
			},
			css: {
				files: 'assets/scss/screen.scss',
				tasks: 'sass'
			}
		}
	});

	grunt.registerTask('default', ['watch']);
}