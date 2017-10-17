/**
  Running TODO List:
  - set up initial twig layouts and partials
  - figure out component structure for templates / js / styles
  - add prettier?
  - add image / svg sprite optimization
  - add gulp notification util on error
  - make better way to extend / override config
  - add more / modify questions when installing for the first time
  - add scaffolding / make commands to add new components or install existing ones
  - create initial single styleguide page with all the base elements
  - optimize local dev environment
  - test prod settings
  - test via node_modules install
  - improve readme
 */

var fs = require('fs')

var prjPath = '../..'

// Scaffold initial gulpfile
fs.readFile('./gulpfile.js', 'utf8', function (err, data) {

  if (err) return console.error(err)

  // Write template file contents to new file
  fs.writeFile(prjPath + '/gulpfile.js', data, 'utf8', function (err) {
    if (err) return console.error(err)
    console.log('Created gulpfile.js')
  })
})
