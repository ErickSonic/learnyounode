const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())



mongoose.connect("mongodb+srv://ErickSonic:ERick280103@whatsapp.yjezr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true})

app.get("/",(req,res) => {
    res.send("Check server is running");
});

app.listen(port, () => {
    console.log("Running");
})