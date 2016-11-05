var ls = require('./ls.js')

var path = process.argv[2]
var ext = process.argv[3]

ls(path, ext, function(err, data) {
  if (err) return console.log(err)
  data.forEach(function(a){ console.log(a)})
})
