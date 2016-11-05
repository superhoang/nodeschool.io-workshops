var fs = require('fs')
var path = process.argv[2]
var ext = process.argv[3]

fs.readdir(path, function(err, list){
  list.filter(function(a){return a.endsWith('.'+ext)})
      .forEach(function(a){console.log(a)})
})
