const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const connectDB = require('./services/database');
const logger = require('./middlewares/logger');
const cors = require('cors')

const app = express();

// Connect to MongoDB
connectDB();

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs.engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    // partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));

// Middleware
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API route
app.use('/api/students', require('./routes/api/students'));

// Routes
app.use(require('./routes/index'));

module.exports = app;