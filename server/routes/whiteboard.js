const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/save-svg', (req, res) => {
  const { svgData } = req.body;

  if (!svgData) {
    return res.status(400).json({ error: 'SVG data is required' });
  }

  const filePath = path.join(
    __dirname,
    '../saved_svgs',
    `lecture_${Date.now()}.svg`
  );

  fs.writeFile(filePath, svgData, (err) => {
    if (err) {
      console.error('Error writing SVG file:', err);
      return res.status(500).json({ error: 'Failed to save SVG' });
    }
    res.status(200).json({ message: 'SVG saved successfully', filePath });
  });
});

module.exports = router;
