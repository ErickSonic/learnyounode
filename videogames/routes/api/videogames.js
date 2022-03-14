const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const videogames = require('../../Videogames');
const fs = require('fs')

// Get all videogames
router.get('/', (req, res) => res.json(videogames));

// Get single videogame
router.get('/:id', (req, res) => {
    // res.send(req.params.id);
    const exist = videogames.some(videogame => videogame.id == req.params.id);

    if (exist) {
        res.json(videogames.filter(videogame => videogame.id == req.params.id));
    } else {
        res.status(400).json({ msg: `No videogame with the id ${req.params.id}`});
    }
});

// Create new videogame
router.post('/', (req, res) => {
    const newVideogame = {
        id: uuid.v4(),
        name: req.body.name,
        developer: req.body.developer,
        year: req.body.year
    }

    if (!req.body.name || !req.body.developer || !req.body.year) {
        return res.status(400).json( { msg: 'Please include name , developer and year' });
    }

    videogames.push(newVideogame);
    let arr = JSON.stringify(videogames);
    fs.writeFile('videogames.json', arr, err => {
        // error checking
        if(err) throw err;
        
        console.log("New data added");
    });  

    // res.json(videogames);
    res.redirect('/');
});

// Update videogame
router.put('/:id', (req, res) => {
    const exist = videogames.some(videogame => videogame.id === req.params.id);

    if (exist) {
        const updVideogame = req.body;
        videogames.forEach(videogame => {
            if (videogame.id === req.params.id) {
                videogame.name = updVideogame.name ? updVideogame.name : videogame.name;
                videogame.developer = updVideogame.developer ? updVideogame.developer : videogame.developer;
                videogame.year = updVideogame.year ? updVideogame.year : videogame.year;

                let arr = JSON.stringify(videogames);
                fs.writeFile('videogames.json', arr, err => {
                    // error checking
                    if(err) throw err;
                    
                    console.log("Data");
                });  
                res.json({ msg: 'Videogame updated', videogame });
            }
        });
    } else {
        res.status(400).json({ msg: `No videogame with the id ${req.params.id}`});
    }
    
});

// Delete videogame
router.delete('/:id', (req, res) => {
    const exist = videogames.some(videogame => videogame.id === req.params.id);

    if (exist) {
        res.json( { msg: 'Videogame deleted', videogame: videogames.filter(videogame => videogame.id !== req.params.id) });
        videogames.forEach(videogame => {
            if (videogame.id === req.params.id) {
                pos = videogames.indexOf(videogame);
            }
        });
        videogames.splice(pos,1);

        let arr = JSON.stringify(videogames);
        fs.writeFile('videogames.json', arr, err => {
            // error checking
            if(err) throw err;
            
            console.log("Videogame deleted");
        });  

    } else {
        res.status(400).json({ msg: `No videogame with the id ${req.params.id}`});
    }
});

module.exports = router;