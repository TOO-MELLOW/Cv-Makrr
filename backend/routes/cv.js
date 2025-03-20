const express = require('express');
const auth = require('../middleware/auth');
const { createCV, getCVs, updateCV, deleteCV } = require('../controllers/cvController');
const router = express.Router();

router.post('/', auth, createCV);
router.get('/', auth, getCVs);
router.put('/:id', auth, updateCV);
router.delete('/:id', auth, deleteCV);

module.exports = router;