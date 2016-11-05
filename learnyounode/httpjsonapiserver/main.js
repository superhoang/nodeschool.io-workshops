var http = require('http')
var url = require('url')
var port = process.argv[2]

function parseTime(iso){
  var time = new Date(iso)
  return JSON.stringify({
    "hour" : time.getHours(),
    "minute" : time.getMinutes(),
    "second" : time.getSeconds()
  })
}

function unixTime(iso){
  var time = new Date(iso)
  return JSON.stringify({
    "unixtime" : time.getTime()
  })
}

function router(path){
  switch(path){
    case '/api/parsetime':
      return parseTime
    case '/api/unixtime':
      return unixTime
    default:
      return undefined
  }
  throw 'unknown route'
}

var server = http.createServer(function (request, response){
  var u = url.parse(request.url, true)
  console.log(u)
  var controller = router(u.pathname)
  if (controller){
    response.writeHead(200, {"Content-Type" : "application/json"})
    response.end(controller(u.query['iso']).toString())
  }
  else {
    response.writeHead(404)
    response.end()
  }
})
server.listen(port)
