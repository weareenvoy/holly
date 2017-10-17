/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Rev
 */

var override = require('gulp-rev-css-url')
var replace = require('gulp-replace')
var rev = require('gulp-rev')

/* $ gulp rev */
gulp.task('rev', function () {
  return gulp.src(config.paths.distRoot + '/**')
    .pipe(rev())
    .pipe(override())
    .pipe(gulp.dest(config.paths.distRoot))
    .pipe(rev.manifest())
    .pipe(replace(/(\s)\"/g, '$1"' + config.paths.distDocRoot))
    .pipe(gulp.dest(config.paths.distRoot))
})
