//./backend/src/models/Note.js

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a note name"]
    },
    text: {
      type: String
    }
  },

  {
    timestamps: true
  }
);//end noteSchema

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;