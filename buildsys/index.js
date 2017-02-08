/**
 * ./buildsys/index.js
 * Index of buildsys. Handles autoloading of all tasks and setting up environment.
 * @author Keenan Staffieri
 */

var gulp = require('gulp')
var fs = require('fs')

// Grab command line arguments
var argv = require('yargs').argv

/**
 * Globals
 */

// Set build environment (dev or prod)
global.env = argv.prod ? 'prod' : 'dev'

// Set build system mode
global.mode = argv.dev ? 'dev' : 'normal'

// Make gulp globally accessible
global.gulp = gulp

/**
 * Require all gulp tasks...
 */
var tasks = fs.readdirSync(__dirname + '/tasks/')
tasks.forEach(function (task) {
  if (/\.js/.test(task)) {
    console.log(`holly: requiring task ${task}...`)
    require(`./tasks/${task}`)
  }
})


/**
 * Require default gulp commands
 */
var taskList = require('./default-tasks')
// Run default gulp task for development mode
if (mode === 'dev') {
  var runSequence = require('run-sequence')

  // Append 'watch' task for local development
  taskList.push('watch')

  /* --- $ gulp --- */
  gulp.task('default', function (cb) {
    return runSequence.apply(null, taskList)
  })
// Otherwise, assign default tasks for extended build system
} else {
  global.taskList = taskList
}
