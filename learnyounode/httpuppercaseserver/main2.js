var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

var server = http.createServer(function(request, response){
  if (request.method !== 'POST') return response.end()
  request.pipe(map(function(data){
    return data.toString().toUpperCase()
  }))
  .pipe(response)
})
server.listen(port)
