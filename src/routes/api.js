// backend/src/routes/api.js

const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Routes
router.get('/', noteController.getAllNotes);
router.post('/', noteController.createNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
