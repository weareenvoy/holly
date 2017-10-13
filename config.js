/**
 * Build system configuration object. 
 * @author Keenan Staffieri
 */

var srcRoot = './src'
var distRoot = './dist'
var docRoot = '/dist/'

module.exports = {
  paths: {
    hollyRoot: __dirname,
    srcRoot: srcRoot,
    distRoot: distRoot,
    distDocRoot: docRoot
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
    }
  },
  components: {
    paths: {
      src: srcRoot + '/components'
    }
  }
}
