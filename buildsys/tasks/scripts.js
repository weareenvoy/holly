/**
 * ./buildsys/tasks/scripts.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Scripts
 * 'gulp scripts'
 */

var standard = require('gulp-standard')
var plumber = require('gulp-plumber')
var babelify = require('babelify')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var gulpif = require('gulp-if')
var browserify = require('gulp-browserify')

var srcScriptsGlob = config.scripts.paths.src + '/**/*.js'

/* $ gulp scripts */
gulp.task('scripts', function () {
  return gulp.src(srcScriptsGlob)
    .pipe(plumber())
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
    .pipe(gulpif((env === 'dev'), sourcemaps.init()))
    .pipe(browserify({
      transform: [ 'babelify' ]
    }))
    .pipe(gulpif((env === 'prod'), uglify()))
    .pipe(gulpif((env === 'dev'), sourcemaps.write()))
    .pipe(gulp.dest(config.scripts.paths.output))
})
