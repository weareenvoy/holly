/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Serve
 */

var config = require('../browserSync').config
var browserSync = require('../browserSync').server

/* $ gulp serve */
gulp.task('serve', function () {
  return browserSync.init(config)
})
