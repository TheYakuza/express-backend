const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    responseCode: 200,
    message: 'successfully conected!',
  });
});

module.exports = router;
