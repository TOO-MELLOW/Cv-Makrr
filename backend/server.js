require('dotenv').config(); // Add this line at the top
const express = require('express');
const mongoose = require('mongoose');
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware and routes
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cv', require('./routes/cv'));
app.use('/api/ocr', require('./routes/ocr'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));