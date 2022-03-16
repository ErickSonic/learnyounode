const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ErickSonic:ERick280103@whatsapp.yjezr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function(callback) {
//The code in this asynchronous callback block is executed after connecting to MongoDB. 
    console.log('Successfully connected to MongoDB.');
});

var Schema = mongoose.Schema;

var whatsSchema = new Schema({
    name: String,
    phone: String,
    date: String,
});

var Whats = mongoose.model('Comment', whatsSchema);

Whats.find({}, function(error, whatsSchema) {
    console.log(whatsSchema); //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.
});

// let arr = fs.readFileSync('whats.json');
// let whats = JSON.parse(arr);

// module.exports = whats