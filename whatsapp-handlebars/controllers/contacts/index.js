const Contact = require('../../models/contact');
const { client } = require('../../services/whatsapp')

let todaydate = new Date();
let day = ("0" + todaydate.getDate()).slice(-2);
let month = ("0" + (todaydate.getMonth() + 1)).slice(-2);
todaydate = day + "/" + month;

const findAll = async (req, res) => {
    const result = await Contact.find().lean();
    
    res.render('index', {
        contacts : result
    });
};

const save = async (req, res) => {
    console.log(`${req.body.name}  ${req.body.phone}  ${req.body.date}`)
    const newContact = {
        name: req.body.name,
        phone: req.body.phone,
        date: req.body.date
    }

    if (!req.body.name || !req.body.phone || !req.body.date) {
        return res.status(400).json({ msg: 'Please include all data' });
    }

    const contact = new Contact(newContact);
    await contact.save();
    const result = await Contact.find().lean();

    res.redirect('/')

};

const update = async (req, res) => {
    const contact = await Contact.findById(req.body._id)
    const newContact = {
        name: req.body.name ? req.body.name : contact.name,
        phone: req.body.phone ? req.body.phone : contact.phone,
        date: req.body.date ? req.body.date : contact.date
    }

    await Contact.findOneAndUpdate({_id: req.body._id}, newContact)

    const result = await Contact.find().lean();
    res.redirect('/')
};

const deleteById = async (req, res) =>{
    await Contact.deleteMany({ _id: req.body._id })
    const result = await Contact.find().lean();
    res.redirect('/')
};

const congratulate = async (req, res) => {
    let query = { date: todaydate}
    const result = await Contact.find(query);
    result.forEach(person => {
        let message = req.body.msg + ' ' + person.name + '!';
        console.log(message)
        client.sendMessage(`521${person.phone}@c.us`, message).catch(err => console.error);
        res.redirect('/')
    });
    
    
}

module.exports = { findAll, save, update, deleteById, congratulate};