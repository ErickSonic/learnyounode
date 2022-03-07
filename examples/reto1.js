const fs = require('fs');
const path = require('path');

const users = [
  {name: "Kaddy"},
  {name: "Marc"},
  {name: "Prince"},
  {name: "Kally"}
]

fs.writeFile(
  path.join(__dirname, '/', 'lectura.json'),
    JSON.stringify(users),
  err=> {
    if (err)
    console.log(err);
    
  else {
    console.log("File written succesfully");
  };
  })