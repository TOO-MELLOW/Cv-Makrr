const express = require('express');
const CV = require('../models/CV');
const router = express.Router();

// GET all CVs
router.get('/', async (req, res) => {
  try {
    const cvs = await CV.find();
    res.json(cvs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET a single CV by ID
router.get('/:id', async (req, res) => {
  try {
    const cv = await CV.findById(req.params.id);
    if (!cv) {
      return res.status(404).json({ error: 'CV not found' });
    }
    res.json(cv);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new CV
router.post('/', async (req, res) => {
  try {
    const cv = new CV(req.body);
    await cv.save();
    res.status(201).json(cv);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT (update) a CV by ID
router.put('/:id', async (req, res) => {
  try {
    const cv = await CV.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!cv) {
      return res.status(404).json({ error: 'CV not found' });
    }
    res.json(cv);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a CV by ID
router.delete('/:id', async (req, res) => {
  try {
    const cv = await CV.findByIdAndDelete(req.params.id);
    if (!cv) {
      return res.status(404).json({ error: 'CV not found' });
    }
    res.json({ message: 'CV deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
