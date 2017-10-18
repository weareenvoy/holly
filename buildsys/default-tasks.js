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
  taskList.push('rev')
  taskList.push('rev:replace')
}
else {
  taskList.push('serve')
}

if (config.runStandalone && env === 'dev') {
  taskList.push('watch')
}

module.exports = taskList
