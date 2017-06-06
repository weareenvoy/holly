/**
 * ./buildsys/tasks/clean.js
 * @author Scott Roach
 * ------------------------------------
 * TASK: Clean
 * 'gulp clean'
 */

var del = require('del')

/* $ gulp clean */
gulp.task('clean', function () {
  if (env === 'prod') {
    return del([config.paths.distRoot + '/**'])
  } else {
    return del([config.paths.distRoot + '/rev-manifest.json'])
  }
})
