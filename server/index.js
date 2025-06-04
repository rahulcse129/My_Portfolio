const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.log('❌ MongoDB error:', err));

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

// ChatGPT Route
const axios = require('axios');

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // or "gpt-4" if you have access
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    res.json(response.data.choices[0].message);
  } catch (error) {
    console.error('ChatGPT Error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch response from ChatGPT.' });
  }
});