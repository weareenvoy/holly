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
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')

/* $ gulp styles */
gulp.task('styles', function () {
  var processors = [
    autoprefixer
  ]
  return gulp.src(config.styles.paths.src + '/**/*.{scss,sass}')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest(config.styles.paths.output))
})
