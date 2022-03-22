const express = require('express')
const port = process.argv[2]

const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res){
  res.send(req.body.str.split('').reverse().join(''))
})
app.listen(port)