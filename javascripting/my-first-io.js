const { argv } = require('process')

function io(route){
  this.route = route
  const fs = require('fs')
  const str = fs.readFileSync(route).toString()
  const n = str.split('\n').length - 1
  console.log(n)
}
io(process.argv[2])