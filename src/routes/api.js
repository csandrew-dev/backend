// backend/src/routes/api.js

const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const notebookController = require('../controllers/notebookController');

// Note routes
router.get('/notes', noteController.getAllNotes);
router.post('/notes', noteController.createNote);
router.delete('/notes/:id', noteController.deleteNote);

// Notebook routes
router.get('/notebooks', notebookController.getNotebooks);
router.post('/notebooks', notebookController.createNotebook);

module.exports = router;
