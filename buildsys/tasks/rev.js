/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Rev
 */

var override = require('gulp-rev-css-url')
// var replace = require('gulp-replace')
var rev = require('gulp-rev')
var revReplace = require('gulp-rev-replace')

/* $ gulp rev */
gulp.task('rev', function () {
  return gulp.src(config.paths.distRoot + '/**/*.{css,jpg,png,svg}')
    .pipe(rev())
    .pipe(override())
    .pipe(gulp.dest(config.paths.distRoot))
    .pipe(rev.manifest({ path: 'rev-manifest-css-assets.json' }))
    // .pipe(replace(/(\s)\"/g, '$1"' + config.paths.distDocRoot)) // for Craft?
    .pipe(gulp.dest(config.paths.distRoot))
})

/* $ gulp rev:replace */
gulp.task('rev:replace', function () {
  var manifestCssAssets = gulp.src(config.paths.distRoot + '/rev-manifest-css-assets.json')
  var manifestJs = gulp.src(config.paths.distRoot + '/rev-manifest-js.json')

  return gulp.src(config.paths.distRoot + '/**')
    .pipe(revReplace({ manifest: manifestCssAssets }))
    .pipe(revReplace({ manifest: manifestJs }))
    .pipe(gulp.dest(config.paths.distRoot))
})
