/**
 * ./buildsys/tasks/styles.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Styles
 * 'gulp styles'
 */

var postcss = require('gulp-postcss')
var sass = require('gulp-sass')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var lost = require('lost')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')
var gulpif = require('gulp-if')

/* $ gulp styles */
gulp.task('styles', ['clean'], function () {
  var processors = [
    autoprefixer,
    lost
  ]
  if (env === 'prod') {
    processors.push(cssnano)
  }
  return gulp.src(config.styles.paths.src + '/**/*.{scss,sass}')
    .pipe(plumber())
    .pipe(gulpif((env === 'dev'), sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulpif((env === 'dev'), sourcemaps.write()))
    .pipe(gulp.dest(config.styles.paths.output))
})
