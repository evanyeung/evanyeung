var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var minifyCss = require('gulp-minify-css');

gulp.task('less', function(){
	gulp.src('css/index.less')
		.pipe(watch('css/index.less', function(file){
			return file.pipe(less())
						.pipe(minifyCss())
						.pipe(gulp.dest('./css'));
		}));
});

gulp.task('default', ['less'], function(){

});

