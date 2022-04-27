'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var cleancss = require('gulp-cleancss')

sass.compiler = require('node-sass');
// function buildStyles() {
//   return gulp.src('scss/style.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('css'));
// };

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('scss/style.scss', ['sass']);
// };

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleancss({keepBreakes:false}))
    .pipe(gulp.dest('css'));  
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.parallel('sass'));
  });

