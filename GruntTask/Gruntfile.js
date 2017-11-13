module.exports = function(grunt) {
	
	grunt.initConfig({

	// concat: {
 //    	main: {
	// 		src: [
	// 			'js/libs/jquery.js',
	// 			'js/**/*.js'
	// 		],
	// 			dest: 'build/script.js'
	// 	}
 //    },
 //    uglify: {
	// 	main: {
	// 		files: {
	// 			'build/script.min.js': ['build/script.js']
	// 		}
	// 	}
	// },
	browserify: {
		main: {
			src: [
				'js/libs/jquery.js',
				'js/**/*.js'
			],
			dest: 'build/script.js'
		}
	},
	watch: {
		files: [
			'js/libs/jquery.js',
			'js/**/*.js'
		],
		tasks: ['concat', 'uglify'],
		options: {
			spawn: false
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // grunt.registerTask('default', [ 'browserify', 'uglify', 'watch']);
  grunt.registerTask('default', [ 'browserify', 'watch']);
};