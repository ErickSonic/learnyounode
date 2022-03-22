const express = require('express')
let fs = require('fs');
const port = process.argv[2]
const file = process.argv[3]

const app = express()

app.get('/books', function(req,res){
  fs.readFile(file, (err,data) =>{
    if(err) throw err;
    res.json(JSON.parse(data))
  })
})

app.listen(port)