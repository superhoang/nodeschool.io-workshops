var net = require('net')

var port = process.argv[2]
var server = net.createServer(function(socket){
  var timestamp = new Date()
  timestamp = timestamp.getFullYear()+'-'+timestamp.getMonth()+'-'+timestamp.getDate()
         +' '+timestamp.getHours()+':'+timestamp.getMinutes()
  socket.end(timestamp)
}).listen(port)
