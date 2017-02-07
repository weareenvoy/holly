/**
 * ./buildsys/tasks/watch.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Watch
 * 'gulp watch'
 */

var runSequence = require('run-sequence')
var watch = require('gulp-watch')

/* $ gulp watch */
gulp.task('watch', function () {

  // Watch for style changes
  watch(config.styles.src + '/**/*.{scss,sass}', {
    name: 'Styles Watcher'
  }, function () {
    gulp.start('styles')
  })

  // Watch for script changes
  watch(config.scripts.src + '/**/*.js', {
    name: 'Scripts Watcher'
  }, function () {
    gulp.start('scripts')
  })
})
