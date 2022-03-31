const fs = require('fs');

let arr = fs.readFileSync('instruments.json');
let instruments = JSON.parse(arr);

//console.log(instruments)

module.exports = instruments