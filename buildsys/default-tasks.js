/**
 * Gulp task series commands are defined here.
 * @author Keenan Staffieri
 */

const taskList = []

if (config.runStandalone) {
  taskList.push('clean')
}

const buildTasks = [
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

// module.exports = [
//   'clean', // TODO: Do not clean if not static
//   [
//     'styles',
//     'scripts',
//     'copy-assets',

//     // TODO: Refactor, added for static builds...
//     'templates',
//     'serve'
//   ],
//   'rev'
// ]
