// backend/src/controllers/noteController.js

const Note = require('../models/Note');

const getAllNotes = async (req, res) => {
  try {
      const notes = await Note.find();
      res.json(notes);
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message});
  }
};

const createNote = async (req, res) => {
  try {
      const note = await Note.create(req.body);
      res.status(201).json(note);
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message});
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    // Use deleteOne to delete a single document by its ID
    const deletedNote = await Note.deleteOne({ _id: id });
    if (deletedNote.deletedCount === 1) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  deleteNote,
};
