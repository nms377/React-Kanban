const gulp = require('gulp');
const scss = require('gulp-sass');

// Compile sass
gulp.task('scss', () => {
	return gulp.src('./scss/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('./public/css'))
})

// Watch file for changes
gulp.task('watch', () => {
	gulp.watch('./scss/**/*.scss', ['scss'])
})

gulp.task('default', ['watch'])