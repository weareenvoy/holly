/**
 * ./buildsys/tasks/init.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Init
 * 'gulp init'
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
      name: 'hasSASS',
      message: 'Will this project require SASS compilation?'
    },
    {
      type: 'confirm',
      name: 'hasBabel',
      message: 'Will this project require Babel (ES2015) compilation?'
    },
    {
      type: 'confirm',
      name: 'proceed',
      message: function (answers) {
        var confirmMsg = 'Boilerplate files to help jumpstart your development will be copied to the project root:\n'
        if (answers.hasSASS) {
          confirmMsg += config.styles.paths.src + '\n'
        }
        if (answers.hasBabel) {
          confirmMsg += config.scripts.paths.src + '\n'
        }
        return confirmMsg + 'Would you like to continue?'
      },
      when: function (answers) {
        return answers.hasSASS || answers.hasBabel
      }
    }
  ]).then(function (answers) {
    if (answers.proceed) {
      console.log('Scaffolding initial boilerplate files...')

      var replaceProps = [
        ['<%= PROJECT_NAME =%>', answers.projectName]
      ]

      return gulp.src(config.paths.hollyRoot + '/templates/src/**/*')
        .pipe(batchReplace(replaceProps))
        .pipe(gulp.dest(config.paths.srcRoot))
    } else {
      console.log('Nothing to scaffold, exiting project init flow.')
    }
  })
})
