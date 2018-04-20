/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Styles
 */

var postcss = require('gulp-postcss')
var sass = require('gulp-sass')
var autoprefixer = require('autoprefixer')
var colorFunction = require('postcss-color-function')
var mqpacker = require('css-mqpacker')
var size = require('postcss-size')
var position = require('postcss-position')
var responsiveType = require('postcss-responsive-type')
var cssnano = require('cssnano')
var sourcemaps = require('gulp-sourcemaps')
var gulpif = require('gulp-if')
var notify = require('gulp-notify')
var browserSync = require('../browserSync').server
var cache = require('gulp-cached')

/* $ gulp styles */
gulp.task('styles', function () {
  var processors = [
    autoprefixer,
    colorFunction(),
    position,
    size,
    responsiveType
  ]
  if (env === 'prod') {
    processors.push(mqpacker({
      sort: true
    }))
    processors.push(cssnano)
  }
  return gulp.src(config.styles.paths.src + '/**/*.{scss,sass}')
    .pipe(gulpif((env === 'dev'), sourcemaps.init()))
    .pipe(cache('styles'))
    .pipe(sass())
    .on('error', swallowError)
    .pipe(postcss(processors))
    .on('error', swallowError)
    .pipe(gulpif((env === 'dev'), sourcemaps.write()))
    .pipe(gulp.dest(config.styles.paths.output))
    .pipe(browserSync.stream())
})

function swallowError (error) {
  console.log(error.toString())
  notify.onError({ title: 'SASS Error', message: 'Slow down! Your style has gone south!' })(error)
  this.emit('end')
}
