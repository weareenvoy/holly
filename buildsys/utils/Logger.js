var gutil = require('gulp-util')

module.exports = {

  log: function (msg) {
      gutil.log(msg)
  },

  logValue: function (attr, value) {
    gutil.log(gutil.colors.green(attr + ': ') + gutil.colors.white(value))
  },

  info: function (msg) {
    gutil.log(gutil.colors.dim(msg))
  },

  banner: function (msg) {
    gutil.log(
      gutil.colors.blue.bgBlack(
        '\n|..............................................\n> ' + gutil.colors.yellow(msg) + '\n|----------------------------------------------'
      )
    )
  }
}
