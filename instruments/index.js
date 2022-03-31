const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger');
const instrumentRoutes = require('./routes/api/instruments');
const mongoose = require('mongoose');
const readDB = require('./dbConnection');

const app = express();
const port = 7070;

// Run middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/', instrumentRoutes);
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

mongoose.connect("mongodb+srv://ErickSonic:ERick280103@instruments.itgoo.mongodb.net/instruments?retryWrites=true&w=majority")
        .then(() => console.log("Connected to Atlas Database"))
        .catch((error) => console.error(error));

// Homepage route
app.get('/', (req, res) => {
    readDB.catch(console.error).then(instruments => {
        res.render('index', {
            title: 'Instruments',
            instruments
        });
    });
});

// Folder static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Running express app!'));