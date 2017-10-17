/**
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Init
 */

var inquirer = require('inquirer')
var batchReplace = require('gulp-batch-replace')

/* $ gulp init */
gulp.task('init', function () {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Please enter formal project name (i.e. Holly Inc. Website)',
      validate: function (answer) {
        if (answer.length === 0) {
          return 'Project name cannot be empty!'
        }
        return true
      }
    },
    {
      type: 'confirm',
      name: 'proceed',
      message: function (answers) {
        var confirmMsg = 'Boilerplate files to help jumpstart your development will be copied to the project root:\n'
        confirmMsg += config.styles.paths.src + '\n'
        confirmMsg += config.scripts.paths.src + '\n'
        confirmMsg += config.components.paths.src + '\n'
        if (config.runStandalone) {
          confirmMsg += config.templates.paths.src + '\n'
        }
        return confirmMsg + 'Would you like to continue?'
      }
    }
  ]).then(function (answers) {
    if (answers.proceed) {
      console.log('Scaffolding initial boilerplate files...')

      var replaceProps = [
        ['<%= PROJECT_NAME =%>', answers.projectName]
      ]

      var destRoot = (mode == 'local-dev') ? config.paths.testRoot + '/src' : config.paths.srcRoot

      return gulp.src(config.paths.hollyRoot + '/src/**/*')
        .pipe(batchReplace(replaceProps))
        .pipe(gulp.dest(destRoot))
    } else {
      console.log('Nothing to scaffold, exiting project init flow.')
    }
  })
})
