var result = process.argv
  .slice(2)
  .reduce(function(a,b)
        {
          return parseInt(a) + parseInt(b)
        })
console.log(result)
