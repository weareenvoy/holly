/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Scripts
 */

var runSequence = require('run-sequence')
var standard = require('gulp-standard')
var plumber = require('gulp-plumber')
var babelify = require('babelify')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var gulpif = require('gulp-if')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserSync = require('../browserSync').server

var srcScriptsGlob = config.scripts.paths.src + '/**/*.js'

/* $ gulp scripts */
gulp.task('scripts', ['clean'], function () {
  return runSequence('scripts:lint', 'scripts:compile')
})

/* $ gulp scripts:lint */
gulp.task('scripts:lint', function () {
  return gulp.src(srcScriptsGlob)
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false
    }))
})

/* $ gulp scripts:compile */
gulp.task('scripts:compile', function () {

  var b = browserify({
    entries: config.scripts.paths.src + '/main.js',
    debug: true
  })

  return b.transform(babelify.configure({
      presets: ['env']
    }))
    .bundle()
    .pipe(source('./main.js'))
    .pipe(buffer())
    .pipe(plumber())
    .pipe(gulpif((env === 'dev'), sourcemaps.init()))
    .pipe(gulpif((env === 'prod'), uglify()))
    .pipe(gulpif((env === 'dev'), sourcemaps.write()))
    .pipe(gulp.dest(config.scripts.paths.output))
    .on('end', browserSync.reload)
})
