var gulp = require('gulp'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass'),
	//sass = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber');

gulp.task('sass-simple', function () {
	gulp.src('./scss/main.scss')
		.pipe(plumber())
		.pipe(sass())
		// .pipe(sass({
		// 	'sourcemap': true,
		// 	'sourcemapPath': '../scss',
		// 	'style': 'compressed'
		// }))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});

gulp.task('watch', function(){
	gulp.watch('./scss/main.scss', ['sass-simple']);
});

gulp.task('default', function () {
	console.log('hello gulp!');
});