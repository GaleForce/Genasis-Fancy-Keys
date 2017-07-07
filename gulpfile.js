'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('build-css', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
  gulp.watch('scss/**/*.scss', ['build-css'])
});