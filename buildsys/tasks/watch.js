/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Watch
 */

var runSequence = require('run-sequence')
var watch = require('gulp-watch')

/* $ gulp watch */
gulp.task('watch', function () {

  // Watch for template changes
  watch(config.templates.paths.src + '/**/*.twig', {
    name: 'Templates Watcher'
  }, function () {
    gulp.start('templates')
  })

  // Watch for style changes
  watch(config.styles.paths.src + '/**/*.{scss,sass}', {
    name: 'Styles Watcher'
  }, function () {
    gulp.start('styles')
  })

  // Watch for script changes
  watch(config.scripts.paths.src + '/**/*.js', {
    name: 'Scripts Watcher'
  }, function () {
    gulp.start('scripts')
  })

  // Watch for asset changes
  watch(config.assets.paths.src + '/**/*.*', {
    name: 'Assets Watcher'
  }, function () {
    gulp.start('copy-assets')
  })
})
