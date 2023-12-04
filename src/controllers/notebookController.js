// backend/src/controllers/notebookController.js

const Notebook = require('../models/Notebook');
const Note = require('../models/Note');

const createNotebook = async (req, res) => {
  try {
    const notebook = await Notebook.create(req.body);
    res.status(201).json(notebook);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getNotebooks = async (req, res) => {
  try {
    const notebooks = await Notebook.find();
    res.json(notebooks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateNotebookName = async (req, res) => {
  const notebookId = req.params.id;
  const newName = req.body.name;

  try {
    const notebook = await Notebook.findById(notebookId);

    if (!notebook) {
      res.status(404).json({ error: 'Notebook not found' });
      return;
    }

    notebook.name = newName;
    await notebook.save();

    res.json(notebook);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteNotebook = async (req, res) => {
  const notebookId = req.params.id;

  try {
    // Fetch all notes associated with the notebook
    const notes = await Note.find({ notebook: notebookId });

    // Delete each note
    await Promise.all(notes.map(async (note) => await Note.findByIdAndDelete(note._id)));

    // Delete the notebook
    await Notebook.findByIdAndDelete(notebookId);

    res.json({ message: 'Notebook and associated notes deleted successfully.' });
  } catch (error) {
    console.error('Error deleting notebook and associated notes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
    createNotebook,
    getNotebooks,
    deleteNotebook,
    updateNotebookName,
};
