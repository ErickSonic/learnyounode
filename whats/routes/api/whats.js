const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const whats = require('../../Whats');
const fs = require('fs')

// Get all whats
router.get('/', (req, res) => res.json(whats));

// Get single what
router.get('/:id', (req, res) => {
    // res.send(req.params.id);
    const exist = whats.some(what => what.id == req.params.id);

    if (exist) {
        res.json(whats.filter(what => what.id == req.params.id));
    } else {
        res.status(400).json({ msg: `No what with the id ${req.params.id}`});
    }
});

// Create new what
router.post('/', (req, res) => {
    const newWhat = {
        id: uuid.v4(),
        name: req.body.name,
        phone: req.body.phone,
        date: req.body.date
    }

    if (!req.body.name || !req.body.phone || !req.body.date) {
        return res.status(400).json( { msg: 'Please include name , phone and date' });
    }

    whats.push(newWhat);
    let arr = JSON.stringify(whats);
    fs.writeFile('whats.json', arr, err => {
        // error checking
        if(err) throw err;
        
        console.log("New data added");
    });  

    // res.json(whats);
    res.redirect('/');
});

// Update what
router.put('/:id', (req, res) => {
    const exist = whats.some(what => what.id === req.params.id);

    if (exist) {
        const updWhat = req.body;
        whats.forEach(what => {
            if (what.id === req.params.id) {
                what.name = updWhat.name ? updWhat.name : what.name;
                what.phone = updWhat.phone ? updWhat.phone : what.phone;
                what.date = updWhat.date ? updWhat.date : what.date;

                let arr = JSON.stringify(whats);
                fs.writeFile('whats.json', arr, err => {
                    // error checking
                    if(err) throw err;
                    
                    console.log("Data");
                });  
                res.json({ msg: 'what updated', what });
            }
        });
    } else {
        res.status(400).json({ msg: `No what with the id ${req.params.id}`});
    }
    
});

// Delete what
router.delete('/:id', (req, res) => {
    const exist = whats.some(what => what.id === req.params.id);

    if (exist) {
        res.json( { msg: 'what deleted', what: whats.filter(what => what.id !== req.params.id) });
        whats.forEach(what => {
            if (what.id === req.params.id) {
                pos = whats.indexOf(what);
            }
        });
        whats.splice(pos,1);

        let arr = JSON.stringify(whats);
        fs.writeFile('whats.json', arr, err => {
            // error checking
            if(err) throw err;
            
            console.log("what deleted");
        });  

    } else {
        res.status(400).json({ msg: `No what with the id ${req.params.id}`});
    }
});

module.exports = router;