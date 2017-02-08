/**
 * ./buildsys/tasks/scripts.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Scripts
 * 'gulp scripts'
 */

var runSequence = require('run-sequence')
var standard = require('gulp-standard')
var plumber = require('gulp-plumber')
var babel = require('gulp-babel')
// var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')

var srcScriptsGlob = config.scripts.paths.src + '/**/*.js'

/* $ gulp scripts */
gulp.task('scripts', function () {
  return runSequence(
    'scripts:lint',
    'scripts:compile'
  )
})

/* $ gulp scripts:lint */
gulp.task('scripts:lint', function () {
  return gulp.src(srcScriptsGlob)
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

/* $ gulp scripts:compile */
gulp.task('scripts:compile', function () {
  return gulp.src(srcScriptsGlob)
    .pipe(plumber())
    .pipe(babel())
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest(config.scripts.paths.output))
})
