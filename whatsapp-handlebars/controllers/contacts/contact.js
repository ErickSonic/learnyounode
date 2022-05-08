const Contact = require('../../models/contact')

const findAll = async (req, res) => {
    const result = await Contact.find()
    res.json(result)
}

const findByID = async (req, res) => {
        const exist = await Contact.findById(req.params.id)

        if (exist) {
            res.json({ contact: exist });
        } else {
            res.status(400).json({ msg: `No contact with the id ${req.params.id}`});
        }
}

const save  = async (req, res) => {
    const newContact = {
        name: req.body.name,
        phone: req.body.phone,
        date: req.body.date
    }
    
    if (!req.body.name || !req.body.phone || !req.body.date) {
        return res.status(400).json( { msg: 'Please include all data' });
    }
    
    const contact = new Contact(newContact)
    const result = await contact.save()
    res.status(201).json({ msg: 'contact created', contact: result })
}

const update  = async (req, res) => {
    const exist = await Contact.findById(req.params.id)

    if (exist) {
        const result = await Contact.findOneAndUpdate({
            _id: req.params.id
        }, req.body)

        res.status(201).json({ msg: 'contact updated', contact: result });
    } else {
        res.status(400).json({ msg: `No contact with the id ${req.params.id}`});
    }
}

const deleteById  = async (req, res) => {
    const exist = await Contact.findById(req.params.id)

    if (exist) {
        const result = await Contact.deleteMany({ _id: req.params.id })
        res.json( { msg: 'contact deleted', Contact: result });
    } else {
        res.status(400).json({ msg: `No contact with the id ${req.params.id}`});
    }
}

module.exports = {
    findAll,
    findByID,
    save,
    update,
    deleteById
}