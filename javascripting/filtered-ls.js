const fs = require('fs');
const path = require('path');
const route = process.argv[2];
const extension = process.argv[3];

function filteredLS(route, extension) {

  fs.readdir(route, (err, list) => { 
    list.forEach(file => {
      if(path.extname(file) == ('.' + extension)){
      console.log(file); 
      }
    });
    
  })
}
filteredLS(route,extension);