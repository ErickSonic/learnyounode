const { argv } = require('process')

function aIO(route){
  this.route = route;
  const fs = require('fs')
  fs.readFile(route,(err, data) => {
    if (err) throw err;
    const str = data.toString();
    console.log(str.split('\n').length - 1)
    });
    
}
aIO(argv[2]);