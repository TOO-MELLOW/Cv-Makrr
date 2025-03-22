// server.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cvRoutes = require('./routes/cv');
const ocrRoutes = require('./routes/ocr');

const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/ocr', ocrRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
