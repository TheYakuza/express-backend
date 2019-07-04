const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    responseCode: 200,
    message: 'successfully conected!',
  });
});

router.post('/marco', (req, res) => {
  res.json({
    message: 'polo',
  });
});

module.exports = router;
