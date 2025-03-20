const CV = require('../models/CV');

exports.createCV = async (req, res) => {
  try {
    const cv = new CV({ ...req.body, userId: req.user.id });
    await cv.save();
    res.status(201).json(cv);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCVs = async (req, res) => {
  try {
    const cvs = await CV.find({ userId: req.user.id });
    res.json(cvs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateCV = async (req, res) => {
  try {
    const cv = await CV.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!cv) return res.status(404).json({ error: 'CV not found' });
    res.json(cv);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCV = async (req, res) => {
  try {
    const cv = await CV.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!cv) return res.status(404).json({ error: 'CV not found' });
    res.json({ message: 'CV deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};