const express = require('express');
const upload = require('../utils/upload');
const { scanImage } = require('../controllers/ocrController');
const router = express.Router();

router.post('/scan', upload.single('image'), scanImage);

module.exports = router;