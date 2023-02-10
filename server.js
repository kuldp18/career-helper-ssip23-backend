require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
  res.send('backend is running!');
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
