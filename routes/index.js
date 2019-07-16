const express = require('express');

const router = express.Router();

// require routes
const base = require('@/routes/base');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'api',
  });
});

// export routes
router.use('/base', base);

router.use((req, res) => {
  const msg = {
    error: true,
    codigo: 404,
    mensaje: 'URL no encontrada',
  };
  res.status(404).send(msg);
});

module.exports = router;
