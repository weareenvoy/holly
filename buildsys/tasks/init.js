/**
 * ./buildsys/tasks/init.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Init
 * 'gulp init'
 */

/* $ gulp init */
gulp.task('init', function () {
  return gulp.src(config.paths.hollyRoot + '/templates/src/**/*')
    .pipe(gulp.dest(config.paths.srcRoot))
})
