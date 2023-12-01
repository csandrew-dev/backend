// backend/src/models/Notebook.js

const mongoose = require('mongoose');

const notebookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Notebook = mongoose.model('Notebook', notebookSchema);

module.exports = Notebook;
