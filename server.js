const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const noteRoutes = require('./src/routes/api');
const notebookRoutes = require('./src/routes/api');


const app = express();
app.use(cors());
app.use(express.json());

// Load environment variables from the .env file
require('dotenv').config();

// Connect to MongoDB using Mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@noter-backend-cluster.uzgvwrf.mongodb.net/Noter-DB`)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });



// Routes
app.use('/api', noteRoutes);
app.use('/api', notebookRoutes); 

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


