// server.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cvRoutes = require('./routes/cv');
const ocrRoutes = require('./routes/ocr');
const errorHandler = require('./middleware/errorHandler');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/ocr', ocrRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));