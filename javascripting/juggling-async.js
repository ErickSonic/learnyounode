const http = require('http')
const bl = require('bl')

let output = []
const urls = process.argv.slice(2);

function print(output){
  for(let i=0; i<urls.length; i++){
    console.log(output[i])
  }
}

function jug(url, i){
  http.get(url, (response)=>{ 
    response.pipe(bl(function (err, data) {  
      if (err) {
          return console.error(err)
      }
      
      output[i] = data.toString();
      
      if (output.length == urls.length) {
          print(output);
      }
      
  }));
  })
}

for (var i = 0; i < urls.length; i++) {
  jug(urls[i], i)
}