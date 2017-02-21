var gulp = require('gulp')
var less = require('gulp-less');
var watch = require('gulp-watch');
// var minifyCSS = require('gulp-csso');

gulp.task('less', function () {
  return gulp.src('./styles/main.less')
    .pipe(less())
    // .pipe(minifyCSS())
    .pipe(gulp.dest('./build'));
});

gulp.task ('watch', function () {
	gulp.watch ('./styles/main.less', ['less'])
})