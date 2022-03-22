const express = require('express')
const path = require('path')
const stylus = require('stylus')
const port = process.argv[2]
const files = process.argv[3]

const app = express()

app.use(require('stylus').middleware(files||path.join(__dirname, 'public')));
app.use(express.static(files||path.join(__dirname, 'public')));

app.listen(port)