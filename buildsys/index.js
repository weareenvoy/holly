/**
 * Index of buildsys. Handles autoloading of all tasks and setting up environment.
 * @author Keenan Staffieri
 */

var gulp = require('gulp')
var fs = require('fs')
var logger = require('./utils/Logger')

// Grab command line arguments
var argv = require('yargs').argv

/**
 * Globals
 */

// Set build environment (dev or prod)
global.env = argv.prod ? 'prod' : 'dev'

// Set build system mode
// Local Dev: working on the build system itself
// Normal: working on a project, holly is installed as an npm package
global.mode = argv['local-dev'] ? 'local-dev' : 'normal'

// Make gulp globally accessible
global.gulp = gulp

logger.banner('starting holly build...')
logger.logValue('build mode', env)

if (config.runStandalone) {
  logger.log('Configured for standalone static website.')
}

/**
 * Require all gulp tasks...
 */
var tasks = fs.readdirSync(__dirname + '/tasks/')
tasks.forEach(function (task) {
  if (/\.js/.test(task)) {
    logger.info(`${config.buildName}: requiring task ${task}...`)
    require(`./tasks/${task}`)
  }
})

/**
 * Require default gulp commands
 */
var taskList = require('./default-tasks')
var runSequence = require('run-sequence')

/* --- $ gulp --- */
gulp.task('default', function () {
  return runSequence.apply(null, taskList)
})
