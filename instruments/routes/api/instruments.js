const express = require('express');
const instrumentSchema = require ('../../models/instrument')
const readDB = require('../../dbConnection');

const router = express.Router();

//Get all instruments
router.get('/instruments', (req,res) => {
  instrumentSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Get an instruments
router.get('/instruments/:id', (req,res) => {
  const { id } = req.params;
  instrumentSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Create an instrument
router.post('/instruments', (req,res) => {
  const instrument = instrumentSchema(req.body);
  instrument.save().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Uptype an instrument
router.put('/instruments/:id', (req,res) => {
  const { id } = req.params;
  const { name, description, type } = req.body;
  instrumentSchema.uptypeOne({ _id:id },{ $set: {name,description,type} }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Delete an instrument
router.delete('/instruments/:id', (req,res) => {
  const { id } = req.params;
  instrumentSchema.remove({ _id:id }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

module.exports = router;