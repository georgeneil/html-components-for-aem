'use strict';

var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpSequence = require('gulp-sequence');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var cached = require('gulp-cached');

var buildPath = './dist';

gulp.task('clean', function () {
  return del([
    buildPath + '/**/*'
  ]);
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(buildPath + '/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('fileinclude', function () {
  gulp.src(['./html/pages/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'html/components/'
    }))
    .pipe(gulp.dest(buildPath));
});

gulp.task('copy', function () {
  gulp.src(['js/**/*.js'])
    .pipe(cached('js'))
    .pipe(gulp.dest(buildPath + '/js/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('html:watch', function () {
  gulp.watch(['./html/pages/*.html']).on('change', fileinclude);
});

gulp.task('default', gulpSequence('clean', ['fileinclude', 'copy', 'sass'], 'sass:watch', 'html:watch'));