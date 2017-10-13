/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Serve
 */

var browserSync = require('../browserSync')

/* $ gulp serve */
gulp.task('serve', function () {
  return browserSync.init({
    server: config.paths.distRoot,
    port: 8000,
    open: false
  })
})
