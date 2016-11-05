fs = require('fs')
var filePath = process.argv[2]
fs.readFile(filePath, 'utf8', function(err, data){
  if (err) console.log(err)
  var result = data.split('\n').length - 1
  console.log(result)
})
