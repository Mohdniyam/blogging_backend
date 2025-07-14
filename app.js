// server.js
require('dotenv').config();
const express = require('express');



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


// Health check
app.get('/', (req, res) => {
  res.send('Blog API is running ✅');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found ' });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
