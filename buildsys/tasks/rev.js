/**
 * ./buildsys/tasks/rev.js
 * @author Scott Roach
 * ------------------------------------
 * TASK: Rev
 * 'gulp rev'
 */

var override = require('gulp-rev-css-url')
var replace = require('gulp-replace')
var rev = require('gulp-rev')

/* $ gulp rev */
gulp.task('rev', ['copy-assets', 'scripts', 'styles'], function () {
  if (env === 'prod') {
    return gulp.src(config.paths.distRoot + '/**')
      .pipe(rev())
      .pipe(override())
      .pipe(gulp.dest(config.paths.distRoot))
      .pipe(rev.manifest())
      .pipe(replace(/(\s)\"/g, '$1"' + config.paths.distDocRoot))
      .pipe(gulp.dest(config.paths.distRoot))
  }
})
