/**
 * ./buildsys/tasks/copy-assets.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: copy-assets
 * 'gulp copy-assets'
 */

/* $ gulp copy-assets */
gulp.task('copy-assets', ['clean'], function () {
  return gulp.src(config.assets.paths.src + '/**/*.*')
    .pipe(gulp.dest(config.assets.paths.output))
})
