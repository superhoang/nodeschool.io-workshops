var http = require('http')

var url = process.argv[2]
http.get(url, function(response){
  var raw = ''
  var count = 0
  response.setEncoding('utf8')
  response.on('data', function(data){
    count += data.length
    raw += data
  })
  response.on('end', function(data){
    console.log(count)
    console.log(raw)
  })
})
