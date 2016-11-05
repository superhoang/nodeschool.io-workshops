var fs = require('fs')
module.exports = function (path, ext, callback) {
  fs.readdir(path, function(err, files){
    if (err) return callback(err)
    var data = files.filter(function(a){
      return a.endsWith('.'+ext)
    })
    return callback(err, data)
  })
}
