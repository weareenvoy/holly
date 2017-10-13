/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Copy Assets
 */

/* $ gulp copy-assets */
gulp.task('copy-assets', function () {
  return gulp.src(config.assets.paths.src + '/**/*.*')
    .pipe(gulp.dest(config.assets.paths.output))
})
