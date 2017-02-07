var fs = require('fs')

// console.log('dir: ' + process.cwd())

fs.writeFile('../../gulpfile.js', 'console.log("Hello, World!")', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('Gulpfile created!')
})
