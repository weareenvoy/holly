/**
 * Gulp task series commands are defined here.
 * @author Keenan Staffieri
 */

var taskList = []

if (config.runStandalone) {
  taskList.push('clean')
}

var buildTasks = [
  'styles',
  'scripts',
  'copy-assets'
]

if (config.runStandalone) {
  buildTasks.push('templates')

  if (env === 'dev') {
    buildTasks.push('serve')
  }
}

taskList.push(buildTasks)
taskList.push('rev')

if (config.runStandalone && env === 'dev') {
  taskList.push('watch')
}

module.exports = taskList
