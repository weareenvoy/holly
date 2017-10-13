/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Styles
 */

var postcss = require('gulp-postcss')
var sass = require('gulp-sass')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')
var gulpif = require('gulp-if')
var browserSync = require('../browserSync').server

/* $ gulp styles */
gulp.task('styles', function () {
  var processors = [
    autoprefixer
  ]
  if (env === 'prod') {
    processors.push(cssnano)
  }
  return gulp.src([
      config.styles.paths.src + '/**/*.{scss,sass}',
      config.components.paths.src + '/**/*.{scss,sass}'
    ])
    .pipe(plumber())
    .pipe(gulpif((env === 'dev'), sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulpif((env === 'dev'), sourcemaps.write()))
    .pipe(gulp.dest(config.styles.paths.output))
    .pipe(browserSync.stream())
})
