// controllers/ocrController.js
const Tesseract = require('tesseract.js');

exports.scanImage = async (req, res) => {
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
};