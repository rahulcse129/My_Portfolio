const express = require('express');
const router = express.Router();

// POST contact message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // You can connect Nodemailer or just log it
  console.log('📨 Contact Message:', { name, email, message });
  res.json({ success: true, message: 'Message received!' });
});

module.exports = router;
