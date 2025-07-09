// server.js
require('dotenv').config();
const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const helmet = require('helmet');
// const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 5000;

// Connect to PostgreSQL
// connectDB();

// Middleware
// app.use(helmet()); // security headers
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
// app.use(cookieParser());
// app.use(morgan('dev'));

// // Routes
// app.use('/api/blogs', blogRoutes);
// app.use('/api/auth', authRoutes);

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
