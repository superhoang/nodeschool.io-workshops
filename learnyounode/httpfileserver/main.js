var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var filePath = process.argv[3]

var server = http.createServer(function(request, response){
  var stream = fs.createReadStream(filePath)
  response.writeHead(200, {'Content-Type': 'text/plain'})
  stream.pipe(response)
})
server.listen(port)
