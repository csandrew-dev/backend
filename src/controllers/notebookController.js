// backend/src/controllers/notebookController.js

const Notebook = require('../models/Notebook');

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

const deleteNotebook = async (req, res) => {
    const { id } = req.params;
    try {
      // Use deleteOne to delete a single notebook by its ID
      const deletedNotebook = await Notebook.deleteOne({ _id: id });
      if (deletedNotebook.deletedCount === 1) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Notebook not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = {
    createNotebook,
    getNotebooks,
    deleteNotebook,
};
