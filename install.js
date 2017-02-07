var fs = require('fs')

fs.writeFile(__dirname + '/gulpfile.js', 'console.log("Hello, World!")', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('Gulpfile created!')
})
