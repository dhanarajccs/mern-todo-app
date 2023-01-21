const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

// use express.json() to get the data into json format
app.use(express.json());

// Port
const PORT = process.env.PORT || 5500;


// Lets connect to MongoDB
mongoose.connect(process.env.DB_CONNECT_URL)
.then(() => console.log('Database Connected'))
.catch(err => console.log(err))

// Add Port and connect to server
app.listen(PORT, () => console.log("Server connected")); 