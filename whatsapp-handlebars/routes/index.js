const express = require('express');
const router = express.Router();
const {findAll, save, update, deleteById, congratulate} = require('../controllers/contacts/index');

// Homepage route
router.get('/', findAll);

// Create
router.post('/contacts', save);

// Update
router.post('/update', update);

// Delete
router.post('/delete', deleteById);

//congratulate
router.post('/congratulate' , congratulate)

module.exports = router;