module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		watch: {
        	options: {
        	  spawn: false,
        	  livereload: true
        	},
		    configFiles: {
			    files: ['Gruntfile.js']
			},
			sass_globbing: {
			    files: 'build/scss/**/*.scss',
			    tasks: ['sass_globbing'],
			},
			css: {
		        files: ['build/scss/**/*.scss'],
		        tasks: ['sass:main']
		    }
		},

		postcss: {
		    options: {
		        map: false,
		        processors: [
		          require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9']}),
		          require('cssnano')()
		        ]
			},
			main: [{
			  expand: true,
			  flatten: true,
			  src: 'app/css/main.css',
			  dest: 'app/css/main.min.css'
			}]
         },

		sass: {
	        main: {
	        	options : {
	    	        style: 'expanded',
	    	        sourcemap: 'none'
	    		},
	            files: {
	                'app/css/main.css': 'build/scss/main.scss'
	            }
	        }
		},

		sass_globbing: {
		    target: {
		      files: {
		      	'build/scss/_utilsMap.scss': 'build/scss/utils/*.scss',
		        'build/scss/_baseMap.scss': 'build/scss/base/*.scss',
		        'build/scss/_componentsMap.scss': 'build/scss/components/*.scss',
		        'build/scss/_layoutMap.scss': 'build/scss/layout/*.scss',
		        'build/scss/_pagesMap.scss': 'build/scss/pages/*.scss'
		      },
		      options: {
		        useSingleQuotes: false
		      }
		    }
		  }


	});

	grunt.registerTask('css', ['sass_globbing:target','sass:main']);
	grunt.registerTask('default', ['css']);

}