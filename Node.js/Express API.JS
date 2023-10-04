const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./models/book');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Define routes for handling book data.
// Implement GET, POST, PUT, DELETE endpoints.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
