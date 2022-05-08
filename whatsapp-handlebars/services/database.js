const mongoose = require('mongoose')
let count = 0;

const connectDB = () => {
    console.log('Connecting to MongoDB');
    mongoose.connect('mongodb+srv://ErickSonic:ERick280103@whatsapp.yjezr.mongodb.net/contacts?retryWrites=true&w=majority').then(() =>{
        console.log('MongoDB is connected')
    }).catch((err) => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectDB, 5000);
    })
};

module.exports = connectDB;