/**
 * ./buildsys/tasks/scripts.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Scripts
 * 'gulp scripts'
 */

// import babel from 'gulp-babel'
// import uglify from 'gulp-uglify'
// import sourcemaps from 'gulp-sourcemaps'
// import plumber from 'gulp-plumber'
var babel = require('gulp-babel')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')

/* $ gulp scripts */
gulp.task('scripts', function () {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest('./dist/js'))
})
