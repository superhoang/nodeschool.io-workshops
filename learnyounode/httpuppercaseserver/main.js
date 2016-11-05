var http = require('http')

var port = process.argv[2]
var server = http.createServer(function(request, response){
  if (request.method != 'POST') return response.end()
  request.on('data', function(data){
    response.write(data.toString().toUpperCase())
  })
  request.on('end', () => {
    response.end()
  })
})
server.listen(port)
