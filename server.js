const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Serve Main Landing Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve Dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Serve Mentor Directory
app.get('/mentors', (req, res) => {
  res.sendFile(path.join(__dirname, 'mentors.html'));
});

// Health check API
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', project: 'GramUdyogNetwork Backend Active' });
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 GramUdyogNetwork running at http://localhost:${PORT}`);
  console.log(`===============================================`);
});