// backend/src/routes/api.js

const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const notebookController = require('../controllers/notebookController');

// Note routes
router.get('/notes', noteController.getAllNotes);
router.post('/notes', noteController.createNote);
router.delete('/notes/:id', noteController.deleteNote);
router.patch('/notes/:id', noteController.updateNote);

// Notebook routes
router.get('/notebooks', notebookController.getNotebooks);
router.post('/notebooks', notebookController.createNotebook);
router.delete('/notebooks/:id', notebookController.deleteNotebook);
router.patch('/notebooks/:id', notebookController.updateNotebookName);

module.exports = router;
