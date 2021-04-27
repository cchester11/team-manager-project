const fs = require('fs')
const template = require('./template')

const writeFile = function(returnHTML) {

  const generatePage = template(returnHTML)

  fs.writeFile('./dist/index.html', generatePage, err => {
    if(err) {
      return console.log(err)
    }
  })
  
}

module.exports = writeFile;