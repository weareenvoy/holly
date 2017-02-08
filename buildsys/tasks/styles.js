/**
 * ./buildsys/tasks/styles.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Styles
 * 'gulp styles'
 */

var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')

/* $ gulp styles */
gulp.task('styles', function () {
  return gulp.src(config.styles.paths.src + '/**/*.{scss,sass}')
    .pipe(plumber())
    .pipe(sass())
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest(config.styles.paths.output))
})
