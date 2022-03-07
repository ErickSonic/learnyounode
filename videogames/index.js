const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger');
const videogames = require('./Videogames')

const app = express();
const port = 6060;

// Run middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Homepage route
app.get('/', (req, res) => 
    res.render('index', {
        title: 'WebDev videogames',
        videogames
    })
);

// API route
app.use('/api/videogames', require('./routes/api/videogames'));

// Folder static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Running express app!'));