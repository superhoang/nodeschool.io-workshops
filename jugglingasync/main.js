var http = require('http')
var urls = process.argv.slice(2)
var running = urls.length
var datastore = []

urls.forEach(function(url){
  var i = datastore.length
  datastore.push('')
  http.get(url, function(response){
    response.on('data', function(data){
      datastore[i]+=data.toString()
    })
    response.on('end', function(data){
      running--
      if (running == 0){
        datastore.forEach(function(data){
          console.log(data)
        })
      }
    })
  })
})
