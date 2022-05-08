const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: String,
    phone: String,
    date: String
},  { collection: 'contacts' })

const Contact = mongoose.model('Contacts', contactSchema);

module.exports = Contact;
