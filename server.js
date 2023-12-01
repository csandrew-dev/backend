/*
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(bodyParser.json());

app.use(cors());

//const secretKey = 'aaaaaaaaaaaaaaaaaaaaaaaaa'; // Replace with a secure secret key
//
//const users = []; // This is a simple in-memory database, replace with a proper database in production
//
//app.post('/api/register', async (req, res) => {
//  const { username, password } = req.body;
//  const hashedPassword = await bcrypt.hash(password, 10);
//  users.push({ username, password: hashedPassword });
//  res.json({ message: 'User registered successfully' });
//});
//
//app.post('/api/login', async (req, res) => {
//  const { username, password } = req.body;
//  const user = users.find(user => user.username === username);
//
//  if (user && await bcrypt.compare(password, user.password)) {
//    const token = jwt.sign({ username }, secretKey);
//    res.json({ token });
//  } else {
//    res.status(401).json({ message: 'Invalid credentials' });
//  }
//});

const notes = [
    { id: 1, title: 'Note 1', content: 'This is the content of Note 1' },
    { id: 2, title: 'Note 2', content: 'This is the content of Note 2' },
    // Add more notes as needed
  ];
  
  app.use(express.json());
  
  app.get('/api/notes', (req, res) => {
    res.json(notes);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  */

  // backend/src/app.js

// backend/src/app.js

const mongoose = require('mongoose');
const express = require('express');
const noteRoutes = require('./src/routes/api');
const cors = require('cors');

const app = express();
app.use(cors());

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

// Middleware
app.use(express.json());

// Routes
app.use('/api/notes', noteRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


