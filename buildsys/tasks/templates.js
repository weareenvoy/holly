/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Templates
 */

var twig = require('gulp-twig')

/* $ gulp templates */
gulp.task('templates', function () {
  return gulp.src(config.templates.paths.src + '/**/*.twig')
    .pipe(twig({
      data: {
        title: 'Gulp and Twig',
        benefits: [
          'Fast',
          'Flexible',
          'Secure'
        ]
      }
    }))
    .pipe(gulp.dest(config.templates.paths.output))
})
