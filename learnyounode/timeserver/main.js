var net = require('net')

var portNumber = process.argv[2]
var server = net.createServer(function(socket){
  var timestamp = new Date()
  timestamp.setTime(timestamp.getTime() - timestamp.getTimezoneOffset()*60*1000)
  socket.end(timestamp.toISOString().substring(0,16).replace('T', ' ') + '\n')
})
server.listen(portNumber)
