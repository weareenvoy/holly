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
}

taskList.push(buildTasks)

if (env === 'prod') {
  taskList.push('rev', 'rev:replace')
}
else {
  taskList.push('serve', 'watch')
}

module.exports = taskList
