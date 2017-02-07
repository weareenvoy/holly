/**
 * ./buildsys/commands.js
 * Gulp task series commands are defined here.
 * @author Keenan Staffieri
 */

// import runSequence from 'run-sequence'
var runSequence = require('run-sequence')

/* --- $ gulp --- */
gulp.task('default', function (cb) {
  return runSequence([
    'styles',
    'scripts',
    'watch'
  ])
})
