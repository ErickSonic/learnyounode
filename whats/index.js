const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const logger = require('./middleware/logger');
const whats = require('./Whats')
const client = require('./wConnection')

const app = express();
const port = 6061;

// Run middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Homepage route
app.get('/', (req, res) => 
    res.render('index', {
        title: 'WebDev whats',
        whats
    })
);

//Initialize MongoDB Database
mongoose.connect("mongodb+srv://ErickSonic:ERick280103@whatsapp.yjezr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true})

app.get("/",(req,res) => {
    res.send("Check server is running");
});

app.listen(port, () => {
    console.log("Running");
})


//Initialize Whatsapp Client
client.initialize();

// API route
app.use('/api/whats', require('./routes/api/whats'));

// Folder static
app.use(express.static(path.join(__dirname, 'public')));

//app.listen(port, () => console.log('Running express app!'));