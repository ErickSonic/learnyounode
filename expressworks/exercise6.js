const express = require('express')
const port = process.argv[2]

const app = express()


app.put('/message/:id', function (req, res) {
  let id = req.params.id
  let hash = require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')

  res.send(hash)
})

app.listen(port)