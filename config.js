/**
 * Build system configuration object. 
 * @author Keenan Staffieri
 */

var srcRoot = './src'
var distRoot = './dist'
var docRoot = '/dist/'
var testRoot = './test'

module.exports = {
  buildName: 'holly',
  runStandalone: true, // if 'true', static website w/ local dev server
  browserSync: {
    port: 8000,
    openOnStart: false
  },
  paths: {
    hollyRoot: __dirname,
    srcRoot: srcRoot,
    distRoot: distRoot,
    distDocRoot: docRoot,
    testRoot: testRoot
  },
  templates: {
    paths: {
      src: srcRoot + '/templates',
      output: distRoot
    }
  },
  assets: {
    paths: {
      src: srcRoot + '/assets',
      output: distRoot + '/assets'
    }
  },
  styles: {
    paths: {
      src: srcRoot + '/css',
      output: distRoot + '/css'
    }
  },
  scripts: {
    paths: {
      src: srcRoot + '/js',
      output: distRoot + '/js'
    },
    bundles: [
      'main.js',
      'styleguide.js'
    ]
  },
  components: {
    paths: {
      src: srcRoot + '/components'
    }
  }
}
