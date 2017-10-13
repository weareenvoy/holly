var browserSync = require('browser-sync').create()

module.exports = {
  config: {
    server: config.paths.distRoot,
    port: 8000,
    open: false
  },
  server: browserSync
}
