var fs = require('fs')
var filePath = process.argv[2]
var result = fs.readFileSync(filePath)
.toString()
.split('')
.filter(function(a){ return a=='\n'})
.length
console.log(result)
