const express = require('express');
const Tesseract = require('tesseract.js');
const multer = require('multer');
const upload = multer();
const router = express.Router();

// Scan a CV image and extract text
router.post('/scan', upload.single('image'), async (req, res) => {
  try {
    const { data: { text } } = await Tesseract.recognize(
      req.file.buffer,
      'eng',
      { logger: m => console.log(m) }
    );
    res.json({ text });
  } catch (err) {
    res.status(500).json({ error: 'OCR processing failed' });
  }
});

module.exports = router;
