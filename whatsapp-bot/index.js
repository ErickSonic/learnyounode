const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 6061;

//API route
app.get('/', (req, res) => {
  res.send("This is my API");
});

//Connection to MongoDB Database
mongoose.connect("mongodb+srv://ErickSonic:ERick280103@whatsapp.yjezr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.listen(port, () => console.log('Running express app!'));