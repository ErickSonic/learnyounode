const express = require('express')
const port = process.argv[2]

const app = express()

app.get('/search', function(req,res){
  let query = req.query
  res.send(query)
})

app.listen(port)