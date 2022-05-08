const express = require('express');
const router = express.Router();
const {findAll, save} = require('../controllers/index');

// Homepage route
router.get('/', findAll);

// Create new student
router.post('/students', save);

// Update student
// router.put('/:id', StudentController.update);

// Delete student
// router.delete('/:id', StudentController.deleteById);

module.exports = router;