/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Scripts
 */

var runSequence = require('run-sequence')
var standard = require('gulp-standard')
var babelify = require('babelify')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var gulpif = require('gulp-if')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var notify = require('gulp-notify')
var rev = require('gulp-rev')
var browserSync = require('../browserSync').server

var srcScriptsGlob = [
  config.scripts.paths.src + '/**/*.js',
  config.components.paths.src + '/**/*.js'
]

/* $ gulp scripts */
gulp.task('scripts', function () {
  return runSequence('scripts:lint', 'scripts:compile')
})

/* $ gulp scripts:lint */
gulp.task('scripts:lint', function () {
  return gulp.src(srcScriptsGlob)
    .pipe(standard())
    .pipe(standard.reporter('default'))
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
    .on('error', swallowError)
    .pipe(source('./main.js'))
    .pipe(buffer())
    .pipe(gulpif((env === 'dev'), sourcemaps.init()))
    .pipe(gulpif((env === 'prod'), rev()))
    .pipe(gulpif((env === 'prod'), uglify()))
    .pipe(gulpif((env === 'dev'), sourcemaps.write()))
    .pipe(gulp.dest(config.scripts.paths.output))
    .pipe(gulpif((env === 'prod'), rev.manifest({ path: 'rev-manifest-js.json' })))
    .pipe(gulpif((env === 'prod'), gulp.dest(config.paths.distRoot)))
    .on('end', browserSync.reload)
})

function swallowError (error) {
  console.log(error.toString())
  notify.onError({ title: 'JS Error', message: 'Oops! Made a boobo with your JavaScript!' })(error)
  this.emit('end')
}
