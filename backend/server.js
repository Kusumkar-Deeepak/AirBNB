const http = require('http');
const mongoose = require('./db/db'); // Connect to MongoDB
const app = require('./app'); // Import Express app

// Load environment variables
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Create server
const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Error handling for unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err.message);
  server.close(() => process.exit(1));
});
