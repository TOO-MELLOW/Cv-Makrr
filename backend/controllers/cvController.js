const multer = require('multer');
const Tesseract = require('tesseract.js');

// Setup multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// In-memory storage for demo purposes (replace with a real database in production)
const cvDatabase = {};

// Endpoint to return a list of CV templates (extend this list to 200+ templates)
const templates = [
  { id: 1, name: 'Modern Professional', preview: '/path/to/template1.png' },
  { id: 2, name: 'Creative Designer', preview: '/path/to/template2.png' }
  // ... add additional templates as needed
];

exports.getTemplates = (req, res) => {
  res.json(templates);
};

// Endpoint to handle uploaded CV files
exports.uploadCv = (req, res) => {
  upload.single('cvFile')(req, res, function(err) {
    if (err || !req.file) {
      return res.status(400).json({ error: 'No file uploaded or upload error occurred' });
    }
    // For demo purposes, return file information. In production, parse and store as needed.
    res.json({ message: 'File uploaded successfully', filename: req.file.originalname });
  });
};

// Endpoint to perform OCR on scanned CV images
exports.processOcr = (req, res) => {
  const { imageData } = req.body;
  if (!imageData) {
    return res.status(400).json({ error: 'No image data provided' });
  }
  Tesseract.recognize(imageData, 'eng')
    .then(({ data: { text } }) => {
      res.json({ text });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Endpoint to save CV data (simulate saving on server and/or return file for download)
exports.saveCv = (req, res) => {
  const { userId, cvData } = req.body;
  if (!userId || !cvData) {
    return res.status(400).json({ error: 'Missing parameters' });
  }
  // For demo, save CV data in memory (use a proper DB or file system in production)
  cvDatabase[userId] = cvData;
  res.json({ message: 'CV saved successfully', data: cvData });
};
