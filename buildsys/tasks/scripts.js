/**
 * ./buildsys/tasks/scripts.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Scripts
 * 'gulp scripts'
 */

var babel = require('gulp-babel')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')
var standard = require('gulp-standard')

/* $ gulp scripts */
gulp.task('scripts', function () {
  return gulp.src(config.scripts.src + '/**/*.js')
    .pipe(plumber())
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
    .pipe(babel())
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest(config.scripts.output))
})
