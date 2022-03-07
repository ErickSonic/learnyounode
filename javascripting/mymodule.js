const fs = require('fs');
const path = require('path');

module.exports = function(route, extension, callback){
  fs.readdir(route, (err, list) => { 
    if (err) { return callback(err) }
    var filteredList = [];
    list.forEach(file => {
      if(path.extname(file) == ('.' + extension)){
      filteredList.push(file); 
      console.log(file)
      }
    });
    return callback(null,filteredList);
  })
}
