/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Templates
 */

var twig = require('gulp-twig')
var browserSync = require('../browserSync').server

/* $ gulp templates */
gulp.task('templates', function () {
  return gulp.src(config.templates.paths.src + '/**/*.twig')
    .pipe(twig())
    .pipe(gulp.dest(config.templates.paths.output))
    .on('end', browserSync.reload)
})
