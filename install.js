/**
  Running TODO List:
  - add gulp notification util on error
  - add prettier?
  - add image / svg sprite optimization
  - make better way to extend / override config
  - create initial single styleguide page with all the base elements
  - add scaffolding / make commands to add new components or install existing ones
  - improve readme
  - test prod settings
 */

var fs = require('fs')

var prjPath = '../..'

// Scaffold initial gulpfile
fs.readFile('./templates/gulpfile.tpl.js', 'utf8', function (err, data) {

  if (err) return console.error(err)

  // Write template file contents to new file
  fs.writeFile(prjPath + '/gulpfile.js', data, 'utf8', function (err) {
    if (err) return console.error(err)
    console.log('Created gulpfile.js')
  })
})
