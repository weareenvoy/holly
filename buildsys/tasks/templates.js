/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Templates
 */

var twig = require('gulp-twig')
var browserSync = require('../browserSync').server

/* $ gulp templates */
gulp.task('templates', function () {
  var glob = [
    config.templates.paths.src + '/**/*.twig',
    '!' + config.templates.paths.src + '/layout/**/*',
    '!' + config.templates.paths.src + '/macros/**/*',
    '!' + config.templates.paths.src + '/partials/**/*'
  ]
  return gulp.src(glob)
    .pipe(twig())
    .on('error', swallowError)
    .pipe(gulp.dest(config.templates.paths.output))
    .on('end', browserSync.reload)
})

function swallowError (error) {
  console.log(error.toString())
  this.emit('end')
}
