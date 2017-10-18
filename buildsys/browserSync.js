var browserSync = require('browser-sync').create()

module.exports = {
  config: {
    server: config.paths.distRoot,
    port: config.browserSync.port,
    open: config.browserSync.openOnStart
  },
  server: browserSync
}
