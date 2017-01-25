var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var runSequence = require('run-sequence');

gulp.task('default', function () {
  runSequence('clean', 'styles');
});

gulp.task('clean', cleanBuild);
gulp.task('styles', compileStyles);

function cleanBuild() {
  return gulp.src(['dist'], {
    read: false
  })
    .pipe(clean());
}

function compileStyles() {
  return gulp.src('./src/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename("classic_modern.min.css"))
    .pipe(gulp.dest('dist/'));
}
