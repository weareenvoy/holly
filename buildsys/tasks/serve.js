/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Serve
 */

var browserSync = require('browser-sync').create()

/* $ gulp serve */
gulp.task('serve', function () {
  return browserSync.init({
    server: {
      baseDir: config.paths.distRoot
    },
    port: 8000,
    open: false
  })
})
