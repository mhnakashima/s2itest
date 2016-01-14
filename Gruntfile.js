module.exports = function(grunt){
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
		
			dist:{
				src: [
					'js/cidades-estados-1.4-utf8.js',
					'js/custom.js',
					'js/jquery.mask.js',
					'js/navigation.js',
					'skip-link-focus-fix'
				],
				dest: 'js/build/production.js'
			}
		},
		
		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},		

		less:{
			development: {
		        files: {
		          "css/style.css": "css/style.less" // destination file and source file
		        }
		      }
		},

		watch:{

			styles: {
				files: ["css/*.less"],
				tasks: ['less'],
				options: {
					nospawn : true
				}
			}
		}
	});
		
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.loadNpmTasks('grunt-contrib-watch');
		
	grunt.registerTask('default', ['concat', 'uglify', 'less', 'watch']);
		
	
	
}