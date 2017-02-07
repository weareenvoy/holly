/**
 * ./buildsys/tasks/styles.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Styles
 * 'gulp styles'
 */

// import sass from 'gulp-sass'
// import sourcemaps from 'gulp-sourcemaps'
// import plumber from 'gulp-plumber'
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')

/* $ gulp styles */
gulp.task('styles', function () {
  return gulp.src('./src/styles/**/*.js')
    .pipe(plumber())
    .pipe(sass())
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest('./dist/css'))
})
