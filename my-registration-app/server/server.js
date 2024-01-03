// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));



// Update your MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/my-registration-app', {
  useNewUrlParser: true,  // Remove this line (deprecated)
  useUnifiedTopology: true // Remove this line (deprecated)
});

// Replace with the following line
mongoose.connect('mongodb://localhost:27017/my-registration-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Add this line to address deprecation warning
});

// ... rest of your server code ...

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
